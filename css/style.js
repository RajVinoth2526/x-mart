// CommonStyles.js
import { StyleSheet } from 'react-native';



const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#245c2c',
    alignItems: 'center',
    justifyContent: 'center',


    // paddingHorizontal: 20,
    // paddingVertical: 10,
    // borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    // fontSize: 16,
    // fontWeight: 'bold',
  },
  fontColor : {
    color:'#245c2c',
  }
});

export const primaryColor = '#245c2c';
export default CommonStyles;
