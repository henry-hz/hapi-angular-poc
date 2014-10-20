// Load modules

var Static    = require('./static');
var Session   = require('./session');
var Payments  = require('./payments');
var Customers = require('./customers'); 


// API Server Endpoints

exports.endpoints = [
    { method: 'GET',  path: '/{somethingss*}', config: Static.get },
    { method: 'GET',  path: '/payments',       config: Payments.get}, 
    { method: 'GET',  path: '/customers',      config: Customers.get},
    { method: 'POST', path: '/login',          config: Session.login}
];
