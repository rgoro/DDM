using System;
using System.Collections.Generic;
using Publicis.DDM.Middleware.Models;
using System.Linq;

#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
namespace Publicis.DDM.Middleware.Provider
{
    public class AgencyProvider : MongoDBProvider<Agency>
    {
        private UsuarioAtributosProvider usuarioAtributosProvider;

        public UsuarioAtributosProvider UsuarioAtributosProvider
        {
            get
            {
                if (this.usuarioAtributosProvider == null)
                {
                    this.usuarioAtributosProvider = new UsuarioAtributosProvider();
                }

                return this.usuarioAtributosProvider;
            }

            set
            {
                this.usuarioAtributosProvider = value;
            }
        }

        public List<Agency> GetAll(int idUsuario)
        {
            UsuarioAtributos usuarioAtributos = this.UsuarioAtributosProvider.GetByIdUsuario(idUsuario);

            List<Agency> allAgencies = base.GetAll();

            return allAgencies.Select(a => a.FilterAttributes(usuarioAtributos.AtributosAgencia)).ToList();
        }

        public Agency GetbyId(string mongoId, int idUsuario)
        {
            UsuarioAtributos usuarioAtributos = this.UsuarioAtributosProvider.GetByIdUsuario(idUsuario);

            Agency agency = base.GetbyId(mongoId);

            return agency.FilterAttributes(usuarioAtributos.AtributosAgencia);
        }

        public List<Agency> Find(string filter, int idUsuario)
        {
            UsuarioAtributos usuarioAtributos = this.UsuarioAtributosProvider.GetByIdUsuario(idUsuario);

            List<Agency> allAgencies = base.Find(filter);

            return allAgencies.Select(a => a.FilterAttributes(usuarioAtributos.AtributosAgencia)).ToList();
        }
    }
}