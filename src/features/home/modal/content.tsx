import React from 'react';
import { Button } from 'antd';
import styles from './styles.module.less';
import { ModalContentProps } from './types';

export default function Content(props: ModalContentProps) {
  const renderCoverImage = React.useCallback(() => {
    const renderCloseBtnArea = () => {
      return (
        <div className={styles['close-modal']}>
          <div>
            <Button shape="circle" onClick={props.onClose}>
              <span className="material-icons">close</span>
            </Button>
          </div>
        </div>
      );
    };

    if (!props.data.attributes.coverImage) {
      return renderCloseBtnArea();
    }
    return (
      <>
        {renderCloseBtnArea()}
        <img alt="cover-image" src={props.data.attributes.coverImage.small} />
      </>
    );
  }, [props.data, props.onClose]);

  if (!props.data) return null;

  return (
    <div className={styles['box-detail']}>
      <div className={styles['banner-root']}>{renderCoverImage()}</div>
      <div className={styles['info-root']}>
        <div className={styles['info-content']}>
          <span>Título</span>
          <p>
            {props.data.attributes.titles.en
              ? props.data.attributes.titles.en
              : 'Não informado'}
          </p>
        </div>
        <div className={styles['info-content']}>
          <span>Descrição</span>
          <p>{props.data.attributes.description}</p>
        </div>
      </div>
    </div>
  );
}
