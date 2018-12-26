    
    
    
    
    // var h1 = React.createElement('h1',null,'Hello World!');

    var a = React.createElement('a',{href: 'http://google.com.bd', target:'_blank', title:'Google Site'},'Google');
    var content = document.getElementById('root');
    ReactDOM.render(a,content);