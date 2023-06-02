# Job Parser
HH & Habr parser.

## Content
- [Install](#install)
- [Query](#query)
- [HH Parser](#hh-parser)
- [Habr Parser](#habr-parser)

## Install
To install, you need to create a file .npmrc and specify the URL of the local repository and the
authentication token in it:

```
@iwyfaf-js-plugins:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GIT_TOKEN
```

Install the package:

```
npm i @iwyfaf-js-plugins/job-parser
```

[[↑] Back to top](#content)

## HH Parser
A class for parse vacancies from hh.ru.

```
new VacanciesParser()
  .fromData(await new VacanciesParser().getVacanciesHh('Middle Frontend', 100))
  .filterSalary()
  .filterCurrency()
  .formingSalariesList()
  .formingVacanciesList()
  .calculateAverageSalary()
  .saveResult('./', 'hh-result');
```

[[↑] Back to top](#content)

## Habr Parser
A class for parse vacancies from career.habr.com.

```
new VacanciesParser()
  .fromData(await new VacanciesParser().getVacanciesHabr('Senior Frontend'))
  .filterSalary()
  .calculateAverageSalary()
  .formingSalariesList()
  .formingVacanciesList()
  .saveResult('./', 'habr-result');
```

[[↑] Back to top](#content)

## Routine methods
Some methods for routine operations:

* `filterSalary` - Filter vacancies without salary;
* `filterCurrency` - Filter currency;
* `calculateAverageSalary` - Calculate average salary for all vacancies;
* `formSalariesList` - Form list of salaries;
* `formVacanciesList` - Form list of vacancies;
* `saveResult` - Save final result to file;

[[↑] Back to top](#content)
