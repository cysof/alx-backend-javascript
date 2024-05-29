// 5-photo-reject.js

/**
 * Uploads a photo with the given file name.
 *
 * @param {string} fileName - The name of the file to be uploaded.
 * @return {Promise} A promise that rejects with an error indicating that the file cannot be processed.
 */
export default function uploadPhoto(fileName) {
    return Promise.reject(new Error(`${fileName} cannot be processed`));
  }