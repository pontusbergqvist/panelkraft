export const formatContact = (body) => {
  if (body.contactmail && body.contactphone) {
    return "Epost eller telefon.";
  } else if (!body.contactmail && !body.contactphone) {
    return "-";
  } else {
    return `${body.contactmail ? "Epost" : ""}${
      body.contactphone ? "Telefon" : ""
    }`;
  }
};

export const formatVill = (body) => {
  if (body.veta && body.boka) {
    return "Veta mer och boka platsbesök.";
  } else if (!body.veta && !body.boka) {
    return "-";
  } else {
    return `${body.veta ? "Veta mer" : ""}${
      body.boka ? "Boka platsbesök" : ""
    }`;
  }
};
