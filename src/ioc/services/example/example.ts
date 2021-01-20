import { Request } from 'express';

export class Example {
  private _utils;

  constructor(utils: any) {
    this._utils = utils;
  }

  async create() {
    return { data: 'data' };
  }
}
