import * as types from './../actions/index';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GETTING_SMURFS :
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case types.GETTING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
      }
    case types.GETTING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }

    case types.ADDING_SMURFS:
      return {
        ...state,
        addingSmurf: true,
      }
    case types.ADDING_SMURFS_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
      }
    case types.ADDING_SMURFS_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      }

    case types.DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true,
      }
    case types.DELETING_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
      }
    case types.DELETING_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload,
      }
      
    default:
      return state;
  }
}

export default smurfReducer