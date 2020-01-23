fetch('https://rickandmortyapi.com/api/character').then(function(results){
    return results.json();
}).then(function(json) {
    console.log(json.results),
    console.log(json.results[0].image)
    imageOne.src=(json.results[0].image),
    imageTwo.src =(json.results[1].image);
    // userImage.src =(json.results['x'])
}
)

// new code   userimage




// use index number to identify
// var img = document.createElement('img');

// var para2 = document.createElement('p');




// function displayData(json) {
//     console.log()
