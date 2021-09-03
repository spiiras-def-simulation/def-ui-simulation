import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/client';

import MissionProblemsList from '../MissionProblemsList';

import {
  GET_MISSION_PROBLEMS,
  SUBCRIBE_CHANGE_UNITS_STATUS,
  SET_UNITS_MANUAL_CONTROL,
  SET_UNIT_MANUAL_CONTROL
} from './requests';

const mapProblems = {
  LOST: 'LOST'
};

const MissionProblemsListWithData = ({ id, stylization }) => {
  const { subscribeToMore, ...result } = useQuery(GET_MISSION_PROBLEMS, { variables: { id } });
  const [setUnitsManualControl] = useMutation(SET_UNITS_MANUAL_CONTROL);
  const [setUnitManualControl] = useMutation(SET_UNIT_MANUAL_CONTROL);

  const { units = [] } = (result.data && result.data.mission) || {};
  const unitsProblems = useMemo(() => units.filter(({ status }) => !!mapProblems[status]), [units]);

  if (result.loading) return 'Загружается...';
  if (result.error) return 'Ошибка загрузки';

  return (
    <MissionProblemsList
      units={unitsProblems}
      setUnitsControl={setUnitsManualControl}
      setUnitControl={setUnitManualControl}
      stylization={stylization}
      subToUpdate={() =>
        subscribeToMore({
          document: SUBCRIBE_CHANGE_UNITS_STATUS,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { units: updates } = subscriptionData.data;
            return {
              mission: {
                ...prev.mission,
                units: prev.mission.units.map(unit =>
                  updates.find(updated => updated.id === unit.id)
                )
              }
            };
          }
        })
      }
    />
  );
};

MissionProblemsListWithData.propTypes = {
  id: PropTypes.string.isRequired,
  stylization: PropTypes.string
};

MissionProblemsListWithData.defaultProps = {
  stylization: ''
};

export default MissionProblemsListWithData;
