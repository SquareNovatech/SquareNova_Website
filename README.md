# Square Nova TECH — Company Website

Modern, premium corporate website for **Square Nova TECH Private Limited**.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Framer Motion
- Lucide React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About, Services, Technologies, Industries, Why Us, Contact |
| `/about` | Company overview, mission, vision, values |
| `/services` | Detailed service listings |
| `/contact` | Full contact form and company info |
| `/privacy-policy` | Privacy policy |

## Project Structure

```
src/
├── components/
│   ├── home/          # Home page sections
│   ├── layout/        # Header, Footer, Layout
│   └── ui/            # Reusable UI components
├── data/
│   └── constants.js   # Company data & content
├── pages/             # Route pages
├── utils/             # Animations & helpers
├── App.jsx
├── main.jsx
└── index.css
```

## Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend.

1. Copy the example env file and add your credentials:

```bash
cp .env.example .env
```

2. Set your EmailJS values in `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. In your EmailJS template, use these variables: `{{name}}`, `{{email}}`, `{{phone}}`, `{{company}}`, `{{service}}`, `{{message}}`, `{{time}}`

4. Restart the dev server after changing `.env`.
