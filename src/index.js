// import React from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA




import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./store/";
// import registerServiceWorker from './registerServiceWorker';
serviceWorker.unregister();

ReactDOM.render(
    <Provider store={ store } >
        <PersistGate loading={ null } persistor={ persistor } >
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root')
);
serviceWorker.unregister();

// registerServiceWorker();

