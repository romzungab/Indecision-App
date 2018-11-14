'use strict';

console.log('App.js is runing');

//JSX Javascript XML

//var template = <p>This is jsx from app.js!</p>;
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision Application'
    ),
    React.createElement(
        'p',
        null,
        'this is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
