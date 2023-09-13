import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  user: Entities.UserEntity | null;
  token: string | null;
}

type actionType<T> = {
  data?: T;
  type: string;
};

const initialState: UserState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state[action.payload.type as keyof typeof state] = action.payload.data;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
    setUserData: (
      state,
      action: PayloadAction<actionType<Entities.UserEntity>>
    ) => {
      if (action.payload.data) state.user = action.payload.data;
    },
    setAccessToken: (state, action: PayloadAction<actionType<string>>) => {
      if (action.payload.data) state.token = action.payload.data;
    },
  },
});

export const selectUser = (state: RootState) => state.user;
export const selectUserData = (state: RootState) => state.user.user;
export const selectToken = (state: RootState) => state.user.token;

export const { loginUser, logoutUser, setUserData, setAccessToken } =
  userSlice.actions;

export default userSlice.reducer;
