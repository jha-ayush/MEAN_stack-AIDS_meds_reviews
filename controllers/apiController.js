function index(req, res) {
  res.json({
    endpointsDocumented: true,
    message: "AIDS medications review database.",
    documentation_url: "https://github.com/jha-ayush/Project01_GlobalAPI/README.md",
    base_url: "http://fast-cliffs-18726.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},

      {method: "GET", path: "/api/medications", description: "Get all medications in the database"},
      {method: "GET", path: "/api/medications/:id", description: "Get details of a single medication"},

      {method: "GET", path: "/api/medications/:id/reviews", description: "Get all reviews of a single medication"},
      {method: "POST", path: "/api/reviews", description: "Create a new review"},
      {method: "GET", path: "/api/reviews/:id", description: "Get details of a single review"},
      {method: "PUT", path: "/api/reviews/:id", description: "Update details of a single review"},
      {method: "DELETE", path: "/api/reviews/:id", description: "Delete a single review"}

    ]
  });
}

module.exports.index = index;
