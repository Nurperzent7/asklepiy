# NurlyKoz — clean-room notes

Source studied: https://asiakoz.com/ (public pages only, 2026-10-29).

Core loop of the original: pick a city, read a service or doctor, continue in WhatsApp.

This build keeps the loop (city, service, doctor, visit) and changes the weak parts:

- slot request on the site
- price band before the visit
- empty states when a service is not in that city
- urgent symptoms separated from routine booking
- original names, copy, addresses, and mark

Out of scope: their brand, doctor identities, Instagram videos, phone numbers, 2GIS pins, and the long SEO landing pages per disease per city.

Next product step if this becomes real: confirm bookings in a queue, not sessionStorage.
