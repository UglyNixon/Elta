import React, {useContext, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/nav/NavBar";
import './styles/App.css'
import {Context} from "./index";

function App() {
    const {userStore} = useContext(Context)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            userStore.checkAuth()
        }

    }, [])
  return (
      <div className="App">
          <BrowserRouter>
              <NavBar/>
              <AppRouter/>
          </BrowserRouter>
      </div>

  );
}

export default App;
