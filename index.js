/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoaderNotification from './components/Home/Loader/LoaderNotification';
import LoaderNotificationSale from './components/Home/Loader/LoaderNotificationSale';
AppRegistry.registerComponent(appName, () => LoaderNotificationSale);
