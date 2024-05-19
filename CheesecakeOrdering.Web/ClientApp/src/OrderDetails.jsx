import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {

    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const { name, email, base, chosenToppings, specialRequests, quantity, deliveryDate, total } = order;


    useEffect(() => {
        const getOrderById = async () => {
            const { data } = await axios.get(`/api/orders/getorderbyid?id=${id}`);
            setOrder(data);
        }

        getOrderById();
    }, []);


    return (
        <div className="container" style={{marginTop: 80}}>
        <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
            <div className="card text-center shadow p-3 mb-5 bg-body-rounded" style={{ width: "30rem", backgroundColor: ("rgb(248, 249, 250)") }}>
                <div className="card-body">
                    <h3 className="card-title fw-bold">{name}</h3>
                    <p className="card-text fs-5">{email}</p>
                    <p className="card-text fs-5">{base}</p>
                    <p className="card-text fs-5">{chosenToppings}</p>
                    <p className="card-text fs-5">{specialRequests}</p>
                    <p className="card-text fs-5">{quantity}</p>
                    <p className="card-text fs-5">{dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                    <p className="card-text fs-5">${total}</p>
                </div>
                <Link to="/vieworders">
                    <button className="btn btn-primary w-100">Back to Orders</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default OrderDetails;

