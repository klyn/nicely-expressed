import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';

import {
    everything, everyone,
    top,
} from '../functional-helpers';

import {
    get_students, get_students_first_3,
    get_prime_numbers,
} from './sample-data';

describe('everything', () => {
    it('should return the same value that was passed to it', () => {
        const input = get_students()[0];
        const result = everyone(input);

        expect(result)
            .to.eql(get_students()[0]);
    });
});

describe('everyone', () => {
    it('should return the same value that was passed to it', () => {
        const input = get_students()[0];
        const result = everyone(input);

        expect(result)
            .to.eql(get_students()[0]);
    });
});

describe('one', () => {
    it('should return the same value that was passed to it', () => {
        const input = get_students()[0];
        const result = everyone(input);

        expect(result)
            .to.eql(get_students()[0]);
    });
});

describe('body', () => {
    it('should return the same value that was passed to it', () => {
        const input = get_students()[0];
        const result = everyone(input);

        expect(result)
            .to.eql(get_students()[0]);
    });
});

describe('thing', () => {
    it('should return the same value that was passed to it', () => {
        const input = get_students()[0];
        const result = everyone(input);

        expect(result)
            .to.eql(get_students()[0]);
    });
});

describe('top', () => {
    it('should return the first N-th items of an array', () => {
        const input = get_students();
        const result = top(3)(get_students());

        expect(result)
            .to.eql(get_students_first_3());
    });
});
