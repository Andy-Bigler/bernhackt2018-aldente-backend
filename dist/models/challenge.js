"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
var db = db_1.default.getInstance();
var bookshelf = db.getBookshelf();
var Challenge = /** @class */ (function (_super) {
    __extends(Challenge, _super);
    function Challenge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Challenge.prototype, "tableName", {
        get: function () { return 'challenges'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "hasTimestamps", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    return Challenge;
}(bookshelf.Model));
exports.default = Challenge;
//# sourceMappingURL=challenge.js.map