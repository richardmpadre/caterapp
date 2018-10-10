using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using caterapp.Model;
using caterapp.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace caterapp.Controllers
{
    [Route("api/event-type")]
    public class EventTypeController : Controller
    {
        private IEventTypeRepository _eventTypeRepo;

        public EventTypeController(IEventTypeRepository eventTypeRepo)
        {
            this._eventTypeRepo = eventTypeRepo;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody] EventType eventType)
        {
            if (eventType.Id == 0)
                _eventTypeRepo.Create(eventType);

            return Ok();
        }
    }
}