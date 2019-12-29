import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
          {/* <BurgerBuilder />
          <Checkout/> */}
        </Layout>
      </div>
    );
  }
}

export default App;
