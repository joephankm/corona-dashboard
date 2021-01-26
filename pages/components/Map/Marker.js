import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Marker as MapboxMarker, Popup } from 'react-map-gl';

const Marker = ({
  activeKey,
  latitude,
  longitude,
  popup,
  render,
  showPopup,
  setActiveMarker,
}) => {
  const onClick = useCallback(() => popup && setActiveMarker(activeKey), [popup]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <span onClick={onClick}>
      <MapboxMarker latitude={latitude} longitude={longitude}>
        {render}
      </MapboxMarker>
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          onClose={() => setActiveMarker(null)}
          offsetLeft={20}
          offsetTop={-10}
          anchor="bottom"
        >
          {popup}
        </Popup>
      )}
    </span>
  );
};

Marker.propTypes = {
  activeKey: PropTypes.any.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  popup: PropTypes.any,
  render: PropTypes.any,
  showPopup: PropTypes.bool,
  setActiveMarker: PropTypes.func,
};

Marker.defaultProps = {
  popup: null,
  render: null,
  showPopup: false,
  setActiveMarker: () => {},
};

export default Marker;
