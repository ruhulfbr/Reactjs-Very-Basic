import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{

    constructor(props){
        super(props);
        this.operation = this.operation.bind(this);
        this.HomeOperation = this.HomeOperation.bind(this);
    }

    operation(){
        this.props.history.push('/contact/01749');
    }
    HomeOperation(){
        this.props.history.push('/');
    }


    render(){
        return(
           <div>
                <h1>This is About Page</h1>
                <button onClick={this.operation}>Contact</button>
                <button onClick={this.HomeOperation}>Home</button>

                <ul>
                    <li><Link to='/contact/1749'>1749</Link></li>
                    <li><Link to='/contact/1845'>1845</Link></li>
                    <li><Link to='/contact/1624'>1624</Link></li>
                </ul>
           </div>
        )
    }
}

export default About;