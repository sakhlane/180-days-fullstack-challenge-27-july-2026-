// question 1
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D"); 
//output :- A B C B

// question 2
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");

// output :- 1 5 3 4 2


// question 3
console.log("A");

setTimeout(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");

// output:- A E D B C


// Challenge 4: async/await + Event Loop
// ----------------------------------------

console.log("1");

async function test() {
    console.log("2");

    await Promise.resolve();

    console.log("3");
}

test();

console.log("4");

// output:- 1 2 4 3

// question 5

console.log("A");

async function test() {
    console.log("B");

    await Promise.resolve();

    console.log("C");

    setTimeout(() => {
        console.log("D");
    }, 0);

    console.log("E");
}

test();

Promise.resolve().then(() => {
    console.log("F");
});

console.log("G");

// output:- A B G F C E D


// question 6

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

async function test() {
    console.log("3");

    await Promise.resolve();

    console.log("4");

    Promise.resolve().then(() => {
        console.log("5");
    });

    console.log("6");
}

test();

Promise.resolve().then(() => {
    console.log("7");
});

console.log("8");

// output:- 1 → 3 → 8 → 4 → 6 → 7 → 5 → 2

