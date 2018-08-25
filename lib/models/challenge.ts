import Database from '../db';

var db = Database.getInstance();
var bookshelf = db.getBookshelf();

export default class Challenge extends bookshelf.Model<Challenge> {
    id: number;
    name: string;
    description: string;
    points: number;
    time?: number;
    distance?: number;
    vehicle?: string;
    special?: string;
    from?: string;
    to?: string;
    isAutomatic: boolean

    get tableName() { return 'challenges'; }
    get hasTimestamps() { return true; }
}