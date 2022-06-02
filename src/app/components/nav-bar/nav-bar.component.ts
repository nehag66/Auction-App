import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isCollapsed = true;
  
  constructor(public modalService: NgbModal,) { }

  ngOnInit(): void {
  }

  loginRegisterModal() {
    console.log("loginRegisterModal: ", "loginRegisterModal")
    const modalRef = this.modalService.open(LoginComponent, {
      windowClass: "add-cashlimit",
  });
  // modalRef.componentInstance.data = hospital;

  modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      // hospital.remark = receivedEntry;
  });
  modalRef.result.then((res) => {});
  }

  

}
