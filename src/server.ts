import express from "express"
import router from "./router"
import morgan from "morgan"

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.status(200).json({
        status: "The server is working and online."
    });
})

app.use('/api', router)

export default app