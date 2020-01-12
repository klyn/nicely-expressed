import {
    constructor, forEachConstructor,
} from './lib/constructor';

// Note: This is the public API of the library.
// Do NOT expose any other methods besides the 'constructor' method through
// aliasing as shown below. The only exceptions are utility functions.

export const from = constructor;
export const all = constructor;
export const every = forEachConstructor;

// Utility functions
export * from './lib/functional-helpers';
