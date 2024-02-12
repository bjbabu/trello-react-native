/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Button,
  CheckIcon,
  CloseIcon,
  Input,
  ScrollView,
  Text,
  View,
} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {GetListType, RootStackParamList} from '../API/types';
import {
  Alert,
  ImageBackground,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
import {createListOnBoard, fetchListsOnBoard} from '../API/API';
import List from '../List/List';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

type BoardDetailRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: BoardDetailRouteProp;
  navigation: any;
};

const BoardDetail: React.FC<Props> = ({
  route,
  navigation,
}: {
  route: BoardDetailRouteProp;
  navigation: any;
}) => {
  const [handleRender, setHandleRender] = React.useState(false);
  const [topColor, setTopColor] = React.useState('#fff');
  const [listsData, setListsData] = React.useState<GetListType[]>([]);
  const [addListPop, setAddListPop] = React.useState(false);
  const [newListName, setNewListName] = React.useState('');
  const {sharedFiles} = route.params;

  console.log(sharedFiles);

  React.useEffect(() => {
    setTopColor(route.params.boardData.prefs.backgroundTopColor);
    fetchListsOnBoard(route.params.boardData.id, handleData);
    navigation.setOptions({
      headerTitle: addListPop ? 'Add list' : route.params.boardData.name,
      headerLeft: () =>
        addListPop ? (
          <Button
            variant="ghost"
            onPress={() => {
              setAddListPop(false);
            }}>
            <CloseIcon color="white" mr="4" />
          </Button>
        ) : null,
      headerRight: () =>
        newListName ? (
          <Button
            variant="ghost"
            onPress={() => {
              setAddListPop(false);
              createListOnBoard(
                route.params.boardData.id,
                newListName.trim(),
                setHandleRender,
                handleRender,
              );
            }}>
            <CheckIcon color="white" size="md" />
          </Button>
        ) : null,
    });
  }, [addListPop, newListName, handleRender]);

  const handleData = (data: GetListType[]): void => {
    setListsData(data);
  };

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(topColor);
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('dark-content');
      };
    }, [topColor]),
  );

  return (
    <Box width="full" height="full">
      <ImageBackground
        source={{uri: route.params.boardData.prefs.backgroundImage}}
        style={{flex: 1}}>
        <ScrollView horizontal overflowX={'auto'}>
          <Box
            display="flex"
            flexDirection="row"
            paddingTop="3"
            paddingX="2"
            alignItems="flex-start">
            {listsData.map(list => (
              <List
                key={list.id}
                navigation={navigation}
                boardData={route.params.boardData}
                listData={list}
              />
            ))}

            <View overflow="hidden" borderRadius="md">
              {addListPop ? (
                <Box
                  backgroundColor="white"
                  padding="3"
                  width="72"
                  height="12"
                  alignItems="center"
                  justifyContent="center">
                  <Input
                    autoFocus
                    variant="underlined"
                    placeholder="List name"
                    fontSize="sm"
                    fontWeight="medium"
                    padding="0"
                    borderBottomWidth="2"
                    borderColor="blue.600"
                    value={newListName}
                    onChangeText={e => {
                      setNewListName(e);
                    }}
                  />
                </Box>
              ) : (
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple('#BEBEBE', false)}
                  onPress={() => setAddListPop(true)}>
                  <Box
                    backgroundColor="white"
                    width="72"
                    height="12"
                    alignItems="center"
                    justifyContent="center">
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      letterSpacing="2xl"
                      color="blue.600">
                      Add list
                    </Text>
                  </Box>
                </TouchableNativeFeedback>
              )}
            </View>
            <QRCodeScanner
              onRead={({data}) => Alert.alert(data)}
              flashMode={RNCamera.Constants.FlashMode.auto}
              reactivate
              reactivateTimeout={500}
            />
          </Box>
        </ScrollView>
      </ImageBackground>
    </Box>
  );
};

export default BoardDetail;
