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
        /// Internal name
        /// </summary>
		[BsonIgnore]
		public string EntityName { get; set; }

        /// <summary>
        /// Id
        /// </summary>
		[BsonId]
		public int ClientId
		{
			get;
			set;
		}
	}
}