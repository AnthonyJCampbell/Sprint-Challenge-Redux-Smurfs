import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getSmurfs } from './../actions/index';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>CURRENT POPULATION OF SMURF VILLAGE: </h2>
        
        {this.props.smurfs.map((smurf, idx )=> {
          return (
            <div key={idx} className="smurfContainer">
              <h4>{smurf.name} ({smurf.age})</h4>
            </div>
          )
        })}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.smurf,
  }
}

const mapDispatchToProps = dispatch => {
  return (bindActionCreators({
    getSmurfs
  }, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
