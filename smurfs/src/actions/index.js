import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GETTING_SMURFS_SUCCESS = 'GETTING_SMURFS_SUCCESS';
export const GETTING_SMURFS_FAILURE = 'GETTING_SMURFS_FAILURE';

export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDING_SMURFS_SUCCESS = 'ADDING_SMURFS_SUCCESS';
export const ADDING_SMURFS_FAILURE = 'ADDING_SMURFS_FAILURE';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  console.log("WE'RE GETTING YOUR SMURFIN' SMURFS. JUST CALM DOWN!")
  dispatch({ type: GETTING_SMURFS });
  const request = axios.get(`http://localhost:3333/smurfs`);
    request.then(res => {
        console.log("HERE ARE YOUR SMURFIN' SMURFS: ", res.data)
        dispatch({ type: GETTING_SMURFS_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log("YOU'VE GONE AND SMURFED THE SMURFS TO SMURFIN' SMURF! SOMETHING'S WRONG WITH GETTING YOUR SMURFS!")
        dispatch({ type: GETTING_SMURFS_FAILURE, payload: err })
      })
    

}

export const addSmurf = (smurf) => dispatch => {
  console.log("WE'RE ADDING SMURF" , smurf);
  dispatch({ type: ADDING_SMURFS });

  const request = axios.post(`http://localhost:3333/smurfs`, smurf)
    request.then(res => {
      console.log("OUR NEW SMURF ARRAY: ", res.data)
      dispatch({ type: ADDING_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log("You gone and smurfed it all up! Something went wrong with adding your friend!")
      dispatch({ type: ADDING_SMURFS_FAILURE, payload: err})
    })
}