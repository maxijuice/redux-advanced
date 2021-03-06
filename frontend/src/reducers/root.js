import { combineReducers } from 'redux-immutable';
import filterConfigReducer from "./filter-config/filter-config";
import popupReducer from "./current-popup/current-popup";
import domainReducer from "./domain/domain";
import messageReducer from "./message/message";

const rootReducer = combineReducers({
    domain: domainReducer,
    message: messageReducer,
    filterConfig: filterConfigReducer,
    currentPopup: popupReducer
});

export default function(state, action) {
    if (state.has(action.widgetId)) {
        return state.set(action.widgetId, rootReducer(state.get(action.widgetId), action))
    } else {
        return state;
    }
};