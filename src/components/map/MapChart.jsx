import React from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import states from '../../data/states';

const MapChart = ({ plantDetail }) => {

  if(!plantDetail.native_distributions?.length) return null;

  return (
    <ComposableMap>
      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json">
        {({ geographies }) => 
          geographies.map((geo) => {

            const nativeDist = plantDetail.native_distributions.find((s) => s.name === geo.properties.name || (states.includes(s.name) && geo.properties.name === 'United States of America'));

            const introDist = plantDetail.intro_distributions?.find((s) => s.name === geo.properties.name || (states.includes(s.name) && geo.properties.name === 'United States of America'));

            return (
              <Geography 
                key={geo.rsmkey} 
                geography={geo} 
                fill={nativeDist ? '#214044' : introDist ? '#EA7B7B' : '#000000'} />
            );
          })}
      </Geographies>
    </ComposableMap>
  );
};

MapChart.propTypes = {
  plantDetail: PropTypes.object.isRequired
};

export default MapChart;
