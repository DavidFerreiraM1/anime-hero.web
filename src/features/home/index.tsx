import React from 'react';
import { HomePageProps } from './types';

export default function Home(props: HomePageProps) {
  return (
    <div>
      <h1>Olá, {props.username}</h1>
    </div>
  );
}
