const axios = require("axios");

class ApiService {
  constructor() {
    this.api = axios.create({ baseURL: "http://ergast.com/api/f1" });
  }

  getCalendar() {
    return this.api.get("/current.json");
  }

  /* getCircuitsId(grandPrixId) {
    return this.api.get(`/current/${grandPrixId}.json`);
  } */

 /*  getCircuits() {
    return this.api.get('/2022/circuits.json')
  } */
}


module.exports = ApiService;