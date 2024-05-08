import express from "express"
import morgan from "morgan"
import cors from "cors"
import routeAuthor from './app/authors/routes.js'
import routerBook from "./app/books/routes.js"
import routerCat from "./app/categorys/router.js"

const app = express()
const PORT = process.env.PORT || 5000

const main = async ()=>{
    app.use(express.json())
    app.use(morgan("dev"))
		app.use(cors())
    app.use('/api/', routeAuthor)
    app.use('/api/', routerBook)
    app.use('/api/', routerCat)
    app.listen(PORT, console.log("startet"))
}

main()