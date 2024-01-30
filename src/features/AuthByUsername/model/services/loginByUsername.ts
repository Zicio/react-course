// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchPokemonByName = createAsyncThunk<Pokemon, string>(
//   'login/loginByUsername',
//   async (name, { rejectWithValue }) => {
//     const response = await fetch(`https://localhost:8000`);
//     const data = await response.json();
//     if (response.status < 200 || response.status >= 300) {
//       return rejectWithValue(data);
//     }
//     return data;
//   },
// ); // TODO
