import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormDataLocal, GithubUser } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

response:GithubUser={
  login: "",
  avatar_url: "",
  url: "",
  html_url: "",
  repos_url: "",
  type: "",
  name: "",
  location: "",
  bio: "",
  twitter_username: "",
  public_repos: 0,

}
 formDataL:FormDataLocal={searchQuery:"", page:1,per_page:10};
@Output() dataEmmiterEvent= new EventEmitter<FormDataLocal>();
constructor(){}

handleSubmit(){
  this.dataEmmiterEvent.emit(this.formDataL);
}


}
