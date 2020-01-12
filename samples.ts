import {
    from, all, every,
    everything, everyone, body,
    top,
} from './index';

import {
    get_students,
    get_prime_numbers,
} from './lib/tests/sample-data';

const students = get_students();
const prime_numbers = get_prime_numbers();

const year = year => student => student.year === year;
const major = major => student => student.major === major;
const graduate = (student) => {
    student.graduate = true;
    return student;
};

const year_of_2017 = from(students)
    .of(year(2017))
    .pick(top(2));

const major_in_politics = from(students)
    .of(major('politics'))
    .choose(everyone);

const graduates = every(body)
    .in(students)
    .of(year(2010))
    .should(graduate);

// console.log('year of 2017:', year_of_2017);
// console.log('major in politics:', major_in_politics);
// console.log('graduates:', graduates);
