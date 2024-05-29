#!/usr/bin/node

/**
 * Executes two download tasks concurrently and returns a Promise that resolves
 * or rejects as soon as one of the tasks completes.
 *
 * @param {Promise} chinaDownload - A Promise that represents the download task for China.
 * @param {Promise} USDownload - A Promise that represents the download task for the US.
 * @return {Promise} A Promise that resolves or rejects as soon as one of the tasks completes.
 */
export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]);
  }