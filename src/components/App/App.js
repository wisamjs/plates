import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';

import Button from '../Button/';
import Heading from '../Heading/';
import Input from '../Input/';
import colors from '../../utils/colors';
import { connect } from 'react-redux';
import { saveWeight } from '../../modules/Weight/Weight.actions';
const plates = require('../../assets/white-plates.png');
const actions = {
  saveWeight,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
    };

    this.isFormIncomplete.bind(this);
    this.submitForm.bind(this);
  }

  updateWeight(text) {
    let newWeight = text;
    if (text.length > 3) {
      newWeight = text[3];
    }

    this.setState({
      weight: newWeight,
    });
  }

  isFormIncomplete() {
    return this.state.weight === '';
  }

  submitForm() {
    const weight = this.state.weight;
    this.setState({ weight: '' });
    return this.props.saveWeight(weight);
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Image
              style={{ width: 100, height: 100, paddingBottom: 20 }}
              source={plates}
            />
            <Heading type="h1" style={styles.title}>
              How Many Plates?
            </Heading>
            <Text style={styles.subtitle}>
              We'll do the math, you do the lift. What are you lifting?
            </Text>
            <View
              style={{
                flex: 0,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Input
                placeholder="_ _ _"
                keyboardType="numeric"
                onChangeText={num => this.updateWeight(num)}
                autoFocus={true}
                value={this.state.weight}
                caretHidden={true}
              />
              <Text style={styles.weight}>lb</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            disabled={this.isFormIncomplete()}
            onPress={() => this.submitForm()}
          >
            Show me the plates
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  null,
  actions,
)(App);

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  wrapper: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'stretch',
  },
  title: {
    color: 'white',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weight: { color: 'white', fontSize: 80, marginLeft: 10 },
  buttonContainer: { marginTop: 40 },
});
