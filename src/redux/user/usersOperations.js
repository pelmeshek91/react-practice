import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://635bc8648aa87edd9151102a.mockapi.io/api/v1';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateToUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${user.id}`, user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
