// require("dotenv").config();
// const express = require("express");
// const nodemailer = require('nodemailer')
// // app.use(express.static(`${__dirname}/../public/`))
// const path = require("path");
// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json())
// const { SERVER_PORT, MAIL_USER, MAIL_PASSWORD} = process.env
// app.use(express.static(path.join(__dirname, "../build")));
// const transporter = nodemailer.createTransport({
//     service: 'gmail', 
//     auth: {
//         user: MAIL_USER,
//         pass: MAIL_PASSWORD
//     }
// })

// app.post('/api/email', (req, res) => {
//     console.log (req.body)
//     const { name, message, email } = req.body
//     console.log(name, message, email)
//     const mailOptions = {
//         from: FROM,
//         to: TO,
//         subject: `ALERT: email from ${name}`,
//         text: `from: ${email}, message: ${message}`

//     }
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error)
//             res.status(500).send(error.message)
//         }
//         else {
//             console.log(info)
//             res.sendStatus(200)
//         }
//     })
// })
// app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));


require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const { PORT: port } = process.env;

app.use(express.static(path.join(__dirname, "../build")));

app.listen(port, () => console.log(`Listening on port ${port}`));