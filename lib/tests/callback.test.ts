import { describe, it } from 'mocha';
import { expect } from 'chai';

import { callback } from '../callback';

import {
    get_students,
    get_prime_numbers_first_5,
} from './sample-data';

describe('callback', () => {
    it('should apply the callback function on primitive data types', () => {
        const callbackFn = x => x * 2;
        const result = callback(get_prime_numbers_first_5(), callbackFn);
        const expectedResult = get_prime_numbers_first_5()
            .map(callbackFn);

        expect(result)
            .to.eql(expectedResult);
    });

    it('should apply the callback function on objects, without mutating the original one', () => {
        const callbackFn = x => x;
        const students = get_students();
        const result = callback(students, callbackFn);

        expect(result[0] !== students[0])
            .to.be.true;
    });
});
