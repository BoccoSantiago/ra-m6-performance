import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  limit: 10,
  currentPage: 1,
  sortKey: 'id',
  sortOrder: 'asc',
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_LIMIT: 'SET_LIMIT',
  SET_SORT_ORDER: 'SET_ORDER',
  SET_SORT_KEY: 'SET_SORT_KEY',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })
    case Actions.SET_LIMIT:
      return createNextState(state, (draft) => {
        draft.limit = action.payload
      })

    case Actions.SET_CURRENTPAGE:
      return createNextState(state, (draft) => {
        draft.currentPage = action.payload
      })
    case Actions.SET_SORT:
      return createNextState(state, (draft) => {
        draft.currentPage = action.payload
      })
    case Actions.SET_SORT_KEY:
      return createNextState(state, (draft) => {
        draft.currentPage = action.payload
      })

    default:
      return state
  }
}
