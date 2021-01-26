import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Home.module.css';

const WorldStatistics = ({ worldData }) => {
  return (
    <div className={styles['world-statistics']}>
      <table>
        <tr>
          <td>
            <div className={styles['world-statistics-content']}>
              <div className={styles['main-data']}>{worldData.tests}</div>
              <div className={styles['main-title']}>Total Tests</div>
              <div>{worldData.testsPerOneMillion}</div>
              <div className={styles['second-title']}>Per | Million</div>
            </div>
          </td>
          <td>
            <div className={styles['world-statistics-content']}>
              <div className={styles['main-data']}>{worldData.cases}</div>
              <div className={styles['main-title']}>Total Cases</div>
              <div>{worldData.casesPerOneMillion}</div>
              <div className={styles['second-title']}>Per | Million</div>
            </div>
          </td>
          <td>
            <div className={styles['world-statistics-content']}>
              <div className={styles['main-data']}>{worldData.deaths}</div>
              <div className={styles['main-title']}>Total Deaths</div>
              <div>{worldData.deathsPerOneMillion}</div>
              <div className={styles['second-title']}>Per | Million</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={styles['world-statistics-content']}>
              <div className={styles['main-data']}>{worldData.active}</div>
              <div className={styles['main-title']}>Active</div>
            </div>
          </td>
          <td>
            <div className={styles['world-statistics-content']}>
              <div className={styles['main-data']}>
                {worldData.critical}
              </div>
              <div className={styles['main-title']}>Critical</div>
            </div>
          </td>
          <td>
            <div className={styles['world-statistics-content']}>
              <div className={styles['main-data']}>{worldData.recovered}</div>
              <div className={styles['main-title']}>Recovered</div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

WorldStatistics.propTypes = {
  worldData: PropTypes.object.isRequired,
};

export default WorldStatistics;
