const presidents = [
    { first: 'George', last: 'Washington', year: 1732, passed: 1799 },
    { first: 'John', last: 'Adams', year: 1735, passed: 1826 },
    { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1826 },
    { first: 'James', last: 'Madison', year: 1751, passed: 1836 },
    { first: 'James', last: 'Monroe', year: 1758, passed: 1831 },
    { first: 'John', last: 'Adams', year: 1767, passed: 1848 },
    { first: 'Andrew', last: 'Jackson', year: 1767, passed: 1845 },
    { first: 'Martin', last: 'Van Buren', year: 1782, passed: 1862 },
    { first: 'William', last: 'Harrison', year: 1773, passed: 1841 },
    { first: 'John', last: 'Tyler', year: 1790, passed: 1862 },
    { first: 'James', last: 'Polk', year: 1795, passed: 1849 },
    { first: 'Zachary', last: 'Taylor', year: 1784, passed: 1850 },
    { first: 'Millard', last: 'Fillmore', year: 1800, passed: 1874 },
    { first: 'Franklin', last: 'Pierce', year: 1804, passed: 1869 },
    { first: 'James', last: 'Buchanan', year: 1791, passed: 1868 },
    { first: 'Abraham', last: 'Lincoln', year: 1809, passed: 1865 },
    { first: 'Andrew', last: 'Johnson', year: 1808, passed: 1875 },
    { first: 'Ulysses', last: 'Grant', year: 1822, passed: 1885 },
    { first: 'Rutherford', last: 'Hayes', year: 1822, passed: 1893 },
    { first: 'James', last: 'Garfield', year: 1831, passed: 1881 },
    { first: 'Chester', last: 'Arthur', year: 1829, passed: 1886 },
    { first: 'Grover', last: 'Cleveland', year: 1837, passed: 1908 },
    { first: 'Benjamin', last: 'Harrison', year: 1833, passed: 1901 },
    { first: 'William', last: 'McKinley', year: 1843, passed: 1901 },
    { first: 'Theodore', last: 'Roosevelt', year: 1858, passed: 1919 },
    { first: 'William', last: 'Taft', year: 1857, passed: 1930 },
    { first: 'Woodrow', last: 'Wilson', year: 1856, passed: 1924 },
    { first: 'Warren', last: 'Harding', year: 1865, passed: 1923 },
    { first: 'Calvin', last: 'Coolidge', year: 1872, passed: 1933 },
    { first: 'Herbert', last: 'Hoover', year: 1874, passed: 1964 },
    { first: 'Franklin', last: 'Roosevelt', year: 1882, passed: 1945 },
    { first: 'Harry', last: 'Truman', year: 1884, passed: 1972 },
    { first: 'Dwight', last: 'Eisenhower', year: 1890, passed: 1969 },
    { first: 'John', last: 'Kennedy', year: 1917, passed: 1963 },
    { first: 'Lyndon', last: 'Johnson', year: 1908, passed: 1973 },
    { first: 'Richard', last: 'Nixon', year: 1913, passed: 1994 },
    { first: 'Gerald', last: 'Ford', year: 1913, passed: 2006 },
    { first: 'Jimmy', last: 'Carter', year: 1924, passed: undefined },
    { first: 'Ronald', last: 'Reagan', year: 1911, passed: 2004 },
    { first: 'George', last: 'Bush', year: 1924, passed: 2018 },
    { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined },
    { first: 'George', last: 'Bush', year: 1946, passed: undefined },
    { first: 'Barack', last: 'Obama', year: 1961, passed: undefined },
    { first: 'Donald', last: 'Trump', year: 1946, passed: undefined },
];
console.log(presidents)

// ****PRESIDENTS BORN post-1900
// let presidentsNames = presidents.filter(function (answer) {
//     return answer.year >= 1900;
// });

// both methods work
// let presidentsNames = presidents.filter(president => president.year >= 1900 && president.year < 2000);

// console.log(presidentsNames);


// ******ARRAY into an ARRAY*********
// spit out a new array using a different array
// fn = () => {
// const copy = [];
// console.log(presidentsNames);
// presidents.forEach(presidents => {
//     copy.push({
//         last: presidents.last,
//         year: presidents.year
//     });
// });
// return copy;
// }

// *****MAP CHALLENGE*******
// .map does a function to each element looped over
// let fullName = presidents.map(president => `${president.first} ${president.last}`);
// console.log(fullName);

// presidents.forEach((answer) => {
//     console.log(`${answer.first} ${answer.last}`);
// });

// *****************
// .reduce to count # of years total of years
/*********************/
// let initialValue = 0;
// let yearsLived = presidents.reduce((accumulator, currentValue) => {
//     // console.log(accumulator, currentValue)

//     let sum;
//     if (currentValue.passed === undefined) {
//         sum = accumulator + 2020 - currentValue.year;
//     } else {
//         sum = accumulator + currentValue.passed - currentValue.year;
//     }

//     return sum;
// }, initialValue);
// console.log(yearsLived);
// let oldguys = presidents.reduce((acc, val) => {
//     if(val.passed!='undefined') {
//         let age = 2020-val.first;
//         return acc + age;
    // let age = 2020-acc.year;
    // let answer = (`${val.first} ${age}`);
    // return answer;
    // presidents.forEach((answer) => {
    //     console.log(`${val.first} ${age}`)
    // })
// }}, 0);
// console.log(oldguys);

// const orderedPrezes = presidents.sort((a,b) => {
//     // console.log('a: ', a, 'b: ', b);
//     if (a.year > b.year) {
//         // console.log('a: ', a.last);
//         // console.log('b: ', b.last);
//         return 1
//     } else {
//         return -1
//     }
// });
// console.log(orderedPrezes)


// CHALLENGE: use .sort() to get oldest to youngest
// function compare(a, b) {
//     const yearA = a.year;
//     const yearB = b.year;
//     let comparison = 0;
//     if (yearA > yearB) {
//         comparison = 1;
//     } else if (yearA < yearB) {
//         comparison = -1;
//     }
//     return comparison;
// }
// console.log(presidents.sort(compare));

// // invert the comparision value to get youngest to oldest (haha)
// function compare1(a, b) {
//     const yearA = a.year;
//     const yearB = b.year;
//     let comparison1 = 0;
//     if (yearA > yearB) {
//         comparison1 = 1;
//     } else if (yearA < yearB) {
//         comparison1 = -1;
//     }
//     return comparison1*-1;
// }

// console.log(presidents.sort(compare1));
