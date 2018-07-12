using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Publicis.DDM.Middleware.API
{
    /// <summary>
    /// Client operations
    /// </summary>
    public class ClientController : ApiController
    {
        /// <summary>
        /// Get all clients on the DB
        /// </summary>
        /// <returns>A list of Clients</returns>
        [HttpGet]
        public HttpResponseMessage GetAll()
        {
			try
			{
				List<Models.Client> clients = (new Provider.MongoDBProvider<Models.Client>()).GetAll("Client");
				return Request.CreateResponse(HttpStatusCode.OK, clients); 
			}
			catch (System.Exception ex) 
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Find a client by ID
        /// </summary>
        /// <param name="ClientId"></param>
        /// <returns>A single client</returns>
        [HttpGet]
        public HttpResponseMessage GetById(int ClientId)
        {
			try
			{
				Models.Client client = (new Provider.MongoDBProvider<Models.Client>()).GetbyId(ClientId, "Client");
				return Request.CreateResponse(HttpStatusCode.OK, client);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Get clients by name
        /// </summary>
        /// <param name="filter"></param>
        /// <returns>A list of clients matching the name</returns>
        [HttpGet]
        public HttpResponseMessage Get(string filter)
        {
			try
			{
				List<Models.Client> clients = (new Provider.MongoDBProvider<Models.Client>()).Find(filter, "Client");
				return Request.CreateResponse(HttpStatusCode.OK, clients);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

        /// <summary>
        /// Add a client
        /// </summary>
        /// <param name="client"></param>
        /// <returns>The new client's ID</returns>
        [HttpPost]
        public HttpResponseMessage Add([FromBody] Models.Client client)
        {
			try
			{
				client.EntityName = "Client";
				(new Provider.MongoDBProvider<Models.Client>()).Insert(client);
				return Request.CreateResponse(HttpStatusCode.OK);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

		/// <summary>
		/// Update a client
		/// </summary>
		/// <param name="id"></param>
		/// <param name="client"></param>
		/// <returns></returns>
		[HttpPut]
		public HttpResponseMessage Update([FromBody] Models.Client client)
		{
			try
			{
				client.EntityName = "Client";
				(new Provider.MongoDBProvider<Models.Client>()).Update(client);
				return Request.CreateResponse(HttpStatusCode.OK);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}

		/// <summary>
		/// Delete a client by id
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpDelete]
		public HttpResponseMessage Delete(int id)
		{
			try
			{
				Models.Client client = new Models.Client()
				{
					ClientId = id,
					EntityName = "Client"
				};
				(new Provider.MongoDBProvider<Models.Client>()).Delete(client);
				return Request.CreateResponse(HttpStatusCode.OK);
			}
			catch (System.Exception ex)
			{
				return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
			}
		}
	}
}
