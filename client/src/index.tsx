import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/userStore";

interface State {
    userStore:UserStore
}
export const userStore = new UserStore()
export const Context= createContext<State>({userStore})

ReactDOM.render(
    <Context.Provider value={{
        userStore
    }}>
        <App/>
    </Context.Provider>,
  document.getElementById('root')
);


reportWebVitals();
