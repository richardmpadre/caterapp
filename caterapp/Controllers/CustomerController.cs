using caterapp.Model;
using caterapp.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace caterapp.Controllers
{
    [Route("api/customer")]
    public class CustomerController : Controller
    {
        private ICustomerRepository _customerRepository;
        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpGet("")]
        public IActionResult List()
        {
            return Json(_customerRepository.List());
        }

    }
}
