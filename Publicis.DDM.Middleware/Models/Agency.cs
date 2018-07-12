using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Models
{
    /// <summary>
    /// Agency
    /// </summary>
	public class Agency : Entity
	{
        /// <summary>
        /// Agency Id
        /// </summary>
        [BsonElement("agencyId"), BsonIgnore]
        public MongoDB.Bson.ObjectId AgencyId
        {
            get { return base.Id; }
            set { base.Id = value; }
        }

        /// <summary>
        /// Agency name
        /// </summary>
		[BsonElement("name")]
		public string Name
		{
			get;
			set;
		}

        /// <summary>
        /// Agency attributes
        /// </summary>
		[BsonElement("values")]
		public Dictionary<string, object> Values
		{
			get;
			set;
		}
	}
}