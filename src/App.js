import React from 'react';
import BarChart from './BarChart.js';
import './App.css';
import Map from './Map'

class App extends React.Component {

// state = {
// data: [12, 5, 6, 6, 9, 10],
// width: window.innerWidth,
// height: window.innerHeight,
// id: "root"
// }

 render() {
    return (
      <div className="App">
        <Map/>
        {/* <BarChart/> */}
        {/* <BarChart data={this.state.data} width={this.state.width} height={this.state.height} /> */}
      </div>
    );
  }
}

export default App;