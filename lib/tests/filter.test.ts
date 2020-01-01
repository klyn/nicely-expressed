import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'

import { filter } from '../filter';

import {
    students, students_of_year_2017,
    prime_numbers, prime_numbers_below_10,
} from './sample-data';

describe('filter', () => {
    it('should filter an array of objects using a callback function', () => {
        const callback = student => student.year === 2017;
        const result = filter(students)(callback);

        expect(result.set)
            .to.eql(students_of_year_2017);
    });

    it('should filter an array of primitives using a callback function', () => {
        const callback = number => number < 10;
        const result = filter(prime_numbers)(callback);

        expect(result.set)
            .to.eql(prime_numbers_below_10);
    });
});
