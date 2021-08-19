import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any = [
    { title: 'Post 01', view: true },
    { title: 'Post 02', view: true, type: 'deporte' },
    { title: 'Post 03', view: true },
    { title: 'Post 04', view: false },
    { title: 'Post 05', view: true },
    { title: 'Post 06', view: true },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(position: number) {
    console.log(position);
    this.posts = this.posts.filter((_: any, index: number) => index !== position);
  }

}
