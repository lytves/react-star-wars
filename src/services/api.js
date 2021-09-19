import {HTTP, HTTPS} from "@constants/api";
import * as url from "url";
// way 1: Promises
// const getApiResource = (url) => {
//     fetch(url)
//         .then(response => response.json())
//         .then(body => console.log(body))
//         .catch(error => console.error(error.message))
//
//
// }

/**
 * Changes URL protocol from http to https
 * @param {String} url income
 * @returns {String} url edited
 */
export const checkProtocol = (url) => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

export const changeHttp = (url) => {
    if (url && url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }
    return HTTP;
}

/**
 * Send a fetch request
 * @param {String} url
 * @returns {Promise<boolean|any>} request result
 */
// way 2 async-await
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw {'message': res.status}
        }
        return await res.json()
    } catch (error) {
        console.error('Fetch failed:', error.message || error.status)
        throw 'getApiResource error'
    }
}

// way 1: Promises
// getApiResource(SWAPI_ROOT + SWAPI_CHARACTERS)
//      .then(o => console.log(o))

// way 2 async-await
// (async () => {
//     const characters = await getApiResource(SWAPI_ROOT + SWAPI_CHARACTERS)
//     console.warn(characters);
// })()
//

export const makeConcurrentRequest = async (urls) => {
    const promisesRes = await Promise.all(urls.map(res => {
        return fetch(res).then(res => res.json())
    }));
    return promisesRes
}
