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
      .catch(error => console.log(error));
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
      .catch(error => console.log(error));
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
        .catch(error => console.log(error));
    }
  }
}

export default Covid19API;