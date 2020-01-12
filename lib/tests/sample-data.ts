export const get_students = () => [
    { name: 'April Young', year: 2017, major: 'art' },
    { name: 'James Porter', year: 2010, major: 'politics' },
    { name: 'Sarah Johnson', year: 2018, major: 'math' },
    { name: 'Holly Edwards', year: 2017, major: 'science' },
    { name: 'Benjamin Harris', year: 2017, major: 'politics' },
];

export const get_students_of_year_2017 = () => get_students()
    .filter(student => student.year === 2017);

export const students_with_major_in_politics = () => get_students()
    .filter(student => student.major === 'politics');

export const get_students_first_3 = () => get_students().slice(0, 3);

export const get_prime_numbers = () => [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
    61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
    137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
];

export const get_prime_numbers_below_10 = () => get_prime_numbers()
    .filter(n => n < 10);

export const get_prime_numbers_first_5 = () => get_prime_numbers().slice(0, 5);
