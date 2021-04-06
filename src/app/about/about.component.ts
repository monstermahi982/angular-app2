import { Component, OnInit } from '@angular/core';
import {GitDataService} from '../git-data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = []

  constructor(private user:GitDataService) {
    this.user.getData().subscribe(data => {
      data = data
      console.log(data)
    })
   }

  ngOnInit(): void {
  }

}
