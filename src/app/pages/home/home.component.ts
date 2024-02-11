import { Component, Input } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import {
  FormDataLocal,
  GithubRepo,
  GithubUser,
} from 'src/app/interfaces/interfaces';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  response: GithubUser = {
    login: '',
    avatar_url: '',
    url: '',
    html_url: '',
    repos_url: '',
    type: '',
    name: '',
    location: '',
    bio: '',
    twitter_username: '',
    public_repos: 0,
  };

  formData: FormDataLocal = {
    searchQuery: '',
    per_page: 10,
    page: 1,
  };
  totalPages=0
  min=0
  max=1000
  isLoaded=false;

  repositories!: Observable<GithubRepo[]>;
  
 

  constructor(private searchService: SearchService) {}

  handleSubmit(formData: FormDataLocal) {
    this.isLoaded=true
    this.formData = formData;
    this.formData.page=1;
    this.searchService.getData(this.formData.searchQuery,this.isLoaded).pipe(
      finalize(() => {
        this.isLoaded = false;
      })
    ).subscribe((data) => {
      this.response = data;
    });
    this.repositories = this.searchService.getRepos(
      this.formData.searchQuery,
      this.formData.per_page,
      this.formData.page
    );
  }
  handlePagination(page:number){
    this.formData.page=page;
    this.totalPages=Math.ceil(this.response.public_repos/this.formData.per_page);
    this.min=Math.max(this.formData.page-2,1);
    this.max=Math.min(this.totalPages,this.formData.page+2);

    this.repositories = this.searchService.getRepos(
      this.formData.searchQuery,
      this.formData.per_page,
      this.formData.page
    )
  }
}
