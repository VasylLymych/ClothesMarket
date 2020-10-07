const {MAILER_TRANSPORT_DATA} = require('../../constant');
const {mailerTransport} = require('../../helpers');

module.exports = async (email, firstName, lastName) => {

    const {transport} = mailerTransport();

    await transport.sendMail({
        from: `ClothesMarket 🦷 ${MAILER_TRANSPORT_DATA.EMAIL} `,
        to: email,
        subject: 'Успішна рєєстрація',
        html: template()
    });

    function template() {
        return `<h1> Успішна рєєстрація </h1>
         <br>
         <p>Вітаємо, ${firstName} ${lastName}.Ваша реєстрація на сайті ClothesMarket пройшла успішно.</p>`;
    }
};