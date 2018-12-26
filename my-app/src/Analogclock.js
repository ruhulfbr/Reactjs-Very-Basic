import React from 'react';

function Analogclock(props){
    console.log(props.time);

    let time = new Date(props.time);

    let clockContainer = {
        position:'relative',
        top : 20,
        left:20,
        width: 200,
        height:200,
        borderRadius : 200,
        borderStyle:'solid',
        borderColor: 'black'
    }
   let secondHand = {
        position:'relative',
        top : 100,
        left:100,
        border: '1px solid red',
        width: '40%',
        height:1,
        transform:'rotate('+((time.getSeconds()/60)*360-90).toString() + 'deg)',
        transformOrigin:'0% 0%',
        backgroundColor: 'red'
    }
    let minitHand = {
        position:'relative',
        top : 96,
        left:97,
        border: '1px solid grey',
        width: '30%',
        height:3,
        transform:'rotate('+((time.getMinutes()/60)*360-90).toString() + 'deg)',
        transformOrigin:'0% 0%',
        backgroundColor: 'grey'
    }
    let hourHand = {
        position:'relative',
        top : 94,
        left:95,
        border: '1px solid grey',
        width: '20%',
        height:7,
        transform:'rotate('+((time.getHours()/12)*360-90).toString() + 'deg)',
        transformOrigin:'0% 0%',
        backgroundColor: 'grey'
    }

    return (
       <div style={clockContainer}>
           <div style ={secondHand}></div>
           <div style ={minitHand}></div>
           <div style ={hourHand}></div>
       </div>
    )
}

export default Analogclock;