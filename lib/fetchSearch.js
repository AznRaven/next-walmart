async function fetchSearch(searchTerm) {
    const username = process.env.OXYLABS_USERNAME
    const password = process.env.OXYLABS_PASSWORD

    const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`)

    const body = {
        source: 'universal_ecommerce',
        url: newUrl.toString(),
        geo_location: 'United States',
        parse: true,
    }
}