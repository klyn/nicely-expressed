import {
    from,
    everything, everyone,
    top,
} from './index';

import {
    students,
    prime_numbers,
} from './lib/tests/sample-data';

const year = year => student => student.year === year;
const major = major => student => student.major === major;

const year_of_2017 = from(students)
    .of(year(2017))
    .pick(top(2));

const major_in_politics = from(students)
    .of(major('politics'))
    .choose(everyone);

console.log('year of 2017:', year_of_2017);
console.log('major in politics:', major_in_politics);
