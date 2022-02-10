// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import CurrencyAmount from './components/CurrencyAmount';

// export default class App extends React.Component {
//   constructor(props){
//     super(props)
//       this.state = {
//         amount: null
//       }
//   }

//   updateCurrencyAmount = (amount) => {this.setState({ amount: amount});}


//   render(){
//     return (
//       <div className="App">
//           <Router>
//             <Switch>

//                <Route path="/" exact>
//                 <CurrencyAmount onSubmitAmount={ this.updateCurrencyAmount }   />
//               </Route>

//               <Route path="/HomePage" exact>
//                 <HomePage amount={this.state.amount} />
//               </Route>


             

//             </Switch>
//           </Router>
//       </div>
//     );
//   }
// }


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import CurrencyAmount from './components/CurrencyAmount';

export default class App extends React.Component {
  constructor(props){
    super(props)
     
  }

  render(){
    return (
      <div className="App">
         <HomePage />
      </div>
    );
  }
}