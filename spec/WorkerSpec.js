var stubs = require("./helpers/stubs");
var htmlFetcherHelpers = require("../workers/lib/html-fetcher-helpers");

describe("html fetcher helpers", function(){

  it("should have a 'readUrls' function", function(){
    var urlArray = ["example1.com", "example2.com"];

    fs.writeFileSync(__dirname + "testdata/sites.txt", urlArray.join("\n"));

    var resultArray;
    var result = htmlFetcherHelpers.readUrls(urlSource, function(urls){
      resultArray = urls;
    });

    waits(200);
    runs(function(){
      expect(resultArray).toEqual(urlArray);
    });
  });
  
  xit("should have a 'downloadUrls' function", function(){
    var result = htmlFetcherHelpers.downloadUrls();
    expect(result).toBeTruthy();
  });
});