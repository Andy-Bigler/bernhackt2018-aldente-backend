"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
const Bookshelf = require("bookshelf");
class Database {
    constructor() {
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
    static getInstance() {
        return Database._instance;
    }
    getKnex() {
        return this._knex;
    }
    getBookshelf() {
        return this._bookshelf;
    }
}
Database._instance = new Database();
exports.default = Database;
//# sourceMappingURL=db.js.map