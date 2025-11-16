// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-thank-you',
//   imports: [],
//   templateUrl: './thank-you.html',
//   styleUrl: './thank-you.css',
// })
// export class ThankYou {

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  templateUrl: './thank-you.html',
  styleUrls: ['./thank-you.css'],
})
export class ThankYouComponent {
  name = ''; // optional: show user's name if you pass it
  constructor(private router: Router) {}

  // Example: go back to home or open mail client
  goHome() {
    this.router.navigate(['/']);
  }

  sendResumeEmail() {
    // opens the user's default mail client with prefilled to, subject, body
    const to = 'join@thetannmanngaadi.org';
    const subject = encodeURIComponent('Application: GitHub link & Resume');
    const body = encodeURIComponent(
      `Hello Team The Tann Mann Foundation,\n\nPlease find my GitHub link and attached resume.\n\nGitHub: https://github.com/your-username\n\nRegards,\nYour Name`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }
}
