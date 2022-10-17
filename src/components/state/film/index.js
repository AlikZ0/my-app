// Initial State
import {profileActions} from "./actions";

const initialState = {
 film:""
}


// Current Reducer (Profile)
/**
 * @state - current reducer initial State (by default initialState)
 *
 * @action  - object {type, payload}
 *    @type - created Actions name,
 *    @payload  - changed data from project
 *
 *  Reducer  work with switch case
 *  switch (action.type)  by default return main state
 * **/

export const Film = (state = initialState, action) => {
 
  switch (action.type) {
    case profileActions.MANAGE_LIST_INFO: {
    
      return {...state,film :action.payload}
    }

    default: {
     
      return state
    }
  }

}


/**
 * 1. Create InitialState for  State  Management
 *    all in Project in different reducers
 * 2. Create Actions for different reducers (Actions:name for functions)
 * 3. Create Reducers using Actions
 * **/






