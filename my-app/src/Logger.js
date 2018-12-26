import React, { Component } from 'react';

class Logger extends Component{
    constructor(props){
        super(props);
        console.log('Constructor Methos');
    }
    componentWillMount(){
        console.log('Cpmponent Will Mount Methos');
    }
    componentDidMount(){
        console.log('Component did mount');
    }
    componentWillReceiveProps(nextProps){
        console.log('Next Props', nextProps);
    }
    shouldComponentUpdate(newProps, newState){
        console.log('Should Component Update');
        console.log('New Props', newProps);
        console.log('New State', newState);
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log('Component will Update');
        console.log('New Props', nextProps);
        console.log('New State', nextState);
    }
    componentDidUpdate(oldProps, oldState){
        console.log('Component Did Update');
        console.log('old Props = ', oldProps);
        console.log('old state = ', oldState);
    }
    componentWillUnmount(){
        console.log('Component will Unmount');
    }

    render(){
        console.log('Render Method');
        return(
               <p>{this.props.time}</p>
            
        )        
    }
}

export default Logger;