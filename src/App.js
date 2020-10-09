import React from 'react'
import { render } from 'react-dom'
//import Pet from './pet';
import SearchParams from "./SearchParams"

// your code 
const App = () => {

    return (

        // <div>
        //     <h1 id="something-important">'Adoped me'</h1>
        //     < Pet name="Luna" animal="dog" breed="pug" />
        //     < Pet name="Bob" animal="fish" breed="yellow" />
        //     < Pet name="Roman" animal="cat" breed="fat" />
        // </div>
        <div>
            <h1></h1>
            < SearchParams />

        </div>

    )

};

render(<App />, document.getElementById("root"));

