
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>
    <ol>
        <li>item one</li>
        <li>item two</li>
    </ol>
</div>
);
const user = {
    name: 'Roms',
    age: 36,
    location: 'Auckland'
};

const userName = 'Romelyn';
const userAge = 26;
const userLocation = 'Auckland'

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();