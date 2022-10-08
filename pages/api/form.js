import { formatVill, formatContact } from "../../utils/api/form";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

// todo:
// catch bad requests

export default async (req, res) => {
  let body = "";
  console.log(req.body);
  try {
    body = JSON.parse(req.body);
  } catch (error) {
    return res.status(400).json({
      status: "400 Bad request",
      message: "Could not parse requst body",
    });
  }
  if (
    !body.name &&
    !body.email &&
    !body.phone &&
    !body.veta &&
    !body.boka &&
    !body.contactmail &&
    !body.contactphone
  ) {
    return res.status(400).json({
      status: "Bad request",
      message: "Form arguments missing in body",
    });
  } else {
    const emailBody = `Avsändare: ${body.name}\r\nEpost: ${
      body.email
    }\r\nTelefonnummer: ${
      body.phone
    }\r\n\r\nVill bli kontaktad via: ${formatContact(
      body
    )}\r\n\r\nÖnskar att: ${formatVill(body)}\r\n\r\nMeddelande: ${
      body.meddelande
    }`;

    try {
      await mail.send({
        to: "info@panelkraft.nu",
        from: "info@panelkraft.nu",
        subject: "Panelkraft: Ny intresseanmälan!",
        text: emailBody,
        html: emailBody.replace(/\r\n/g, "<br>"),
      });
      console.log("server runs send function");
    } catch (error) {
      console.log(error);
      error.response && console.log(error.response.body);
    }
    return res.status(200).json({ status: "Ok" });
  }
};
