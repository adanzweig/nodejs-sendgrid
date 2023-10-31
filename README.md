# SendGrid Email Sender

This project allows you to send emails using SendGrid's API. It's a simple Node.js script that showcases how you can send emails programmatically using SendGrid.

## Prerequisites

- Node.js installed on your machine.
- A SendGrid account and an API key. You can sign up [here](https://sendgrid.com/).

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/adanzweig/nodejs-sendgrid.git
   cd nodejs-sendgrid
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     SENDGRID_KEY=your_sendgrid_api_key
     FROM=your_verified_email_address
     ```
   Replace `your_sendgrid_api_key` with your SendGrid API key and `your_verified_email_address` with a verified email address on SendGrid.

## Usage

To send an email, simply run:

```bash
node [your-filename].js
```

By default, the script sends an email to `your email` with the subject "You are awesome" and the body "Your channel is great". You can modify these parameters directly in the script to customize the email content.

## Error Handling

The script logs any errors that occur during the email sending process to the console. Ensure that you've set up your SendGrid API key correctly and that the 'from' email address is verified on SendGrid.

## Contributing

If you'd like to contribute to this project, please create a pull request with your proposed changes.

## License

This project is open-sourced under the MIT License.