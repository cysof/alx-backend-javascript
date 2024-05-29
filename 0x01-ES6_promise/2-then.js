#!/usr/bin/node

/**
 * Handles the response from the API.
 *
 * @param {Promise} promise - The promise representing the API request.
 * @return {Promise<Object>} A promise that resolves to an object containing the status and body of the API response.
 */
export default function handleResponseFromAPI(promise) {
    const objData = {
        status: 200,
        body: 'Success'};
    
    return promise
        .then(() => objData)
        .catch(() => objData)
        .finally(() => console.log('Got a response from the API'));
}