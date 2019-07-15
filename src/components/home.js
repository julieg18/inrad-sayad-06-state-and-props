import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: 'Web Developer',
      newData: '',
    };
  }

  handleOnClickButton = () => {
    // this.setState(
    //   {
    //     jobTitle: 'Web Developer',
    //   },
    //   () => {
    //     console.warn('STATE IS NOW SET');
    //   },
    // );
    this.setState((state, props) => {
      return {
        newData: `${props.name} is a ${state.jobTitle}`,
      };
    });
  };

  render() {
    return (
      <div>
        {/* <h1>Home {this.props.name}</h1>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          Go to FreeCodeCamp News!
        </a> */}
        <p>{this.state.newData}</p>
        <button onClick={this.handleOnClickButton}>Set Job Title</button>
      </div>
    );
  }
}

export default Home;
