import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: '10%',
    marginRight: '10%'
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 0,
    height: 100,
    paddingTop: '3%'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 3,
    textAlign: 'center',
  },
  textWarning: {
    fontSize: 20,
    marginTop: 3,
    textAlign: 'center',
    color: 'red'
  },
  // BUTTONS //
  buttonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonRed: {
    backgroundColor: 'red',
    width: 120,
    height: 40,
    borderRadius: 20,
    marginTop: 10
  },
  buttonGreen: {
    backgroundColor: 'green',
    width: 120,
    height: 40,
    borderRadius: 20,
    marginTop: 10
  }
});

export default styles;