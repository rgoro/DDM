using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Owin;
using System.Web.Http;
using Microsoft.Owin;
using System.Globalization;
using System.Threading;

[assembly: OwinStartup(typeof(Publicis.DDM.Middleware.Startup))]
namespace Publicis.DDM.Middleware
{
    #pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = GlobalConfiguration.Configuration;

            WebApiConfig.Register(config);

            CultureConfiguration();

            app.UseWebApi(config);
        }

        private static void CultureConfiguration()
        {
            CultureInfo info = new CultureInfo("en-US");
            info.DateTimeFormat.ShortDatePattern = "MM/dd/yyyy";
            info.DateTimeFormat.LongDatePattern = "MMM dd yyyy HH:mm";
            info.NumberFormat.CurrencyDecimalDigits = 2;
            info.NumberFormat.CurrencyGroupSeparator = ",";
            info.NumberFormat.NumberDecimalDigits = 2;
            Thread.CurrentThread.CurrentCulture = info;
            Thread.CurrentThread.CurrentUICulture = info;
        }
    }
}