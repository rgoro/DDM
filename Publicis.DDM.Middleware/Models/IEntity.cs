using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Publicis.DDM.Middleware.Models
{
	public interface IEntity
	{
		string EntityName { get; set; }

		[BsonId]
		int ClientId
		{
			get;
			set;
		}
	}
}