import {AppRegistry} from 'react-native';
import App from './App';
import Agenda from './src/screens/Agenda';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Agenda);
