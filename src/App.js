const pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);

};
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

ReactDOM.render(React.createElement(App),
    document.getElementById("root")
);

