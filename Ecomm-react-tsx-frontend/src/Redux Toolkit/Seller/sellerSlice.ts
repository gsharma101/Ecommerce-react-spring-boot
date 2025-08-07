/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../Config/Api";
import type { Seller, SellerReport } from "../../types/sellerTypes";
import type { RootState } from "../Store";

// Define the initial state type
interface SellerState {
  sellers: Seller[];
  selectedSeller: Seller | null;
  profile: Seller | null;
  loading: boolean;
  error: string | null;
  report: SellerReport | null;
  profileUpdated: boolean;
}

// Define the initial state
const initialState: SellerState = {
  sellers: [],
  selectedSeller: null,
  loading: false,
  error: null,
  profile: null,
  report: null,
  profileUpdated:false,
};

// Define the base URL for the API
const API_URL = "/sellers";

// Create async thunks for API calls
export const fetchSellerProfile = createAsyncThunk<Seller, any>(
  "sellers/fetchSellerProfile",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get<Seller>(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("fetch seller profile", response.data);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Fetch sellers error response data:",
          error.response.data
        );
        console.error(
          "Fetch sellers error response status:",
          error.response.status
        );
        console.error(
          "Fetch sellers error response headers:",
          error.response.headers
        );
        return rejectWithValue(error.message);
      } else {
        console.error("Fetch sellers error message:", error.message);
        return rejectWithValue("Failed to fetch sellers");
      }
    }
  }
);

export const fetchSellers = createAsyncThunk<Seller[], string>(
  "sellers/fetchSellers",
  async (status: string, { rejectWithValue }) => {
    try {
      const response = await api.get<Seller[]>(API_URL, {
        params: {
          status,
        },
      });
      console.log("fetch sellers", response.data);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Fetch sellers error response data:",
          error.response.data
        );
        console.error(
          "Fetch sellers error response status:",
          error.response.status
        );
        console.error(
          "Fetch sellers error response headers:",
          error.response.headers
        );
        return rejectWithValue(error.message);
      } else {
        console.error("Fetch sellers error message:", error.message);
        return rejectWithValue("Failed to fetch sellers");
      }
    }
  }
);

export const fetchSellerReport = createAsyncThunk<
  SellerReport,
  string, // JWT token type
  { rejectValue: string }
>("sellers/fetchSellerReport", async (jwt: string, { rejectWithValue }) => {
  try {
    const response = await api.get<SellerReport>(`${API_URL}/report`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Fetch seller report", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error ", error);
    if (error.response) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue("Failed to fetch seller report");
  }
});

export const fetchSellerById = createAsyncThunk<Seller, number>(
  "sellers/fetchSellerById",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get<Seller>(`${API_URL}/${id}`);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Fetch seller by ID error response data:",
          error.response.data
        );
        console.error(
          "Fetch seller by ID error response status:",
          error.response.status
        );
        console.error(
          "Fetch seller by ID error response headers:",
          error.response.headers
        );
        return rejectWithValue(error.message);
      } else {
        console.error("Fetch seller by ID error message:", error.message);
        return rejectWithValue("Failed to fetch seller");
      }
    }
  }
);

export const updateSeller = createAsyncThunk<
  Seller, any 
>(
  "sellers/updateSeller",
  async (
      seller : any,
    { rejectWithValue }
  ) => {
    console.log("seller update request ",seller)
    try {
      const response = await api.patch(`${API_URL}`, seller,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("seller updated successfully", response.data);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Update seller error response data:",
          error.response
        );
        return rejectWithValue(error.message);
      } else {
        console.error("Update seller error message:", error);
        return rejectWithValue("Failed to update seller");
      }
    }
  }
);

export const updateSellerAccountStatus = createAsyncThunk<
  Seller,
  { id: number; status: string }
>(
  "sellers/updateSellerAccountStatus",
  async (
    { id, status }: { id: number; status: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patch(`/admin/seller/${id}/status/${status}`);
      console.log("update  seller status: ", response.data);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Update seller error response data:",
          error.response.data
        );

        return rejectWithValue(error.message);
      } else {
        console.error("Update seller error message:", error.message);
        return rejectWithValue("Failed to update seller");
      }
    }
  }
);

export const verifySellerEmail = createAsyncThunk<
  any,
  { otp: number; navigate: any }
>(
  "sellers/verifySellerEmail",
  async ({ otp, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_URL}/verify/${otp}`);
      navigate("/seller-account-verified");
      console.log("verifiy seller email ", response.data);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Update seller error response data:",
          error.response.data
        );
        return rejectWithValue(error.message);
      } else {
        console.error("Update seller error message:", error.message);
        return rejectWithValue("Failed to update seller");
      }
    }
  }
);

export const deleteSeller = createAsyncThunk<void, number>(
  "sellers/deleteSeller",
  async (id: number, { rejectWithValue }) => {
    try {
      await api.delete(`${API_URL}/${id}`);
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Delete seller error response data:",
          error.response.data
        );
        console.error(
          "Delete seller error response status:",
          error.response.status
        );
        console.error(
          "Delete seller error response headers:",
          error.response.headers
        );
        return rejectWithValue(error.message);
      } else {
        console.error("Delete seller error message:", error.message);
        return rejectWithValue("Failed to delete seller");
      }
    }
  }
);

// Create the slice
const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // fetch seller profile
      .addCase(fetchSellerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.profileUpdated=false;
      })
      .addCase(
        fetchSellerProfile.fulfilled,
        (state, action: PayloadAction<Seller>) => {
          state.profile = action.payload;
          state.loading = false;
         
        }
      )
      .addCase(fetchSellerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch sellers";
      })
      // fetch sellers
      .addCase(fetchSellers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSellers.fulfilled,
        (state, action: PayloadAction<Seller[]>) => {
          state.sellers = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch sellers";
      })
      .addCase(fetchSellerById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSellerById.fulfilled,
        (state, action: PayloadAction<Seller>) => {
          state.selectedSeller = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchSellerById.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch seller";
      })

      .addCase(updateSeller.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.profileUpdated=false;
      })
      .addCase(
        updateSeller.fulfilled,
        (state, action: PayloadAction<Seller>) => {
          const index = state.sellers.findIndex(
            (seller) => seller.id === action.payload.id
          );
          if (index !== -1) {
            state.sellers[index] = action.payload;
          }
          state.profile=action.payload
          state.loading = false;
          state.profileUpdated=true;
        }
      )
      .addCase(updateSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to update seller";
      })

      // update seller status
      .addCase(updateSellerAccountStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateSellerAccountStatus.fulfilled,
        (state, action: PayloadAction<Seller>) => {
          const index = state.sellers.findIndex(
            (seller) => seller.id === action.payload.id
          );
          if (index !== -1) {
            state.sellers[index] = action.payload;
          }
          state.loading = false;
        }
      )
      .addCase(updateSellerAccountStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to update seller";
      })
      .addCase(deleteSeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSeller.fulfilled, (state, action) => {
        state.sellers = state.sellers.filter(
          (seller) => seller.id !== action.meta.arg
        );
        state.loading = false;
      })
      .addCase(deleteSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to delete seller";
      })
      // seller report
      .addCase(fetchSellerReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerReport.fulfilled, (state, action) => {
        state.loading = false;
        state.report = action.payload;
      })
      .addCase(fetchSellerReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default sellerSlice.reducer;

// Define selector functions
export const selectSellers = (state: RootState) => state.sellers.sellers;
export const selectSelectedSeller = (state: RootState) =>
  state.sellers.selectedSeller;
export const selectSellerLoading = (state: RootState) => state.sellers.loading;
export const selectSellerError = (state: RootState) => state.sellers.error;
