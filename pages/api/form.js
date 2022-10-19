// import { formatVill, formatContact } from "../../utils/api/form";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const form = async (req, res) => {
  let body = "";
  try {
    body = JSON.parse(req.body);
  } catch (error) {
    return res.status(400).json({
      status: "400 Bad request",
      message: "Could not parse request body",
    });
  }
  if (!body.name && !body.email && !body.phone && !body.address) {
    return res.status(400).json({
      status: "Bad request",
      message: "Form arguments missing in body",
    });
  } else {
    const emailBody = `
      Avsändare: ${body.name}\r\n
      Epost: ${body.email}\r\n
      Telefonnummer: ${body.phone}\r\n
      Adress: ${body.address}\r\n
      Meddelande: ${body.meddelande}`;

    try {
      await mail.send({
        to: "info@panelkraft.nu",
        from: "info@panelkraft.nu",
        subject: "Panelkraft: Ny intresseanmälan!",
        text: emailBody,
        html: emailBody.replace(/\r\n/g, "<br>"),
      });
    } catch (error) {
      console.log(error);
      error.response && console.log(error.response.body);
    }
    return res.status(200).json({ status: "Ok" });
  }
};

export default form;
