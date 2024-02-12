import {Box, ScrollView} from 'native-base';
import {StatusBar} from 'react-native';
import React from 'react';
import {BoardType} from '../API/types';
import {fetchingBoards} from '../API/API';
import Board from '../Board/Board';
import {useFocusEffect} from '@react-navigation/native';

const Boards = ({navigation}: {navigation: any}): React.JSX.Element => {
  const [boards, setBoards] = React.useState<BoardType[]>([]);

  React.useEffect(() => {
    fetchingBoards(handleData);
  }, []);

  const handleData = (data: BoardType[]): void => {
    setBoards(data);
  };

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('#0C66E4');
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('dark-content');
      };
    }, []),
  );

  return (
    <>
      <ScrollView>
        <Box>
          {boards.map(board => (
            <Board key={board.id} board={board} navigation={navigation} />
          ))}
        </Box>
      </ScrollView>
    </>
  );
};

export default Boards;
