using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrdering.Data
{
     public class CheesecakeOrderRepo
    {
        private readonly string _connectionString;

        public CheesecakeOrderRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<CheesecakeOrder> GetAll()
        {
            using var ctx = new CheesecakeDataContext(_connectionString);
            return ctx.CheesecakeOrders.ToList();
        }

        public void AddOrder(CheesecakeOrder order)
        {
            using var ctx = new CheesecakeDataContext(_connectionString);
            ctx.CheesecakeOrders.Add(order);
            ctx.SaveChanges();
        }

        public CheesecakeOrder GetOrderById(int id)
        {
            using var ctx = new CheesecakeDataContext(_connectionString);
            return ctx.CheesecakeOrders.FirstOrDefault(c => c.Id == id);
        }
    }
}
