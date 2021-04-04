const transporter = require('../config')

const sendRoute = (req, res) => {
  try {
    const { nombreApellido, email, mensaje } = req.body;

    const mailOptions = {
      from: `FORMULARIO CONTACTO WEB_NO-REPLY contacto@titanesfc.cl`,
      to: 'contacto@titanesfc.cl',
      subject: `Tienes un nuevo mensaje de contácto de ${nombreApellido} `,
      html: `
      <p>Tienes un nuevo mensaje de contácto de:</p>
      <h3>Detalles del contácto</h3>
      <ul>
        <li>Name: ${nombreApellido}</li>
        <li>Email: ${email}</li>
        <li>Mensaje: ${mensaje}</li>
      </ul>
      `,
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Algo salió mal!, intenta luego.',
          error: err
        })
      } else {
        res.status(200).send({
          success: true,
          message:
            'Gracias por comunicarte con nosotros, en breve nos contactaremos contigo.',
        })
      }
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Algo salió mal, ¡por favor intenta nuevamente!',
    })
  }
}

module.exports = sendRoute;