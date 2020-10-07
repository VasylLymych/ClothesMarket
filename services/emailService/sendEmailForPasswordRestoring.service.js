const {MAILER_TRANSPORT_DATA} = require('../../constant');
const {mailerTransport} = require('../../helpers');

module.exports = async (email,password) => {

    const {transport} = mailerTransport();

    await transport.sendMail({
        from: `ClothesMarket 🦷 ${MAILER_TRANSPORT_DATA.EMAIL} `,
        to: email,
        subject: 'Відновлення паролю',
        html: template()
    });

    function template() {
        return `<h1> Відновлення паролю </h1>
         <br>
         <p>Для входу на сайт ClothesMarket Вам надано новий пароль: ${password}.</p>`;
    }
};