var args = require('system').args;
var fs = require('fs');
var outputFile = 'names.csv';

var mainPage = require('webpage').create();
var pageNumber = 1;

mainPage.open('https://www.quicktransportsolutions.com/quickfreight/loadboard/carrier-searchby-citystate.php', function (status) {
    console.log('Main page Status: ' + status);
    var state = args[1];
    var trucks = args[2];

    mainPage.evaluate(function (a, b) {
        $('#phy_state').val($('#phy_state option').filter(function () {
            return $(this).html() == a;
        }).val());
        $('#trucks').val($('#trucks option').filter(function () {
            return $(this).html() == b;
        }).val());
        $('form[name="formSearchCity"]').submit();
    }, state, trucks);

    setTimeout(function () {
        parse(mainPage);
    }, 15000);

});


function parse(page) {
    collectNames(page);
    var nextHref = getNextPageLink(page);
    if (nextHref) {
        var newPage = require('webpage').create();
         newPage.open(nextHref, function (status) {
            console.log("PAGE " + pageNumber++ + ' status: ' + status);
            parse(newPage);
        })
    } else {
        phantom.exit();
    }
}

function getNextPageLink(page) {
    return page.evaluate(function () {
        var next_item = $(".pagination li.active").next();
        if (next_item.text() === ">>") {
            return null
        }

        return $(next_item[0]).find("a")[0].href;
    });
}

function collectNames(page) {
    var names = page.evaluate(function () {
        return $('span[itemprop="name"]').map(function () {
            return $(this).text();
        }).get();
    });
    fs.write(outputFile, names.join('\r\n') + '\r\n', 'a');
}