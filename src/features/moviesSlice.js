// features/movieSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// 🔁 Utility function to generate discover movie URLs
const discoverUrl = (type = "movie", params = "") =>
  `${BASE_URL}/discover/${type}?api_key=${API_KEY}&${params}`;

// 🔥 Trending All (for hero)
export const fetchTrending = createAsyncThunk(
  "movies/fetchTrending",
  async () => {
    const res = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
    );
    return res.data.results;
  }
);

// 🎬 Popular Movies
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return res.data.results;
  }
);

// 📺 Popular TV
export const fetchPopularTV = createAsyncThunk(
  "movies/fetchPopularTV",
  async () => {
    const res = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    return res.data.results;
  }
);

// 📍 Top 10 in India (Hindi)
export const fetchTopIndia = createAsyncThunk(
  "movies/fetchTopIndia",
  async () => {
    const res = await axios.get(
      discoverUrl(
        "movie",
        "region=IN&sort_by=popularity.desc&with_original_language=hi"
      )
    );
    return res.data.results.slice(0, 10);
  }
);

// 🎭 Genre-based Movies
export const fetchSciFi = createAsyncThunk("movies/fetchSciFi", async () => {
  const res = await axios.get(discoverUrl("movie", "with_genres=878"));
  return res.data.results;
});

export const fetchRomance = createAsyncThunk(
  "movies/fetchRomance",
  async () => {
    const res = await axios.get(discoverUrl("movie", "with_genres=10749"));
    return res.data.results;
  }
);

export const fetchAction = createAsyncThunk("movies/fetchAction", async () => {
  const res = await axios.get(discoverUrl("movie", "with_genres=28"));
  return res.data.results;
});

export const fetchThriller = createAsyncThunk(
  "movies/fetchThriller",
  async () => {
    const res = await axios.get(discoverUrl("movie", "with_genres=53"));
    return res.data.results;
  }
);

export const fetchComedy = createAsyncThunk("movies/fetchComedy", async () => {
  const res = await axios.get(discoverUrl("movie", "with_genres=35"));
  return res.data.results;
});

export const fetchDocumentary = createAsyncThunk(
  "movies/fetchDocumentary",
  async () => {
    const res = await axios.get(discoverUrl("movie", "with_genres=99"));
    return res.data.results;
  }
);

export const fetchFamily = createAsyncThunk("movies/fetchFamily", async () => {
  const res = await axios.get(discoverUrl("movie", "with_genres=10751"));
  return res.data.results;
});

export const fetchAnimation = createAsyncThunk(
  "movies/fetchAnimation",
  async () => {
    const res = await axios.get(discoverUrl("movie", "with_genres=16"));
    return res.data.results;
  }
);

export const fetchHorror = createAsyncThunk("movies/fetchHorror", async () => {
  const res = await axios.get(discoverUrl("movie", "with_genres=27"));
  return res.data.results;
});

// 🌏 K-Drama (TV Korean)
export const fetchKDrama = createAsyncThunk("movies/fetchKDrama", async () => {
  const res = await axios.get(discoverUrl("tv", "with_original_language=ko"));
  return res.data.results;
});

// 📺 TV Drama (genre 18)
export const fetchTVDrama = createAsyncThunk(
  "movies/fetchTVDrama",
  async () => {
    const res = await axios.get(discoverUrl("tv", "with_genres=18"));
    return res.data.results;
  }
);

// 🔎 Search
export const fetchSearchResults = createAsyncThunk(
  "movies/fetchSearchResults",
  async (query) => {
    const res = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
    );
    return res.data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trending: [],
    popularMovies: [],
    popularTV: [],
    topIndia: [],
    sciFi: [],
    romance: [],
    action: [],
    thriller: [],
    comedy: [],
    documentary: [],
    family: [],
    animation: [],
    horror: [],
    kDrama: [],
    tvDrama: [],
    searchResults: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.trending = action.payload;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularTV.fulfilled, (state, action) => {
        state.popularTV = action.payload;
      })
      .addCase(fetchTopIndia.fulfilled, (state, action) => {
        state.topIndia = action.payload;
      })
      .addCase(fetchSciFi.fulfilled, (state, action) => {
        state.sciFi = action.payload;
      })
      .addCase(fetchRomance.fulfilled, (state, action) => {
        state.romance = action.payload;
      })
      .addCase(fetchAction.fulfilled, (state, action) => {
        state.action = action.payload;
      })
      .addCase(fetchThriller.fulfilled, (state, action) => {
        state.thriller = action.payload;
      })
      .addCase(fetchComedy.fulfilled, (state, action) => {
        state.comedy = action.payload;
      })
      .addCase(fetchDocumentary.fulfilled, (state, action) => {
        state.documentary = action.payload;
      })
      .addCase(fetchFamily.fulfilled, (state, action) => {
        state.family = action.payload;
      })
      .addCase(fetchAnimation.fulfilled, (state, action) => {
        state.animation = action.payload;
      })
      .addCase(fetchHorror.fulfilled, (state, action) => {
        state.horror = action.payload;
      })
      .addCase(fetchKDrama.fulfilled, (state, action) => {
        state.kDrama = action.payload;
      })
      .addCase(fetchTVDrama.fulfilled, (state, action) => {
        state.tvDrama = action.payload;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export default movieSlice.reducer;
