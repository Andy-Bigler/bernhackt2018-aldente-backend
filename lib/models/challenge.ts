import Database from '../db';

var db = Database.getInstance();
var bookshelf = db.getBookshelf();

export default class Challenge extends bookshelf.Model<Challenge> {
    id: number;
    name: string;
    description: string;
    time?: number;
    distance?: number;
    vheicle?: string;
    special?: string;
    from?: string;
    to?: string;

    get tableName() { return 'challenges'; }
    get hasTimestamps() { return true; }
}