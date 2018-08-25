"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knex = require("knex");
var Bookshelf = require("bookshelf");
var Database = /** @class */ (function () {
    function Database() {
        this._knex = null;
        this._bookshelf = null;
        if (Database._instance) {
            throw new Error("Error: Instantiation failed: Use Database.getInstance() instead of new.");
        }
        this._knex = Knex({
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'root',
                password: 'gibbiX12345',
                database: 'BernMobil',
                port: 32770,
                charset: 'utf8'
            }
        });
        this._bookshelf = Bookshelf(this._knex);
        Database._instance = this;
    }
    Database.getInstance = function () {
        return Database._instance;
    };
    Database.prototype.getKnex = function () {
        return this._knex;
    };
    Database.prototype.getBookshelf = function () {
        return this._bookshelf;
    };
    Database._instance = new Database();
    return Database;
}());
exports.default = Database;
//# sourceMappingURL=db.js.map