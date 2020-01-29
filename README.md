# Nicely expressed!

`nicely-expressed` is an experimental library for implementing a [Fluent-interface](https://en.wikipedia.org/wiki/Fluent_interface)  to work with data-sets in JavaScript/TypeScript. Although the API of the library seems like an OOP implementation, under-the-hood it is only **functional** paradigm!

The JavaScript/TypeScript limitations -- in terms of language features, make this effort an almost dead-end throwaway experiment and there will not be further extensive developments; Therefore, use with caution!

# Examples

Most of us write a few `map` or `for` loops everyday. We use `filter`, `reduce` and some other fancy functions like `every`, `find` and `some` too.

Here are some examples of our ordinary tasks, written using `nicely-expressed`. Note that some of the boilerplate code is not included for the sake of brevity.

```
// Custom filter function
const  year  =  year  =>  student  =>  student.year  ===  year;

// Top two students of year 2017
const year_of_2017 = from(students)
  .of(year(2017))
  .pick(top(2));
```

```
// Custom filter function
const  major  =  major  =>  student  =>  student.major  ===  major;

// Everyone with a major in politics
const major_in_politics = from(students)
  .of(major('politics'))
  .choose(everyone);
```

```
// This function will be called on all entries e.g. a map callback function
const graduate = (student) => {
  student.graduate = true;
  return student;
};

// Equivalent to using map and filter functions
const graduates = every(body)
  .in(students)
  .of(year(2010))
  .should(graduate);
```
