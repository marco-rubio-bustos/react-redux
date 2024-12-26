import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Nombre del slice
  initialState: { value: 0 }, // Estado inicial
  reducers: {
    increment: (state) => {
      state.value += 1; // Modificar el estado directamente (RTK usa Immer)
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // action.payload contiene el valor enviado
    },
  },
});

// Exportar las acciones
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exportar el reducer
export default counterSlice.reducer;
