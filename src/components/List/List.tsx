/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import {
  Box,
  Button,
  Pressable,
  Text,
  Input,
  CheckIcon,
  CloseIcon,
  Image,
} from 'native-base';
import React from 'react';
import {BoardType, GetCardType, ListType} from '../API/types';
import {SvgXml} from 'react-native-svg';
import Card from '../Cards/Card';
import {creatingCardsInAList, getCardsOnList} from '../API/API';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

const List = ({
  navigation,
  boardData,
  listData,
}: {
  navigation: any;
  boardData: BoardType;
  listData: ListType;
}) => {
  const [handleRender, setHandleRender] = React.useState(false);
  const [cardsData, setCardsData] = React.useState<GetCardType[]>([]);
  const [addCardPop, setAddCardPop] = React.useState(false);
  const [newCardName, setNewCardName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState<string | undefined>('');
  // const [sharedFiles, setSharedFiles] = React.useState([]);

  React.useEffect(() => {
    getCardsOnList(listData.id, handleGetCardsData);

    navigation.setOptions({
      headerTitle: addCardPop ? 'Add card' : boardData.name,
      headerLeft: () =>
        addCardPop ? (
          <Button
            variant="ghost"
            onPress={() => {
              setAddCardPop(false);
            }}>
            <CloseIcon color="white" mr="4" />
          </Button>
        ) : null,
      headerRight: () =>
        newCardName ? (
          <Button
            variant="ghost"
            onPress={() => {
              setAddCardPop(false);
              creatingCardsInAList(
                listData.id,
                newCardName,
                handleRender,
                setHandleRender,
              );
            }}>
            <CheckIcon color="white" size="md" />
          </Button>
        ) : null,
    });
  }, [listData.id, addCardPop, navigation, newCardName, handleRender]);

  // React.useEffect(() => {
  //   ReceiveSharingIntent.getReceivedFiles(
  //     files => {
  //       // files returns as JSON Array example
  //       //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
  //       setSharedFiles(files);
  //       console.log(files);
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     'ShareMedia', // share url protocol (must be unique to your app, suggest using your apple bundle id)
  //   );

  //   // To clear Intents
  //   ReceiveSharingIntent.clearReceivedFiles();
  // }, [navigation]);
  // console.log(sharedFiles);

  const handleGetCardsData = (data: GetCardType[]): void => {
    setCardsData(data);
  };

  const imageLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      // includeBase64: true,
    });

    setImageUrl(result.assets?.[0]?.uri);

    console.log(result);
  };

  const onCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});

    setImageUrl(result.assets?.[0]?.uri);

    console.log(imageUrl);
  };

  const threeDotssvgXml = `<svg
    width="800px"
    height="800px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    class="bi bi-three-dots-vertical">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
  </svg>`;

  const imageSvgXml = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.21 7.89924V16.0502C21.21 19.0702 19.32 21.2002 16.3 21.2002H7.65C4.63 21.2002 2.75 19.0702 2.75 16.0502V7.89924C2.75 4.87924 4.64 2.75024 7.65 2.75024H16.3C19.32 2.75024 21.21 4.87924 21.21 7.89924Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path opacity="0.4" d="M5.28125 16.4311L6.80925 14.8181C7.34025 14.2551 8.22525 14.2281 8.78925 14.7581C8.80625 14.7751 9.72625 15.7101 9.72625 15.7101C10.2813 16.2751 11.1883 16.2841 11.7533 15.7301C11.7903 15.6941 14.0872 12.9081 14.0872 12.9081C14.6792 12.1891 15.7422 12.0861 16.4622 12.6791C16.5102 12.7191 18.6803 14.9461 18.6803 14.9461" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M10.3126 9.13315C10.3126 10.1022 9.52757 10.8872 8.55857 10.8872C7.58957 10.8872 6.80457 10.1022 6.80457 9.13315C6.80457 8.16415 7.58957 7.37915 8.55857 7.37915C9.52757 7.38015 10.3126 8.16415 10.3126 9.13315Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const cameraSvgXml = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  return (
    <Box
      width="72"
      backgroundColor="gray.100"
      marginX="2"
      borderRadius="md"
      overflow="hidden"
      paddingX="2"
      paddingBottom="1.5">
      <Box
        height="12"
        justifyContent="space-between"
        paddingLeft="2"
        display="flex"
        flexDirection="row"
        alignItems="center">
        <Text fontSize="md" fontWeight="medium">
          {listData.name}
        </Text>
        <Pressable>
          <SvgXml xml={threeDotssvgXml} width="12" height="12" />
        </Pressable>
      </Box>

      {cardsData.map(card => (
        <Card key={card.id} cardData={card} />
      ))}
      {imageUrl && (
        <Image source={{uri: imageUrl}} width="10" height="10" alt="Image" />
      )}

      {/* {sharedFiles &&
        sharedFiles.map(file => (
          <Image
            source={{uri: file.contentUri}}
            width="10"
            height="10"
            alt="Image"
          />
        ))} */}

      {addCardPop ? (
        <Box
          paddingX="2"
          paddingY="4"
          marginY="1"
          backgroundColor="white"
          borderRadius="md"
          shadow="2">
          <Input
            autoFocus
            w="full"
            variant="underlined"
            placeholder="Card name"
            fontSize="sm"
            fontWeight="medium"
            padding="0"
            borderBottomWidth="2"
            borderColor="blue.600"
            value={newCardName}
            onChangeText={e => {
              setNewCardName(e);
            }}
          />
        </Box>
      ) : (
        <Box
          paddingLeft="2"
          paddingRight="2"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Button
            variant="ghost"
            width="3/5"
            justifyContent="flex-start"
            paddingLeft="0"
            onPress={() => {
              setAddCardPop(true);
            }}>
            <Text color="blue.500" fontWeight="medium" letterSpacing="2xl">
              + Add card
            </Text>
          </Button>
          <Button variant="ghost" onPress={imageLibrary}>
            <SvgXml xml={imageSvgXml} width="24" height="24" />
          </Button>
          <Button variant="ghost" onPress={onCamera}>
            <SvgXml xml={cameraSvgXml} width="24" height="24" />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default List;
