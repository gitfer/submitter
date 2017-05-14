import React, { Component } from 'react';

import './App.css';

class App extends Component {
  getTodayFormatted() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const today = year + "-" + month + "-" + day;  
    return today;
  };

  constructor(){
    super();
  }
  render() {
    const today = this.getTodayFormatted();
    const expenseValue = 40;
    return (
      <div className="App">
        <p className="App-intro">
          <form>

            <div className="inputField">
              <input type="date" value={today} />
            </div>
            <div className="inputField">
              <input type="number" step="0.01" value={expenseValue} />€
            </div>
            <div className="inputField">
              <input type="text" />
            </div>
              <input type="submit" value="Save Expense" />
          </form>
        </p>
      </div>
    );
  }
}

export default App;
