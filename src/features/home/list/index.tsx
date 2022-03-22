import React from 'react';
import AnimeItem from '../anime-item';
import { useAnimeListProvider } from '../context';
import styles from '../styles.module.less';
import { Props } from './types';

export default function List(props: Props) {
  const { list, setList, listByFilter } = useAnimeListProvider();

  React.useEffect(() => {
    setList(props.list);
  }, []);

  if (listByFilter.length > 0) return null;

  return (
    <div className={styles['list-root']}>
      <div className={styles['list-wrapper']} role="list">
        {list.map((item, index) => {
          return <AnimeItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
