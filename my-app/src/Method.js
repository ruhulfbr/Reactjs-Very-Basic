import React, { Component } from 'react';

class Method extends Component{

    myFacebookLink(){
        return 'http://facebook.com/ruhulamin.imran/';
    }
    facebookUser(){
        return 'Ruhul';
    }

    render(){
        return(
            <div>
                <p>My Facebook Id is : <a href={this.myFacebookLink()}>{this.facebookUser()}</a></p>
            </div>
        )
    }
}
export default Method;