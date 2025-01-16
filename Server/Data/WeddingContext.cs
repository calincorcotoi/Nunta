using Microsoft.EntityFrameworkCore;
using Server.Entities;

namespace Server.Data
{
    public class WeddingContext : DbContext
    {
        public DbSet<Guest> Guests { get; set; }

        public WeddingContext(DbContextOptions options) : base(options)
        {
        }

        //public string DbPath { get; }
        //protected readonly IConfiguration Configuration;

        //public WeddingContext(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}

        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //{
        //    // connect to sqlite database
        //    options.UseSqlite(Configuration.GetConnectionString("WebApiDatabase"));
        //}
    }
}
