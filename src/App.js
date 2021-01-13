import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Layout from './components/Layout';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
  return (
     <Router>
         <Layout>
            <Switch>
               <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
            </Switch>
         </Layout>            
     </Router>
  );
}
 
export default App;
