import React from 'react';

// onMouseDown onMouseEnter onMouseLeave
// onMouseMove onMouseOut onMouseOver onMouseUp

class Counter extends React.Component{
    render(){
        // console.log(this.props);
        return(
            <div>
                <h1>Counter App</h1>
                <button onClick ={this.props.increment}> Counter ++ </button>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.decrement}> Counter -- </button>
            </div>
        )
    }
}

export default Counter;