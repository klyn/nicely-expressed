import {
    Input, Output,
    ConstructorOutput,
} from './types';

import { constructor } from './constructor';

/**
 * A curried filtring function that accepts all of the valid input data-types
 * which are defined in `type <Input>` and calls relevent filtering functions
 * for each of the data-types, based on the data-set.
 * 
 * @param set The sub-set of data that we would like to work on.
 * @returns A curried-function with the data-set already passed to it.
 */
export function filter (set: Input) {
    /**
     * An function-overload implementation to deal with various call signatures
     * and use-cases:
     * 
     * 1) Checks if a certain property exists in the subject:
     * (property: string) : ConstructorOutput;
     * 
     * 2) Checks if a certain property has a certain value:
     * (property: string, exactValue: any) : ConstructorOutput;
     * 
     * 3) Calls the callback function with the subject value passed to it:
     * (callback: Function) : ConstructorOutput;
     * 
     * @param mixed A property or a callback function.
     * @param cond Optional value when the first argumnet is a string.
     */
    function curried_filter (mixed: string | Function, cond?: any) : ConstructorOutput {
        let results: Output;

        if (set instanceof Array) {
            results = filter_array(set, mixed, cond);
        }

        return constructor(results);
    }

    return curried_filter;
}

function filter_array <T> (set: T[], mixed: string | Function, cond?: any) : T[] {
    let results: T[];

    if (mixed instanceof Function) {
        results = set.filter(x => mixed(x));
    }

    return results;
}
