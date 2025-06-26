// features/movieSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// "https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.deschttps://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc&primary_release_date.gte=2024-04-18",
//https://api.themoviedb.org/3/discover/movie
const BASE_URL = "https://api.themoviedb.org/3";

// 🔁 Utility function to generate discover movie URLs
const discoverUrl = (type = "movie", params = "") =>
  `${BASE_URL}/discover/${type}?api_key=${API_KEY}&${params}`;

// 🔥 Trending All (for hero)
// export const fetchTrending = createAsyncThunk(
//   "movies/fetchTrending",
//   async () => {
//     const options = {
//       method: "GET",
//       // url: "https://api.themoviedb.org/3/trending/all/week",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
//       },
//     };

//     const response = await fetch(
//       "https://api.themoviedb.org/3/trending/all/week?&region=IN",
//       options
//     );
//     const data = await response.json();

//     return data.results; // Only return array of movies
//   }
// );

// export const fetchTvDrama = createAsyncThunk(
//   "movies/fetchTvDrama",
//   async () => {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
//       },
//     };

//     const response = await fetch(
//       "https://api.themoviedb.org/3/discover/tv?&with_original_language=en",
//       options
//     );
//     const data = await response.json();

//     return data.results; // Only return array of movies
//   }
// );

// export const fetchPopular = createAsyncThunk(
//   "movies/fetchPopular",
//   async () => {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
//       },
//     };

//     const response = await fetch(
//       "https://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.deschttps://api.themoviedb.org/3/discover/movie?with_original_language=hi&sort_by=popularity.desc&primary_release_date.gte=2024-04-18",
//       options
//     );
//     const data = await response.json();

//     return data.results; // Only return array of movies
//   }
// );

// export const fetchDiscover = createAsyncThunk(
//   "movies/fetchDiscover",
//   async () => {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
//       },
//     };

//     const response = await fetch(
//       "https://api.themoviedb.org/3/discover/movie",
//       options
//     );
//     const data = await response.json();

//     return data.results; // Only return array of movies
//   }
// );

export const fetchTrending = createAsyncThunk(
  "movie/fetchTrending",
  async () => {
    const res = await axios.get("/api/trending");
    return res.data.results;
  }
);

export const fetchPopular = createAsyncThunk("movie/fetchPopular", async () => {
  const res = await axios.get("/api/popular");
  return res.data.results;
});

export const fetchDiscover = createAsyncThunk(
  "movie/fetchDiscover",
  async () => {
    const res = await axios.get("/api/discover");
    return res.data.results;
  }
);

export const fetchTvDrama = createAsyncThunk("movie/fetchTvDrama", async () => {
  const res = await axios.get("/api/tvDrama");
  return res.data.results;
});

//browse-by-languages
export const fetchMoviesByLanguage = createAsyncThunk(
  "movies/fetchByLanguage",
  async (languageCode) => {
    const res = await fetch(
      `${BASE_URL}/discover/movie?with_original_language=${languageCode}&api_key=${API_KEY}`
    );
    const data = await res.json();
    return { languageCode, movies: data.results };
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
    discover: [],
    searchResults: [],
    moviesByLanguage: {},
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.trending = action.payload;
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
      })
      .addCase(fetchDiscover.fulfilled, (state, action) => {
        state.discover = action.payload;
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
      .addCase(fetchTvDrama.fulfilled, (state, action) => {
        state.tvDrama = action.payload;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchMoviesByLanguage.fulfilled, (state, action) => {
        const { languageCode, movies } = action.payload;
        state.moviesByLanguage[languageCode] = movies;
      });
  },
});

export default movieSlice.reducer;
