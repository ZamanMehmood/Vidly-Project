// <---------Video 81 complete --------------->

// import React from "react";
// import Like from "./common/like";

// const MoviesTable = (props) => {
//   const { movies, onDelete, onLike, onSort } = props;

//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th onClick={() => onSort("title")}>Title</th>
//           <th onClick={() => onSort("genre.name")}>Genre</th>
//           <th onClick={() => onSort("numberInStock")}>Stock</th>
//           <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
//           <th />
//           <th />
//         </tr>
//       </thead>
//       <tbody>
//         {movies.map((movie) => (
//           <tr key={movie._id}>
//             <td>{movie.title}</td>
//             <td>{movie.genre.name}</td>
//             <td>{movie.numberInStock}</td>
//             <td>{movie.dailyRentalRate}</td>
//             <td>
//               <Like liked={movie.liked} onClick={() => onLike(movie)} />
//             </td>
//             <td>
//               <button
//                 onClick={() => onDelete(movie)}
//                 className="btn btn-danger btn-sm"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default MoviesTable;

// // // <---------Video  82  completed  --------------->

// import React, { Component } from "react";
// import Like from "./common/like";

// class MoviesTable extends React.Component {
//   raiseSort = (path) => {
//     const sortColumn = { ...this.props.sortColumn };
//     if (sortColumn.path === path)
//       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
//     else {
//       sortColumn.path = path;
//       sortColumn.order = "asc";
//     }
//     this.props.onSort(sortColumn);
//   };

//   render() {
//     const { movies, onDelete, onLike, onSort } = this.props;

//     return (
//       <table className="table">
//         <thead>
//           <tr>
//             <th onClick={() => this.raiseSort("title")}>Title</th>
//             <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
//             <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
//             <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
//             <th />
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map((movie) => (
//             <tr key={movie._id}>
//               <td>{movie.title}</td>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//               <td>
//                 <Like liked={movie.liked} onClick={() => onLike(movie)} />
//               </td>
//               <td>
//                 <button
//                   onClick={() => onDelete(movie)}
//                   className="btn btn-danger btn-sm"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// export default MoviesTable;

// // // <---------Video  83 Extracting Table Header  --------------->

// import React, { Component } from "react";
// import TableHeader from "./common/tableHeader";
// import Like from "./common/like";

// class MoviesTable extends React.Component {
//   columns = [
//     { path: "title", label: "Title" },
//     { path: "genre.name", label: "Genre" },
//     { path: "numberInStock", label: "Stock" },
//     { path: "dailyRentalRate", label: "Rate" },
//     { key: "like" },
//     { key: "delete" },
//   ];

//   render() {
//     const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

//     return (
//       <table className="table">
//         <TableHeader
//           columns={this.columns}
//           sortColumn={sortColumn}
//           onSort={onSort}
//         />
//         <tbody>
//           {movies.map((movie) => (
//             <tr key={movie._id}>
//               <td>{movie.title}</td>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//               <td>
//                 <Like liked={movie.liked} onClick={() => onLike(movie)} />
//               </td>
//               <td>
//                 <button
//                   onClick={() => onDelete(movie)}
//                   className="btn btn-danger btn-sm"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }

// export default MoviesTable;

// <---------Video  84 Extracting Table Body  +  Rendering Cell Content + Unique Keys + Add Sort Icon --------------->

// import React, { Component } from "react";
// import TableHeader from "./common/tableHeader";
// import TableBody from "./common/tableBody";
// import Like from "./common/like";

// class MoviesTable extends React.Component {
//   columns = [
//     { path: "title", label: "Title" },
//     { path: "genre.name", label: "Genre" },
//     { path: "numberInStock", label: "Stock" },
//     { path: "dailyRentalRate", label: "Rate" },
//     {
//       key: "like",
//       content: (movie) => (
//         <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
//       ),
//     },
//     {
//       key: "delete",
//       content: (movie) => (
//         <button
//           onClick={() => this.props.onDelete(movie)}
//           className="btn btn-danger btn-sm"
//         >
//           Delete
//         </button>
//       ),
//     },
//   ];

//   render() {
//     const { movies, onSort, sortColumn } = this.props;

//     return (
//       <table className="table">
//         <TableHeader
//           columns={this.columns}
//           sortColumn={sortColumn}
//           onSort={onSort}
//         />
//         <TableBody columns={this.columns} data={movies} />
//       </table>
//     );
//   }
// }

// export default MoviesTable;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends React.Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movies) => (
        <Link to={`/movies/${movies._id}`}>{movies.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;

// // <       VIDEO 83 TO 89 OUT OF THOUGHT , I HAVE SKIP THEM       >
