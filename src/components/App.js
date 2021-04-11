import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../views/HomePage/Home';
import AboutUs from '../views/AboutUs/AboutUs';
import CarService from '../views/CarService/CarService';
import NotFound from '../views/PageError/PageError';
import routes from '../routes';

const App = () => (
    <Layout>
        <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.aboutUs} component={AboutUs} />
            <Route path={routes.carService} component={CarService} />
            {/* <Route path={routes.vacancies} component={AboutUs} />
            <Route path={routes.hostel} component={AboutUs} />
            <Route path={routes.contacts} component={AboutUs} /> */}
            <Route component={NotFound} />
        </Switch>
    </Layout>
);

export default App;
