import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seatingList: Array<SeatAssignments>;
  foundPerson: SeatAssignments;
  showNotFound: boolean = false;
  name: string = '';
  constructor() {
    //Initialize value to false
      this.seatingList = this.getSeatingList();
    }
    onSubmit() {
    this.foundPerson = null;
    this.showNotFound = false;
    
    console.log('name: ' + this.name );
    var person = this.seatingList.find(x => x.name.toLocaleLowerCase().trim() === this.name.toLocaleLowerCase().trim());

    if(person) {
      this.foundPerson = person;
      //Find all other members of the party and list them
      this.name = '';
      console.log(person);
    } else {
      this.showNotFound = true;
    }
  }

  showPerson(i: number){
    this.foundPerson = this.seatingList[i];
  }

  private getSeatingList(): Array<SeatAssignments>  {
    return [{
      name: 'Eddie Flowers',
      tableNumber: 2,
      picture: 'Pic2'
    },
    {
      name: 'Jerilys Fernandez',
      tableNumber: 3,
      picture: 'Pic3'
    }]
  }

}


export class SeatAssignments {
  name: string;
  tableNumber: number;
  picture: string;
}