let count = 0;

document.getElementById('getCount')

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
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        document.getElementById('full_name').innerHTML = `Name | ${json.full_name}`;
        document.getElementById('description').innerHTML = `Description | ${json.description}`;
        document.getElementById('stargazers_count').innerHTML = `Stargazers count | ${json.stargazers_count}`;
        console.log(json.full_name, json.description, json.stargazers_count);
    })
    .catch((err) => {
        console.log('ERROR', err.message);
        document.getElementById('err_mess').innerHTML = `${json.full_name} Repository not found`;
    })
    ;
    console.log(count);
}









// for(let i=0; i < gitArray.length; i++)
//     fetch(`https://api.github.com/repos/${gitArray[i]}`)
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(data) {
//         document.getElementById('output').innerHTML = data;
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('ERROR', err.message);
//     })
//     ;





// for(let i=0; i < gitArray.length; i++)
//     fetch(`https://api.github.com/repos/${gitArray[i]}`)
//     .then(function(res) {
//         return res.json();
//     })
//     .then(function(json) {
//         document.getElementById('output').innerHTML = json;
//         console.log(json.full_name, json.description, json.stargazers_count);
//         const returnedArray = [json.full_name, json.description, json.stargazers_count];
//         console.log(returnedArray);
//         return returnedArray;
//         document.getElementById("repo").innerHTML = json.full_name, json.description, json.stargazers_count;
//     })
//     .catch((err) => {
//         console.log('ERROR', err.message);
//     })
//     ;