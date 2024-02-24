import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/store/store'
import App from './App';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCuBQDN0b1ugiGYwA6evtLcDCBDsls6pAg",
  authDomain: "space-token-react.firebaseapp.com",
  databaseURL: "https://space-token-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "space-token-react",
  storageBucket: "space-token-react.appspot.com",
  messagingSenderId: "451193138650",
  appId: "1:451193138650:web:18eb2a97ac513bfeb9a4e3",
  measurementId: "G-LQNJ0VX1L7"
};


firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

