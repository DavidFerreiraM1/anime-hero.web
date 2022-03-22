/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { HomePageProps } from './types';
import Filter from './filter';
import AnimeListProvider from './context';
import ListByFilter from './list-by-filter';

import styles from './styles.module.less';
import List from './list';

export default function Home(props: HomePageProps) {
  return (
    <AnimeListProvider>
      <div className={styles['container-root']}>
        <div className={styles['container-content']}>
          <div className={styles['title-root']}>
            <hgroup>
              <h1>Bem vindo ao Anime Hero</h1>
              <h3>Encontre seus animes favoritos aqui</h3>
            </hgroup>
          </div>
          <Filter />
          <ListByFilter />
          <List list={props.data.list} />
        </div>
      </div>
    </AnimeListProvider>
  );
}
