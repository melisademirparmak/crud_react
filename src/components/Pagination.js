const Pagination = () => {
  const pages = 5;

  const numOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  return <div>Pagination</div>;
};

export default Pagination;
