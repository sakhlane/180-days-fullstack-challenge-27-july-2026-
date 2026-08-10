/**
 * Method	Rule
Promise.all()	Wait for all to fulfill. If one rejects → reject immediately.
Promise.allSettled()	Wait for all, whether fulfilled or rejected.
Promise.race()	The first settled promise wins (fulfilled or rejected).
Promise.any()	Ignore rejected promises and return the first fulfilled promise. If all reject → AggregateError.
 */

/* 1. Promise.all()

Waits for all promises to fulfill. If one rejects, it rejects immediately. */

const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

// ["HTML","CSS","JavaScript"]
/*
2. Promise.allSettled()

Waits for all promises, whether they fulfill or reject.
*/
const p1 = Promise.resolve("HTML");
const p2 = Promise.reject("CSS Error");
const p3 = Promise.resolve("JavaScript");

Promise.allSettled([p1, p2, p3])
.then((result) => {
    console.log(result);
});

/*
[
  { status: "fulfilled", value: "HTML" },
  { status: "rejected", reason: "CSS Error" },
  { status: "fulfilled", value: "JavaScript" }
]
*/

/**
 * 3. Promise.race()

Returns the first promise that settles (fulfilled or rejected).
*/
const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("HTML"), 3000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("CSS"), 1000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("JavaScript"), 2000);
});

Promise.race([p1, p2, p3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
 //CSS
/*
 4. Promise.any()

Ignores rejected promises and returns the first fulfilled promise.
*/
const p1 = Promise.reject("HTML Error");

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("CSS"), 2000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("JavaScript"), 1000);
});

Promise.any([p1, p2, p3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
// JavaScript


// -------------------------------------------------
/**
 * 🧠 One-Line Revision
Method	Memory Trick
Promise.all()	All must succeed.
Promise.allSettled()	Wait for everyone.
Promise.race()	First to finish wins.
Promise.any()	First success wins.
🎯 Easy way to remember
✅ Promise.all() → "Everyone must pass."
✅ Promise.allSettled() → "Tell me everyone's result."
✅ Promise.race() → "Whoever finishes first wins."
✅ Promise.any() → "Keep trying until someone succeeds."
 */