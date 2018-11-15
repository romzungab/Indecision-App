console.log('App.js is running');

//JSX Javascript XML
const app ={
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options: []//['One','Two']
};
const wipeOption = () =>{
    app.options = [];
    renderNew();
};
const onFormSubmit =(e)=>{
    e.preventDefault(); //prevents the full page refresh
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderNew();
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum - 1];
    console.log(randomNum);
    alert(option);
}
const appRoot = document.getElementById('app');
const  numbers=[55, 101, 1000];

const renderNew =() => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={wipeOption}>Remove All</button>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>
           
            <ol>{
                app.options.map((op) => <li key={op}>{op}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit} >
                <input type="text" id="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderNew();