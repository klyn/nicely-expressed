import cloneDeep from 'lodash/clonedeep';

import { Input } from './types';

/**
 * A non-curried function that accepts a set of data and callback function
 * with the <callbackFnArgs> call signature and returns whatever is the
 * output of the executaion of the call back on everytime of the set.
 * 
 * @param set The sub-set of data that we would like to work on.
 * @param callback A callback function
 */
export function callback (set: Input, callback: callbackFnArgs) : any {

    if (set instanceof Array) {
        return set.map(x => callback(cloneDeep(x)));
    }
}

/**
 * The callback function signature (in the arguments) which will be ba passed
 * to the actual 'callback' function above.
 */
export interface callbackFnArgs {
    (item: any) : any;
}
