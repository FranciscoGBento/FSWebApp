const axios = require("axios");

class ApiService {
  constructor() {
    this.api = axios.create({ baseURL: "http://ergast.com/api/f1" });
  }

  getCalendar() {
    return this.api.get("/current.json");
  }

  getDriverStandings() {
    return this.api.get("/current/driverStandings.json");
  }

  getConstructorStandings() {
    return this.api.get("/current/constructorStandings.json");
  }
}


module.exports = ApiService;