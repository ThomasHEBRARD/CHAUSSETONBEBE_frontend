import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<>Loading</>}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('app')
);
