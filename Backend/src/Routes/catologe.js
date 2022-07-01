const cheerio = require("cheerio");
const request = require("request-promise");

const FitlerCatologeCrawl = function (req, res) {
  request("https://ophim.tv/danh-sach/phim-bo", (err, respones, html) => {
    if (!err && respones.statusCode === 200) {
      const $ = cheerio.load(html); // load HTML
      let i =0,Result=[];
    //   console.log($('form .hidden .p-2 select:nth-child(1)').text())
    //   return
      $('form .hidden .p-2 select:nth-child(1)').each((index,ele)=>{
        // const select = $(ele).find("select");
        let resutlGot = []
        $(ele).find("option").each((idx,elein)=>{
            // i++
            console.log($(elein).attr("value"))
            resutlGot.push($(elein).attr("value"))
            
        })
        Result.push(resutlGot)
        i++;
        
      })
      console.log(i)
      res.json({
        name:"fliterCatologe",
        data:Result
      })
    } else {
      console.log(err);
      res.json(err);
    }
  });
};

module.exports = FitlerCatologeCrawl;
