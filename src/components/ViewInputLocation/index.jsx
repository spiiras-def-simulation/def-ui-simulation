import React from 'react';

import ViewMap from '../ViewMap';
import ReturnViewControl from '../ReturnViewControl';
import InputLocationControl from '../InputLocationControl';
import DateStatus from '../DateStatus';

const ViewInputLocation = () => {
  return (
    <ViewMap>
      <ReturnViewControl position="topleft" stylization="modal-theme" />
      <InputLocationControl position="topleft" stylization="modal-theme" />
      <DateStatus position="topright" />
    </ViewMap>
  );
};

export default ViewInputLocation;
