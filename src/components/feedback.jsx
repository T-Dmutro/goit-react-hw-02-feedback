import React from 'react';
import { Button } from './FeedbackOptions.js';
import { Statistics } from './Statistics.js';
class Counter extends React.Component {



  static defaultProps = {
    initState: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };
  state = {
    good: this.props.initState.good,
    neutral: this.props.initState.neutral,
    bad: this.props.initState.bad,
    visible: false,
  };
  show = () =>{
  
    this.setState({visible: true});
  }
  handButtonPressGood = () => {
    console.log(`добре ${this.state.good}`);
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    
  };
  handButtonPressNeutral = () => {
    console.log(`нейтрально ${this.state.neutral}`);
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    
  };
  handButtonPressBad = () => {
    console.log(`погано ${this.state.bad}`);
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    
  };



  render() {
    return (
      <div >
        <Button
         onShow={this.show}
          onButtonPressGood={this.handButtonPressGood}
          onButtonPressNeutral={this.handButtonPressNeutral}
          onButtonPressBad={this.handButtonPressBad}
        />
        {this.state.visible && (<Statistics
          onGood={this.state.good}
          onNeutral={this.state.neutral}
          onBad={this.state.bad}
        />)}
        {!this.state.visible && <p>There is no feedback</p>}
      </div>
    );
  }
}

export default Counter;
