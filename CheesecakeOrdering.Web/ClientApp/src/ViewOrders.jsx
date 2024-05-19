import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ViewOrdersRow from "./ViewOrdersRow";
import axios from "axios";



const ViewOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
       const getOrders = async () => {
         const {data} = await axios.get('/api/orders/getall');
         setOrders(data)
       }

       getOrders();
    }, []);

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="d-flex justify-content-center">
                <table className="table text-center shadow-lg" style={{ borderCollapse: "separate", borderSpacing: 15, maxWidth: 20 }}>
                    <thead>
                        <tr style={{ backgroundColor: "rgb:(248, 249, 250)", borderRadius: 15 }}>
                            <th>Name/Email</th>
                            <th>Base Flavor</th>
                            <th>Toppings</th>
                            <th>Special Requests</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => <ViewOrdersRow
                           key={o.id}
                           id={o.id}
                           name={o.name}
                           email={o.email}
                           base={o.base}
                           chosenToppings={o.chosenToppings}
                           specialRequests={o.specialRequests}
                           quantity={o.quantity}
                           deliveryDate={o.deliveryDate}
                           total={o.total}
                        />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default ViewOrders;
