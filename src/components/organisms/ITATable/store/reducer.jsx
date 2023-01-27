import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  limit: 10,
  currentPage: 1,
  sortColumn: '',
  sortDirection: 'asc',
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_LIMIT: 'SET_LIMIT',
  SET_SORT_DIRECTION: 'SET_SORT_DIRECTION',
  SET_SORT_COLUMN: 'SET_SORT_COLUMN',
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
    case Actions.SET_SORT_COLUMN:
      return createNextState(state, (draft) => {
        draft.sortColumn = action.payload
      })
    case Actions.SET_SORT_DIRECTION:
      return createNextState(state, (draft) => {
        draft.sortDirection = action.payload
      })

    default:
      return state
  }
}
