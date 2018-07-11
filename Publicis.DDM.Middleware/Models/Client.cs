using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Models
{
 
    public class Client : IEntity
	{
		[BsonElement("name")]
		public string Name
		{
			get;
			set;
		}

		[BsonElement("Values")]
		public Dictionary<string, object> Values
		{
			get;
			set;
		}

		public string EntityName { get; set; }

		[BsonId]
		public int ClientId { get; set; }
	}
}