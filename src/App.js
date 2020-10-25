import React from 'react';
import { render } from 'react-dom';
//import Pet from './pet';
import { Router } from '@reach/router';
import SearchParams from "./SearchParams";
import Details from './Details';

// your code 
const App = () => {
    return (
        <React.StrictMode>
            <div>
                <h1 id="something-important">Adopt Me</h1>
                <Router>
                    < SearchParams path="/" />
                    {/* <SomeOtherRoute path="/details/1" /> */}
                    <Details path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    )
};

render(<App />, document.getElementById("root"));

