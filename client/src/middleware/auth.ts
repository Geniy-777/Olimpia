import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authAPI } from "../app/services/auth";


export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: authAPI.endpoints.login.matchFulfilled,
  effect: async(action, listenerAPI)=>{
    listenerAPI.cancelActiveListeners()

    if(action.payload.token){
      localStorage.setItem('token', action.payload.token)
    }
  }
})