import { AnimeDataType } from '../types';

export type ModalRef = React.Ref<ModalForwardRef>;
export type ModalProps = WithChildrenProps;

export interface WithChildrenProps {
  id?: string;
  children?: React.ReactFragment;
}

export interface ModalForwardRef {
  open(): void;
  close(): void;
}

export interface ModalContentProps {
  data: AnimeDataType;
  onClose(): void;
}
