export const search = searchTerm => {
  return $.ajax({
    method: "GET",
    url: "/api/users/search",
    data: {
      search_term: searchTerm,
    }
  })
};