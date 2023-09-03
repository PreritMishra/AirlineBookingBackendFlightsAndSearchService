const CrudService = require('./crud-service');
const { Airport } = require('../models/index');

class AirportService extends CrudService {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportService;