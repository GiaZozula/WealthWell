// 1. Write a single function that accepts the given data array and returns an array with only the users who have comments.
// How many computational steps did your function take?

// 2. Write a single function that accepts the output data array from Q1 and returns an array of only the latest comment from each user. (hint: use `localeCompare` to compare time strings).
// How many computational steps did your function take?

// 3. Write a single function that accepts the given data array, filters out the user(s) without comments, and returns an array with only the latest comments from each of the remaining users.
// How many computational steps did your function take?

// chain multiple methods together --> .filter, and then .map, always .filter first
// how do gain access to information and what do i want as the output (end result)

const testData = require("./testData.json");

// console.log(testData);

function commentMap(testData) {
  const testMap = testData.map((entry) => {
    if (entry.comments.length) {
      return entry;
    }
    // console.log(entry);
  });
  //return the mapped results
  return testMap;
}

function commentFilter(testData) {
  const testFilter = testData.filter((entry) => {
    return entry.comments.length;
  });
  // return the filtered results
  return testFilter;
}

const filterResult = commentFilter(testData);
// console.log(filterResult);

const mapResult = commentMap(testData);
// console.log(mapResult);

function getRecentComments(filterResult) {
  // variable that will store a new array with only comments as entries
  // after that, make another new variable to store these entries and compare their timeStamp value (which is the time) against the local time using localeCompare
  // output/return amother new array with only these comments (that are the most recent)

  // starting with this:
  // [
  // { userId: '1', comments: [ [Object], [Object] ] },
  // { userId: '2', comments: [ [Object], [Object] ] },
  // { userId: '3', comments: [ [Object], [Object], [Object] ] },
  // { userId: '4', comments: [ [Object], [Object] ] }
  // ]

  // want this/we have this (next step)
  // [
  // {comments: [ [Object], [Object] ]},
  // {comments: [ [Object], [Object] ] },
  // {comments: [ [Object], [Object], [Object] ] },
  // {comments: [ [Object], [Object] ] }
  // ]

  //

  // begin with filterResult being passed into the parameter
  // the end result would be a variable with an array of only comments
  const mapComments = filterResult.map((entry) => {
    // we have access to the entire previously filtered array, but we only want to grab the comments (and the arrays they contain)
    return { comments: entry.comments };
  });
  // console.log(mapComments);
  // we have to access the timeStamps of each comment and compare them to one another, and then output the most recent into an array
  // map gains access to each entry
  const sortedComments = mapComments.map((entry) => {
    entry.comments.sort((a, b) => {
      return a.timeStamp.localeCompare(b.timeStamp) * -1;
    });
    return entry;
  });

  //   console.log(JSON.stringify(sortedComments));
  // now we have to take only the top comment from each user
  // [
  //   {
  //     comments: [
  //       { timeStamp: "2022-03-22T10:00:00", text: "user-1-latest-message" },
  //       { timeStamp: "2022-03-22T00:00:00", text: "user-1-first-message" },
  //     ],
  //   },
  //   {
  //     comments: [
  //       { timeStamp: "2022-03-22T11:30:00", text: "user-2-latest-message" },
  //       { timeStamp: "2022-03-22T10:05:00", text: "user-2-first-message" },
  //     ],
  //   },
  //   {
  //     comments: [
  //       { timeStamp: "2022-03-22T22:00:00", text: "user-3-latest-message" },
  //       { timeStamp: "2022-03-22T21:15:00", text: "user-3-second-message" },
  //       { timeStamp: "2022-03-22T20:10:00", text: "user-3-first-message" },
  //     ],
  //   },
  //   {
  //     comments: [
  //       { timeStamp: "2022-03-22T17:00:00", text: "user-4-latest-message" },
  //       { timeStamp: "2022-03-22T15:00:00", text: "user-4-first-message" },
  //     ],
  //   },
  // ];

  const latestComment = sortedComments.map((entry) => {
    return entry.comments[0];
  });

  return latestComment;
}

const recentComment = getRecentComments(filterResult);
// console.log(recentComment);


function getRecentComments2(filterResult) {

    const mapComments = filterResult.map((entry) => {
        
        entry.comments.sort((a, b) => {
        
            return a.timeStamp.localeCompare(b.timeStamp) * -1;
        
        });
        
        return entry.comments[0];
  });

  return mapComments;
}

const mostRecentComments = getRecentComments2(filterResult);
console.log(mostRecentComments);



// how do i gain access to information

// end result is a new array with only the most recent user comments.

// .filter, .map, .forEach --> built in array properties (.length)*****, .sort

// const testArray = [2,1,16,324,65,11];
// const sortedArray = testArray.sort((a, b) => {
//     return a - b;
// });
// console.log(sortedArray);

// const sortedDescendingArray = testArray.sort((a, b) => {
//     return (a - b) * -1;
// });
// console.log(sortedDescendingArray);

// const testStringArray = ["hello", "a", "c", "b"];
// const sortedStringArray = testStringArray.sort((a, b) => {
//     return a.localeCompare(b) * -1;
// });

// console.log(sortedStringArray);
