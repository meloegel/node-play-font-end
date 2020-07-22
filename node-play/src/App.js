import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import './App.css';

import QuestionsList from './components/QuestionsList'
import AddQuestion from './components/AddQuestion'
import EditQuestion from './components/EditQuestion'
import UserProfile from './components/UserProfile'
import AddComment from './components/AddComment'
import EditComment from './components/AddComment'

import Login from './components/Login'
import SignUp from './components/SignUp'
import PrivateRoute from './components/PrivateRoute'

import UserContext from './contexts/UserContext'
import QuestionContext from './contexts/QuestionContext'


function App() {
  const [questionList, setQuestionList] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState({
    userId: window.localStorage.getItem('user_id')
  })


  const handleLogout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <QuestionContext.Provider value={{ questionList, setQuestionList }}>
        <UserContext.Provider value={{ userId, setUserId }}>
          <div className="App">
            <nav>
              <NavLink to="/">Sign Up</NavLink>
              <NavLink to="/login" >Sign In</NavLink>
              <NavLink to='/account'>Account</NavLink>
              <NavLink to='/questions'>Questions</NavLink>
              <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
            </nav>
            <div>
              <Switch>
                <Route exact path='/' component={SignUp} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/questions' component={QuestionsList} />
                <PrivateRoute path='/add-question' component={AddQuestion} />
                <PrivateRoute path='/edit-question/:id' component={EditQuestion} />
                <PrivateRoute path='/account' component={UserProfile} />
                <PrivateRoute path='/add-comment' component={AddComment} />
                <PrivateRoute path='/edit-comment/:id' component={EditComment} />
              </Switch>
            </div>
          </div>
        </UserContext.Provider>
      </QuestionContext.Provider>
    </Router>
  );
}

export default App;
