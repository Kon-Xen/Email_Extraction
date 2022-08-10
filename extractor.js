//open the file

/// parse it to an array , divided by space.

let fs = require('fs');
let counter = 0;

function lookforDomain(item) {

    console.log(item);

    if (item.split("softwire.com")) {
        counter += 1;
    }
}


try {
    const data = fs.readFileSync('./test.txt', 'utf8');
    // let test = data.split(" ");
    let pattern = /([a-zA-Z0-9._-]+@softwire\.com )/gim;
    console.log([data.match(pattern)]);

    // a) for each of the indices look for "softwire.com "
    // test.forEach( lookforDomain() );

    // b) do a regex thingy for "softwire.com"
    // console.log(test);
} catch (err) {
    console.error(err);
}


// console.log(data);


// let fileContents = data.split(" ");
//
// fileContents.forEach( show );
//
// function show(content){
//     console.log(content);
// }

// console.log(counter);
