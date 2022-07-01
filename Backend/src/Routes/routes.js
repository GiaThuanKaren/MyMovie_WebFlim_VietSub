const FitlerCatologeCrawl = require("./catologe");

const Routes = function (app) {
  app.use("/", FitlerCatologeCrawl);
};

module.exports = Routes;
