import React from 'react'
import { render } from 'react-dom'
import pet from './pet';


// your code 
const App = () => {
    return React.createElement(
        "div",
        {},

        [
            React.createElement("h1", {}, "FirstApplication"),
            React.createElement(pet, {
                name: "luna",
                animal: 'dog',
                breed: 'buldog'
            }, []),

            React.createElement(pet, {
                name: "Strudel",
                animal: 'dog',
                breed: 'pug'
            }, []),

            React.createElement(pet, {
                name: "Max",
                animal: 'cat',
                breed: 'fat cat '
            }, [])

        ]
    );
};

render(React.createElement(App),
    document.getElementById("root")
);

