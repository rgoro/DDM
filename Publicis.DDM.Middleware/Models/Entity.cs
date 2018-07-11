using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Models
{
	public class Entity
	{
		[BsonIgnore]
		public string EntityName { get; set; }

		[BsonId]
		public int ClientId
		{
			get;
			set;
		}
	}
}