import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../views/HomePage/Home';
import AboutUs from '../views/AboutUs/AboutUs';
import Hostel from '../views/Hostel/Hostel';
import CarService from '../views/CarService/CarService';
import Contact from '../views/Contact/Contact';
import TirParking from '../views/TirParking/TirParking';
import NotFound from '../views/PageError/PageError';
import routes from '../routes';

const App = () => (
    <Layout>
        <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.aboutUs} component={AboutUs} />
            <Route path={routes.carService} component={CarService} />
            <Route path={routes.hostel} component={Hostel} />
            <Route path={routes.tirParking} component={TirParking} />
            <Route path={routes.contacts} component={Contact} />
            <Route component={NotFound} />
        </Switch>
    </Layout>
);

export default App;
