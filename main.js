let count = 0;

document.getElementById('getCount');

// Gets called when increment is clicked. Function increments the counter and calls the getCount() with new count.
function increment() {
    count += 1;
    document.getElementById("counter").innerHTML = `Counter: ${count}`;
    getCount();
}

// Gets called when decrement is clicked. Decrements the counter and calls getCount() with new count.
function decrement() {
    count -= 1;
    document.getElementById("counter").innerHTML = `Counter: ${count}`;
    getCount();
}

// Array of repositories.
let gitArray = [
    'eslint/eslint',
    'oakwood/front-end-questions',
    'babel/babel',
    'webpack/webpack',
    'storybooks/storybook',
    'facebook/react',
    'reactjs/redux',
    'expressjs/express'
  ];

// getCount() fetches from github api with corresponding count-index from gitArray.
// First if-condition handles error when repository in gitArray does not exist on github.
// Second if-condition handles error when count-index is out of bounds in regards to gitArray.
// Else-condition returns json from github api. 
function getCount() {
    fetch(`https://api.github.com/repos/${gitArray[count]}`)
    .then(function(response) {
        if (response.status !== 200 && count > 0 && count < gitArray.length) {
            alert(`There is no github repository matching "${gitArray[count]}".`)
            throw new Error("Not 200 response")
        } else if (count < 0 || count > gitArray.length-1) {
            alert(`There is no index in database matching number ${count}. Index goes from 0 to ${gitArray.length-1}.`)
            throw new Error("Not 200 response")
        } else {
            return response.json();
        } 
    })
    .then(function(json) {
        document.getElementById('fullName').innerHTML = `FULL NAME | ${json.full_name}`;
        document.getElementById('description').innerHTML = `DESCRIPTION | ${json.description}`;
        document.getElementById('stargazersCount').innerHTML = `AMOUNT OF STARS | ${json.stargazers_count}`;
        console.log(json.full_name, json.description, json.stargazers_count);
    })
    .catch((error) => {
        console.log('ERROR', error.message);
    })
    ;
    console.log(count);
}

