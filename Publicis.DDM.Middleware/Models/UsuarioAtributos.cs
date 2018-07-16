using MongoDB.Bson.Serialization.Attributes;

namespace Publicis.DDM.Middleware.Models
{
    /// <summary>
    /// Atributos válidos para un usuario
    /// </summary>
    public class UsuarioAtributos : Entity
    {
        /// <summary>
        /// 
        /// </summary>
        [BsonElement("idUsuario")]
        public int IdUsuario { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [BsonElement("atributosAgencia")]
        public string[] AtributosAgencia { get; set; }
    }
}