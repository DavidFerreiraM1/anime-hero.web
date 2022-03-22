/* eslint-disable react/react-in-jsx-scope */
import type { GetServerSideProps, NextPage } from 'next';
import animeService from '../features/home/services';

import HomePage from '../features/home';
import { AnimeDataType, HomePageProps } from '../features/home/types';

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await animeService.getList(24);
  const list = await response.json();
  const notFound = response.status !== 200;

  const props: HomePageProps = {
    data: {
      list: list.data as Array<AnimeDataType>,
      offset: 24
    }
  };

  return {
    props,
    notFound
  };
};

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  return <HomePage {...props} />;
};

export default Home;
