using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System.Text;
using Newtonsoft.Json;


namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly GoShopContext _dbcontext; 

        public ProfileController(GoShopContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public class RecommendData 
        {
            public string name { get; set; }
        }
        [HttpGet("Recommendation")]
        public async Task<ActionResult> GetRecommendData(string username)
        {
            var existingusername = await _dbcontext.Orders
                .Where(o => o.recommender.Equals(username))
                .ToListAsync();
                
            if (existingusername == null || existingusername.Count == 0)
            {               
                return Ok(new
                {
                    username = username,
                    points = 0,
                    RecommendData = new List<string>()
                });
            }
            else
            {
                var members = existingusername.Select(o => o.member).ToList();
                var RecommendData = new List<RecommendData>();
                //var recommendData = List<Order>
                foreach (var item in members)
                {
                    RecommendData recommender = new () { name = item};
                    RecommendData.Add(recommender);
                }
                var totalPoints = existingusername.Sum(o => o.points);

                return Ok(new
                {
                    username = username,
                    points = totalPoints,
                    RecommendData = RecommendData
                });
            }
        }
    }
}