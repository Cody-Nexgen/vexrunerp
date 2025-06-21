Minecraft Roleplay Casting Website

This repository contains a simple static website used to recruit voice and body actors for a Minecraft roleplay project. The website is fully client side and requires no backend code. It includes animations, a call to action button, and a popup form using [Tally](https://tally.so/).

## Getting Started

1. Clone the repository or download the files.
2. Open `index.html` in a modern web browser. No other setup is required.

## How It Works

The site consists of three files:

- `index.html` – the main page with the Tally popup integration
- `style.css` – styles and basic animations
- `script.js` – a small script to reveal elements on scroll

The Tally widget script is loaded in the `<head>` of `index.html` so that clicking the **Apply Now** button opens the form as a popup. You can also trigger the form using URL hashes or by calling `Tally.openPopup()` from JavaScript, as described below.

### Popup Usage

- **Button Attributes** – the button in the page has `data-tally-open="3jqX5R"` plus extra attributes for an emoji label and animation. When clicked, Tally displays the embedded form.
- **URL Hash** – you may also create a link to `#tally-open=3jqX5R` in order to open the popup on page load or when a link is clicked.
- **JavaScript API** – advanced behavior can be implemented with `window.Tally`. For example:

```html
<script>
Tally.openPopup('3jqX5R', { layout: 'modal' });
</script>
```

For full documentation see [Tally](https://tally.so/).

## Reposting or Hosting This Site

1. Fork this repository or clone it to your machine.
2. Do not make too many changes (branding, styling, or content).
3. Upload the files to any static web host (GitHub Pages, Netlify, Vercel, or your own server).
4. Ensure the form ID (`3jqX5R`) remains in place so that submissions go to the correct Tally form.

### GitHub Pages Example

1. Fork the repo on GitHub.
2. In repository settings, enable GitHub Pages and point it to the `main` branch.
3. Your site will be available at `https://<username>.github.io/<repository>/`.

## Joining the Roleplay

1. Visit the site and click **Apply Now**.
2. A popup form will appear asking for your details and experience.
3. Submit the form; the team will review your application and contact you if you are a match.

### Tips for Applicants

- Have a working microphone if you are applying as a voice actor.
- Make sure your computer can run Minecraft with mods if required.
- Be ready to commit time for recording sessions.

## Project Structure

```
.
├── README.md   <-- this file
├── index.html  <-- main webpage with popup
├── style.css   <-- page styles and animation
└── script.js   <-- scroll reveal script
```

## Customization

- **Colors & Fonts** – edit `style.css` to match your branding.
- **Form** – change the form ID in `index.html` (and optionally `script.js`) if you have a different Tally form.
- **Animations** – the `.animate` class causes content to fade in when scrolled into view. Add this class to any element you want animated.

## Credits

- HTML and CSS by Cody-Nexgen.
- Popup form powered by [Tally.so](https://tally.so/).

Enjoy building your Minecraft roleplay community!