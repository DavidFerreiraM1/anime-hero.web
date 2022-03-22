/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '.';
import { AnimeDataType, AnimeListContextType, HomePageProps } from './types';
import ListProvider, { useAnimeListProvider } from './context';
import services from './services';
import ModalInfo from './modal';
import Content from './modal/content';
import { ModalRef } from './modal/types';
import List from './list';

const buildFetchResponseMock = (status: number, jsonData: any): any => ({
  status: status,
  json: async () => jsonData
});

const mockProps: HomePageProps = {
  data: {
    offset: 0,
    list: [
      {
        id: '1',
        type: 'anime',
        links: {
          self: ''
        },
        attributes: {
          createdAt: new Date(),
          updatedAt: new Date(),
          slug: '',
          synopsis: '',
          description: 'some-description-to-render',
          coverImageTopOffset: 0,
          ageRattingGuide: '',
          titles: {
            en: 'some-anime-to-render',
            en_jp: '',
            ja_jp: ''
          },
          posterImage: {
            tiny: '',
            large: '',
            small: '',
            medium: '',
            original: '',
            meta: {
              dimensions: {
                tiny: {
                  width: 0,
                  height: 0
                },
                large: {
                  width: 0,
                  height: 0
                },
                small: {
                  width: 0,
                  height: 0
                },
                medium: {
                  width: 0,
                  height: 0
                }
              }
            }
          },
          coverImage: {
            tiny: '',
            large: '',
            small: '',
            original: '',
            meta: {
              dimensions: {
                tiny: {
                  width: 0,
                  height: 0
                },
                large: {
                  width: 0,
                  height: 0
                },
                small: {
                  width: 0,
                  height: 0
                }
              }
            }
          }
        }
      }
    ]
  }
};

describe('switch de teste da home', () => {
  it('Deve exibir o modal com detalhes de um item selecionado corretamente', () => {
    let modalOpenned = true;
    const modalValueHandler = (val: boolean) => {
      modalOpenned = val;
    };

    const mockModalOpennedState: any = () => [modalOpenned, modalValueHandler];
    jest.spyOn(React, 'useState').mockImplementation(mockModalOpennedState);

    const Component = () => {
      const modalRef: ModalRef = React.useRef<any>();

      const onOpen = () => {
        modalRef.current?.open();
      };

      const onClose = () => {
        modalRef.current?.close();
      };

      return (
        <>
          <button data-testid="open-modal" onClick={onOpen}>
            open modal
          </button>
          <ModalInfo ref={modalRef}>
            <Content data={mockProps.data.list[0]} onClose={onClose} />
          </ModalInfo>
        </>
      );
    };

    const { getByTestId, getByText } = render(<Component />);
    fireEvent.click(getByTestId('open-modal'));
    const el = getByTestId('description');
    expect(el).toHaveTextContent('some-description-to-render');
    expect(modalOpenned).toBeTruthy();
  });
});
