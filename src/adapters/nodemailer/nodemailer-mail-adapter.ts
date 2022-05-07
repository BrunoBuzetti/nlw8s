import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7b275599a90918",
      pass: "7baa1660842989"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipo Feedget <oi@feedget.com>',
            to: 'Bruno Buzetti <bruno1108@hotmail.com>',
            subject,
            html: body,
            /*[
                `<div style="font-family: sans-serif; font-size: 16px: color: #111;">`,
                `<p>Tipo: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `<div>`,
            ].join('\n')*/
        })
    }
}