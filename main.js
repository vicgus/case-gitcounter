let count = 0;

document.getElementById('getCount');

function increment() {
    count += 1;
    document.getElementById("counter").innerHTML = `Counter: ${count}`;
    getCount();
}

function decrement() {
    count -= 1;
    document.getElementById("counter").innerHTML = `Counter: ${count}`;
    getCount();
}

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

