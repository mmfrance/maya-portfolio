# Reverting to the previous design

If you don't like the new "modern / elegant" look, you can restore the previous design:

1. **Using Cursor**: Use **File → Local History** (or Cursor's undo history) to restore these files to their previous versions:
   - `tailwind.config.js`
   - `src/index.css`
   - `index.html`
   - `src/components/Navbar.jsx`
   - `src/pages/Home.jsx`
   - `src/pages/About.jsx`
   - `src/pages/Contact.jsx`
   - `src/pages/Projects.jsx`
   - `src/pages/Experience.jsx`
   - `src/pages/Certifications.jsx`
   - `src/pages/Leadership.jsx`
   - `src/pages/Skills.jsx`
   - `src/pages/Spotlight.jsx`

2. **Using Git** (if you set it up later):  
   `git checkout -- .` from the project root will revert all changes.
