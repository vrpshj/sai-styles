import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      currrentUser: null
    }
  }
  unsubscribeFromAuth= null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      //this.setState({currrentUser: user})
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currrentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}
}

export default App;
