using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace caterapp.data
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<DbContext> options) : base(options) {}

        public DbSet<Event> Events { get; set; }
    }
}
