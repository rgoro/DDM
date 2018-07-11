using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Provider
{
	public class MongoDBProvider<T> where T : Models.IEntity
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

		public Models.Client FindbyName(string name, string entity)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
			//Get Collection
			IMongoCollection<Models.Client> collection = db.GetCollection<Models.Client>(entity);

			Models.Client clientfrommongo = collection.Find(client => client.Name == name).ToList<Models.Client>().First();
			return clientfrommongo;
		}

		public Models.Client Find(string filter, string entity)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
			//Get Collection
			IMongoCollection<Models.Client> collection = db.GetCollection<Models.Client>(entity);

			Models.Client clientfrommongo = collection.Find(filter).ToList<Models.Client>().First();
			return clientfrommongo;
		}
	}
}