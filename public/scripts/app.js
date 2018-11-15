'use strict';

console.log('App.js is running');

//JSX Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [] //['One','Two']
};
var wipeOption = function wipeOption() {
    app.options = [];
    renderNew();
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //prevents the full page refresh
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderNew();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum - 1];
    console.log(randomNum);
    alert(option);
};
var appRoot = document.getElementById('app');
var numbers = [55, 101, 1000];

var renderNew = function renderNew() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: wipeOption },
            'Remove All'
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No option'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (op) {
                return React.createElement(
                    'li',
                    { key: op },
                    op
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', id: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderNew();
