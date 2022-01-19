



import { useState, useContext, useEffect } from "react";
import authContext from "./authContext";
import {auth} from '../firebase/firebase'





    // Function that takes the context

    export function useAuth () {

        return useContext(authContext);

           
    }

function AuthProvider(props) {




    // check for current user or not

     const [currentuser , setCurrentuser]  = useState();

    //  Function signup that takes email and password
    function signup (email , password) {

           return auth.createUserWithEmailAndPassword(email , password);

          
    }
    

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((user) => {
                
               setCurrentuser(user);
         })

         return unsubscribe;
    }, []);



    //  The value which will be provided to the the provider

      const value = {
             currentuser,
             signup,
      }




  return  (
    <div>

        <authContext.Provider value={value}>

            {props.children}

        </authContext.Provider>


    </div>

  )
  

}

export default AuthProvider;
