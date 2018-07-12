using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Models
{
    /// <summary>
    /// Client
    /// </summary>
	public class Client : Entity
	{
        /// <summary>
        /// Client name
        /// </summary>
		[BsonElement("name")]
		public string Name
		{
			get;
			set;
		}

        /// <summary>
        /// Client attributes
        /// </summary>
		[BsonElement("Values")]
		public Dictionary<string, object> Values
		{
			get;
			set;
		}
	}
}