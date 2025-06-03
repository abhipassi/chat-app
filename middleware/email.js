import { transporter } from "./emailconfig.js";
import { Verification_Email_Template } from "./emailtemplate.js";

export const sendVerificationCode = async (email, verificationCode) => {
    try {

        const response = await transporter.sendMail({
            from: '"Chatterbox" <chatterboox436@gmail.com>',
            to: email,
            subject: "Email Verification",
            text: "Hello world?", // plain‑text body
            html: Verification_Email_Template.replace("{verificationCode}",verificationCode), // HTML body
        });
        console.log('Email sent',response)
    } catch (error) {
        console.log(error)
    }
}