import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: false, 
  templateUrl: './partners.html',
  styleUrl: './partners.css'
})
export class PartnersComponent {
  partners = [
    { 
      company: 'Microsoft', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', 
      sponsorship: 'Platinum' 
    },
    { 
      company: 'Apple, Inc.', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', 
      sponsorship: 'Gold' 
    },
    { 
      company: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', 
      sponsorship: 'Silver' 
    },
    { 
      company: 'Google, Inc.', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', 
      sponsorship: 'Bronze' 
    }
  ];
}