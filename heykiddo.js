const checkAdmission = function (age) {
    if (age >= 18) {
        return "Hey kiddo";
    }
    else {
        return "Hello there";
    }

}
console.log(checkAdmission(16))