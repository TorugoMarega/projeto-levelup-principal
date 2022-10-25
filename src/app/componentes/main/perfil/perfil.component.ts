import { User } from './../../../../model/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})



export class PerfilComponent implements OnInit {
  constructor(){ }
/*   @Input()
  userData!: User; */

  @Input()
  userData: User = new User();


  ngOnInit(): void {

  }


  plus(valueString:string){
    var value = parseInt(valueString);
    var sum
    if(value<=10 && value>=0){
       sum=value+1;
    }else sum = value
    console.log("MAIS: "+ sum);
    return sum
  }

  minus(value:string){
    var sub = parseInt(value)-1
    console.log("MENOS: "+ sub);
  }

}
