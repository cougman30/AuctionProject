using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Auction.Models;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Auction.API
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {
        ApplicationDbContext db;

        public ItemsController(ApplicationDbContext _db)
        {
            this.db = _db;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return db.Items.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Item Get(int id)
        {
            var items = db.Items.Where(i => i.ID == id).Include(i => i.Bids).FirstOrDefault();
            return items;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Item value)
        {
            if (value.ID == 0)
            {
                db.Items.Add(value);
            }
            else
            {
                var itemToEdit = db.Items.Where(i => i.ID == value.ID).FirstOrDefault();
                itemToEdit.Name = value.Name;
                itemToEdit.DaysLeft = value.DaysLeft;
                itemToEdit.Description = value.Description;
            }
            db.SaveChanges();
            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var itemToDelete = db.Items.Where(i => i.ID == id).FirstOrDefault();
            if (itemToDelete == null)
            {
                return HttpBadRequest();
            }
            db.Items.Remove(itemToDelete);
            db.SaveChanges();
            return Ok();
        }
    }
}
