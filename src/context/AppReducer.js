export default(state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                 ...state,
                user: {...action.payload}
            }
        case 'SET_GAME_HISTORY_LIST':
            return {
                ...state,
                gameHistoryList: {...action.payload}
            }
        case 'SET_GAME_HISTORY':
            return {
                ...state,
                gameHistory: {...action.payload}
            }

        default:
            return state
    }
}