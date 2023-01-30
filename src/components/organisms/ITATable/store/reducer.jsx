/* eslint-disable no-case-declarations */
import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  limit: 10,
  currentPage: 1,
  sortColumn: null,
  sortDirection: 'asc',
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_LIMIT: 'SET_LIMIT',
  SET_SORT: 'SET_SORT',
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
      const dataArray = Object.values(state.data)
      const { sortColumn, sortDirection, sortable } = action.payload
      const sortedData = dataArray.sort((a, b) => {
        if (sortable) {
          if (sortDirection === 'asc') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1
          }
          return a[sortColumn] < b[sortColumn] ? 1 : -1
        }
        return false
      })
      return createNextState(state, (draft) => {
        draft.data = sortedData

        if (draft.sortColumn !== sortColumn) {
          draft.sortColumn = sortColumn
          draft.sortDirection = draft.sortDirection === 'asc' ? 'desc' : 'asc' // Si no le pongo este ternario al darle click a una columna por segunda vez me reordena las otras columnas y no entiendo porque.
        } else {
          draft.sortDirection = draft.sortDirection === 'asc' ? 'desc' : 'asc'
        }
      })

    default:
      return state
  }
}
