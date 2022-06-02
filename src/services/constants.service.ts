import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  getAllProducts = environment["stagingUrl"]+"items?sort=id"
  registerUser = environment["stagingUrl"]+ "user/register"

  constructor() { }
}
