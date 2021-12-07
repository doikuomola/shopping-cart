// @ts-nocheck
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// screens 
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';

// components
import NavBar from './components/NavBar/NavBar'
import BackDrop from './components/BackDrop/BackDrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import { useState } from 'react';


function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <BrowserRouter>
      {/* navbar */}
      <NavBar click={() => setSideToggle(!sideToggle) }/>
      {/* sidedrawer */}
      <SideDrawer show={sideToggle} />
      {/* backdrop */}
      <BackDrop show={sideToggle} click={() => setSideToggle(!sideToggle)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/* homescreen */}
      {/* productscreen */}
      {/* cartscreen */}
    </BrowserRouter>
  );
}

export default App;
