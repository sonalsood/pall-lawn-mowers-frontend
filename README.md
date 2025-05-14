# 🌱❄️ Pall Lawn Mowers and Renovations – Website Project - Pallscape

A responsive, professional website built with React and Tailwind CSS for Pall Lawn Mowers and Renovations. Designed to showcase residential and commercial services, streamline quote requests, and provide a clean, trustworthy online presence.

---

## 🚀 Live Demo

> Coming soon – will be deployed via Vercel or Netlify.

---

## 🧰 Tech Stack

- **Frontend**: React + SASS
- **Forms & Email**: Formspree or EmailJS
- **Hosting**: Netlify / Vercel / GitHub Pages

---

## 📄 Website Structure

### `/` Home

- Clean hero section with headline, subtext, and CTA
- Snapshot of key services with icons or images
- Why Choose Us: 3–4 value props
- Customer testimonials
- Footer with contact and quick links

### `/services`

- Individual cards for each service with title, image/icon, and short description:
  - Lawn Mowing & Maintenance
  - Landscaping
  - Home Renovations (Interior/Exterior)
  - Snow Removal
  - Spring & Fall Cleanup

### `/quote`

- Simple, professional form for lead capture:
  - Name, Email, Phone
  - Services interested in (checkboxes)
  - Description of work
  - Preferred contact method
  - Submit → sends email to business inbox

### `/gallery`

- Before/After slider or grid layout
- Filter by category: Lawn, Landscaping, Renovation, Snow

### `/about`

- Company history and values
- Areas served
- Mission and commitment to quality

### `/contact`

- Phone, Email, optional Google Maps
- Simple contact form (mirrors quote form)

---

## ✨ Features

- Fully responsive and mobile-friendly
- Fast, accessible, and SEO-aware
- Direct email integration (no backend)
- Clean, modern visuals with natural tones
- Optimized for trust-building and lead generation

---

## ✨ Features

- Mobile-first responsive design
- Accessible and fast
- Clean, modern interface
- Simple call-to-actions
- Direct email integration (no backend required)

---

## ✉️ Quote Form Email Setup

Choose one:

### Option 1: **Formspree** (No backend)

```js
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

### Option 2: \*\*EmailJS (From frontend)

```js
npm install emailjs-com

import emailjs from 'emailjs-com';
emailjs.sendForm('service_id', 'template_id', formRef.current, 'user_id');
```

## React Components

Header – Navigation links + CTA button
Hero – Tagline, image, and quote CTA
ServiceCard – Reusable component for each service
QuoteForm – For project inquiries
TestimonialSection – Optional carousel or static layout
GalleryGrid – Project showcase
Footer – Contact details + quick links

## Folder Structure

src/
│
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Hero.jsx
│ ├── ServiceCard.jsx
│ ├── QuoteForm.jsx
│ ├── TestimonialSection.jsx
│ └── GalleryGrid.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Services.jsx
│ ├── About.jsx
│ ├── Gallery.jsx
│ ├── Contact.jsx
│ └── Quote.jsx
│
├── App.jsx
└── index.js
