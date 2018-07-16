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
        /// Client Id
        /// </summary>
        [BsonElement("clientId"), BsonIgnore]
        public MongoDB.Bson.ObjectId ClientId
        {
            get { return base.Id; }
            set { base.Id = value; }
        }

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