import React from 'react';
import { AppRegistry } from 'react-native';
import App from './components/App.ios';
import createConfiguredStore from './store/configureStore';



const store = createConfiguredStore();
const AppWithStore = () => <App store={store} />;


// workaround for NavigationExperimental issue https://github.com/aksonov/react-native-router-flux/issues/708
// it should be fixed in ^0.28 version
console.ignoredYellowBox = ['Warning: Failed propType: Required prop `sceneRendererProps.isRequired`'];



AppRegistry.registerComponent('LogicalQuizISOApp', () => AppWithStore );
