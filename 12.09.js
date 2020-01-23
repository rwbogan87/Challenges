// My answer, doesn't work with more than 1 word

function pigLatin(test) {
    test = test.toLowerCase()
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelIndex = 0;
  
    if (vowels.includes(test[0])) {
      return test + "ay";
    } else {
      for (let char of test) {
       if (vowels.includes(char)) {
         vowelIndex = test.indexOf(char);
        //  console.log(vowelIndex);
        //  console.log(test);
          break;
        } 
      }
      return (test.slice(vowelIndex)) + (test.slice(0, vowelIndex)+"ay");
    }
  }

  console.log(pigLatin('football'))

// Zach's answer below___

  let sampleString = 'pig latin';

  function pigLatin(str) {
      // splitting our string by word (remember that the .split() method returns our new substring in an array), and storing that new array in a wordsArray variable ---> ['pig', 'latin']
      let wordsArray = str.split(' '); // - also show with .trim()
      // console.log(wordsArray);
  
      // using the forEach method on our wordsArray ---> forEach method is looping over each word in our new wordsArray variable - forEach runs once FOREACH element in an array. So what is the first word forEach is looking at? 'peter'. Notice we're also passing in our optional parameter of index here. We will use this in a bit
      wordsArray.forEach((word, index) => {
  
          // taking the word our forEach is looking at ('pig' during the first iteration of forEach), and using the split method to separate it into individual letters
          let lettersArray = word.split('');
          // console.log(lettersArray);
  
          // while statememt creates a loop that executes a block of code as long as the test condition evaluates to true. Our while loop is checking the first index (so the first letter) in our lettersArray and checking if it's NOT equal to a vowel
          while (lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o' && lettersArray[0] !== 'u') {
              // if the word does not begin with a vowel, we are pushing the first index of our array (p in this case) to the array. Remember that when we use the push method that what we push gets added on to the end of the array
              lettersArray.push(lettersArray[0]);
              // we are then removing the first item in our array using the shift method. Our lettersArray is currently ['i', 'g', 'p']
              lettersArray.shift();
          };
  
          // using the push method again to add the string of 'ay' as another item in our array
          lettersArray.push('ay');
          // grabbing our wordsArray and it's 0th index (index is coming from our forEach method), and setting the value of index 0 equal to our lettersArray. Remember that our lettersArray was an array of each individual character of our word, so we're using the .join method to concatenate each value together
          wordsArray[index] = lettersArray.join('');
  
      });
      // returning our wordsArray and again using the .join method. Notice that we have an empty space in our join method this time. Before we were concatentating each string, now we're concatening each word.
      return wordsArray.join(' ');
  
  }
  
  // console.log(pigLatin(sampleString));
  
  // declaring a new variable of pigString and initalizing it as our function, and passing in our sampleString variable to pass to the function. Remember that when we use the return keyword in our function that, since we're returning something, it's best practice to declare a new variable that we can store the return value in
  let pigString = pigLatin(sampleString);
  console.log(pigString);