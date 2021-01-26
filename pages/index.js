import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import WorldStatistics from './containers/WorldStatistics';
import CountryMap from './containers/CountryMap';

// ACTIONS
import { fetchWorldData, fetchAllCountryData } from './api/corona';

import styles from '../styles/Home.module.css';

export default function Home({ worldData, allCountryData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corona Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CountryMap allCountryData={allCountryData} />
        <WorldStatistics worldData={worldData} />
      </main>
    </div>
  );
}

Home.propTypes = {
  worldData: PropTypes.object,
  allCountryData: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  worldData: [],
  allCountryData: {},
};

export async function getStaticProps() {
  // Fetch data
  const [worldData, allCountryData] = await Promise.all([
    fetchWorldData(),
    fetchAllCountryData(),
  ]);

  return {
    props: {
      worldData,
      allCountryData,
    },
  };
}
