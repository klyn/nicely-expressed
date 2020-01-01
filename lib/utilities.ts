import {
    Input, Output,
} from './types';

/**
 * Returns the exact same value which was passed to it. This is used to
 * help create a better vocabulary to express a query.
 * 
 * @param x Any value of any type.
 * @returns Exact same value and type of the original input.
 */
function returnTheSame <T> (x: T) : T {
    return x;
}

export const everything = returnTheSame;
export const everyone = returnTheSame;

/**
 * Returns the first N-th items of an array. If the array is empty, an empty array
 * will be returned.
 *  
 * @param x An array of any type.
 * @param nth The number of elements to be returned from index 0.
 * @returns The first N-th items of the array or an empty array.
 */
function firstNthItemsOfArrayAsArray <T extends Array<any>> (x: T[], nth: number) : T[] {
    return (x.length > 0)
        ? x.splice(0, nth)
        : [];
}

/**
 * A curried-function that is used to return the first N-th elements of a collectioin.
 * 
 * @param nth The number of elements to be returned from the beginning of the collection.
 * @returns A curried-function with the N-th parameter already passed to it.
 */
function firstNthItemsOfCollectionAsCollection (nth: number) {
    /**
     * Returns the first N-th elements of a collection, based on their type.
     * 
     * @param x The input collection.
     * @returns The results, as a collection with the same type.
     */
    function curried_nth (x: Input) : Output {
        if (x instanceof Array) {
            return firstNthItemsOfArrayAsArray(x, nth);
        }
    }

    return curried_nth;
}

export const top = firstNthItemsOfCollectionAsCollection;
