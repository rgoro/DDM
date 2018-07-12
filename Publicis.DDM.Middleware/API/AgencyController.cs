using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Publicis.DDM.Middleware.API
{
    /// <summary>
    /// Agency operations
    /// </summary>
    public class AgencyController : ApiController
    {
        private Provider.MongoDBProvider<Models.Agency> provider;

        private Provider.MongoDBProvider<Models.Agency> Provider
        {
            get
            {
                if (this.provider == null)
                {
                    this.provider = new Provider.MongoDBProvider<Models.Agency>();
                }

                return this.provider;
            }

            set
            {
                this.provider = value;
            }
        }

        /// <summary>
        /// Get all agencys on the DB
        /// </summary>
        /// <returns>A list of Agencys</returns>
        [HttpGet]
        public HttpResponseMessage GetAll()
        {
			try
			{
				List<Models.Agency> agencys = this.Provider.GetAll();
				return Request.CreateResponse(HttpStatusCode.OK, agencys); 
			}
			catch (System.Exception ex) 
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Find a agency by ID
        /// </summary>
        /// <param name="AgencyId"></param>
        /// <returns>A single agency</returns>
        [HttpGet]
        public HttpResponseMessage GetById(string AgencyId)
        {
			try
			{
				Models.Agency agency = this.Provider.GetbyId(AgencyId);
				return Request.CreateResponse(HttpStatusCode.OK, agency);
			}
			catch (Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
        }

        /// <summary>
        /// Get agencys by name
        /// </summary>
        /// <param name="filter"></param>
        /// <returns>A list of agencys matching the name</returns>
        [HttpGet]
        public HttpResponseMessage Get(string filter)
        {
			try
			{
				List<Models.Agency> agencys = this.Provider.Find(filter);
				return Request.CreateResponse(HttpStatusCode.OK, agencys);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Add a agency
        /// </summary>
        /// <param name="agency"></param>
        /// <returns>The new agency's ID</returns>
        [HttpPost]
        public HttpResponseMessage Add([FromBody] Models.Agency agency)
        {
			try
			{
			    ObjectId newId = this.Provider.Insert(agency);
			    return Request.CreateResponse(HttpStatusCode.OK, newId);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Update a agency
        /// </summary>
        /// <param name="id"></param>
        /// <param name="agency"></param>
        /// <returns></returns>
        [HttpPut]
		public HttpResponseMessage Update(string id, [FromBody] Models.Agency agency)
		{
			try
			{
                this.Provider.Update(id, agency);
				return Request.CreateResponse(HttpStatusCode.OK);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
        }

        /// <summary>
        /// Delete a agency by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public HttpResponseMessage Delete(string id)
        {
			try
			{
                this.Provider.Delete(id);
				return Request.CreateResponse(HttpStatusCode.OK);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
        }
    }
}
