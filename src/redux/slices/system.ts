import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enterFullScreen, exitFullScreen } from "~/utils";

export const systemSlice = createSlice({
  name: "system",
  initialState: {
    dark: false,
    volume: 100,
    brightness: 80,
    wifi: true,
    bluetooth: true,
    airdrop: true,
    fullscreen: false
  },
  reducers: {
    toggleDark: (state: { dark: any; }, action: PayloadAction<boolean>) => {
      state.dark = action.payload;

      if (action.payload) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    },
    setVolume: (state: { volume: any; }, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setBrightness: (state: { brightness: any; }, action: PayloadAction<number>) => {
      state.brightness = action.payload;
    },
    toggleWIFI: (state: { wifi: any; }, action: PayloadAction<boolean>) => {
      state.wifi = action.payload;
    },
    toggleBleutooth: (state: { bluetooth: any; }, action: PayloadAction<boolean>) => {
      state.bluetooth = action.payload;
    },
    toggleAirdrop: (state: { airdrop: any; }, action: PayloadAction<boolean>) => {
      state.airdrop = action.payload;
    },
    toggleFullScreen: (state: { fullscreen: any; }, action: PayloadAction<boolean>) => {
      action.payload ? enterFullScreen() : exitFullScreen();
      state.fullscreen = action.payload;
    }
  }
});

export const {
  toggleDark,
  setVolume,
  setBrightness,
  toggleWIFI,
  toggleBleutooth,
  toggleAirdrop,
  toggleFullScreen
} = systemSlice.actions;

export default systemSlice.reducer;
