import MiniSignal from 'mini-signals';
import React from 'react';
import styles from './ProgressLoader.scss';

// used to dispatch signals to this component from other components
export const progressLoaderSignal = new MiniSignal();

export class ProgressLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(bool) {
    this.setState({
      show: bool
    });
  }

  componentDidMount() {
    //add signal listener
    this.binding = progressLoaderSignal.add(this.changeDisplay);
  }

  componentWillUnmount() {
    this.binding.detach();
  }

  render() {
    let inlineStyle = (this.state.show === false) ? {display:'none'} : {};

    return (
      <div style={inlineStyle} className={'mdl-progress mdl-js-progress mdl-progress__indeterminate ' + styles.loader}></div>
    );
  }
}
