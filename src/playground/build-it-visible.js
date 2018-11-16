class VisibilityToggle extends React.Component{ 
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false
        }
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide Details': 'Show Details'}</button>
                { this.state.visibility && (
                    <div> <p> Hey</p>
                    </div>    
                )
                }
            </div>
        );
    }
    
    handleToggleVisibility(){
        this.setState((prevState) =>
        {
            return {visibility: !prevState.visibility}
        });

    }
}

ReactDOM.render(<VisibilityToggle/> , document.getElementById('app'));

// let visibility = false;

// const toggleVisibility =() =>{
//     visibility = !visibility;
//     render();
//    };

// const render = () =>{
//    const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show Details' }</button>
//            {visibility && (
//             <div>
//                <p>Hey!!</p>
//             </div>)}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// }
// render();