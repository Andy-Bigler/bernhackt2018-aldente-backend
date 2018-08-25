import Database from '../db';

var db = Database.getInstance();
var bookshelf = db.getBookshelf();

export default class Challenge extends bookshelf.Model<Challenge> {
    get tableName() { return 'challenges'; }
    get hasTimestamps() { return true; }
}