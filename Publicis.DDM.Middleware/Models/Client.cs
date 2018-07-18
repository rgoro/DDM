using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

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
		[BsonElement("values")]
		public Dictionary<string, object> Values
		{
			get;
			set;
		}
	}
}