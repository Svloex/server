require('dotenv').config()
const path = require('path')
const http = require('http')
const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
    //const { default: api } = require('./axios-parameter/instance-axios')
const { login } = require('./controller/request-with-axieos')
    //const PORT = 4000
    //const queryString = require('querystring')
const err_msg = chalk.bgKeyword('white').redBright
const success_msg = chalk.bgKeyword('green').white

const app = express()
app.listen(process.env.PORT, (err) => {
        console.log("start Svloex")
        err ? console.log('Ошибка', err) :
            console.log('Прослушиваю порт:', process.env.url_true, process.env.host, process.env.PORT)
    }

)
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    //credentials: true,
    origin: process.env.url_true,
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}))

app.post('/', async(req, res) => {
    const data = req.body
    console.log(success_msg('/', data, '/'))
    console.log('/', data, '/')
    try {
        console.log('apapapappa')
        const resData = await login(data)
        console.log('здесь', resData)
        return res.send(resData.data)
    } catch (error) {
        console.log(err_msg('тут', error))
        console.log('тут', error)
        if (error.response.status === 400) {
            return res.status(error.response.status).send(error.response.data)
        }
        return res.status(error.response.status).send(error.response.data.detail)
    }
})