import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
 
  
    render() { 
        
        return (
            <div>
                Counter : {this.props.counter}  
                <br/><br/>
                <button onClick={this.props.increament}>+</button> 
                <button onClick={this.props.decreament}>-</button>
            </div>
        ) 
    }
} 

const mapStateToProps =(state)=>{ 
    return{counter : state.counter} 
};

const mapDispatchtoProps =(dispatch)=>{ 
    return { increament: () =>dispatch('INCREMENT'), 
            decreament: () =>dispatch('DECREMENT'), 
            }
};
export default connect(mapStateToProps, mapDispatchtoProps)(Counter);