import { Component } from '@angular/core';
import { BlogPosts } from "../../types"

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  blogPosts: BlogPosts[] = [];

  ngOnInit(): void {
    fetch("http://localhost:1337/api/posts/", {
      method: 'GET',
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => {
      this.blogPosts = result.data;
      console.log(result.data)
    })
    .catch(error => console.log('error', error));
  }
}
