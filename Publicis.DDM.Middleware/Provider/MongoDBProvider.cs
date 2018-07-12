using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
namespace Publicis.DDM.Middleware.Provider
{
	public class MongoDBProvider<T> where T : Models.Entity
	{
        private MongoClient mongoClient;
        private IMongoDatabase db;

        private MongoClient MongoClient {
            get
            {
                if (this.mongoClient == null)
                {
                    //Mongo Connection
                    string connectionString = System.Configuration.ConfigurationManager.AppSettings["MongoDBConnectionString"];
                    this.mongoClient = new MongoClient(connectionString);
                }

                return this.mongoClient;
            }
            set
            {
                this.mongoClient = value;
            }
        }

        public IMongoDatabase DB
        {
            get
            {
                if (this.db == null)
                {
                    this.db = this.MongoClient.GetDatabase(System.Configuration.ConfigurationManager.AppSettings["MongoDB"]);
                }

                return this.db;
            }

            set
            {
                this.db = value;
            }
        }

		public void Insert(T entity)
		{
			IMongoCollection<T> collection = this.DB.GetCollection<T>(entity.EntityName);

			collection.InsertOne(entity);
		}

		public T GetbyId(int id, string entity)
		{
			//Get Collection
			IMongoCollection<T> collection = this.DB.GetCollection<T>(entity);

			T clientfrommongo = collection.Find(client => client.ClientId == id).ToList<T>().First();
			return clientfrommongo;
		}

		public List<T> GetAll(string entity)
		{
			//Get Collection
			IMongoCollection<T> collection = this.DB.GetCollection<T>(entity);

			return collection.Find(a => true).ToList<T>();
		}

		public List<T> Find(string filter, string entity)
		{
			//Get Collection
			IMongoCollection<T> collection = this.DB.GetCollection<T>(entity);

			List<T> clientfrommongo = collection.Find(filter).ToList<T>();
			return clientfrommongo;
		}

		public void Update(T entity)
		{
			//Get Collection
			IMongoCollection<T> collection = this.DB.GetCollection<T>(entity.EntityName);

			var filter = Builders<T>.Filter.Eq(s => s.ClientId, entity.ClientId);
			collection.ReplaceOne(filter, entity);
		}

		public void Delete(T entity)
		{
			//Get Collection
			IMongoCollection<T> collection = this.DB.GetCollection<T>(entity.EntityName);

			var filter = Builders<T>.Filter.Eq(s => s.ClientId, entity.ClientId);
			collection.DeleteOne(filter);
		}
	}
}