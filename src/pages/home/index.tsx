/* eslint-disable react/react-in-jsx-scope */
import type { GetServerSideProps, NextPage } from 'next';

import HomePage from '../../features/home';
import { HomePageProps } from '../../features/home/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.username;

  return {
    props: {
      username
    }
  };
};

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  return <HomePage {...props} />;
};

export default Home;
