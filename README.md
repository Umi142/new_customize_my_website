## Technical Validation Notes

### HTML Validation
Running `index.html` through the W3C Validator will yield errors related to attributes starting with `@`, `:`, or `v-`. 
- **Reason:** These are **Vue.js directives** used to fulfill **Requirement #13** (Dynamic Guestbook/Survey). 
- **Status:** These are expected "false positives" in the validator as they are specifically for framework-level reactivity and do not break the semantic structure of the site.

### CSS Validation
The `style.css` file passes validation via the **W3C Jigsaw Validator (Direct Input)**. It utilizes modern Flexbox and Grid properties to ensure the Wix-inspired "Neo-Brutalism" design remains responsive across mobile and desktop views.
