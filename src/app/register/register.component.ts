import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Rol } from '../model/rol';
import { User } from '../model/user';
// import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User();

  constructor() { 
    this.user.rol = 'Admin';
  }

  ngOnInit(): void {
  }

  listaroles: Rol[] = [
    {id: 0, name: '---'},
    {id: 1, name: 'User'},
    {id: 2, name: 'Admin'}
  ]

}