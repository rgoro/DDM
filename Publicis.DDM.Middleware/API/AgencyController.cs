using Publicis.DDM.Middleware.Models;
using Publicis.DDM.Middleware.Provider;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Publicis.DDM.Middleware.API
{
    /// <summary>
    /// Agency operations
    /// </summary>
    public class AgencyController : BaseController<Agency>
    {
        private AgencyProvider provider;

        /// <summary>
        /// Provider
        /// </summary>
        protected new AgencyProvider Provider
        {
            get
            {
                if (this.provider == null)
                {
                    this.provider = new AgencyProvider();
                }

                return this.provider;
            }

            set
            {
                this.provider = value;
            }
        }

        /// <summary>
        /// Get all Agencies on the DB
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns>A list of Agencies, with the attributes filtered by idUsuario</returns>
        [HttpGet]
        public HttpResponseMessage GetAll(int idUsuario)
        {
            try
            {
                List<Agency> entities = this.Provider.GetAll(idUsuario);
                return Request.CreateResponse(HttpStatusCode.OK, entities);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }


        /// <summary>
        /// Find an Agency by ID
        /// </summary>
        /// <param name="mongoId"></param>
        /// <param name="idUsuario"></param>
        /// <returns>A single client</returns>
        [HttpGet]
        public HttpResponseMessage GetById(string mongoId, int idUsuario)
        {
            try
            {
                Agency agency = this.Provider.GetbyId(mongoId, idUsuario);
                return Request.CreateResponse(HttpStatusCode.OK, agency);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        /// <summary>
        /// Get Agency by a filter
        /// </summary>
        /// <param name="filter"></param>
        /// <returns>A list of clients matching the name</returns>
        [HttpGet]
        public HttpResponseMessage Get(string filter, int idUsuario)
        {
            try
            {
                List<Agency> agencies = this.Provider.Find(filter, idUsuario);
                return Request.CreateResponse(HttpStatusCode.OK, agencies);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}