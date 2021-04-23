import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';


export const useMinesweeper = () =>{
    const { state, dispatch } = useContext(GlobalContext);
    const API_URL = 'http://localhost:8080'
    const api = axios.create({
        baseURL: API_URL
    })
    /**
     * Get user info by username
     * @param {User} user 
     */
    const enterUser =  user => {
        return new Promise((resolve, reject) => {
            const data  = { "username" : user.username }
            api.post(`/users/enterUser`, data).then(res => {
                const user = res.data;
                dispatch({
                    type: 'SET_USER',
                    payload: user
                })
                resolve(user)
            })
            .catch(e => {
                reject("Error returning user info")
            })
        })
    }

    /**
     * Get user info
     * @returns User
     */
    const getUser = () => {
        return {...state.user};
    }

    /**
     * Get the list of game history In Progress
     * @param {String} userId 
     */
    const getGameHistoryByUserId = userId => {
        return new Promise((resolve, reject) => {
            api.get(`/gameHistory/${userId}/inProgress`).then(res => {
                const data = res.data;
                dispatch({
                    type: 'SET_GAME_HISTORY_LIST',
                    payload: data
                })
                resolve(data)
            }).catch(e => {
                reject("Error returning user history list")
            }) 
          })
    }

    /**
     * Create a new game history
     * @param {String} userId 
     * @param {Game} game 
     */
    const createGame = (userId, game) => {
        return new Promise((resolve, reject) => {
            api.post(`/gameHistory/${userId}/game`, game).then(res => {
                const data = res.data;
                dispatch({
                    type: 'SET_GAME_HISTORY',
                    payload: data
                })
        
                resolve(data)
            })
            .catch(e => {
                reject("Error creating game")
            }) 
        }) 
    }

    /**
     * Get a user game history by id
     * @param {String} userId 
     * @param {Game} game 
     */
    const getGameHistoryById = (userId, gameHistoryId) => {
        return new Promise((resolve, reject) => {
            api.get(`/gameHistory/${userId}/game/${gameHistoryId}`).then(res => {
                const data = res.data;
                dispatch({
                    type: 'SET_GAME_HISTORY',
                    payload: data
                })
        
                resolve(data)
            })
            .catch(e => {
                reject("Error creating game")
            }) 
        }) 
    }

    const getGameHistory = () => {
        return state.gameHistory
    }

    const getGameHistoryList = () => {
        return state.gameHistoryList
    }

    /**
     * Make a move in the game
     * @param {String} userId 
     * @param {Game} game 
     */
    const makeMove = (userId, gameId, move) => {
        return new Promise((resolve, reject) => {
            api.post(`/gameHistory/${userId}/game/${gameId}/move`, move).then(res => {
                const data = res.data;
                dispatch({
                    type: 'SET_GAME_HISTORY',
                    payload: data
                })
        
                resolve(data)
            })
            .catch(e => {
                reject("Error creating game")
            }) 
        }) 
    }

    return {
        enterUser,
        getUser,
        getGameHistoryByUserId,
        createGame,
        getGameHistoryById,
        makeMove,
        getGameHistory,
        getGameHistoryList
    }
}







