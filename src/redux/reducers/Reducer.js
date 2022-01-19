

import {DISPLAY_MOVIES} from '../actions'

const initialState = {
       id : 1,
};

const Reducer = (state = initialState , action) => {


        if(action.type === DISPLAY_MOVIES){

             return state;

        }


        return state;

     
}


export default Reducer;

