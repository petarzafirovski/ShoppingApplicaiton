import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] =[
      new Recipe('A test recipe', 'Descr test', "https://images.24ur.com/media/images/1024x600/Sep2017/9d0795b9b5_61970467.jpg?v=ecf9"),
      new Recipe('A test recipe', 'Descr test', "https://images.24ur.com/media/images/1024x600/Sep2017/9d0795b9b5_61970467.jpg?v=ecf9")
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
