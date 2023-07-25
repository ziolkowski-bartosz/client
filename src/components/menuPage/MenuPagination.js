import React from "react";
import ResponsivePagination from "react-responsive-pagination";

function MenuPagination({ state, dispatch }) {
  return (
    <ResponsivePagination
      current={state.currentPage}
      total={state.totalPages}
      onPageChange={(page) =>
        dispatch({ type: "SET_CURRENT_PAGE", payload: page })
      }
    />
  );
}

export default MenuPagination;
