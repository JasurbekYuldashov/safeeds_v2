import { Body, Controller, Post } from '@nestjs/common';
import transporter from '../shared/transporter';

@Controller('email')
export class EmailController {
  @Post('/send')
  async sendEmail(@Body() body: any) {
    const mailOptions = {
      from: 'contact@safeeds.us',
      to: body.email,
      subject: body.subject,
      html: body.body,
    };
    const a = await transporter()
    const send = await a.sendMail(mailOptions);
    return send;
  }
}
