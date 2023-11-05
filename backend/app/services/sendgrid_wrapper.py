import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

class SendGridWrapper:
    def __init__(self):
        self.sg_api = SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))

    def send_dummy_mail(self):
        message = Mail(
           from_email=os.environ.get('SENDER_EMAIL'),
            to_emails='to@example.com',
            subject='Sending with Twilio SendGrid is Fun',
            html_content='<strong>and easy to do anywhere, even with Python</strong>')
        try:
            response = self.sg_api.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            print(e) 