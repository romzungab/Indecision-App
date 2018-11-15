
let visibility = false;

const toggleVisibility =() =>{
    visibility = !visibility;
    render();
   };

const render = () =>{
   const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show Details' }</button>
           {visibility && (
            <div>
               <p>Hey!!</p>
            </div>)}
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
}
render();