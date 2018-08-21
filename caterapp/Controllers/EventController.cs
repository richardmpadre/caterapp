using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace caterapp.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private IEnumerable<EventListDTO> events = new List<EventListDTO>
        {
            new EventListDTO
            {
                Id = 1,
                Title = "Chard and Chase Birthday Party",
                Start = new DateTime(2018, 8, 25, 15, 0,0 ),
                End = new DateTime(2018, 8, 25, 23, 0,0 ),
            },
            new EventListDTO
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
            return Json(this.events);
        }

    }

    public class EventListDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
    }
}
