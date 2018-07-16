using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System;

#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
namespace Publicis.DDM.Middleware.Provider
{
    public class MongoDBProvider<T> where T : Models.Entity
    {
        private MongoClient mongoClient;
        private IMongoDatabase db;
        private IMongoCollection<T> collection;

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

        public IMongoCollection<T> Collection
        {
            get
            {
                if (this.collection == null)
                {
                    return this.DB.GetCollection<T>(typeof(T).Name);
                }

                return this.collection;
            }
            set
            {
                this.collection = value;
            }
        }

        public ObjectId Insert(T entity)
		{
            entity.Id = ObjectId.GenerateNewId();

            this.Collection.InsertOne(entity);

            return entity.Id;
		}

		public T GetbyId(string id)
		{
            ObjectId objectId = ObjectId.Parse(id);
			return this.Collection.Find(entity => entity.Id == objectId).ToList().First();
		}

		public List<T> GetAll()
		{
			return this.Collection.Find(a => true).ToList();
		}

		public List<T> Find(string filter)
		{
			return this.Collection.Find(filter).ToList();
		}

		public long Update(string id, T entity)
		{
            ObjectId objectId = ObjectId.Parse(id);
            entity.Id = objectId;
            var filter = Builders<T>.Filter.Eq(s => s.Id, objectId);
			ReplaceOneResult result = this.Collection.ReplaceOne(filter, entity);

            return result.MatchedCount;
		}

		public long Delete(string id)
		{
            ObjectId objectId = ObjectId.Parse(id);
            var filter = Builders<T>.Filter.Eq(s => s.Id, objectId);
			DeleteResult result = this.Collection.DeleteOne(filter);

            return result.DeletedCount;
		}
	}
}