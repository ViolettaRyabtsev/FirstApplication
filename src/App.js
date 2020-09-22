import React from 'react'
import { render } from 'react-dom'
import Pet from './pet';


// your code 
const App = () => {
    // return React.createElement(
    //     "div",
    //     {},

    //     [
    //         React.createElement("h1", {}, "FirstApplication"),
    //         React.createElement(pet, {
    //             name: "luna",
    //             animal: 'dog',
    //             breed: 'buldog'
    //         }, []),

    //         React.createElement(pet, {
    //             name: "Strudel",
    //             animal: 'dog',
    //             breed: 'pug'
    //         }, []),

    //         React.createElement(pet, {
    //             name: "Max",
    //             animal: 'cat',
    //             breed: 'fat cat '
    //         }, [])

    //     ]
    // );
    return (
        <div>
            <h1 id="something-important">'Adoped me'</h1>
            < Pet name="Luna" animal="dog" breed="pug" />
            < Pet name="Bob" animal="fish" breed="yellow" />
            < Pet name="Roman" animal="cat" breed="fat" />
        </div>
    )

};

render(<App />, document.getElementById("root"));

