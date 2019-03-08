import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from './../actions/index';

import './App.css';

class App extends Component {
  smurfName = React.createRef();
  smurfAge = React.createRef();
  smurfHeight = React.createRef();

  componentDidMount() {
    this.props.getSmurfs();
  }
  
  onAddSmurf = (e) => {
    e.preventDefault();
    const name = this.smurfName.current;
    const age = this.smurfAge.current;
    const height = this.smurfHeight.current;

    const newSmurf = {
      name: name.value,
      age: age.value,
      height: height.value,
    }

    this.props.addSmurf(newSmurf);

    name.value = '';
    age.value = '';
    height.value = '';
  }
  
  render() {
    return this.props.fetchingSmurfs ? (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>HEY! WE'RE STILL GETTING THE SMURFS ASSEMBLED. GIVE IT A SECOND, OKAY?</h2>
      </div>
    )
    :
    (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>CURRENT POPULATION OF SMURF VILLAGE: {this.props.smurfs.length}</h2>
        
        <form>
          <input type="text" 
            ref={this.smurfName}/>
          <input type="text" 
            ref={this.smurfAge} />
          <input type="text" 
              ref={this.smurfHeight} />
          <button onClick={this.onAddSmurf}>Add Smurf</button>
        </form>
        
        {this.props.smurfs.map((smurf, idx )=> {
          return (
            <div key={idx} className="smurfContainer">
              <h4>{smurf.name} ({smurf.age})</h4>
            </div>
          )
        })}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
  }
}

const mapDispatchToProps = dispatch => {
  return (bindActionCreators({
    getSmurfs,
    addSmurf
  }, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
