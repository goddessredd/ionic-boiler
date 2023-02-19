import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | It Begins...",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Hey There...",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | Is That Drama???",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | Well That Happened...",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | The Conclusion???",
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
