const express = require('express')
const {usermodel} = require('./model/user')
const {userRouter} = require('./router/userRouter')
// const { adminRouter } = require('./router/admin')

const app = express()
const port = 3000


app.use(express.json())

app.use('/api1',userRouter)

// app.use('/api2',adminRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})