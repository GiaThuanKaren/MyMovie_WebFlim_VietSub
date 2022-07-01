const FitlerCatologeCrawl = require("./catologe");
const Movie= require('./movie')
const Find = require("./find")
const Routes = function (app) {
  app.use("/fliterlist", FitlerCatologeCrawl);
  app.use("/movie",Movie)
  app.use("/find",Find)
  
};

module.exports = Routes;
