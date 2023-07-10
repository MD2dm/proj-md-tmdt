import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { userDropdown } from "./user-dropdown/userDropdown";


const reducer = combineReducers({
    // clickout: userDropdown
});
const store = configureStore({
    reducer,
})


export default store;