Thank You Angular App
A simple and minimal Angular application that displays a centered "Thank You" message.

🚀 Features
Minimal Angular setup (standalone)

One reusable ThankYouComponent

Clean, centered layout using CSS

Easy to extend and integrate into other projects

🛠️ Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
Make sure you have the following software installed on your system (Windows 11):

Node.js: Download and install from nodejs.org (which includes npm).

Angular CLI: Install globally using npm:


npm install -g @angular/cli
Installation & Usage
Clone the repository (or download the files) and navigate into the project directory.


# git clone https://your-repo-url/thank-you-app.git
cd thank-you-app
Install dependencies: Run this command in the project's root folder to install all the required packages.


npm install
Run the development server: This command compiles the app and hosts it locally.


ng serve
View the application: Open your browser and navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

📦 Project Structure
Here is the basic structure of the application source:

thank-you-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── thank-you/
│   │   │       ├── thank-you.component.css     (Styles)
│   │   │       ├── thank-you.component.html    (Template)
│   │   │       └── thank-you.component.ts      (Logic)
│   │   └── app.routes.ts                       (Routing)
│   └── main.ts                                 (App entry point)
├── package.json
├── angular.json
└── README.md
📦 Build
Run ng build to build the project. The build artifacts will be stored in the dist/thank-you-app/ directory. This creates a production-ready version of your application.

ng build