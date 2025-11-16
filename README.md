Thank You Angular App

A minimal, lightweight Angular application built for a simple assignment requirement:
display a clean, centered "Thank You" page using Angular (v17+ standalone).

This project focuses on clarity, correctness, and simplicity — no unnecessary files, no extra modules.

🚀 Features

✔ Single Thank You page
Clean UI with a centered message.

✔ Angular Standalone Components
No NgModule usage — modern Angular setup.

✔ Simple routing
Root path (/) loads the Thank You component directly.

✔ Ready for GitHub Pages deployment
Build + deploy steps included.
```
🗂 Project Structure
thank-you-app/
├── README.md
├── angular.json
├── package.json
└── src/
    ├── main.ts
    └── app/
        ├── app.routes.ts
        └── pages/
            └── thank-you/
                ├── thank-you.component.ts
                ├── thank-you.component.html
                └── thank-you.component.css
```
🔧 Installation

Install dependencies:

npm install


Run the development server:

ng serve


Open the app at:

http://localhost:4200/

▶️ Build & Deploy to GitHub Pages

Build the production bundle:

ng build --output-path dist/thank-you-app --base-href /thank-angular/


Deploy using the Angular GitHub Pages tool:

npx angular-cli-ghpages --dir=dist/thank-you-app


Then enable GitHub Pages:

Repo → Settings → Pages → Branch: gh-pages


Your hosted URL will be:

https://<your-username>.github.io/thank-angular/

🎨 Component Overview

thank-you.component.html

<div class="container">
  <h1>Thank You!</h1>
  <p>Your submission has been received.</p>
</div>


thank-you.component.css

.container {
  text-align: center;
  margin-top: 120px;
  font-family: Arial, sans-serif;
}

📄 License

Free to use and modify.