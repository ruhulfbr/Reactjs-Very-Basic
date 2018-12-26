import React,{Component} from 'react';

class Contact extends Component{

    operation(){
        this.props.history.push('/about');
    }
    render(){
        
    let users = {
        1749: {
            name: 'Ruhul',
            cell: '01749'
        },
        1845: {
            name: 'imrab',
            cell: '01845'
        },
        1624: {
            name: 'amin',
            cell: '01624'
        }
    }
    let mmmmm = users[this.props.match.params.ContactNumber]

        return(
           <div>
                <h1>This is Conact Page</h1>
                <button onClick={this.operation.bind(this)}>About</button>
                <h2>Contact Person : {mmmmm.name}</h2>
                <h2>Contact Number : {mmmmm.cell}</h2>


           </div>
        )
    }
}

export default Contact;