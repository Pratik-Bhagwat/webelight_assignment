function PaginationButtons({ page, handleNextPage, handlePrevPage }) {
  return (
    <div className="flex items-center justify-between">
      <button
        disabled={page - 1 === 0}
        onClick={handlePrevPage}
        className="w-20 p-1 border-2 rounded disabled:cursor-not-allowed h-14"
      >
        prev
      </button>
      <button
        onClick={handleNextPage}
        className="w-20 p-1 border-2 rounded h-14"
      >
        next
      </button>
    </div>
  );
}
export default PaginationButtons;
