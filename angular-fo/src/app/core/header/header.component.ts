import { Component, OnInit } from '@angular/core';
// import { DataStorageService } from '../../shared/data-storage.service';
// import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
  //  private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
  }

  onSaveData(): void {
    // this.dataStorageService.storeRecipes()
    //   .subscribe(
    //     (response: Recipe[]) => {
    //       console.log(response);
    //     }
    //   );
  }

  onFetchData() {
    // this.dataStorageService.getRecipes();
  }
}
