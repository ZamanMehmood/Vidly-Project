// <-----------Video 70 tk ha ya ------------>

// import React, { Component } from "react";
// import Like from "./common/like";
// import Pagination from "./common/pagination";
// import { getMovies } from "../services/fakeMovieService";
// import { paginate } from "../utils/paginate";

// class Movies extends React.Component {
//   state = {
//     movies: getMovies(),
//     currentPage: 1,
//     pageSize: 4,
//   };

//   handleDelete = (movie) => {
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   render() {
//     const { length: count } = this.state.movies;
//     const { pageSize, currentPage, movies: allMovies } = this.state;

//     if (count === 0)
//       return <h2>There are no movies in the Database Saqib Bhai !</h2>;

//     const movies = paginate(allMovies, currentPage, pageSize);
//     return (
//       <React.Fragment>
//         <p>Showing {count} movies in the database!!.</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Genre</th>
//               <th>Stock</th>
//               <th>Rate</th>
//               <th />
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {movies.map((movie) => (
//               <tr key={movie._id}>
//                 <td>{movie.title}</td>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <Like
//                     liked={movie.liked}
//                     onClick={() => this.handleLike(movie)}
//                   />
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => this.handleDelete(movie)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <Pagination
//           itemsCount={count}
//           pageSize={pageSize}
//           currentPage={currentPage}
//           onPageChange={this.handlePageChange}
//         />
//       </React.Fragment>
//     );
//   }
// }

// export default Movies;

// <------------Video No  71 to  78------------>

// import React, { Component } from "react";
// import Like from "./common/like";
// import ListGroup from "./common/listGroup";
// import Pagination from "./common/pagination";
// import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
// import { paginate } from "../utils/paginate";
// import { filter } from "lodash";

// class Movies extends React.Component {
//   state = {
//     movies: [],
//     genres: [],
//     currentPage: 1,
//     pageSize: 4,
//   };

//   componentDidMount() {
//     const genres = [{ name: "All Genres", _id: 1 }, ...getGenres()];

//     this.setState({ movies: getMovies(), genres });
//   }

//   handleDelete = (movie) => {
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   //  line number 137 ka andar currentPage : 1  set kiya ha ma na kyu ka jab ham second page pa jata hain or wapis action pa ata hain to waha koi movies show ni ho rahi hoti isi liya ham na is ko 1 k equal set kiya ha is sa movies show hoon gi
//   handleGenreSelect = (genre) => {
//     this.setState({ selectedGenre: genre, currentPage: 1 });
//   };
//   render() {
//     const { length: count } = this.state.movies;
//     const {
//       pageSize,
//       currentPage,
//       selectedGenre,
//       movies: allMovies,
//     } = this.state;

//     if (count === 0)
//       return <h2>There are no movies in the Database Saqib Bhai !</h2>;

//     const filtered =
//       selectedGenre && selectedGenre._id
//         ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
//         : allMovies;

//     const movies = paginate(filtered, currentPage, pageSize);
//     return (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             // valueProperty and textProperty dono props hain
//             // tese two additional props makes interface more complex
//             //(  ya dono props ab ham idr nai likhain ga kyu k listGroup ma ham na in ko default props set kar diya ha
//             // textProperty="name"
//             // valueProperty="_id")
//             items={this.state.genres}
//             selectedItem={this.state.selectedGenre}
//             onItemSelect={this.handleGenreSelect}
//           />
//         </div>

//         <div className="col">
//           <p>Showing {filtered.length} movies in the database!!.</p>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Genre</th>
//                 <th>Stock</th>
//                 <th>Rate</th>
//                 <th />
//                 <th />
//               </tr>
//             </thead>
//             <tbody>
//               {movies.map((movie) => (
//                 <tr key={movie._id}>
//                   <td>{movie.title}</td>
//                   <td>{movie.genre.name}</td>
//                   <td>{movie.numberInStock}</td>
//                   <td>{movie.dailyRentalRate}</td>
//                   <td>
//                     <Like
//                       liked={movie.liked}
//                       onClick={() => this.handleLike(movie)}
//                     />
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => this.handleDelete(movie)}
//                       className="btn btn-danger btn-sm"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <Pagination
//             itemsCount={filtered.length}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

// // <---------------Video 79 to 81 ----------------->
// import React, { Component } from "react";
// import MoviesTable from "./moviesTable";
// import ListGroup from "./common/listGroup";
// import Pagination from "./common/pagination";
// import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
// import { paginate } from "../utils/paginate";
// // import { filter } from "lodash";   // agar error aya to is ko enable ar doon ga
// import _ from "lodash";

// class Movies extends React.Component {
//   state = {
//     movies: [],
//     genres: [],
//     currentPage: 1,
//     pageSize: 4,
//     sortColumn: { path: "title", order: "asc" },
//   };

//   componentDidMount() {
//     const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
//     this.setState({ movies: getMovies(), genres });
//   }

//   handleDelete = (movie) => {
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   //  line ma currentPage : 1  set kiya ha ma na kyu ka jab ham second page pa jata hain or wapis action pa ata hain to waha koi movies show ni ho rahi hoti isi liya ham na is ko 1 k equal set kiya ha is sa movies show hoon gi
//   handleGenreSelect = (genre) => {
//     this.setState({ selectedGenre: genre, currentPage: 1 });
//   };

//   handleSort = (path) => {
//     const sortColumn = { ...this.state.sortColumn };
//     if (sortColumn.path === path)
//       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
//     else {
//       sortColumn.path = path;
//       sortColumn.order = "asc";
//     }
//     this.setState({ sortColumn });
//   };

//   render() {
//     const { length: count } = this.state.movies;
//     const {
//       pageSize,
//       currentPage,
//       sortColumn,
//       selectedGenre,
//       movies: allMovies,
//     } = this.state;

//     if (count === 0)
//       return <h2>There are no movies in the Database Saqib Bhai !</h2>;

//     const filtered =
//       selectedGenre && selectedGenre._id
//         ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
//         : allMovies;

//     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

//     const movies = paginate(sorted, currentPage, pageSize);
//     return (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             // valueProperty and textProperty dono props hain
//             // tese two additional props makes interface more complex
//             //(  ya dono props ab ham idr nai likhain ga kyu k listGroup ma ham na in ko default props set kar diya ha
//             // textProperty="name"
//             // valueProperty="_id")
//             items={this.state.genres}
//             selectedItem={this.state.selectedGenre}
//             onItemSelect={this.handleGenreSelect}
//           />
//         </div>

//         <div className="col">
//           <p>Showing {filtered.length} movies in the database!!.</p>
//           <MoviesTable
//             movies={movies}
//             onLike={this.handleLike}
//             onDelete={this.handleDelete}
//             onSort={this.handleSort}
//           />

//           <Pagination
//             itemsCount={filtered.length}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

// // <---------------Video 79 to 82 ----------------->
// import React, { Component } from "react";
// import MoviesTable from "./moviesTable";
// import ListGroup from "./common/listGroup";
// import Pagination from "./common/pagination";
// import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
// import { paginate } from "../utils/paginate";
// // import { filter } from "lodash";   // agar error aya to is ko enable ar doon ga
// import _ from "lodash";

// class Movies extends React.Component {
//   state = {
//     movies: [],
//     genres: [],
//     currentPage: 1,
//     pageSize: 4,
//     sortColumn: { path: "title", order: "asc" },
//   };

//   componentDidMount() {
//     const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
//     this.setState({ movies: getMovies(), genres });
//   }

//   handleDelete = (movie) => {
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   //  line ma currentPage : 1  set kiya ha ma na kyu ka jab ham second page pa jata hain or wapis action pa ata hain to waha koi movies show ni ho rahi hoti isi liya ham na is ko 1 k equal set kiya ha is sa movies show hoon gi
//   handleGenreSelect = (genre) => {
//     this.setState({ selectedGenre: genre, currentPage: 1 });
//   };

//   handleSort = (sortColumn) => {
//     this.setState({ sortColumn });
//   };

//   render() {
//     const { length: count } = this.state.movies;
//     const {
//       pageSize,
//       currentPage,
//       sortColumn,
//       selectedGenre,
//       movies: allMovies,
//     } = this.state;

//     if (count === 0)
//       return <h2>There are no movies in the Database Saqib Bhai !</h2>;

//     const filtered =
//       selectedGenre && selectedGenre._id
//         ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
//         : allMovies;

//     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

//     const movies = paginate(sorted, currentPage, pageSize);
//     return (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             // valueProperty and textProperty dono props hain
//             // tese two additional props makes interface more complex
//             //(  ya dono props ab ham idr nai likhain ga kyu k listGroup ma ham na in ko default props set kar diya ha
//             // textProperty="name"
//             // valueProperty="_id")
//             items={this.state.genres}
//             selectedItem={this.state.selectedGenre}
//             onItemSelect={this.handleGenreSelect}
//           />
//         </div>

//         <div className="col">
//           <p>Showing {filtered.length} movies in the database!!.</p>
//           <MoviesTable
//             movies={movies}
//             sortColumn={sortColumn}
//             onLike={this.handleLike}
//             onDelete={this.handleDelete}
//             onSort={this.handleSort}
//           />

//           <Pagination
//             itemsCount={filtered.length}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

// // <---------------Video 83 to ownward ----------------->
// import React, { Component } from "react";
// import MoviesTable from "./moviesTable";
// import ListGroup from "./common/listGroup";
// import Pagination from "./common/pagination";
// import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
// import { paginate } from "../utils/paginate";
// import { filter } from "lodash";
// import _ from "lodash";

// class Movies extends React.Component {
//   state = {
//     movies: [],
//     genres: [],
//     currentPage: 1,
//     pageSize: 4,
//     sortColumn: { path: "title", order: "asc" },
//   };

//   componentDidMount() {
//     const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
//     this.setState({ movies: getMovies(), genres });
//   }

//   handleDelete = (movie) => {
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);

//     //movies=[{id:1},{id:2},{id:3},{}..............]
//     //clicked movies {id:2}

//     // looop return all the data excepte condition met
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   //  line ma currentPage : 1  set kiya ha ma na kyu ka jab ham second page pa jata hain or wapis action pa ata hain to waha koi movies show ni ho rahi hoti isi liya ham na is ko 1 k equal set kiya ha is sa movies show hoon gi
//   handleGenreSelect = (genre) => {
//     this.setState({ selectedGenre: genre, currentPage: 1 });
//   };

//   handleSort = (sortColumn) => {
//     this.setState({ sortColumn });
//   };

//   getPagedData = () => {
//     const {
//       pageSize,
//       currentPage,
//       sortColumn,
//       selectedGenre,
//       movies: allMovies,
//     } = this.state;

//     const filtered =
//       selectedGenre && selectedGenre._id
//         ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
//         : allMovies;

//     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

//     const movies = paginate(sorted, currentPage, pageSize);

//     return { totalCount: filtered.length, data: movies };
//   };

//   render() {
//     const { length: count } = this.state.movies;
//     const { pageSize, currentPage, sortColumn } = this.state;

//     if (count === 0)
//       return <h2>There are no movies in the Database Saqib Bhai !</h2>;

//     const { totalCount, data: movies } = this.getPagedData();

//     return (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             // valueProperty and textProperty dono props hain
//             // tese two additional props makes interface more complex
//             //(  ya dono props ab ham idr nai likhain ga kyu k listGroup ma ham na in ko default props set kar diya ha
//             // textProperty="name"
//             // valueProperty="_id")
//             items={this.state.genres}
//             selectedItem={this.state.selectedGenre}
//             onItemSelect={this.handleGenreSelect}
//           />
//         </div>

//         <div className="col">
//           <p>Showing {totalCount} movies in the database!!.</p>
//           <MoviesTable
//             movies={movies}
//             sortColumn={sortColumn}
//             onLike={this.handleLike}
//             onDelete={this.handleDelete}
//             onSort={this.handleSort}
//           />

//           <Pagination
//             itemsCount={totalCount}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

// // / <---------------Video 133 to ownward ----------------->
// import React, { Component } from "react";
// import MoviesTable from "./moviesTable";
// import ListGroup from "./common/listGroup";
// import Pagination from "./common/pagination";
// import { getMovies } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";
// import { paginate } from "../utils/paginate";
// import { filter } from "lodash";
// import _ from "lodash";
// import { Link } from "react-router-dom";

// class Movies extends React.Component {
//   state = {
//     movies: [],
//     genres: [],
//     currentPage: 1,
//     pageSize: 4,
//     sortColumn: { path: "title", order: "asc" },
//   };

//   componentDidMount() {
//     const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
//     this.setState({ movies: getMovies(), genres });
//   }

//   handleDelete = (movie) => {
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);

//     //movies=[{id:1},{id:2},{id:3},{}..............]
//     //clicked movies {id:2}

//     // looop return all the data excepte condition met
//     this.setState({ movies });
//   };

//   handleLike = (movie) => {
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(movie);
//     movies[index] = { ...movies[index] };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   };

//   handlePageChange = (page) => {
//     this.setState({ currentPage: page });
//   };

//   //  line ma currentPage : 1  set kiya ha ma na kyu ka jab ham second page pa jata hain or wapis action pa ata hain to waha koi movies show ni ho rahi hoti isi liya ham na is ko 1 k equal set kiya ha is sa movies show hoon gi
//   handleGenreSelect = (genre) => {
//     this.setState({ selectedGenre: genre, currentPage: 1 });
//   };

//   handleSort = (sortColumn) => {
//     this.setState({ sortColumn });
//   };

//   getPagedData = () => {
//     const {
//       pageSize,
//       currentPage,
//       sortColumn,
//       selectedGenre,
//       movies: allMovies,
//     } = this.state;

//     const filtered =
//       selectedGenre && selectedGenre._id
//         ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
//         : allMovies;

//     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

//     const movies = paginate(sorted, currentPage, pageSize);

//     return { totalCount: filtered.length, data: movies };
//   };

//   render() {
//     const { length: count } = this.state.movies;
//     const { pageSize, currentPage, sortColumn } = this.state;

//     if (count === 0)
//       return <h2>There are no movies in the Database Saqib Bhai !</h2>;

//     const { totalCount, data: movies } = this.getPagedData();

//     return (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             // valueProperty and textProperty dono props hain
//             // tese two additional props makes interface more complex
//             //(  ya dono props ab ham idr nai likhain ga kyu k listGroup ma ham na in ko default props set kar diya ha
//             // textProperty="name"
//             // valueProperty="_id")
//             items={this.state.genres}
//             selectedItem={this.state.selectedGenre}
//             onItemSelect={this.handleGenreSelect}
//           />
//         </div>

//         <div className="col">
//           <Link
//             to="/movies/new"
//             className="btn btn-success"
//             style={{ marginBottom: 20 }}
//           >
//             New Movie
//           </Link>
//           <p>Showing {totalCount} movies in the database!!.</p>
//           <MoviesTable
//             movies={movies}
//             sortColumn={sortColumn}
//             onLike={this.handleLike}
//             onDelete={this.handleDelete}
//             onSort={this.handleSort}
//           />
//           <Pagination
//             itemsCount={totalCount}
//             pageSize={pageSize}
//             currentPage={currentPage}
//             onPageChange={this.handlePageChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Movies;

// / <---------------Video 135 to ownward ----------------->
//   Making Search Box
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });

    deleteMovie(movie._id);
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      // if we have a search query we filter all movies and each movie have title and convert into lower case and check to see  our query starts with lower  case .
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      // if we have genres we filter movies by the selectd genre.
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
