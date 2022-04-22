import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/userStore";
import RuchkaStore from "./store/ruchkaStore";


interface State {
    userStore:UserStore
    ruchkaStore:RuchkaStore
}
export const userStore = new UserStore()
export const ruchkaStore=new RuchkaStore()
export const Context= createContext<State>({userStore,ruchkaStore})

ReactDOM.render(
    <Context.Provider value={{
        userStore,ruchkaStore
    }}>
        <App/>
    </Context.Provider>,
  document.getElementById('root')
);


reportWebVitals();
