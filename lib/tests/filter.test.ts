import { describe, it } from 'mocha';
import { expect } from 'chai';

import { filter } from '../filter';

import {
    get_students, get_students_of_year_2017,
    get_prime_numbers, get_prime_numbers_below_10,
} from './sample-data';

describe('filter', () => {
    it('should filter an array of objects using a callback function', () => {
        const callback = student => student.year === 2017;
        const result = filter(get_students())(callback);

        expect(result.set)
            .to.eql(get_students_of_year_2017());
    });

    it('should filter an array of primitives using a callback function', () => {
        const callback = number => number < 10;
        const result = filter(get_prime_numbers())(callback);

        expect(result.set)
            .to.eql(get_prime_numbers_below_10());
    });
});
