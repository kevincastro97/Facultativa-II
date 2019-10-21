/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginContainer from './src/containers/loginContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginContainer);
