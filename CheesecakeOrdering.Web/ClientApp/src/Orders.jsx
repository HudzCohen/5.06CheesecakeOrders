import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";


const baseChoices = ['', 'Chocolate', 'Classic', 'Red Velvet', 'Brownie'];

const toppings = [
    "Chocolate Chips",
    "Caramel Drizzle",
    "Whipped Cream",
    "Pecans",
    "Almonds",
    "Toasted Coconut",
    "Graham Cracker Crumble",
    "Cookie Dough",
    "Mint Chocolate Chips",
    "Caramelized Bananas",
    "Rainbow Sprinkles",
    "Powdered Sugar",
    "White Chocolate Shavings",
    "Peanut Butter Drizzle",
    "Dark Chocolate Drizzle"
];


const Orders = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [base, setBase] = useState(baseChoices[0]);
    const [chosenToppings, setChosenToppings] = useState([]);
    const [specialRequests, setSpecialRequests] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [deliveryDate, setDeliveryDate] = useState('');


    const getTotal = () => {
        if (base === '') {
            return 0;
        }
        let toppingsTotalCost = chosenToppings.length * 3.95;
        return (49.99 + toppingsTotalCost) * quantity;
    }

    let total = getTotal();

    const onSubmitClick = async () => {
        await axios.post('/api/orders/addorder', { name, email, base, chosenToppings: chosenToppings.join(', '), specialRequests, quantity, deliveryDate, total });
        navigate('/success');
    }

    const onChosenToppingsChange = (t) => {
        let ct = chosenToppings.includes(t) ? [...chosenToppings.filter(ct => ct !== t)] : [...chosenToppings, t];
        setChosenToppings(ct);
    }

    let format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
    
    const isValid = ( name && email && base && deliveryDate);

    return (

        <div className="container" style={{ marginTop: 80 }}>
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor</label>
                        <select className="form-select" onChange={e => setBase(e.target.value)}>
                            {baseChoices.map(b =>
                                <option key={b}>{b}</option>
                            )};
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                        {toppings.map(t => {
                            return (
                                <div key={t} className="form-check"> 
                                <input className="form-check-input" type="checkbox" onChange={() => onChosenToppingsChange(t)}/>
                                <label className="form-check-label">{t}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea className="form-control" rows="3" value={specialRequests} onChange={e => setSpecialRequests(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" min="1" value={quantity} onChange={e => setQuantity(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input type="date" className="form-control" value={deliveryDate} onChange={e => setDeliveryDate(e.target.value)}></input>
                    </div>
                    <button type="submit" disabled={!isValid} className="btn btn-primary mb-4" onClick={onSubmitClick}>Submit Order</button>
                </div>
                <div className="col-md-6 position-sticky" style={{ top: 32 }}>
                    <h2 className="mb-4">Live Preview</h2>
                    <div className="card" style={{ width: 288 }}>
                        <img src="/Cheesecake.png" className="card-img-top" alt="Cheesecake"></img>
                        <div className="card-body">
                            <h5 className="card-title">Your Custom Cheesecake</h5>
                            <p className="card-text">Base: {base}</p>
                            <p className="card-text">Toppings: {chosenToppings.join(', ')}</p>
                            <p className="card-text">Special Requests: {specialRequests}</p>
                            <p className="card-text">Quantity: {quantity} </p>
                            <p className="card-text">Delivery Date: {dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                            <p className="card-text fw-bold">Total: {format.format(getTotal())}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;

