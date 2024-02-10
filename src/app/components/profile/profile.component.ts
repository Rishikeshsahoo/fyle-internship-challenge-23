import { Component, Input } from '@angular/core';
import { GithubUser } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() profile!:GithubUser;
  constructor(){}
}
