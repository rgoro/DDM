using MongoDB.Bson;
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
        /// <param name="idUsuario"></param>
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


        /// <summary>
        /// Add a entity
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="agency"></param>
        /// <returns>The new agency's ID</returns>
        [HttpPost]
        public HttpResponseMessage Add(int idUsuario, [FromBody] Agency agency)
        {
            try
            {
                ObjectId newId = this.Provider.Insert(idUsuario, agency);
                return Request.CreateResponse(HttpStatusCode.OK, newId);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        /// <summary>
        /// Update an agency
        /// </summary>
        /// <param name="id"></param>
        /// <param name="idUsuario"></param>
        /// <param name="agency"></param>
        /// <returns></returns>
        [HttpPut]
        public HttpResponseMessage Update(string id, int idUsuario, [FromBody] Agency agency)
        {
            try
            {
                long matched = this.Provider.Update(id, idUsuario, agency);
                if (matched >= 1)
                {
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}