import VacanciesParser from '@iwyfaf-js-plugins/job-parser';

new VacanciesParser()
  .fromData(await new VacanciesParser().getVacanciesHh('Senior Frontend', 100))
  .filterSalary()
  .filterCurrency()
  .formSalariesList()
  .formVacanciesList()
  .calculateAverageSalary()
  .saveResult('./', 'hh-result');
