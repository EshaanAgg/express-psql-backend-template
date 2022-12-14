import express from "express"
import router from "./router"
import morgan from "morgan"
import cors from "cors"

import { protect } from "./modules/auth"
import { createNewUser, signin } from "./handlers/user"
import {createValidationRules, signinValidationRules,validate} from "./middleware/user"

const app = express();

app.use(cors())
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

app.use('/api', protect, router)
app.post('/user', createValidationRules(), validate,createNewUser)
app.post('/signin', signinValidationRules(), validate, signin)

export default app