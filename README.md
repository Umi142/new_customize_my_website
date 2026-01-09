# Project Documentation & Technical Notes

### **⚠️ Note on Guestbook Persistence**
**This project features a dynamic "Meow-Guestbook" built using Vue.js. Please be aware that because this site is hosted on GitHub Pages, it is a static website. Comments are stored in the browser's temporary memory (RAM) while you are on the page. Consequently, data is NOT permanent and will be cleared upon refreshing the page or closing the browser. GitHub Pages does not provide a backend database to store and sync comments between different users globally; permanent storage would require a backend integration like Firebase or Supabase.**

---

### ### HTML Validation
Running `index.html` through the W3C Validator will yield errors related to attributes starting with `@`, `:`, or `v-`. 
- **Reason:** These are **Vue.js directives** used to fulfill **Requirement #13** (Dynamic Guestbook/Survey). 
- **Status:** These are expected "false positives" in the validator as they are specifically for framework-level reactivity and do not break the semantic structure of the site.

### CSS Validation
The `style.css` file passes validation via the **W3C Jigsaw Validator (Direct Input)**. It utilizes modern Flexbox and Grid properties to ensure the Wix-inspired "Neo-Brutalism" design remains responsive across mobile and desktop views.
