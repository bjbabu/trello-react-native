import React from 'react';
import {Box, Image, Pressable, Text} from 'native-base';
import {BoardType} from '../API/types';
import {SvgUri} from 'react-native-svg';

const Board = ({
  board,
  navigation,
}: {
  board: BoardType;
  navigation: any;
}): React.JSX.Element => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate({name: 'Details', params: {boardData: board}})
      }>
      <Box
        marginY="2.5"
        paddingX="3.5"
        display="flex"
        flexDirection="row"
        alignItems="center">
        {board.prefs.backgroundColor ? (
          <Box height="10" width="16" borderRadius="sm" overflow="hidden">
            <SvgUri
              uri={board.prefs.backgroundImage}
              height="100%"
              width="100%"
            />
          </Box>
        ) : (
          <Image
            source={{uri: board.prefs.backgroundImage}}
            alt="Background"
            height="10"
            width="16"
            borderRadius="sm"
          />
        )}
        <Text marginX="3.5" fontSize="md">
          {board.name}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Board;
