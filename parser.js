var data = require('./data.json');
var fs = require('fs');
var outputFile = 'emails.json';
var count = 0;
var currentIndex = 0;
var logs = [];
var results = [];

function parseNext(callback) {
    if (callback()) {
        parseSite(callback)
    } else {
        finish();
    }
}

function parseSite(callback) {
    var site = data[currentIndex];
    if (site.website) {
        var page = require('webpage').create();
        page.open(site.website, function (status) {
            if (status === "success") {
                var html = page.evaluate(function () {
                    return document.documentElement.innerHTML;
                });
                var obj = {
                    name: site.name,
                    site: site.website,
                    emails: [],
                    emailsFromContacts: [],
                    contactPage: ''
                };
                if (html) {
                    var emails = getEmails(html);
                    if (emails && emails.length > 0 && !(emails.length === 1 && emails[0].indexOf('example') > -1)) {
                        emails.forEach(function (item, index) {
                            if (obj.emails.indexOf(item) === -1) {
                                obj.emails.push(item);
                            }
                        });
                    } else {
                        var links = page.evaluate(function () {
                            var aTags = document.getElementsByTagName("a");
                            var searchText = "contact";
                            var arrayOfLinks = [];

                            for (var i = 0; i < aTags.length; i++) {
                                if (aTags[i].textContent.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                                    if (aTags[i].href) {
                                        arrayOfLinks.push(aTags[i].href);
                                    }
                                }
                            }
                            return arrayOfLinks;
                        });
                        obj.contactPage = links && links.length > 0 && links[0].indexOf("tel:") === -1 ? links[0] : null;

                        if (obj.contactPage) {
                            if (obj.contactPage.indexOf("mailto:") > -1) {
                                obj.emails.push(obj.contactPage.replace("mailto:", ""));
                                obj.contactPage = null;
                            }

                            if (obj.contactPage.indexOf("http") === -1) {
                                obj.contactPage = (site.website + obj.contactPage).replace(/([^:]\/)\/+/g, "$1");
                            }

                            var contactPage = require('webpage').create();
                            contactPage.open(obj.contactPage, function (status) {

                                if (status === "success") {
                                    var contactHtml = contactPage.evaluate(function () {
                                        return document.documentElement.innerHTML;
                                    });
                                    if (contactHtml) {
                                        var contactEmails = getEmails(contactHtml);
                                        if (contactEmails && contactEmails.length > 0) {
                                            contactEmails.forEach(function (item, index) {
                                                if (obj.emailsFromContacts.indexOf(item) === -1) {
                                                    obj.emailsFromContacts.push(item);
                                                }
                                            });
                                        }
                                    }
                                }
                                contactPage.close();
                            });
                        }
                    }
                }
                results.push(obj);
            }
            page.close();
            parseNext(callback);
        });
    } else {
        parseNext(callback);
    }
}

function getEmails(html) {
    var string_context = html.toString();
    return string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}


function start() {
    if (data && data.length) {
        count = data.length;

        parseSite(function () {
            currentIndex++;
            return (data.length > (currentIndex));
        });
    }
}

function finish() {
    log("FINISH!");
    logs.forEach(function (item) {
        console.log(item);
    });
    fs.write(outputFile, JSON.stringify(results), 'w');

    phantom.exit();
}


function log(log) {
    logs.push(log);
}

start();