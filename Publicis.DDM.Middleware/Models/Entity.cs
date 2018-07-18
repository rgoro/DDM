using MongoDB.Bson.Serialization.Attributes;

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
		[BsonId]
		public MongoDB.Bson.ObjectId Id
		{
			get;
			set;
		}
    }
}