using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrdering.Data
{
     public class CheesecakeOrder
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Base { get; set; }
        public string ChosenToppings { get; set; }
        public string SpecialRequests { get; set; }
        public int Quantity { get; set; }
        public DateTime DeliveryDate { get; set; }
        public decimal Total { get; set; }

    }
}
