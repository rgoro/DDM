using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Provider
{
	public class MongoDBProvider<T> where T : Models.Entity
	{
		private MongoClient GetMongoClient()
		{
			//Mongo Connection
			var connectionString = System.Configuration.ConfigurationManager.AppSettings["MongoDBConnectionString"];
			var mongoclient = new MongoClient(connectionString);
			return mongoclient;
		}

		public void Insert(T entity)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
			//Get Collection
			IMongoCollection<T> collection = db.GetCollection<T>(entity.EntityName);

			collection.InsertOne(entity);
		}

		public T GetbyId(int id, string entity)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
			//Get Collection
			IMongoCollection<T> collection = db.GetCollection<T>(entity);

			T clientfrommongo = collection.Find(client => client.ClientId == id).ToList<T>().First();
			return clientfrommongo;
		}

		public List<T> GetAll(string entity)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
			//Get Collection
			IMongoCollection<T> collection = db.GetCollection<T>(entity);

			return collection.Find(a => true).ToList<T>();
		}

		public T Find(string filter, string entity)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
			//Get Collection
			IMongoCollection<T> collection = db.GetCollection<T>(entity);

			T clientfrommongo = collection.Find(filter).ToList<T>().First();
			return clientfrommongo;
		}

		public void Update(T entity)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
			//Get Collection
			IMongoCollection<T> collection = db.GetCollection<T>(entity.EntityName);

			var filter = Builders<T>.Filter.Eq(s => s.ClientId, entity.ClientId);
			collection.ReplaceOne(filter, entity);
		}

		public void Delete(T entity)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
			//Get Collection
			IMongoCollection<T> collection = db.GetCollection<T>(entity.EntityName);

			var filter = Builders<T>.Filter.Eq(s => s.ClientId, entity.ClientId);
			collection.DeleteOne(filter);
		}
	}
}