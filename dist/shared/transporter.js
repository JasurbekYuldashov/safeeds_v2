"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const googleapis_1 = require("googleapis");
const myOAuth2Client = new googleapis_1.google.auth.OAuth2('959357065242-up5obtkkdoj89bihkq92eq711htnh4l5.apps.googleusercontent.com', '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', 'https://developers.google.com/oauthplayground');
myOAuth2Client.setCredentials({
    refresh_token: '1//04jbqsKPpFe9cCgYIARAAGAQSNwF-L9Ir90RS04dKU0rM0IXExycKNjdS2TSZBQjy8azuIZZndLGzJXoxyOPrWtbSocE9Bd8dL7Y',
});
const transporter = async () => {
    var _a, _b;
    const myAccessToken = await myOAuth2Client.getAccessToken();
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'contact@safeeds.us',
            clientId: '959357065242-up5obtkkdoj89bihkq92eq711htnh4l5.apps.googleusercontent.com',
            clientSecret: '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',
            refreshToken: '1//04jbqsKPpFe9cCgYIARAAGAQSNwF-L9Ir90RS04dKU0rM0IXExycKNjdS2TSZBQjy8azuIZZndLGzJXoxyOPrWtbSocE9Bd8dL7Y',
            accessToken: (_b = (_a = myAccessToken === null || myAccessToken === void 0 ? void 0 : myAccessToken.res) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.accessToken,
            expires: 1484314697598,
        },
    });
};
exports.default = transporter;
//# sourceMappingURL=transporter.js.map