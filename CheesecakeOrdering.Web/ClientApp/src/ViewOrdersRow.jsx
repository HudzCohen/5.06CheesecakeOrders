import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";


const ViewOrdersRow = ({id, name, email, base, chosenToppings, specialRequests, quantity, deliveryDate, total}) => {

    return (
        <tr style={{backgroundColor: ("rgb(248, 249, 250"), borderRadius: 15}}>
            <td style={{ paddingTop: 15, paddingBottom: 15 }}>
                <Link to={`/orderdetails/${id}`}>{name} - {email}</Link>
            </td>
            <td>{base}</td>
            <td>{chosenToppings}</td>
            <td>{specialRequests}</td>
            <td>{quantity}</td>
            <td>{dayjs(deliveryDate).format('MM/DD/YYYY')}</td>
            <td>${total}</td>
        </tr>
    )
}

export default ViewOrdersRow;
