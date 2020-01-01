import {
    Input,
    ConstructorOutput,
} from './types';

import { filter } from './filter';
import { select } from './select';

/**
 * All new queries should start with calling this function -- strictly
 * internally, or one of its aliases -- via the library's public API which
 * is defined in `./index.ts` file.
 * 
 * @param set The sub-set of data that we would like to query.
 * @returns An object with a series of curried-functions with the data-set
 * we have passed to this function.
 */
export function constructor (set: Input) : ConstructorOutput {
    return {
        set,
        of: filter(set),
        take: select(set),
        pick: select(set),
        get: select(set),
        choose: select(set),
    }
}
