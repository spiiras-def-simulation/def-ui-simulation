import { useEffect } from 'react';
import Tangram from 'tangram';
import { useLeaflet } from 'react-leaflet';
import { createElementHook } from '@react-leaflet/core';

const useElementHook = createElementHook(
  (_, context) => ({
    instance: Tangram.leafletLayer({
      scene: '/mapStyles/style.yaml',
      attribution:
        '<a href="https://github.com/tangrams/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://nextzen.org/" target="_blank">Nextzen</a>'
    }),
    context
  }),
  instance => instance
);

const HeightMapLayer = props => {
  const context = useLeaflet();
  const elementRef = useElementHook(props, context);

  useEffect(() => {
    const { instance } = elementRef.current;
    const container = context.layerContainer || context.map;
    container.addLayer(instance);

    return () => {
      container.removeLayer(instance);
    };
  }, [context, elementRef]);

  return null;
};

export default HeightMapLayer;
