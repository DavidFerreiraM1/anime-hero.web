import React from 'react';
import { AnimeDataType } from './types';

const Context = React.createContext(
  {} as {
    inputTextFilter: string;
    inputTextFilterHandler(val: string): void;
    listByFilter: Array<AnimeDataType>;
    list: Array<AnimeDataType>;
  }
);

export default function AnimeListProvider(props: {
  children: React.ReactFragment;
}) {
  const [inputTextFilter, setInputTextFilter] = React.useState('');

  const [list, setList] = React.useState<Array<AnimeDataType>>([]);
  const [listByFilter, setListByFilter] = React.useState<Array<AnimeDataType>>(
    []
  );

  const [offsetPage, setOffsetPage] = React.useState(15);

  const inputTextFilterHandler = React.useCallback(
    (value: string) => {
      setInputTextFilter(value);
    },
    [inputTextFilter]
  );

  return (
    <Context.Provider
      value={{ inputTextFilter, inputTextFilterHandler, list, listByFilter }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useAnimeListProvider() {
  return React.useContext(Context);
}
