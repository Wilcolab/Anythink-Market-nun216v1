/**
 * Minimal toKebabCase implementation.
 * Accepts a string, trims whitespace, splits on whitespace, lowercases, joins with '-'.
 * Throws TypeError if input is not a string.
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    // Trim whitespace, split on whitespace, lowercase, join with '-'
    return input.trim().split(/\s+/).map(word => word.toLowerCase()).join('-');
}

// Example calls:
// toKebabCase('Hello World')           // "hello-world"
// toKebabCase('  Foo Bar  ')           // "foo-bar"
// toKebabCase('Multiple   Spaces')     // "multiple-spaces"
// toKebabCase('UPPER lower')           // "upper-lower"
// toKebabCase('singleword')            // "singleword"