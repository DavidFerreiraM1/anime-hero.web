import React from 'react';
import { AnimeItemProps } from '../types';

import styles from './styles.module.less';

export default function AnimeItem(props: AnimeItemProps) {
  const onClick = React.useCallback(() => {
    props.onClick(props.data.id);
  }, [props.data]);

  return (
    <div role="link" className={styles['root']} onClick={onClick}>
      <div className={styles['item-post']}>
        <img alt="anime-banner" src={props.data.attributes.posterImage.small} />
      </div>
      <div className={styles['item-title']}>
        <span className={styles['title-span']}>
          <span>Título</span>
        </span>
        <span className={styles['title-description']}>
          {props.data.attributes.titles.en}
        </span>
      </div>
    </div>
  );
}
