// way 1: Promises
// const getApiResource = (url) => {
//     fetch(url)
//         .then(response => response.json())
//         .then(body => console.log(body))
//         .catch(error => console.error(error.message))
//
//
// }

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
        return false
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
