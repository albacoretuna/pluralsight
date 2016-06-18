const React = require('react');
const ReactDom = require('react-dom');

const model = new falcor.Model({
   cache: {
       recipes: [
           {
               name: "Cookies",
               instructions: "Bake them lol"
           },
           {
               name: "Brownies",
               instructions: "Also bake"
           }
       ]    
   }
});

model.get(['recipes', 0, ['name', 'instruction']])
     .then(data => {
         console.log(data);
     });

 

const App = React.createClass({
    render() {
        return <h1> hi  </h1>;
    }
});

ReactDom.render(<App/>, window.document.getElementById('target'));
