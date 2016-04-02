using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;


namespace Auction.Models
{
    public class SampleData
    {
        public static void Initialize(IServiceProvider sp)
        {
            var db = sp.GetService<ApplicationDbContext>();

            if (!db.Items.Any())
            {
                db.Items.AddRange(
                    new Item
                    {
                        Name = "Suzuki GSXR 650",
                        DaysLeft = 5,
                        Description = "Blue/White with 6,500 miles",
                        Bids = new List<Bid>
                        {
                           new Bid{ Name = "Mike", Price = 4000m },
                           new Bid{ Name = "Mary", Price = 1500m }
                        }
                    },
                    new Item
                    {
                        Name = "Harley Davidson Fat Bob",
                        DaysLeft = 2,
                        Description = "Black, missing left mirror - 10,000 miles",
                        Bids = new List<Bid>
                        {
                           new Bid{ Name = "Ben", Price = 8500m }
                        }
                    },
                    new Item
                    {
                        Name = "Honda CBR600",
                        DaysLeft = 7,
                        Description = "Red with black racing stripes - 4,500 miles.  Never been laid down",
                        Bids = new List<Bid>
                        {
                           new Bid{ Name = "Steve", Price = 5500m },
                           new Bid{ Name = "Sally", Price = 5501m },
                           new Bid{ Name = "Sarah", Price = 5502m }
                        }
                    },
                    new Item
                    {
                        Name = "Ducati 949",
                        DaysLeft = 5,
                        Description = "Brand new, been sitting in garage ... need to get rid of it",
                        Bids = new List<Bid>
                        {
                           new Bid{ Name = "Greg", Price = 2500m },
                           new Bid{ Name = "Grant", Price = 1000m },
                           new Bid{ Name = "Gilroy", Price = 5000m },
                           new Bid{ Name = "Gill", Price = 4000m }
                        }
                    },
                    new Item
                    {
                        Name = "Kawasaki Ninja 250",
                        DaysLeft = 2,
                        Description = "Neon Green with yellow rims - 15,000 miles",
                        Bids = new List<Bid>
                        {
                           new Bid{ Name = "Jim", Price = 800m }
                        }
                    }
                    );
                db.SaveChanges();
            }
        }
    }
}
