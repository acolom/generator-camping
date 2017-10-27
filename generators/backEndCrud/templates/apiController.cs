using Camping.Api.Code.Controllers;
using Camping.Business.Code;
using Camping.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Camping.Api.Controllers
{
    public class <%= Name %>Controller : SimpleMapperCrudController<<%= Name %>, <%= Name %>Model>
    {
        private readonly SimpleMapperRepository<<%= Name %>, <%= Name %>Model> _repo;

        public <%= Name %>Controller(SimpleMapperRepository<<%= Name %>, <%= Name %>Model> repo)
        {
            _repo = repo;
        }
        

        protected override SimpleMapperRepository<<%= Name %>, <%= Name %>Model> Repo
        {
            get
            {
                return _repo;
            }
        }
    }
}