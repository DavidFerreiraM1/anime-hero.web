/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AnimeDataType } from './types';
import service from './services';

const Context = React.createContext(
  {} as {
    inputTextFilter: string;
    inputTextFilterHandler(val: string): void;
    setList(list: Array<AnimeDataType>): void;
    listByFilter: Array<AnimeDataType>;
    list: Array<AnimeDataType>;
  }
);

let debounceTimer: any = null;

export default function AnimeListProvider(props: {
  children: React.ReactFragment;
}) {
  // const [offsetPage, setOffsetPage] = React.useState(15);
  const [inputTextFilter, setInputTextFilter] = React.useState('');
  const [list, setList] = React.useState<Array<AnimeDataType>>([]);
  const [listByFilter, setListByFilter] = React.useState<Array<AnimeDataType>>(
    []
  );

  const inputTextFilterHandler = React.useCallback(
    (value: string) => {
      setInputTextFilter(value);
      clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        if (value) {
          service.getListByFilter(inputTextFilter).then((res) => {
            if (res.status === 200) {
              res.json().then((res) => {
                setListByFilter(res.data as Array<AnimeDataType>);
              });
            } else {
              setListByFilter([]);
            }
          });
        } else {
          setListByFilter([]);
        }
      }, 950);
    },
    [inputTextFilter, listByFilter]
  );

  const setListHandler = React.useCallback(
    (list: Array<AnimeDataType>) => {
      setList(list);
    },
    [list]
  );

  return (
    <Context.Provider
      value={{
        list,
        listByFilter,
        inputTextFilter,
        inputTextFilterHandler,
        setList: setListHandler
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useAnimeListProvider() {
  return React.useContext(Context);
}
