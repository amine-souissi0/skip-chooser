# Skip Size Selector – React Challenge

This project is a modern, responsive, accessible React page for selecting skip sizes.  
It was built for a front-end technical challenge for WeWantWaste.

## Features

- Fetches live skip data from:  
  [https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)
- Modern, full-screen, and responsive design
- Custom progress bar with icons, including a company logo for "Postcode"
- Selectable skip cards with images, badges, and price display
- Accessible (keyboard/tab, ARIA, alt text)
- Handles loading, errors, and empty state gracefully

## Install & Run Locally

1. **Clone this repo**  
git clone https://github.com/amine-souissi0/skip-chooser.git
cd skip-chooser


2. **Install dependencies**  
npm install


3. **Add the required images to `src/assets/`:**
- `skip.png` – the skip bin image
- `logo_icon.png` – the company logo for the progress bar

4. **Start the app**  
npm start

nginx

or  
npm run dev



## Design & Approach

- The code is fully componentized for readability and reusability.
- All styles are handled with inline CSS-in-JS for a quick setup and easy tweaks.
- Card selection, progress steps, and error handling are implemented with user experience and accessibility in mind.
- No UI frameworks are used (only React and Axios).

## Extra

- **Keyboard navigation** is fully supported (tab/select/enter/space).
- **Error and loading states** are visually handled for a polished user experience.
- "Permit" info section has been removed as requested.

---

## Submission Checklist

- [x] All required images are in `src/assets/` (`skip.png`, `logo_icon.png`)
- [x] The app runs locally with `npm start` or `npm run dev`
- [x] README.md is filled out
- [x] The design is responsive (works on desktop and mobile)
- [x] Progress bar and steps match requirements
- [x] Skip cards look clean and selectable
- [x] No extra permit info is shown
- [x] Handles loading, error, and empty data
- [x] No console errors or warnings in the browser
- [x] The repository is public and pushed to GitHub

**Optional (for extra points):**
- [ ] A deployed live demo (Vercel, Netlify, etc.) is provided
- [ ] A screenshot or GIF is in the README

---

_Challenge by WeWantWaste._  
_Developed by Amine Souissi – aminisouissi@gmail.com 
