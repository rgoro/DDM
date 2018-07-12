using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Publicis.DDM.Middleware.API
{
    /// <summary>
    /// Market operations
    /// </summary>
    public class MarketController : ApiController
    {
        private Provider.MongoDBProvider<Models.Market> provider;

        private Provider.MongoDBProvider<Models.Market> Provider
        {
            get
            {
                if (this.provider == null)
                {
                    this.provider = new Provider.MongoDBProvider<Models.Market>();
                }

                return this.provider;
            }

            set
            {
                this.provider = value;
            }
        }

        /// <summary>
        /// Get all markets on the DB
        /// </summary>
        /// <returns>A list of Markets</returns>
        [HttpGet]
        public HttpResponseMessage GetAll()
        {
			try
			{
				List<Models.Market> markets = this.Provider.GetAll();
				return Request.CreateResponse(HttpStatusCode.OK, markets); 
			}
			catch (System.Exception ex) 
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Find a market by ID
        /// </summary>
        /// <param name="MarketId"></param>
        /// <returns>A single market</returns>
        [HttpGet]
        public HttpResponseMessage GetById(string MarketId)
        {
			try
			{
				Models.Market market = this.Provider.GetbyId(MarketId);
				return Request.CreateResponse(HttpStatusCode.OK, market);
			}
			catch (Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
        }

        /// <summary>
        /// Get markets by name
        /// </summary>
        /// <param name="filter"></param>
        /// <returns>A list of markets matching the name</returns>
        [HttpGet]
        public HttpResponseMessage Get(string filter)
        {
			try
			{
				List<Models.Market> markets = this.Provider.Find(filter);
				return Request.CreateResponse(HttpStatusCode.OK, markets);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Add a market
        /// </summary>
        /// <param name="market"></param>
        /// <returns>The new market's ID</returns>
        [HttpPost]
        public HttpResponseMessage Add([FromBody] Models.Market market)
        {
			try
			{
			    ObjectId newId = this.Provider.Insert(market);
			    return Request.CreateResponse(HttpStatusCode.OK, newId);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Update a market
        /// </summary>
        /// <param name="id"></param>
        /// <param name="market"></param>
        /// <returns></returns>
        [HttpPut]
		public HttpResponseMessage Update(string id, [FromBody] Models.Market market)
		{
			try
			{
                this.Provider.Update(id, market);
				return Request.CreateResponse(HttpStatusCode.OK);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
        }

        /// <summary>
        /// Delete a market by id
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
