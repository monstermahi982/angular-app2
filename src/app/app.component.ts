import { Component } from '@angular/core';
import {GitDataService} from './git-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  data = []
  
  constructor(private user:GitDataService){
    this.user.getData().subscribe(data => {
      data = data
      console.log(data)
    })

  }
  
  
}
