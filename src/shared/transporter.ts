import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

const myOAuth2Client = new google.auth.OAuth2(
  '959357065242-up5obtkkdoj89bihkq92eq711htnh4l5.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground',
);
myOAuth2Client.setCredentials({
  refresh_token:
    '1//04n5yqhMjngmXCgYIARAAGAQSNwF-L9IrIbFXk_bPiK8PleyWKN8CEoMcNraMtz9frylQil0K6fmQSVqR3v9W01PkaJgoHOdmn2A',
});

const transporter = async (): Promise<any> => {
  const myAccessToken = await myOAuth2Client.getAccessToken();

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'contact@safeeds.us',
      clientId:
        '959357065242-up5obtkkdoj89bihkq92eq711htnh4l5.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken:
        '1//04n5yqhMjngmXCgYIARAAGAQSNwF-L9IrIbFXk_bPiK8PleyWKN8CEoMcNraMtz9frylQil0K6fmQSVqR3v9W01PkaJgoHOdmn2A',
      accessToken: myAccessToken?.res?.data?.accessToken,
      expires: 1484314697598,
    },
  });
};
export default transporter;
