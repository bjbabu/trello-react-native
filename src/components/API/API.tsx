/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import {BoardType, GetCardType, GetListType, PostListType} from './types';

type handleBoardDataFunction = (data: BoardType[]) => void;
type handleListsDataFunction = (data: GetListType[]) => void;
type handleGetCardsDataFunction = (data: GetCardType[]) => void;

export const fetchingBoards = (handleData: handleBoardDataFunction) => {
  axios
    .get<BoardType[]>(
      'https://api.trello.com/1/members/6597aa01d67bfb4269b27c04/boards?key=b23160e2a444b73f7e80a11836f7d23a&token=ATTAb0ba4d05544f9a6fd6851bf310b28b00f9d2cda8b3fb859e2e20b46e3644361bCB58EAF7',
    )
    .then(res => {
      handleData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchListsOnBoard = (
  boardId: string,
  handleData: handleListsDataFunction,
) => {
  axios
    .get<GetListType[]>(
      `https://api.trello.com/1/boards/${boardId}/lists?key=b23160e2a444b73f7e80a11836f7d23a&token=ATTAb0ba4d05544f9a6fd6851bf310b28b00f9d2cda8b3fb859e2e20b46e3644361bCB58EAF7`,
    )
    .then(res => {
      handleData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const createListOnBoard = (
  boardId: string,
  newListName: string,
  setHandleRender: React.Dispatch<React.SetStateAction<boolean>>,
  handleRender: boolean,
) => {
  axios
    .post(
      `https://api.trello.com/1/lists?name=${newListName}&idBoard=${boardId}&key=b23160e2a444b73f7e80a11836f7d23a&token=ATTAb0ba4d05544f9a6fd6851bf310b28b00f9d2cda8b3fb859e2e20b46e3644361bCB58EAF7`,
    )
    .then(res => {
      setHandleRender(!handleRender);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCardsOnList = (
  listId: string,
  handleData: handleGetCardsDataFunction,
) => {
  axios
    .get(
      `https://api.trello.com/1/lists/${listId}/cards?key=b23160e2a444b73f7e80a11836f7d23a&token=ATTAb0ba4d05544f9a6fd6851bf310b28b00f9d2cda8b3fb859e2e20b46e3644361bCB58EAF7`,
    )
    .then(res => {
      handleData(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const creatingCardsInAList = (
  listId: string,
  cardName: string,
  handleRender: boolean,
  setHandleRender: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const data = {
    idList: listId,
    name: cardName,
    key: 'b23160e2a444b73f7e80a11836f7d23a',
    token:
      'ATTAb0ba4d05544f9a6fd6851bf310b28b00f9d2cda8b3fb859e2e20b46e3644361bCB58EAF7',
  };

  axios
    .post('https://api.trello.com/1/cards', data)
    .then(res => {
      setHandleRender(!handleRender);
    })
    .catch(err => {
      console.log(err);
    });
};
