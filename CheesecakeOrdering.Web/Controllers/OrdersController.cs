using CheesecakeOrdering.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CheesecakeOrdering.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private string _connectionString;

        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet("getall")]
        public List<CheesecakeOrder> GetAllOrders()
        {
            var repo = new CheesecakeOrderRepo(_connectionString);
            return repo.GetAll();
        }

        [HttpPost("addorder")]
        public void AddOrder(CheesecakeOrder order)
        {
            var repo = new CheesecakeOrderRepo(_connectionString);
            repo.AddOrder(order);
        }

        [HttpGet("getorderbyid")]
        public CheesecakeOrder GetOrderById(int id)
        {
            var repo = new CheesecakeOrderRepo(_connectionString);
            return repo.GetOrderById(id);
        }


    }
}
