import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  currentTitle = 'User';
  id = new FormControl('', []);
  fn = new FormControl('', [Validators.min(2)]);
  ln = new FormControl('', [Validators.min(2)]);
  email = new FormControl('', [Validators.email]);

  searchUser(): void {}
}
