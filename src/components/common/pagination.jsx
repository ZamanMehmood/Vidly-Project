// Is ma ham na Math.ceil lagaya ha jis ka matlb ha k hamara pas pagesSize agar dot . ma aye to usa ko nuber ma convert kar dena
// For example   0.9 hamara pas answer aya ha pageSize ka console ma to ya 1 ma convert ho jae ga Math.ceil ki madad sa

// Video No 70 tk ha ya

// import React from "react";
// import _ from "lodash";

// const Pagination = (props) => {
//   const { itemsCount, pageSize, currentPage, onPageChange } = props;
//   console.log(currentPage);

//   const pagesCount = Math.ceil(itemsCount / pageSize);
//   //   console.log(pagesCount);
//   if (pagesCount === 1) return null;
//   const pages = _.range(1, pagesCount + 1);

//   return (
//     <nav>
//       <ul className="pagination">
//         {pages.map((page) => (
//           <li
//             key={page}
//             className={page === currentPage ? "page-item active" : "page-item"}
//           >
//             <a className="page-link" onClick={() => onPageChange(page)}>
//               {page}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

// Video No 71 to ownward

import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  //   console.log(pagesCount);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >   
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
