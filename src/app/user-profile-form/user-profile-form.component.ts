import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data/user-data';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.css']
})
export class UserProfileFormComponent implements OnInit {

  userData : UserData=
  {
    firstname:'Vikas',
    lastname:'Khokhar',
    username:'Vkhokhar',
    password:'I am unknown',
    dob:'01-01-2014',
    region:'India'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
