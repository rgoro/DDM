using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Publicis.DDM.Middleware.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

			//Models.Client _client = (new Provider.MongoDBProvider<Models.Client>()).Find("{ name : 'Nico' }", "Client");
			

			Models.Client _client = (new Provider.MongoDBProvider<Models.Client>()).GetbyId(2, "Client");
			ViewBag.Title = _client.Name;

			_client.Name = "nico2";
			_client.Values["Date"] = System.DateTime.Now;
			_client.EntityName = "Client";
			(new Provider.MongoDBProvider<Models.Client>()).Update(_client);

			return View();
        }
    }
}
