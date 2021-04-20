import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingForm from './Components/BookingForm/BookingForm';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import HotelServices from './Components/Dashboard/HotelServices/HotelServices';
import HotelReview from './Components/Dashboard/HotelReview/HotelReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path='/bookingForm'>
            <BookingForm></BookingForm>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/addService'>
            <HotelServices></HotelServices>
          </Route>
          <Route path='/addReview'>
            <HotelReview></HotelReview>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
