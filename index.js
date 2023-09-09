const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: 'http://imap.secureserver.net/',
    port: 993,
    secure: false,
    auth:{

    }
});

transport.sendMail({
    from: "pedroecw2011@gmail.com",
    to: "",
    subject: "",
    text: "",
})

