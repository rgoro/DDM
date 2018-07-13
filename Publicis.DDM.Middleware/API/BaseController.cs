using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Publicis.DDM.Middleware.API
{
    /// <summary>
    /// Base controller
    /// </summary>
    public abstract class BaseController<T> : ApiController where T : Models.Entity
    {
        private Provider.MongoDBProvider<T> provider;

        /// <summary>
        /// Provider
        /// </summary>
        protected Provider.MongoDBProvider<T> Provider
        {
            get
            {
                if (this.provider == null)
                {
                    this.provider = new Provider.MongoDBProvider<T>();
                }

                return this.provider;
            }

            set
            {
                this.provider = value;
            }
        }

        /// <summary>
        /// Get all T entities on the DB
        /// </summary>
        /// <returns>A list of Entities</returns>
        [HttpGet]
        public HttpResponseMessage GetAll()
        {
            try
            {
                List<T> entities = this.Provider.GetAll();
                return Request.CreateResponse(HttpStatusCode.OK, entities);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        /// <summary>
        /// Find a T by ID
        /// </summary>
        /// <param name="mongoId"></param>
        /// <returns>A single client</returns>
        [HttpGet]
        public HttpResponseMessage GetById(string mongoId)
        {
            try
            {
                T entity = this.Provider.GetbyId(mongoId);
                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        /// <summary>
        /// Get T by a filter
        /// </summary>
        /// <param name="filter"></param>
        /// <returns>A list of clients matching the name</returns>
        [HttpGet]
        public HttpResponseMessage Get(string filter)
        {
            try
            {
                List<T> entities = this.Provider.Find(filter);
                return Request.CreateResponse(HttpStatusCode.OK, entities);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        /// <summary>
        /// Add a entity
        /// </summary>
        /// <param name="entity"></param>
        /// <returns>The new client's ID</returns>
        [HttpPost]
        public HttpResponseMessage Add([FromBody] T entity)
        {
            try
            {
                ObjectId newId = this.Provider.Insert(entity);
                return Request.CreateResponse(HttpStatusCode.OK, newId);
            }
            catch (System.Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        /// <summary>
        /// Update an entity
        /// </summary>
        /// <param name="id"></param>
        /// <param name="entity"></param>
        /// <returns></returns>
        [HttpPut]
        public HttpResponseMessage Update(string id, [FromBody] T entity)
        {
            try
            {
                long matched = this.Provider.Update(id, entity);
                if (matched >= 1)
                {
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        /// <summary>
        /// Delete an entity by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public HttpResponseMessage Delete(string id)
        {
            try
            {
                long deleted = this.Provider.Delete(id);

                if (deleted >= 1)
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