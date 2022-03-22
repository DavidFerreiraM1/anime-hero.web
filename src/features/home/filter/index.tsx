import React from 'react';
import { useAnimeListProvider } from '../context';
import styles from './styles.module.less';

export default function Filter() {
  const { inputTextFilter, inputTextFilterHandler } = useAnimeListProvider();

  const changeValue = React.useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      inputTextFilterHandler(target.value);
    },
    [inputTextFilter]
  );

  const onClickInputReset = React.useCallback(() => {
    if (inputTextFilter !== '') {
      inputTextFilterHandler('');
    }
  }, [inputTextFilter]);

  const inputResetHandler = React.useCallback(() => {
    const btnDisable = () => !inputTextFilter;

    const contentStyle = () => {
      return !inputTextFilter
        ? `material-icons ${styles['disabled-span']}`
        : 'material-icons';
    };

    return {
      disable: btnDisable(),
      iconColorStyle: contentStyle()
    };
  }, [inputTextFilter]);

  return (
    <div className={styles['root']}>
      <div className={styles['content']}>
        <div className={styles['search-icon']}>
          <span className="material-icons">search</span>
        </div>
        <div className={styles['input-text']}>
          <input
            data-testid="text-input-filter"
            id="text-input-filter"
            placeholder="Pesquise seu anime pelo nome"
            value={inputTextFilter}
            onChange={changeValue}
            autoCorrect="off"
            autoComplete="off"
          />
        </div>
        <div className={styles['clear-input-icon']}>
          <button
            data-test="reset-input-filter"
            disabled={inputResetHandler().disable}
            onClick={onClickInputReset}
          >
            <span className={inputResetHandler().iconColorStyle}>close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
