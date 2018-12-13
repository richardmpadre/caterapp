using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace caterapp.Model
{
    public class CaterAppContext : DbContext
    {
        public CaterAppContext(DbContextOptions<CaterAppContext> options) : base(options)
        {

        }

        public DbSet<Event> Events { get; set; }
        public DbSet<Customer> Customers { get; set; }

        public DbSet<EventType> EventTypes { get; set; }
    }
}
