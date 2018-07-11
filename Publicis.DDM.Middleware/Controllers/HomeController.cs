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

			Models.Client _client = (new Provider.MongoDBProvider<Models.Client>()).Find("{ name : 'Nico' }", "Client");
			ViewBag.Title = _client.Name;

			return View();
        }
    }
}
