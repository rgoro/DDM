using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Provider
{
	public class MongoDBProvider
	{
		private MongoClient GetMongoClient()
		{
			//Mongo Connection
			var connectionString = System.Configuration.ConfigurationManager.AppSettings["MongoDBConnectionString"];
			var mongoclient = new MongoClient(connectionString);
			return mongoclient;
		}

		public void InsertClient(Publicis.DDM.Middleware.Models.Client client)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase("Dolores");
			//Get Collection
			IMongoCollection<Models.Client> collection = db.GetCollection<Models.Client>("Client");

			collection.InsertOne(client);
		}

		public Models.Client FindbyName(string name)
		{
			//Get Database
			IMongoDatabase db = this.GetMongoClient().GetDatabase("Dolores");
			//Get Collection
			IMongoCollection<Models.Client> collection = db.GetCollection<Models.Client>("Client");

			Models.Client clientfrommongo = collection.Find(client => client.Name == name).ToList<Models.Client>().Last();
			return clientfrommongo;
		}
	}
}