console.log('App.js is runing');

//JSX Javascript XML

//var template = <p>This is jsx from app.js!</p>;
var template = (
    <div>
        <h1>Indecision Application</h1>
        <p>this is some info</p>    
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>    
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);