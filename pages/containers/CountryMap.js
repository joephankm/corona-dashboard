import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Map from '../components/Map/Map';

import styles from '../../styles/Home.module.css';

const CountryMap = ({ allCountryData }) => {
  const markers = useMemo(
    () =>
      (allCountryData || [])
        .filter((data) => data.countryInfo._id)
        .map((data) => ({
          key: data.countryInfo._id,
          latitude: data.countryInfo.lat,
          longitude: data.countryInfo.long,
          popup: (
            <div className={styles.statistics}>
              <header>
                <img src={data.countryInfo.flag} alt={data.country} />
                <span>{data.country}</span>
              </header>
              <p>
                <strong>Confirmed: </strong>
                {data.active}
              </p>
              <p>
                <strong>Death: </strong>
                {data.deaths}
              </p>
              <p>
                <strong>Recovered: </strong>
                {data.recovered}
              </p>
              <p>
                <strong>Last Updated: </strong>
                {moment(data.updated).format('MMM Do, YYYY, h:mmAA')}
              </p>
            </div>
          ),
          render: <div className={styles.marker}>{data.cases}</div>,
        })),
    [allCountryData]
  );

  return <Map markers={markers} />;
};

CountryMap.propTypes = {
  allCountryData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CountryMap;
