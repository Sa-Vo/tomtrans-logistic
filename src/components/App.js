import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../views/HomePage/Home';
import AboutUs from '../views/AboutUs/AboutUs';
import routes from '../routes';

const App = () => (
    <Layout>
        <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.aboutUs} component={AboutUs} />
            <Route path={routes.vacancies} component={AboutUs} />
            <Route path={routes.carService} component={AboutUs} />
            <Route path={routes.hostel} component={AboutUs} />
            <Route path={routes.contacts} component={AboutUs} />
        </Switch>
    </Layout>
);

export default App;
