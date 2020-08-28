import React from 'react';
import { useMapLegendStyles } from '../../hooks/mapLegendHooks';

export default function MapLegend() {
  const classes = useMapLegendStyles();

  return (
    <div>
      <h4>Map Legend:</h4>
      <section className={classes.native}>
      Native Plants
      </section>
      <section className={classes.introduced}>
      Introduced Plants
      </section>
    </div>
  );
}
