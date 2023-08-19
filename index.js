const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: '',
    port: 587,
    secure: false,
    auth:{

    }
});

transport.sendMail({
    from: "",
    to: "",
    subject: "",
    text: "",
})