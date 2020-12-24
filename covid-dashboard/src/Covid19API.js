/*
Documetation: https://corona.lmao.ninja/docs/#/
*/
class Covid19API {
  constructor() {
    this.API_SERVER = "https://corona.lmao.ninja";
  }

  /**
   * Get global data.
   */
  async getAll() {
    return fetch(this.API_SERVER + "/v3/covid-19/all", {
      method: "GET"
    })
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .catch(error => Error(error));
  }
  /**
   * Get COVID-19 totals for all countries.
   */
  async getCountries() {
    return fetch(this.API_SERVER + "/v3/covid-19/countries", {
      method: "GET"
    })
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .catch(error => Error(error));
  }
  /**
   * Get COVID-19 totals for selected country.
   * @param {string} country - A country name, iso2, iso3, or country ID code.
   */
  async getCountry(country) {
    if (arguments.length === 0) {
      return this.getCountries();
    } else {
      return fetch(this.API_SERVER + `/v3/covid-19/countries/${country}`, {
        method: "GET"
      })
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .catch(error => Error(error));
    }
  }

  /**
   * Get COVID-19 time series data for all countries and their provinces.
   * @param {string} lastdays - Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24).
   */
  async getHistorical(lastdays = 30) {
      return fetch(this.API_SERVER + `/v3/covid-19/historical?lastdays=${lastdays}`, {
        method: "GET"
      })
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .catch(error => Error(error));
  }

  /**
   * Get global accumulated COVID-19 time series data
   * @param {string} lastdays - Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24).
   */
  async getHistoricalAll(lastdays = 30) {
      return fetch(this.API_SERVER + `/v3/covid-19/historical/all?lastdays=${lastdays}`, {
        method: "GET"
      })
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .catch(error => Error(error));
  }
  /**
   * Get global accumulated COVID-19 time series data
   * @param {string} country - A country name, iso2, iso3, or country ID code
   * @param {string} lastdays - Number of days to return. Use 'all' for the full data set (e.g. 15, all, 24).
   */
  async getHistoricalCountry(country, lastdays = 30) {
    if (arguments.length === 0) {
      return this.getCountries();
    } else {
      return fetch(this.API_SERVER + `/v3/covid-19/historical/${country}?lastdays=${lastdays}`, {
        method: "GET"
      })
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .catch(error => Error(error));
    }
  }
}

export default Covid19API;