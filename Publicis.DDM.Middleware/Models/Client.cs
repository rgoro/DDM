using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Models
{
 
    public class Client : Entity
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
	}
}