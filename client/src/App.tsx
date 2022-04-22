import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/nav/NavBar";
import './styles/App.css'
import {Context} from "./index";
import ForModal from "./components/UI/forModal/ForModal";

function App() {
    const {userStore} = useContext(Context)
    const [load,setLoad] =useState(true)
    useEffect(()=>{

            userStore.checkAuth().finally(()=>setLoad(false))



    },[[userStore._user]])

  return (
      <div className="App">

              {load?
                  <ForModal>
                      <div className="loader"></div>:
                  </ForModal>
:
                  <BrowserRouter>
                  <NavBar/>
                  <AppRouter/>
                  </BrowserRouter>
              }


      </div>

  );
}

export default App;
