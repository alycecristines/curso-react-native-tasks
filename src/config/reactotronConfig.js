import Reactotron from 'reactotron-react-native'

const reactotron = Reactotron
  .configure() 
  .useReactNative() 
  .connect();

export default reactotron;