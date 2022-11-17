import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'safeed12341@gmail.com',
    clientId:
      '1037149241439-761olb4c8bppja86cqbrcbifm5qtigja.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken:
      '1//04eE2lXEj_tI3CgYIARAAGAQSNwF-L9Ir9tUZ4m2Y-DTQG5p56ty_wg04iyuhN9EvCvVLb2cmgEbTTzsc1fBqRSlut8wNwqe-o6I',
    accessToken:
      'ya29.a0AeTM1ie8RZ_Th_RQv6lQCSltAc9uBIKRpSfTeVFHthq74py7dhK1g424DKu6pK8XKZP_b53_fcZbvJMOXrFuDd6jtCthju-s-LwrprSMCryzXBzXmKR6H9j4NxZTS9ZHsB0FTLW1_Ex9_qfQMBAXLenmQfIcaCgYKAYUSAQ8SFQHWtWOmF2TvEvmaq6IOEYF8z5ePAg0163',
    expires: 1484314697598,
  },
});

export default transporter;
