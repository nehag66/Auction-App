import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor( public common: CommonService) { }

  ngOnInit(): void {

    this.common.getAllProducts()
  }

}
