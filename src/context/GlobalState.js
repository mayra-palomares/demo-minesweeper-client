import React, {useReducer} from 'react';
import AppReducer from './AppReducer';
import { GlobalContext }  from './GlobalContext';

//Initial State
const initialState = {
    user: {},
    gameHistoryList: [],
    gameHistory: {}
};

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}