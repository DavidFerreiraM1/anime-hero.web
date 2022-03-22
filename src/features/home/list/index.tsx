/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import AnimeItem from '../anime-item';
import { useAnimeListProvider } from '../context';
import ModalInfo from '../modal';
import Content from '../modal/content';
import { ModalRef } from '../modal/types';
import styles from '../styles.module.less';
import { AnimeDataType } from '../types';
import { Props } from './types';

export default function List(props: Props) {
  const { list, setList, listByFilter } = useAnimeListProvider();
  const [itemSelected, setItemSelected] = React.useState<AnimeDataType | null>(
    null
  );

  const modalRef: ModalRef = React.useRef<any>();

  React.useEffect(() => {
    setList(props.list);
  }, []);

  const closeModal = React.useCallback(() => {
    modalRef.current?.close();
    setItemSelected(null);
  }, [itemSelected]);

  const onClickItem = React.useCallback(
    (itemId: string) => {
      const item = list.find((val) => itemId === val.id) as AnimeDataType;
      setItemSelected(item);
      modalRef.current?.open();
    },
    [itemSelected, list]
  );

  const renderModalContent = React.useCallback(() => {
    return (
      <>
        {itemSelected && <Content data={itemSelected} onClose={closeModal} />}
      </>
    );
  }, [itemSelected]);

  if (listByFilter.length > 0) return null;

  return (
    <div className={styles['list-root']}>
      <div className={styles['list-wrapper']} role="list">
        {list.map((item, index) => {
          return <AnimeItem key={index} data={item} onClick={onClickItem} />;
        })}
      </div>
      <ModalInfo ref={modalRef}>{renderModalContent()}</ModalInfo>
    </div>
  );
}
