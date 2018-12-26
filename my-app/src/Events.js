import React from 'react';
import Counter from './Counter';

class Myevents extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            counter :0
        }
        // this.SetCounter  = this.SetCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    // eventHandelar (){
    //     // console.log('2nd button pressd');
    //     alert('2nd button pressed');
    // }
    // SetCounter(pram,ev){
    //     this.setState({
    //         counter : this.state.counter + 1
    //     })
    // }

    incrementCounter(){
        if( this.state.counter !== 11){
            this.setState({counter : this.state.counter + 1})
        }else{
            alert('Reached the Increament Limit');
        }
    }
    decrementCounter(){
        if( this.state.counter !== 0){
            this.setState({counter : this.state.counter - 1})
        }else{
            alert('Reached the Decrement Limit');
        }
    }

    render(){
        return(
            <div>

                <Counter counter={this.state.counter} increment = {this.incrementCounter} decrement = {this.decrementCounter}/>
                



                {/* <h3>Start Event</h3>
                <button onClick={function(){
                    console.log('First button press');
                }}>First Button</button> 
                <button onClick={this.eventHandelar}>2nd Button</button><br/><br/>
                <button onClick = {this.SetCounter.bind(this,'Hello')}>Counter ++</button><br/> <br/>
                <button onClick = {this.SetCounter.bind(this,'Hello')}>Counter 22 ++</button><br/> <br/>
                <p>Counter Result : {this.state.counter}</p> */}
            </div>
        )
    }
}

export default Myevents;