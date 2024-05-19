import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='text-center' style={{marginTop: 200}}>
            <h1 className='display-4'>Welcome to the Cheesecake Factory</h1>
            <p className='lead>'>
                <Link to='/order'>
                    <button className='btn btn-dark btn-lg' style={{marginTop: 20}}>
                        Click here to order your own custom cheesecake
                    </button>
                </Link>
            </p>
        </div>
    )
};

export default Home;