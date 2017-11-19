import  React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Layout from './Layout'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Index';
import Signup from './containers/signup/Signup';
import Signin from './containers/signin/Signin';
import RequestService from './containers/requestService/RequestService';
import AllServices from './components/services/allServices/AllServices';
import ContactUs from './components/contactUs/ContactUs';
import PageNotFound from './components/PageNotFound';


export default class Routes extends React.PureComponent {
    render() {
        return (     
        <Router history={browserHistory}>
            <Route path='/' component={Layout}>
            <IndexRoute component={Signin}/>
              <Route path='home' component={Signup} />
              <Route path='allServices' component={AllServices} />
              {/* <Route path='signup' component={Signup} /> */}
              <Route path='request_service' component={RequestService} />
              <Route path='contactUs' component={ContactUs} />
              <Route path="*" component={PageNotFound} />
            </Route>
            </Router>
        )
    }
}