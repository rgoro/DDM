using System;
using System.Collections.Generic;
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
			throw new NotImplementedException();
		}

        /// <summary>
        /// Find a client by ID
        /// </summary>
        /// <param name="ClientId"></param>
        /// <returns>A single client</returns>
        [HttpGet]
        public HttpResponseMessage GetById(int ClientId)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Get clients by name
        /// </summary>
        /// <param name="Name"></param>
        /// <returns>A list of clients matching the name</returns>
        [HttpGet]
        public HttpResponseMessage GetByName(string Name)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Add a client
        /// </summary>
        /// <param name="client"></param>
        /// <returns>The new client's ID</returns>
        [HttpPost]
        public HttpResponseMessage Add([FromBody] Models.Client client)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Update a client
        /// </summary>
        /// <param name="id"></param>
        /// <param name="client"></param>
        /// <returns></returns>
        [HttpPut]
        public HttpResponseMessage Update(int id, [FromBody] Models.Client client)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Delete a client by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
