import React from 'react';
import { AnimeItemProps } from '../types';

export default function AnimeItem(props: AnimeItemProps) {
  return (
    <div role="li">
      <div>
        <img alt="anime-banner" src={props.data.attributes.slug} />
      </div>
    </div>
  );
}
