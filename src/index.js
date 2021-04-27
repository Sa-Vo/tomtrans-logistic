import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './base.css';
import App from './components/App';
import './i18n';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Suspense fallback={<div>Loading ...</div>}>
                <App />
            </Suspense>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root'),
);
