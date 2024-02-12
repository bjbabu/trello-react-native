import {Box} from 'native-base';
import React from 'react';
import {GetCardType} from '../API/types';

const Card = ({cardData}: {cardData: GetCardType}) => {
  return (
    <Box
      padding="2"
      marginY="1"
      backgroundColor="white"
      borderRadius="md"
      shadow="2">
      {cardData.name}
    </Box>
  );
};

export default Card;
