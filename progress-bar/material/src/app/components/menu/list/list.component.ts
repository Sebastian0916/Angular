import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  frameworks: string[] = ['Angular', 'React', 'Vue', 'Ionic', 'Flutter', 'React Native'];

  constructor() { }

  ngOnInit(): void {
  }

}
