import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';


@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.css']
})
export class EnregistrementComponent implements OnInit {

  users: User[] = [];
  id: number=1;
  firstName: string='';
  lastName: string='';
  UserList: User[] = this.users;

  





  constructor() { }

  ngOnInit(): void {
    console.table(this.users)

  }
  delete(u:User){
    this.users = this.users.filter(user => user.id != u.id)
    console.log("la suppression est reussi")
    console.log(this.UserList)
  }


  /**
   * saveData
   */
  public saveData(enregistrementForm: NgForm): void {


    if (this.users.length <= 5) {

      let user = new User(this.id++,this.firstName, this.lastName);
      this.users.push(user);
      
      console.log(enregistrementForm.form);
      console.log('valeur:', JSON.stringify(enregistrementForm.value));
      console.log('enregistré avec SUCCES');



    } else {
      console.log("le nombre d'enregistrement est atteint")

    }


  }

}
