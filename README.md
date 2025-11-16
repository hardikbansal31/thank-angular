Thank You Page – Angular

This is a simple Angular application that displays a Thank You page.
The project was created using the latest Angular (standalone components + modern routing).

Features

Minimal Angular setup

Standalone ThankYouComponent

Clean routing (Thank You page set as the home page)

Compatible with Angular v17+

Runs on Windows 11 Node.js environment

Project Structure
src/
 ├── app/
 │    ├── pages/
 │    │     └── thank-you/
 │    │            ├── thank-you.component.ts
 │    │            ├── thank-you.component.html
 │    │            └── thank-you.component.css
 │    ├── app.routes.ts
 │    ├── app.config.ts
 │    └── app.component.html
 └── main.ts

How to Run the Project
1. Install dependencies
npm install

2. Start the development server
ng serve

3. Open the app in a browser
http://localhost:4200/


You should see the Thank You page as the home page.

Routing

The app uses Angular’s standalone routing.

Routes are defined in app.routes.ts:

{ path: '', component: ThankYouComponent },
{ path: 'thank-you', component: ThankYouComponent },
{ path: '**', redirectTo: '' }

Technologies Used

Angular 17+

TypeScript

Standalone components

Vite-based Angular dev server (Angular CLI)