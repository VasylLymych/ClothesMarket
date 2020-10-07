const mailer = require('nodemailer');

const {MAILER_TRANSPORT_DATA: {EMAIL, PASSWORD}} = require('../constant')

module.exports = () => {

    const transport = mailer.createTransport({
        service: 'Gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });

    return {
        transport
    }
};