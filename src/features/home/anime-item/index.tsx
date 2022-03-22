import React from 'react';
import { AnimeItemProps } from '../types';

import styles from './styles.module.less';

export default function AnimeItem(props: AnimeItemProps) {
  return (
    <div role="link" className={styles['root']}>
      <div className={styles['item-post']}>
        <img alt="anime-banner" src={props.data.attributes.posterImage.small} />
      </div>
      <div className={styles['item-title']}>
        <span className={styles['title-span']}>
          <span>Título:</span>
        </span>
        <span className={styles['title-description']}>
          {props.data.attributes.titles.en}
        </span>
      </div>
    </div>
  );
}
