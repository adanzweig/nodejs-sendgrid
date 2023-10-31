// Include the SendGrid mail module
const sendgrid = require('@sendgrid/mail');
// Include the dotenv module to load environment variables from a .env file into process.env
require('dotenv').config();

// Define an asynchronous function to send an email
async function sendMail(to, from, subject, body){
    try{
        // Set the SendGrid API key from the environment variable
        sendgrid.setApiKey(process.env.SENDGRID_KEY);
        // Await the send method from the sendgrid to complete the email sending
        const email = await sendgrid.send({
            to,        // The recipient's email address
            from,      // The sender's email address, must be verified with SendGrid
            subject,   // The subject of the email
            text: body // The plain text body of the email
        });
        // Return the response from the sendgrid after successful sending
        return email;
    }catch(error){
        // If an error occurs, log it to the console
        console.error('Error:', error.response.body);
    }
}

// Immediately-invoked Function Expression (IIFE) to use async/await at the top level
(async()=>{
    // Call the sendMail function with the recipient's email, sender's email (from environment variables), subject, and body of the email
    const emailResponse = await sendMail('adanzweig@gmail.com', process.env.FROM, 'You are awesome', 'Your channel is great');
    // Log the response from the sendMail function
    console.log(emailResponse);
})()
