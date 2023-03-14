import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent {


  @Input()
    sectionTitle: string;
  @Input()
    sectionText: string;
  @Input()
    sectionLink: string;
  @Input()
    CreateLink: string;
  
  constructor(){
    this.sectionTitle = ''
    this.sectionText = ''
    this.sectionLink = ''
    this.CreateLink = ''
  }


}
