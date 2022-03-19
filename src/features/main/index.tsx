import React from 'react';
import InputName from './input-name';
import styles from './main.module.less';

export default function Main() {
  return (
    <div className={styles.root}>
      <InputName />
    </div>
  );
}
