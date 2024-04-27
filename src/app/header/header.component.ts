import { Component,EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({

        transform:'scale(100%)'
      })),
      state('highlight', style({

        transform:'scale(0%,0%)'
      })),
      transition('normal => highlight', animate('300ms ease-in')),
      transition('highlight => normal', animate('300ms ease-out'))
    ],
      ),
      trigger('SearchBtnState',[state('searchNow',style({

      }))])
  ]
})
export class HeaderComponent {
  state = 'highlight';
  searchmode =true;
  @Output() search = new EventEmitter<string>();
  searchQuery: string = '';

  searchUsers() {

    this.search.emit(this.searchQuery);
  }
  toggleState()
  {
    this.state == 'normal'? this.state = 'highlight' : this.state = 'normal';
  }
  searchToggle()
  {
    this.state = 'normal'
    this.searchmode = false;
  }
}
