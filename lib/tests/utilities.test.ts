import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'

import {
    everything, everyone,
    top,
} from '../utilities';

import {
    students, students_first_3,
    prime_numbers,
} from './sample-data';

describe('everything', () => {
    it('should return the same value that was passed to it', () => {
        const input = prime_numbers[0];
        const result = everything(input);

        expect(result)
            .to.equal(prime_numbers[0]);
    });
});

describe('everyone', () => {
    it('should return the same value that was passed to it', () => {
        const input = students[0];
        const result = everyone(input);

        expect(result)
            .to.equal(students[0]);
    });
});

describe('top', () => {
    it('should return the first N-th items of an array', () => {
        const input = students;
        const result = top(3)(students);

        expect(result)
            .to.eql(students_first_3);
    });
});
