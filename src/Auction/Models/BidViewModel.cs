using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auction.Models
{
    public class BidViewModel
    {
        public int ItemID { get; set; }
        public decimal Price { get; set; }
        public string Name { get; set; }
    }
}
