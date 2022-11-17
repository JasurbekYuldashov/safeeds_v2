import { Body, Controller, Post } from '@nestjs/common';
import transporter from '../shared/transporter';

@Controller('email')
export class EmailController {
  @Post('/send')
  async sendEmail(@Body() body: any) {
    const mailOptions = {
      from: 'safeed12341@gmail.com',
      to: body.email,
      subject: body.subject,
      html: body.body,
    };
    const send = await transporter.sendMail(mailOptions);
    return send;
  }
}
