import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public modalService: NgbModal) { 
  }

  ngOnInit(){

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  registerModal() {
    console.log("registerModal: ", "RegisterModal")
    const modalRef = this.modalService.open(RegisterComponent, {
      windowClass: "add-cashlimit",
  });
  // modalRef.componentInstance.data = hospital;

  modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      // hospital.remark = receivedEntry;
  });
  modalRef.result.then((res) => {});
  }

  onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
  }

}
