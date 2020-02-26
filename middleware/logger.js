// let's re-create the morgan middleware

module.exports = (format) => {

    return(req, res, next) => {
        const { ip, method, url } = req
        const agent = req.get("User-Agent")

        if (format === "short") {
            console.log(` ${method}, ${url}`)
        } else {
            console.log(`${ip},${method}, ${url}, ${agent}`)
        }
        next() //this middleware is done, move on to the next piece of middleware
    }
}