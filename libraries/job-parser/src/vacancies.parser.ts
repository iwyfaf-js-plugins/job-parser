import Routine from './calculates';
import VacanciesRest from './vacancies.rest';

export default class VacanciesParser extends Routine {
  /**
   * @description Get vacancies HH service
   * @param {string} text
   * @param {number} per_page
   * @param {number} area
   * @returns {Promise<object[]>}
   */
  getVacanciesHh(text: string, per_page?: number, area?: number): Promise<object[]> {
    return new Promise((resolve) => {
      new VacanciesRest().getVacanciesHh(text, per_page, area).done((response: any) => {
        resolve(response.items);
      });
    });
  }

  /**
   * @description Get vacancies Habr service
   * @param {string} text
   * @param {number} per_page
   * @param {string} currency
   * @returns {Promise<object[]>}
   */
  getVacanciesHabr(text: string, per_page?: number, currency?: string): Promise<object[]> {
    return new Promise((resolve) => {
      new VacanciesRest().getVacanciesHabr(text, per_page, currency).done((response: any) => {
        resolve(response.list);
      });
    });
  }
}
