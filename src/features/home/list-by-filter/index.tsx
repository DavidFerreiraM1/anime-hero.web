import React from 'react';
import AnimeItem from '../anime-item';
import { useAnimeListProvider } from '../context';

import styles from '../styles.module.less';

export default function ListByFilter() {
  const { listByFilter } = useAnimeListProvider();

  if (listByFilter.length === 0) {
    return null;
  }

  return (
    <div className={styles['list-root']}>
      <div className={styles['list-wrapper']} role="list">
        {listByFilter.map((item, index) => {
          return <AnimeItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
