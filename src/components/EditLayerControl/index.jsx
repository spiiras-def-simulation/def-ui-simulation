import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import genObjectId from './objectIterator';

const EditLayerControl = ({
  options: { draw, edit },
  createObject,
  updateObjects,
  removeObjects,
  children
}) => {
  const onCreateObject = useCallback(
    created => {
      createObject({
        id: genObjectId(),
        created: true,
        data: created.toGeoJSON()
      });
    },
    [createObject]
  );

  const onEditObjects = useCallback(
    edited => {
      const objects = [];
      edited.eachLayer(object => {
        objects.push({
          id: object.options.id,
          data: object.toGeoJSON()
        });
      });
      updateObjects(objects);
    },
    [updateObjects]
  );

  const onRemoveObjects = useCallback(
    removed => {
      const objects = [];
      removed.eachLayer(object => object.options.id && objects.push(object.options.id));
      if (objects.length) {
        removeObjects(objects);
      }
    },
    [removeObjects]
  );

  const onLayerAdd = useCallback(({ layer: added, target: area }) => {
    if (added.options.id) {
      area.eachLayer(object => {
        if (!object.options.id) {
          object.remove();
        }
      });
    }
  }, []);

  return (
    <FeatureGroup onLayeradd={onLayerAdd}>
      <EditControl
        position="topright"
        draw={{ ...draw }}
        edit={{ ...edit }}
        onCreated={({ layer: createdLayer }) => onCreateObject(createdLayer)}
        onEdited={({ layers: editedLayers }) => onEditObjects(editedLayers)}
        onDeleted={({ layers: removedLayers }) => onRemoveObjects(removedLayers)}
      />
      {children}
    </FeatureGroup>
  );
};

const optionsType = {
  draw: PropTypes.object,
  edit: PropTypes.object
};

EditLayerControl.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  options: PropTypes.shape(optionsType),
  createObject: PropTypes.func,
  updateObjects: PropTypes.func,
  removeObjects: PropTypes.func
};

EditLayerControl.defaultProps = {
  options: {},
  createObject: () => {},
  updateObjects: () => {},
  removeObjects: () => {}
};

export default EditLayerControl;
