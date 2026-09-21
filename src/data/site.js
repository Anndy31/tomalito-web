// ---------------------------------------------------------------------------
// DATOS GENERALES DEL SITIO Y CONTACTO
// ---------------------------------------------------------------------------
// Edita estos valores una sola vez; se usan en el Header, Footer, botón
// flotante de WhatsApp y la página de Contacto.
// ---------------------------------------------------------------------------

export const siteInfo = {
  name: 'Tomalito',
  tagline: 'Uniformes que representan tu marca',
  whatsappNumber: '593995596363', // TODO: reemplaza por tu número real, formato internacional sin '+' ni espacios
  whatsappMessage: 'Hola, quiero más información sobre sus uniformes.',
  email: 'contacto@tomalito.com', // TODO: reemplaza por tu email real
  social: {
    tiktok: 'https://www.tiktok.com/@marca_tomalito',
  
  },
};

export function getWhatsappLink(message = siteInfo.whatsappMessage) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteInfo.whatsappNumber}?text=${text}`;
}
