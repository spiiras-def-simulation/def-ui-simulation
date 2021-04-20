import { InMemoryCache } from '@apollo/client/cache';

// const tablesEditingStatus = makeVar(false);
// // const activeOperatorId = makeVar(null);
// // const activeOperatorRole = makeVar(null);
// // const activeRoomId = makeVar(null);
// const activeOperatorId = makeVar('1');
// const activeOperatorRole = makeVar('master');
// const activeRoomId = makeVar('1');

const cache = new InMemoryCache({
  // typePolicies: {
  //   Query: {
  //     fields: {
  //       tablesEditingStatus: { read: () => tablesEditingStatus() },
  //       activeOperatorId: { read: () => activeOperatorId() },
  //       activeOperatorRole: { read: () => activeOperatorRole() },
  //       activeRoomId: { read: () => activeRoomId() }
  //     }
  //   },
  //   Robot: {
  //     fields: {
  //       markerColor: {
  //         read: (_, options) => {
  //           return getMarkerColor(options.variables.id || options.variables.robotId) || 'grey';
  //         }
  //       }
  //     }
  //   }
  // }
});

export default cache;
