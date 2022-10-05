import { busData } from "../components/data/Data";

import { createSlice } from "@reduxjs/toolkit";

export const seatsSlice = createSlice({
  name: "seats",
  initialState: {
    selectedBusId: "0",
    viewSeats: false,
    selectedBusData: [],
    selectedSeats: [],
    passengerData: [],
    bookingDetails: [],
  },

  reducers: {
    setViewSeatsState: (state) => {
      state.viewSeats = !state.viewSeats;
    },
    setSelectedBusId: (state, action) => {
      state.selectedBusId = action.payload;
    },
    addSelectedBusData: (state, action) => {
      const selectedBus = busData.filter(
        (items) => items.busId === state.selectedBusId
      );

      console.log(selectedBus);

      selectedBus.map((items) =>
        state.selectedBusData.push(action.payload, items)
      );
    },
    removeSelectedBusData: (state) => {
      state.selectedBusData = [];
    },
    addSelectedSeats: (state, action) => {
      if (state.selectedSeats.includes(action.payload)) {
        state.selectedSeats = state.selectedSeats.filter(
          (id) => id !== action.payload
        );
      } else {
        state.selectedSeats.push(action.payload);
      }
    },
    addPassengerData: (state, action) => {
      state.passengerData = action.payload;
    },
    addBookingDetails: (state) => {
      const busData = state.selectedBusData.map((items) => items);
      busData.map((items1) => state.bookingDetails.push(items1));
      state.bookingDetails.push(state.selectedSeats, state.passengerData);
    },
    removeBookingDetails: (state) => {
      state.selectedBusId = "0";
      state.viewSeats = false;
      state.selectedBusData = [];
      state.selectedSeats = [];
      state.passengerData = [];
    },
  },
});

export const {
  setViewSeatsState,
  setSelectedBusId,
  addSelectedBusData,
  removeSelectedBusData,
  addSelectedSeats,
  addPassengerData,
  addBookingDetails,
  removeBookingDetails,
} = seatsSlice.actions;

export const viewSeats = (state) => state.seats.viewSeats;
export const selectedBusId = (state) => state.seats.selectedBusId;
export const selectedBusData = (state) => state.seats.selectedBusData;
export const selectedSeats = (state) => state.seats.selectedSeats;
export const passengerData = (state) => state.seats.passengerData;
export const bookingDetails = (state) => state.seats.bookingDetails;

export default seatsSlice.reducer;
