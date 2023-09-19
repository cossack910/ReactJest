import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const sleep = (msec: number) => {
  const start: number = new Date().getTime();
  while (new Date().getTime() - start < msec);
};

export const fetchDummy = createAsyncThunk<number, number>(
  "fetch/dummy",
  async (num: number) => {
    await sleep(2000);
    if (!num) {
      throw new Error("エラーメッセージ");
    }
    return num;
  }
);

export const fetchJSON = createAsyncThunk<string>("fetch/api", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  const { username } = res.data;
  return username;
});

interface CounterState {
  mode: number;
  value: number;
  username: string;
}

const initialState: CounterState = {
  mode: 0,
  value: 0,
  username: "",
};

const customCounterSlice = createSlice({
  name: "customCounter",
  initialState,
  reducers: {
    increment: (state) => {
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 10000;
          break;
        default:
          break;
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload;
          break;
        case 1:
          state.value += 100 * action.payload;
          break;
        case 2:
          state.value += 10000 * action.payload;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummy.fulfilled, (state, action) => {
      state.value = 100 + action.payload;
    });
    builder.addCase(fetchDummy.rejected, (state, action) => {
      state.value = 100 - (action.payload as number);
    });
    builder.addCase(fetchJSON.fulfilled, (state, action) => {
      state.username = action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount } =
  customCounterSlice.actions;

export const selectCount = (state: RootState) => state.customCounter.value;
export const selectUsername = (state: RootState) =>
  state.customCounter.username;

export default customCounterSlice.reducer;
