import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  cities = [
    {
      name: 'France',
      desc: 'The largest country in Western Europe, has long been a gateway between northern and southern regions.',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000'
    },
    {
      name: 'Seoul',
      desc: "City and capital of South Korea. A bustling metropolis where modern skyscrapers meet Buddhist temples.",
      imageUrl: 'https://www.learn-korean.net/Images/Korea/Seoul/Seoul1.jpg'
    },
    {
      name: 'San Francisco',
      desc: "A cultural and financial centre of the western United States and one of the country's most cosmopolitan cities.",
      imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000'
    },
    {
      name: 'Boston',
      desc: 'Best known for its rich history, Fenway Park, the Boston Marathon, and its world-class academic institutions.',
      imageUrl: 'https://tzassets.bestwestern.com/wp-content/uploads/2022/11/08220916/GettyImages-1269211791-1-1536x877.jpg'
    }
  ];
}
