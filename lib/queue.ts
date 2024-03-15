import { EventEmitter } from 'events';

const uuid = require('uuid');

class Queue extends EventEmitter {
    name: string;
    url: string;
    opts: object;

    token: string;

    constructor(name: string, url: string, opts: object) {
        super();
        this.name = name;
        this.url = url;
        this.opts = opts;

        this.token = uuid.v4();

    }
}