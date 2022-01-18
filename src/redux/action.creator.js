


// These are the action creators

import { DISPLAY_MOVIES } from "./actions"

export const Get_All = (movies) => {


    return {

           type : DISPLAY_MOVIES,
           payload : movies
    }
         
     
}

export const GET_SINGLE = (movie) => {
        

    return {
           
          type : GET_SINGLE,
          payload : movie,
    }
}