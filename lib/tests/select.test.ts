import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'

import { select } from '../select';

import {
    students, students_first_3,
} from './sample-data';

describe('select', () => {
    it('should return the entire set using a callback function', () => {
        const callback = x => x;
        const result = select(students)(callback);

        expect(result)
            .to.eql(students);
    });

    it('should pick the first element of an array using a callback function', () => {
        const callback = list => list[0];
        const result = select(students)(callback);

        expect(result)
            .to.eql(students[0]);
    });

    it('should pick the first 3 elements of an array using a callback function', () => {
        const callback = list => list.slice(0, 3);
        const result = select(students)(callback);

        expect(result)
            .to.eql(students_first_3);
    });
});
