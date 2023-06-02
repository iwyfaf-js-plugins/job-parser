import fs from 'fs';

export default class Routine {
  items: object[];
  salaries: object[];
  averageSalary: string;
  vacancies: object[];
  currency: string;

  constructor(
    items?: object[],
    salaries?: object[],
    averageSalary?: string,
    vacancies?: object[],
    currency: string = 'RUR',
  ) {
    this.items = items || [];
    this.salaries = salaries || [];
    this.averageSalary = averageSalary || '';
    this.vacancies = vacancies || [];
    this.currency = currency;
  }

  /**
   * @description Existing data
   * @param {object[]} data
   * @returns {Routine}
   */
  fromData(data: object[]): Routine {
    this.items = data;

    return this;
  }

  /**
   * @description Filter vacancies without salary
   * @returns {this}
   * @constructor
   */
  filterSalary() {
    this.items = this.items.filter(
      (vacancy: any) => vacancy.salary !== null && vacancy.salary.from !== null,
    );

    return this;
  }

  /**
   * @description Filter currency
   * @returns {this}
   */
  filterCurrency() {
    this.items = this.items.filter((vacancy: any) => vacancy.salary.currency === this.currency);

    return this;
  }

  /**
   * @description Calculate average salary for all vacancies
   * @returns {string}
   */
  calculateAverageSalary() {
    const sum = this.items.reduce((total, obj: any) => total + obj.salary.from, 0);
    this.averageSalary = (sum / this.items.length).toFixed() + ` ${this.currency}`;

    return this;
  }

  /**
   * @description Form list of salaries
   * @returns {object[]}
   */
  formSalariesList() {
    this.salaries = this.items.map((vacancy: any) => ({
      from: vacancy.salary.from,
      to: vacancy.salary.to,
    }));

    return this;
  }

  /**
   * @description Form list of vacancies
   * @returns {this}
   */
  formVacanciesList() {
    this.vacancies = this.items.map((vacancy: any) => ({
      name: vacancy.name || vacancy.title,
      url: vacancy.alternate_url || 'https://career.habr.com' + vacancy.href,
      salary: {
        from: vacancy.salary.from,
        to: vacancy.salary.to,
      },
    }));

    return this;
  }

  /**
   * @description Save result to file
   * @param {string} destination
   * @param {string} fileName
   * @returns {this}
   */
  saveResult(destination: string, fileName: string) {
    if (!destination && !fileName) {
      throw new Error('Destination & fileName attrs is required');
    }

    const resultFile = `${destination}${fileName}.txt`;
    const resultData = {
      count: this.items.length,
      averageSalary: this.averageSalary,
      vacancies: this.vacancies,
    };

    fs.writeFileSync(resultFile, JSON.stringify(resultData, null, 2));

    return this;
  }
}
