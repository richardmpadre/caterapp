using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace caterapp.Model
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
    }
}
