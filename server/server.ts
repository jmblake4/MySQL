var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var mysql = require('mysql');

function getAllPosts(): Promise<any>  {
	return sqlBlogDBCon.query('select * from BlogPosts', function(results) {
		console.log(results);
		return this.Promise.resolve(results);
	});
};

function createNewPost(data:any): void  {
};

function reqResponse(res, data, contentType, statusCode) {
    statusCode = statusCode || 200;
    var header = {
        'Content-Type': contentType
    };
    res.writeHead(statusCode, header);
    res.write(data + '');
    res.end();
};

function requestPartialHTML(req, res) {
    var file = path.join(__dirname, '../app');
    fs.readFile(file + req.url, function (err, data) {
        reqResponse(res, data, 'text/html');
    });
};

function requestHTML(req, res) {
    var file = path.join(__dirname, '../app/index.html');
    fs.readFile(file, function (err, data) {
        reqResponse(res, data, 'text/html');
    });
};

function requestCSS(req, res) {
    var file = path.join(__dirname, '../app');
    fs.readFile(file + req.url, function (err, data) {
        reqResponse(res, data, 'text/css');
    });
};

function requestJS(req, res) {
    var file = path.join(__dirname, '../app');
    fs.readFile(file + req.url, function (err, data) {
        reqResponse(res, data, 'application/javascript');
    });
};

function postMessage(req, res) {
    var body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        createNewPost(JSON.parse(body));
        reqResponse(res, body, 'application/json');
    });
};

function getMessages(req, res) {
    getAllPosts().then(function (s) {
        s = JSON.stringify(s);
        reqResponse(res, s, 'application/json');
    });
};

function requestHandler(req, res) {
    var reqURL = url.parse(req.url).pathname;
    if (reqURL === '/') {
        requestHTML(req, res);
    }
    else if (reqURL === '/1/classes/Posts') {
        if (req.method === 'GET') {
            getMessages(req, res);
        }
        if (req.method === 'POST') {
            postMessage(req, res);
        }
    }
    else if (req.url.slice(-2) === 'js') {
        requestJS(req, res);
    }
    else if (req.url.slice(-3) === 'css') {
        requestCSS(req, res);
    }
    else if (req.url.slice(-4) === 'html') {
        requestPartialHTML(req, res);
    }
    else {
        res.statusCode = 404;
        res.end();
    }
};

var sqlBlogDBCon = mysql.createConnection({
	host: "localhost",
	user: "jay",
	password: "jay1",
	database: "blog"
});
var server = http.createServer(requestHandler);
server.listen(4000);
console.log('Listening on port', 4000);
