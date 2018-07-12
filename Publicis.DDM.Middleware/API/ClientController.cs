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
        public List<Models.Client> GetAll()
        {
			return (new Provider.MongoDBProvider<Models.Client>()).GetAll("Client");
		}

        /// <summary>
        /// Find a client by ID
        /// </summary>
        /// <param name="ClientId"></param>
        /// <returns>A single client</returns>
        [HttpGet]
        public Models.Client GetById(int ClientId)
        {
			return (new Provider.MongoDBProvider<Models.Client>()).GetbyId(ClientId, "Client");
		}

        /// <summary>
        /// Get clients by name
        /// </summary>
        /// <param name="filter"></param>
        /// <returns>A list of clients matching the name</returns>
        [HttpGet]
        public List<Models.Client> Get(string filter)
        {
			return (new Provider.MongoDBProvider<Models.Client>()).Find(filter, "Client");
		}

        /// <summary>
        /// Add a client
        /// </summary>
        /// <param name="client"></param>
        /// <returns>The new client's ID</returns>
        [HttpPost]
        public HttpResponseMessage Add([FromBody] Models.Client client)
        {
			client.EntityName = "Client";
			(new Provider.MongoDBProvider<Models.Client>()).Insert(client);
			return Request.CreateResponse(HttpStatusCode.OK);

			//return Request.CreateErrorResponse(HttpStatusCode.BadRequest, new Exception("Error"));
		}

        /// <summary>
        /// Update a client
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
        [HttpPut]
        public HttpResponseMessage Update([FromBody] Models.Client client)
        {
			client.EntityName = "Client";
			(new Provider.MongoDBProvider<Models.Client>()).Update(client);
			return Request.CreateResponse(HttpStatusCode.OK);
			//return Request.CreateErrorResponse(HttpStatusCode.BadRequest, new Exception("Error"));
		}

		/// <summary>
		/// Delete a client by id
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
			Models.Client client = new Models.Client()
			{
				ClientId = id,
				EntityName = "Client"
			};
			(new Provider.MongoDBProvider<Models.Client>()).Delete(client);
			return Request.CreateResponse(HttpStatusCode.OK);
			//return Request.CreateErrorResponse(HttpStatusCode.BadRequest, new Exception("Error"));
		}
	}
}
