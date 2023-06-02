import VacanciesParser from '@iwyfaf-js-plugins/job-parser';

new VacanciesParser()
  .fromData(await new VacanciesParser().getVacanciesHabr('Middle Frontend'))
  .filterSalary()
  .calculateAverageSalary()
  .formSalariesList()
  .formVacanciesList()
  .saveResult('./', 'habr-result');
