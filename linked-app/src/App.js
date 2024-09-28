import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import GetCurrentUser from './pages/GetCurrentUser';
import SuccessPage from './pages/RegistrationSuccess';
import DisplayPeople from './pages/DisplayPeople';
import LogInPage from './pages/LogIn';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <body>
      <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<DisplayPeople />}
                    />

                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/linked-app/src/pages/GetCurrentUser.js"
                        element={<GetCurrentUser />}
                    />

                    <Route 
                        path="/linked-app/src/pages/RegistrationSuccess.js" 
                        element={<SuccessPage />} 
                    />

                    <Route
                        path="/workspaces/JIMS/linked-app/src/pages/Register.js"
                        element={<Register />}
                    />

                    <Route 
                        path="/workspaces/JIMS/linked-app/src/pages/LogIn.js" 
                        element={<LogInPage />} 
                    />


                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
      </body>
    </div>
  );
}

export default App;
