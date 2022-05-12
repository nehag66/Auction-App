import { Injectable } from '@angular/core';
import { ElementFlags } from 'typescript';
import { ConstantsService } from './constants.service';
import { HttpServiceService } from './http-service.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  productDetails;
  productDetail;
  itemImages;
  brandNames;
  descriptions;
  isOffBid: boolean;
  marketValues;
  names;
  createdBy = {};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  constructor(private constants: ConstantsService, private http: HttpServiceService) { }

  getAllProducts() {
    return this.http.getData(this.constants.getAllProducts).then(res => {
      console.log("res: ", res)
      this.productDetails = res['items'];
      console.log("this.productDetails: ", this.productDetails);
      this.productDetail = this.productDetails.map(el => {
        return {
          name: el.name,
          brandName: el.brandName,
          description: el.description,
          marketValue: el.marketValue,
          bids: el.Bids,
          createdBy: el.createdBy.firstName + ' ' + el.createdBy.lastName,
          lastBidDate: moment(el.lastBidDate).format('LLL')
        }
      })
      console.log("this.productDetail: ", this.productDetail)
    })
  }
}
      
