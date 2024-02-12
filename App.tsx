/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import Boards from './src/components/Boards/Boards';
import {RootStackParamList} from './src/components/API/types';
import BoardDetail from './src/components/BoardDetail/BoardDetail';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [sharedFiles, setSharedFiles] = React.useState([]);

  React.useEffect(() => {
    ReceiveSharingIntent.getReceivedFiles(
      files => {
        // files returns as JSON Array example
        //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
        setSharedFiles(files);
        console.log(files);
      },
      error => {
        console.log(error);
      },
      'ShareMedia', // share url protocol (must be unique to your app, suggest using your apple bundle id)
    );

    // To clear Intents
    ReceiveSharingIntent.clearReceivedFiles();
  }, []);

  console.log(ReceiveSharingIntent);

  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Boards"
              component={Boards}
              options={{
                headerStyle: {backgroundColor: '#0C66E4'},
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name="Details"
              component={BoardDetail}
              options={({route, navigation}) => ({
                title: route.params.boardData.name,
                headerStyle: {
                  backgroundColor:
                    route.params.boardData.prefs.backgroundTopColor,
                },
                headerTintColor: 'white',
              })}
              initialParams={{sharedFiles: sharedFiles}}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
}

export default App;
