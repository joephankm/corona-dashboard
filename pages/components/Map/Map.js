import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';

import Marker from './Marker';

import { MAPBOX_TOKEN } from '../../constants/mapboxConfig';

const DEFAULT_VIEW_PORT = {
  width: '100%',
  height: '100%',
  latitude: 0,
  longitude: 0,
  zoom: 0,
};

const Map = ({ markers }) => {
  const [viewport, setViewport] = useState(DEFAULT_VIEW_PORT);
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={setViewport}
    >
      {(markers || []).map((marker) => (
        <Marker
          latitude={marker.latitude}
          longitude={marker.longitude}
          key={marker.key}
          popup={marker.popup}
          render={marker.render}
          activeKey={marker.key}
          showPopup={activeMarker === marker.key}
          setActiveMarker={setActiveMarker}
        />
      ))}
    </ReactMapGL>
  );
};

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Map;
