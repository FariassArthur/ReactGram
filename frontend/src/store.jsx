import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import photoReducer from "./slices/photoSlice";

export const store = configureStore({
  //Contexts
  reducer: {
    auth: authReducer,
    user: userReducer,
    photo: photoReducer,
  },
});

//Na pasta services é onde fica os contexts, um arquivo para cada context criado
//slices é onde fica as ações baseadas nas requisições de serviços
