function index(req, res) {
  res.json({
    message: "AIDS medication reviews database",
    documentation_url: "https://github.com/jha-ayush/Project01_GlobalAPI",
    base_url: "https://fast-cliffs-18726.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
