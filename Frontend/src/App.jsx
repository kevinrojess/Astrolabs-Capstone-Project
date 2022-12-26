
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import DonateScreen from './pages/DonateScreen';
import InvolvedScreen from './pages/InvolvedScreen';
import RegistrationScreen from './pages/RegistrationScreen';
import LoginScreen from './pages/LoginScreen';
import ProductListScreen from './pages/ProductListScreen';
import ProductScreen from './pages/ProductScreen';
import LayoutRoute from './components/LayoutRoute';
import GuestLayoutRoute from './components/GuestLayoutRoute';
import PrivateLayoutRoute from './components/PrivateLayoutRoute';
import DonateLayoutRoute from './components/DonateLayoutRoute';
import CartScreen from './pages/CartScreen';
import ProfileScreen from './pages/ProfileScreen';
import StyledLoginScreen from './pages/StyledLoginScreen';
import OrderConfirmed from './components/OrderConfirmed';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <DonateLayoutRoute path="/donate" exact={true} component={DonateScreen} />
        <LayoutRoute path="/involved" exact={true} component={InvolvedScreen} />
        <PrivateLayoutRoute path="/profile" exact={true} component={ProfileScreen} />
        <GuestLayoutRoute path="/register" exact={true} component={RegistrationScreen} />
        <GuestLayoutRoute path="/login" exact={true} component={StyledLoginScreen} />
        <LayoutRoute path="/cart" exact={true} component={CartScreen} />
        <LayoutRoute path="/product" exact={true} component={ProductScreen} />
        <LayoutRoute path="/products/list" exact={true} component={ProductListScreen} />
        <LayoutRoute path="/buynow" exact={true} component={OrderConfirmed} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
