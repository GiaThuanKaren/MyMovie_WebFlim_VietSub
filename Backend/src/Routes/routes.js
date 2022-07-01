const FitlerCatologeCrawl = require("./catologe");
const Movie= require('./movie')
const Routes = function (app) {
  app.use("/fliterlist", FitlerCatologeCrawl);
  app.use("/movie",Movie)
};

module.exports = Routes;
