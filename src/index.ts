import endent from 'endent';

export const firstName = 'Sebastian';

export const lastName = 'Landwehr';

export const name = `${firstName} ${lastName}`;

export const street = 'Breite Str. 20';

export const postalCode = '53111';

export const city = 'Bonn';

export const address = endent`
  ${name}
  ${street}
  ${postalCode} ${city}
`;

export const phoneNumber = '+49 177 5055641';

export const email = 'info@sebastianlandwehr.com';
