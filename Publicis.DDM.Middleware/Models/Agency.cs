using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.Linq;

namespace Publicis.DDM.Middleware.Models
{
    /// <summary>
    /// Agency
    /// </summary>
	public class Agency : Entity
	{
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

        /// <summary>
        /// 
        /// </summary>
        /// <param name="atributosValidos"></param>
        public Agency FilterAttributes(string[] atributosValidos)
        {
            Dictionary<string, object> filteredValues;
            IEnumerable<string> lcAtributosValidos = atributosValidos.Select(a => a.ToLower());

            if (atributosValidos.Length == 0)
            {
                filteredValues = new Dictionary<string, object>();
            }
            else if (atributosValidos.Length == 1 && atributosValidos[0] == "*")
            {
                filteredValues = this.Values;
            }
            else
            {
                filteredValues = this.Values.Where(v => lcAtributosValidos.Contains(v.Key.ToLower())).ToDictionary(kv => kv.Key, kv => kv.Value);
            }

            return new Agency
            {
                Id = this.Id,
                Name = this.Name,
                Values = filteredValues
            };
        }

    }
}