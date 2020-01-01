import {
    Input, Output,
} from './types';

/**
 * A curried function which is used to pick or narrow a data-set.
 * 
 * @param set The sub-set of data that we would like to work on.
 * @returns A curried-function with the data-set already passed to it.
 */
export function select (set: Input) {
    /**
     * Invokes the callback function with the data-set.
     *  
     * @param callback A function to pick or narrow the data-set.
     * @returns Raw data compatible with `type <Output>`.
     */
    function curried_select (callback: Function) : Output {
        return callback(set);
    };

    return curried_select;
}
