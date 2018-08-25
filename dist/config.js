"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knex = require("knex");
var Bookshelf = require("bookshelf");
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.bookshelf = function () {
        Config._bookshelf.plugin('registry');
        return Config._bookshelf;
    };
    Config._knex = Knex({
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'gibbiX12345',
            database: 'BernMobil',
            port: '32770',
            charset: 'utf8'
        }
    });
    Config._bookshelf = Bookshelf(Config._knex);
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map