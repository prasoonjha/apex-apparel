import { createSelector } from "reselect";

const selectUser = (state) => state.user; //inputSelector

//outputselectors
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
