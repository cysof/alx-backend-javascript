#!/usr/bin/node

import {uploadPhoto, createUser } from './utils';

/**
 * Handles the profile signup process by uploading a photo and creating a user.
 *
 * @return {Promise} A promise that resolves with an array containing the uploaded photo information and user information.
 *                   The resolved array is used to log the uploaded photo body, first name, and last name.
 *                   If there is an error, the promise is rejected and a message is logged indicating that the signup system is offline.
 */
export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])

    .then((info) => {
        console.log(`${info[0].body} ${info[1].firstName} ${info[1].lastName}`);
    })
    .catch((error) => {
        console.log('Signup system offline');
    });

}