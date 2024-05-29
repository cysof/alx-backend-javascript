#!/usr/bin/node

/**
 * Sign up a user with the given first name and last name.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @return {Promise<Object>} A promise that resolves to an object containing the user's first name and last name.
 */
function signUpUser(firstName, lastName) {
    return new Promise((resolve) => {
        if (firstName && lastName){
            resolve({firstName, lastName});
        }
    });
}
export default signUpUser;