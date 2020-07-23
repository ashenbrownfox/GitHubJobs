import {useReducer} from 'react'
import axios from 'axios'

const Actions = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}
const base = "https://jobs.github.com/positions.json"
function reducer(state,action){
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
          return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
          return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
          return { ...state, loading: false, error: action.payload.error, jobs: [] }
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
          return { ...state, hasNextPage: action.payload.hasNextPage }
        default:
          return state
      }
}

export default function useFetchJobs(params,page){
    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true})
    
    dispatch({type:'hello', payload: {x:3}})
    return{
        jobs: [4,5,6,7,8,9],
        loading: false,
        error: false
    }
}