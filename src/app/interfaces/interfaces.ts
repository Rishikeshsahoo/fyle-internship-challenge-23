export interface FormDataLocal {
  searchQuery: string,
  per_page:number,
  page:number
}
export interface GithubUser {
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;
  type: string;
  name: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
}

export interface GithubRepo{
    name: string,
    description:string,
    topics:string[],
}
