import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type { HomeCategory } from '../../types/homeDataTypes';
import { api } from '../../Config/Api';

const API_URL = '/admin';

export const updateHomeCategory = createAsyncThunk<HomeCategory, { id: number; data: HomeCategory }>(
  'homeCategory/updateHomeCategory',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_URL}/home-category/${id}`, data);
      console.log("category updated ",response)
      return response.data;
    } catch (error: any) {
        console.log("errror ",error)
      if (error.response && error.response.data) {
        
        return rejectWithValue(error.response.data);  // Return error response data if available
      } else {
        return rejectWithValue('An error occurred while updating the category.');
      }
    }
  }
);

export const fetchHomeCategories = createAsyncThunk<HomeCategory[]>(
  'homeCategory/fetchHomeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/home-category`);
      console.log(" categories ",response.data)
      return response.data;
    } catch (error:any) {
      console.log("error ",error.response)
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch categories');
    }
  }
);

interface HomeCategoryState {
  categories: HomeCategory[];
  loading: boolean;
  error: string | null;
  categoryUpdated:boolean;
}

const initialState: HomeCategoryState = {
  categories: [],
  loading: false,
  error: null,
  categoryUpdated:false,
};

// Create the slice
const homeCategorySlice = createSlice({
  name: 'homeCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state for updateHomeCategory
    builder.addCase(updateHomeCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.categoryUpdated = false;
    });

    // Handle the fulfilled state for updateHomeCategory
    builder.addCase(updateHomeCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryUpdated = true;  // Set categoryUpdated flag to true
      // Find the category by ID and update it in the state
      const index = state.categories.findIndex((category) => category.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      } else {
        state.categories.push(action.payload);  // If the category doesn't exist, add it
      }
    });

    // Handle the rejected state for updateHomeCategory
    builder.addCase(updateHomeCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // fetch home category
    builder.addCase(fetchHomeCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.categoryUpdated = false;  // Reset categoryUpdated flag to false
    })
    .addCase(fetchHomeCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    })
    .addCase(fetchHomeCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

// Export the reducer to be used in the store
export default homeCategorySlice.reducer;
