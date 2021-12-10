const checkAdmission = function (age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
};

const greeting = function (age) {
    if (checkAdmission(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greeting(25));
console.log(greeting(16));