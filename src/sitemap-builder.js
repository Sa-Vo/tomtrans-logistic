require('babel-register');

const router = require('./routes').default;
const Sitemap = require('../').default;

new Sitemap(router).build('https://tomtranslog.com/').save('./sitemap.xml');
