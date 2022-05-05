import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  constructor(private constants: ConstantsService, private http: HttpServiceService) { }

  getAllProducts() {
    return this.http.getData(this.constants.getAllProducts).then(res => {
      console.log("res: ", res)
    })
  }
}
      
