using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Publicis.DDM.Middleware.Models
{
    /// <summary>
    /// Market
    /// </summary>
	public class Market : Entity
	{
        /// <summary>
        /// Market name
        /// </summary>
		[BsonElement("name")]
		public string Name
		{
			get;
			set;
		}

        /// <summary>
        /// Market attributes
        /// </summary>
		[BsonElement("values")]
		public Dictionary<string, object> Values
		{
			get;
			set;
		}
	}
}