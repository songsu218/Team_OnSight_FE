// store/searchPageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  climbingCenters: [],
  searchTerm: '',
  selectedCity: '서울특별시',
  selectedDistrict: '전체',
  mapCenter: { lat: 37.573, lng: 126.9794 },
  selectedCenterInfo: null,
  searchResults: [],
  showDetails: false,
  currentCenter: null,
  activeTab: 'home',
  records: [],
  userLikes: JSON.parse(localStorage.getItem('userLikes')) || []
};

const searchPageSlice = createSlice({
  name: "searchPage",
  initialState,
  reducers: {
    setClimbingCenters: (state, action) => {
      state.climbingCenters = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setSelectedDistrict: (state, action) => {
      state.selectedDistrict = action.payload;
    },
    setMapCenter: (state, action) => {
      state.mapCenter = action.payload;
    },
    setSelectedCenterInfo: (state, action) => {
      state.selectedCenterInfo = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setShowDetails: (state, action) => {
      state.showDetails = action.payload;
    },
    setCurrentCenter: (state, action) => {
      state.currentCenter = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setRecords: (state, action) => {
      state.records = action.payload;
    },
    setUserLikes: (state, action) => {
      state.userLikes = action.payload;
      localStorage.setItem('userLikes', JSON.stringify(action.payload));
    },
    toggleFavorite: (state, action) => {
      const centerId = action.payload;
      if (state.userLikes.includes(centerId)) {
        state.userLikes = state.userLikes.filter((id) => id !== centerId);
      } else {
        state.userLikes.push(centerId);
      }
      localStorage.setItem('userLikes', JSON.stringify(state.userLikes));
    },
  },
});

export const {
  setClimbingCenters,
  setSearchTerm,
  setSelectedCity,
  setSelectedDistrict,
  setMapCenter,
  setSelectedCenterInfo,
  setSearchResults,
  setShowDetails,
  setCurrentCenter,
  setActiveTab,
  setRecords,
  setUserLikes,
  toggleFavorite,
} = searchPageSlice.actions;

export default searchPageSlice.reducer;
