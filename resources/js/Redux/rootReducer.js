import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices
import themeReducer from "./slices/theme";
// ----------------------------------------------------------------------

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};

const themePersist = {
    key: "theme",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};

const rootReducer = combineReducers({
    theme: persistReducer(themePersist, themeReducer),
});

export { rootPersistConfig, rootReducer };
