import React from 'react';
import { HomePageProps } from './types';
import styles from './styles.module.less';
import Filter from './filter';
import AnimeListProvider from './context';

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
        </div>
        {/* <div>
        {props.data.list.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.attributes.posterImage.small} />
            </div>
          );
        })}
      </div> */}
      </div>
    </AnimeListProvider>
  );
}
