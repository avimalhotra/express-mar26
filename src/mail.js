import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 587,                     // 465 for secure, 587 for non secure
    secure: false,
    auth: {
    // replace `user` and `pass` values 
    user: 'alias@example.com',
    pass: '12345678'
    }
});


async function main() {
      // send mail with defined transport object
    const info = await transporter.sendMail({
     from: '"Fred Foo 👻" ',        // sender address
     to: "bar@example.com, baz@example.com",         // list of receivers
     subject: "Hello There✔", // Subject line
     text: "Hello world?", // plain text body
     html: "<b>Hello world?</b>",        // html body
});
    
console.log("Message sent: %s", info.messageId);
      
// Message sent:   

}

main().catch(console.error);

