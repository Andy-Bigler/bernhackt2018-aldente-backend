"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
var db = db_1.default.getInstance();
var bookshelf = db.getBookshelf();
class Challenge extends bookshelf.Model {
    get tableName() { return 'challenges'; }
    get hasTimestamps() { return true; }
}
exports.default = Challenge;
//# sourceMappingURL=challenge.js.map