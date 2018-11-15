console.log('App.js is runing');

//JSX Javascript XML
var app ={
    title:'Indecision App',
    subtitle:'Put your hands in the hands of a computer',
    options:['One','Two']
};
var template = (
    <div>
        <h1>{app.title}</h1>    
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options':'No options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>    
    </div>
);
var user = {
    name: 'Roms',
    age: 36,
    location: 'Auckland'
};

var userName ='Romelyn';
var userAge = 26;
var userLocation ='Auckland'

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name :'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);