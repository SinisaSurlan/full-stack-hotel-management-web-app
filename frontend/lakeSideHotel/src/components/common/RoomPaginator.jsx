import React from 'react'

const RoomPaginator = ({ totalPages, handlePageChange, activePage, roomsPerPage }) => {


  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(activePage - 1)}
              disabled={activePage === 1}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${activePage === index + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))
          }
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(activePage + 1)}
              disabled={activePage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default RoomPaginator
