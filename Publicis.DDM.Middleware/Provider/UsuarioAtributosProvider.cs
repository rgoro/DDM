using Publicis.DDM.Middleware.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Publicis.DDM.Middleware.Provider
{
    /// <summary>
    /// 
    /// </summary>
    public class UsuarioAtributosProvider : MongoDBProvider<UsuarioAtributos>
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        public UsuarioAtributos GetByIdUsuario(int idUsuario)
        {
            return this.Collection.Find(ua => ua.IdUsuario == idUsuario).First();
        }
    }
}