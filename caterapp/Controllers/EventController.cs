using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace caterapp.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        public static List<EventsDTO> events = new List<EventsDTO>
        {
            new EventsDTO
            {
                Id = 1,
                Title = "Chard and Chase Birthday Party",
                Start = new DateTime(2018, 8, 25, 15, 0,0 ),
                End = new DateTime(2018, 8, 25, 23, 0,0 ),
            },
            new EventsDTO
            {
                Id = 2,
                Title = "DepEd K12 Seminar",
                Start = new DateTime(2018, 8, 20, 8, 0, 0 ),
                End = new DateTime(2018, 8, 25, 17, 0, 0 ),
            },
        };

        [HttpGet("[action]")]
        public IActionResult List()
        {
            return Json(events);
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody] EventsDTO eventDTO)
        {
            events.Add(eventDTO);
            return Json(events);
        }

    }

    public class EventsDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
    }
}
