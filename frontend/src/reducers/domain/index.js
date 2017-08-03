import * as ActionTypes from "../../constants/action-types";
import initialState from "../initial-state";
import { toggleTable, toggleDimension, toggleRow } from "./toggling";
import fetchEntities from "./fetching";

export default function domainReducer(state = initialState.get("domain"), action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_TABLE: return toggleTable(state, action.tableId);
        case ActionTypes.TOGGLE_DIMENSION: return toggleDimension(state, action.dimensionId);
        case ActionTypes.TOGGLE_ROW: return toggleRow(state, action.rowId);     
        case ActionTypes.FETCH_ENTITIES_SUCCESS: return fetchEntities(state, action.response);           
        case ActionTypes.FETCH_ENTITIES_ERROR:
        case ActionTypes.FETCH_ENTITIES_REQUEST:
        default:
            return state;
    }
}