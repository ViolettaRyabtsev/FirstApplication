import React from 'react';
import { render } from 'react-dom';
//import Pet from './pet';
import { Router, Link } from '@reach/router';
import SearchParams from "./SearchParams";
import Details from './Details';

// your code 
const App = () => {
    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/" id="something-important"> Adopt me
                </Link>
                </header>

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

