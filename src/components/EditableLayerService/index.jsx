import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';

import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import { CREATE_OBJECT, UPDATE_OBJECTS, REMOVE_OBJECTS } from './requests';

const EditableLayerService = ({ layer, options: { draw, edit }, children }) => {
  const [createObject] = useMutation(CREATE_OBJECT);
  const [updateObjects] = useMutation(UPDATE_OBJECTS);
  const [removeObjects] = useMutation(REMOVE_OBJECTS);

  function onCreateObject(created) {
    createObject({
      variables: {
        id: layer,
        object: created.toGeoJSON()
      }
    });
  }

  function onEditObjects(edited) {
    const objects = [];
    edited.eachLayer(object => {
      objects.push({
        id: object.options.id,
        data: object.toGeoJSON()
      });
    });
    updateObjects({
      variables: {
        id: layer,
        objects
      }
    });
  }

  function onRemoveObjects(removed) {
    const objects = [];
    removed.eachLayer(object => {
      objects.push(object.options.id);
    });
    removeObjects({
      variables: {
        id: layer,
        objects
      }
    });
  }

  function onLayerAdd({ layer: added, target: tables }) {
    if (added.options.id) {
      tables.eachLayer(table => {
        if (!table.options.id) {
          table.remove();
        }
      });
    }
  }

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

EditableLayerService.propTypes = {
  layer: PropTypes.string.isRequired,
  options: PropTypes.shape(optionsType).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired
};

export default EditableLayerService;
