import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false, 
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

  getGift() {
    alert('Congratulations! You have received a FREE Gift from the Organization!');
  }

}