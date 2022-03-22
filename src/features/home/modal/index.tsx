import React from 'react';
import ReactDOM from 'react-dom';
import { ModalForwardRef, ModalProps, ModalRef } from './types';

import styles from './styles.module.less';

function Modal(props: ModalProps, ref: ModalRef) {
  const [open, setOpen] = React.useState(false);

  const openHandler = React.useCallback(() => {
    setOpen(true);
  }, [open]);

  const closeHandler = React.useCallback(() => {
    setOpen(false);
  }, [open]);

  React.useImperativeHandle(ref, () => ({
    open: openHandler,
    close: closeHandler
  }));

  if (!open) return null;
  return ReactDOM.createPortal(
    <div className={styles['root']}>
      <div className={styles['content']}>{props.children}</div>
    </div>,
    document.body
  );
}

const ModalInfo = React.forwardRef<ModalForwardRef, ModalProps>(Modal);

export default ModalInfo;
