function verifyElementInArray(name, array) {
    for (const element of array) {
        if (element == name) {
            return true;
        }
    }
    return false;
}

export {
    verifyElementInArray
}