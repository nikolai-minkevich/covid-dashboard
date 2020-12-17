/*
Documetation: https://corona.lmao.ninja/docs/#/
*/
class Covid19API {
  API_SERVER = "https://corona.lmao.ninja";
  /**
   * Get global data.
   */
  getAll() {
    fetch(this.API_SERVER + "/v3/covid-19/all", {
      method: "GET"
    })
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  /**
   * Get COVID-19 totals for all countries.
   */
  getCountries() {
    fetch(this.API_SERVER + "/v3/covid-19/countries", {
      method: "GET"
    })
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  /**
   * Get COVID-19 totals for selected country.
   * @param {string} country - A country name, iso2, iso3, or country ID code.
   */
  getCountry(country) {
    if (arguments.length === 0) {
      this.getCountries();
    } else {
      fetch(this.API_SERVER + `/v3/covid-19/countries/${country}`, {
        method: "GET"
      })
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
  }
}

export default Covid19API;