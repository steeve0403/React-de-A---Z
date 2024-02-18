import {configureStore} from "@reduxjs/toolkit";
import counter from "./features/counter.js";
import fruits from "./features/fruits.js"
import fruitsCart from "./features/fruitsCart.js";
import {logger} from "redux-logger/src";
import users from "./features/users.js";
import chrono from "./features/chrono.js";

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitsCart,
        users,
        chrono,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().
    concat(logger)
})

// function customMiddleware(store) {
//     return function (next){
//         return function (action){
//             // console.log(store.getState())
//             // console.log(next)
//             // console.log(action)
//             next({
//                 type: "fruitsCart/addOne",
//                 payload:{
//                     name: "Mango",
//                     url: "/images/mango.jpg",
//                     price: 999,
//                     id: 65237894
//                 },
//             })
//         }
//     }
// }
