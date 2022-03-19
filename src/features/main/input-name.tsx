import React from 'react';
import { Button } from 'antd';

import styles from './main.module.less';

export default function InputName() {
  return (
    <div className={styles['input-name-root']}>
      <div className={styles['input-root-content']}>
        <label htmlFor="input-name" className={styles['label-root']}>
          <span className={styles['label-1']}>Olá, nos diga seu </span>
          <span className={styles['label-2']}> Nome</span>
        </label>
        <div className={styles['input-root']}>
          <input id="input-name" placeholder="Escreva aqui" />
        </div>
        <div className={styles['bottom-root']}>
          <div className={styles['bottom-content']}>
            <Button size="large" type="primary" block>
              Prosseguir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
