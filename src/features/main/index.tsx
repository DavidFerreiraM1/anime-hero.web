import React from 'react';
import InputForm from './input-form';
import styles from './main.module.less';

export default function Main() {
  return (
    <div className={styles.root}>
      <InputForm />
    </div>
  );
}
