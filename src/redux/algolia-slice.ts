import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const algoliaSlice = createSlice({
  name: "algolia",
  initialState: {
    searchData: [],
    viewSearch: false,
    query: null,
    closeSearchView: false,
    defaultRefinement: null,
  },
  reducers: {
    updateSearchData(state, action: PayloadAction<any>) {
      state.searchData = action.payload;
    },
    updateViewSearch(state) {
      state.viewSearch = !state.viewSearch;
    },
    closeSearch(state) {
      state.closeSearchView = true;
    },
    updateQuery(state, action: PayloadAction<any>) {
      state.query = action.payload;
    },
    updateDefaultRefinement(state, action: PayloadAction<string>) {
      state.defaultRefinement = action.payload;
    },
  },
});

export const {
  updateSearchData,
  updateViewSearch,
  closeSearch,
  updateQuery,
  updateDefaultRefinement,
} = algoliaSlice.actions;
export default algoliaSlice.reducer;
