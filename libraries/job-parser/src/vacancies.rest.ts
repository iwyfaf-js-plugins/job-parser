import ClientRest from '@iwyfaf-js-utilities/rest-client';

export default class VacanciesRest extends ClientRest {
  /**
   * @description Get vacancies HH rest
   * @param {string} text - Search text
   * @param {number} per_page - Results per page
   * @param {number} area - Search area (Country or City)
   * @returns {import("./client/request/RestRequestPromise").default<unknown>}
   */
  getVacanciesHh(text: string, per_page: number = 100, area: number = 113) {
    return super.call(
      `https://api.hh.ru/vacancies?text=${text}&per_page=${per_page}&area=${area}`,
      'get',
    );
  }

  /**
   * @description Get vacancies Habr rest
   * @param {string} text
   * @param {number} per_page
   * @param {string} currency
   * @returns {import("./client/request/RestRequestPromise").default<unknown>}
   */
  getVacanciesHabr(text: string, per_page: number = 50, currency: string = 'RUR') {
    return super.call(
      `https://career.habr.com/api/frontend/vacancies?q=${text}&sort=relevance&type=all&currency=${currency}&per_page=${per_page}`,
      'get',
    );
  }
}
