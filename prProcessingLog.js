const fs = require('fs');
const { saveToFile } = require('./fileFunctions');

class PrProcessingLog {
  constructor() {
    this._start = null,
    this._lastUpdate = null,
    this._lastPRlogged = null,
    this._finish = null,
    this._prs = {}
    this._logfile = 'data/open-prs-processed.json'
  }

  import() {
    return JSON.parse(fs.readFileSync(this._logfile, 'utf8'));
  }

  export() {
    let sortedPRs = Object.keys(this._prs)
     .sort((a, b) => a - b)
     .map(num => ({ [num]: this._prs[num] }));
    const log = {
      start: this._start,
      finish: this._finish,
      prs: sortedPRs
    };
    saveToFile(this._logfile, JSON.stringify(log))
  }

  add(prNum) {
    this._prs[prNum] = null;
  }

  update(prNum, status) {
    this._prs[prNum] = status;
  }

  start() {
    this._start = new Date();
  }

  finish() {
    this._finish = new Date();
    this.export();
  }
};

exports.PrProcessingLog = PrProcessingLog;