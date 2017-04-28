import React from 'react';
import { Container, Header, Progress } from 'semantic-ui-react';
import PropTypes from 'prop-types'; // ES6


class LifeArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <div className={'lifearea-container'}>
        <div className={'name'}>{this.props.name}</div>
      </div>
    );
  }
}

LifeArea.propTypes = {
  name: PropTypes.string.isRequired,
};

const LifeAreaContainer = (props) => {
  return (
    <div>
     {props.lifeareas}
    </div>
  )
}

export default (props) => (
  <Container>
    <Header as="h1">Hellow Worl!d</Header>
    <Progress percent={11} />
    <LifeAreaContainer lifeareas={props.lifeareas} />
  </Container>
);

