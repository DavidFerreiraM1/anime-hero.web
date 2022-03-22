import React from 'react';
import { HomePageProps } from './types';
import styles from './styles.module.less';
import Filter from './filter';
import AnimeListProvider from './context';
import AnimeItem from './anime-item';
import { Button } from 'antd';

export default function Home(props: HomePageProps) {
  React.useEffect(() => {
    console.log(props.data.list);
  }, []);

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
          <div>
            <Filter />
          </div>
          <div className={styles['list-root']}>
            <div className={styles['list-wrapper']} role="list">
              {props.data.list.map((item, index) => {
                return <AnimeItem key={index} data={item} />;
              })}
            </div>
          </div>
          <div className={styles['bottom-list-root']}>
            <div className={styles['bottom-list']}>
              <Button type="link">Carregar mais itens</Button>
            </div>
          </div>
        </div>
      </div>
    </AnimeListProvider>
  );
}
