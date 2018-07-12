using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Models
{
    /// <summary>
    /// Generic entity
    /// </summary>
	public class Entity
	{
        /// <summary>
        /// Generic Id
        /// </summary>
		[BsonId, Newtonsoft.Json.JsonIgnore]
		public MongoDB.Bson.ObjectId Id
		{
			get;
			set;
		}
	}
}