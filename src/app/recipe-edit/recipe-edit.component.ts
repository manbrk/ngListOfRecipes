import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @Input() modeSelected: string;

  constructor() { }

  ngOnInit() {
  }

}
