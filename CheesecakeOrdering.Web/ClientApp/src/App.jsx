import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Orders from './Orders';  
import ViewOrders from './ViewOrders';
import Success from './Success';
import OrderDetails from './OrderDetails';


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Orders />} />
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/success' element={<Success />} />
                <Route path='/orderdetails/:id' element={<OrderDetails />} />
            </Routes>
        </Layout>
    );
}

export default App;