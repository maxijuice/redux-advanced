import initialState from "reducers/initial-state";
import ActionTypes from "constants/actions";
import { toggleTablesPopup, toggleDimensionsPopup } from "./switcher";

export default function PopupReducer(state = initialState.get("currentPopup"), action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_TABLES_POPUP: return toggleTablesPopup(state);
        case ActionTypes.TOGGLE_DIMENSIONS_POPUP: return toggleDimensionsPopup(state);
        default:
            return state;
    }
}