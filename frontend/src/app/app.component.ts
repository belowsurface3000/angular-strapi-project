import { Component } from '@angular/core';
import { BlogPosts } from "../types"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  blogPosts: BlogPosts;

  constructor() {
    this.blogPosts = {
      data: {
        attributes: {
            title: "",
            category: "",
            author: "",
            excerpt: "",
            tags: "",
            sources: "",
            body: "",
            createdAt: "",
            updatedAt: "",
            publishedAt: "",
        }
      }
    }
  }

  ngOnInit(): void {
    fetch("http://localhost:1337/api/posts/1", {
      method: 'GET',
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => {
      this.blogPosts = result;
      console.log(result)
    })
    .catch(error => console.log('error', error));
      
  }
}
