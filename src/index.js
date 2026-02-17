import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Greeting() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h1 className="greeting"> * Pick a ChildCare app* - coming soon!</h1>
         <h3 className="text-xl sm:text-5xl font-bold text-white bg-black/40 backdrop-blur-md px-8 
         py-4 rounded-1xl shadow-2xl text-center border border-white/10 uppercase tracking-tight">
              A free directory of daycares and home-based childcares
            </h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Greeting />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();