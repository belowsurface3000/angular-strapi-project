import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from "../../types";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post!: BlogPost;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("run")
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id) return;
      fetch(`http://localhost:1337/api/posts/${id}`, {
        method: 'GET',
        redirect: 'follow'
      })
      .then(response => response.json())
      .then(result => {
        this.post = result.data.attributes;
        console.log(result.data.attributes)
      })
      .catch(error => console.log('error', error));
    });
  }
}
