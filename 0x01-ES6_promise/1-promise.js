#!/usr/bin/node

// using the prototype below, return a promise

/**
 * Returns a promise that resolves with an object containing the status and body of the API response.
 *
 * @param {boolean} success - Indicates whether the API call was successful or not.
 * @return {Promise<Object>} A promise that resolves with an object containing the status and body of the API response.
 *                            If the API call was not successful, the promise is rejected with an Error object.
 */
export default function getFullResponseFromAPI(success) {
    const getpromiseResponse = new Promise((resolve, reject) => {
      if (success === true) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  
    return getpromiseResponse;
  }