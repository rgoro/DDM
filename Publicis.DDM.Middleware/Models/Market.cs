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
        /// Market Id
        /// </summary>
        [BsonElement("marketId"), BsonIgnore]
        public MongoDB.Bson.ObjectId MarketId
        {
            get { return base.Id; }
            set { base.Id = value; }
        }

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