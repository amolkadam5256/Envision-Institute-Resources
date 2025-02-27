import { createStore } from "redux";
import counterReduer from "./reducers";

const store = createStore(counterReduer);

export default store;