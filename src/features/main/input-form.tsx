import React from 'react';
import { Button } from 'antd';
import useRouter from 'next/router';

import styles from './main.module.less';

export default function InputForm() {
  const [username, setUsername] = React.useState('');

  const usernameChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = ev.target;
      setUsername(value);
    },
    [username]
  );

  const onClickNextPage = React.useCallback(() => {
    useRouter.push(
      {
        pathname: '/home',
        query: {
          username: username
        }
      },
      '/home'
    );
  }, [username]);

  return (
    <div className={styles['input-name-root']}>
      <div className={styles['input-root-content']}>
        <label htmlFor="input-name" className={styles['label-root']}>
          <span className={styles['label-1']}>Olá, nos diga seu </span>
          <span className={styles['label-2']}> Nome</span>
        </label>
        <div className={styles['input-root']}>
          <input
            id="input-name"
            name="username"
            placeholder="Escreva aqui"
            value={username}
            onChange={usernameChange}
          />
        </div>
        <div className={styles['bottom-root']}>
          <div className={styles['bottom-content']}>
            <Button size="large" type="primary" block onClick={onClickNextPage}>
              Prosseguir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
