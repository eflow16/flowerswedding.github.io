import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seatingList: Array<SeatAssignments>;
  searchResultsList: Array<SeatAssignments>;
  foundPerson: SeatAssignments;
  showNotFound: boolean = false;
  name: string = '';
  constructor() {
    //Initialize value to false
      this.seatingList = this.getSeatingList();
      this.searchResultsList = new Array<SeatAssignments>();
  }

  searchData(searchValue: any) {
    this.showNotFound = false;
    if(this.name.length) {
    this.searchResultsList = this.seatingList.filter((item: SeatAssignments) => {
      return item.name.toLowerCase().includes(this.name.toLowerCase());
    });
    if(this.searchResultsList.length === 0){
      this.showNotFound = true;
    }
    } else {
      this.searchResultsList = [];
    }
  }

  private getSeatingList(): Array<SeatAssignments>  {
    var orginalList: Array<SeatAssignments> = 
    
    [
      <SeatAssignments>{
        name: "Victoria Marenco",
        tableNumber: 1
      },
      <SeatAssignments>{
        name: "Ricardo Marenco",
        tableNumber: 1
      },
      <SeatAssignments>{
        name: "Chelsea DeJesus",
        tableNumber: 1
      },
      <SeatAssignments>{
        name: "Shabazz Hilaire",
        tableNumber: 1
      },
      <SeatAssignments>{
        name: "Eric Flowers",
        tableNumber: 1
      },
      <SeatAssignments>{
        name: "Cindy Kimbrough",
        tableNumber: 1
      },
      <SeatAssignments>{
        name: "Anthony Saavedra",
        tableNumber: 1
      },
      <SeatAssignments>{
        name: "Andres Cruz",
        tableNumber: 1
      },
      <SeatAssignments>{
        name: "Carlos Fernandez",
        tableNumber: 2
      },
      <SeatAssignments>{
        name: "Belkis Nivar",
        tableNumber: 2
      },
      <SeatAssignments>{
        name: "Leonor Morillo-Lantigua",
        tableNumber: 2
      },
      <SeatAssignments>{
        name: "Jose Lantigua",
        tableNumber: 2
      },
      <SeatAssignments>{
        name: "Lyndia Flowers",
        tableNumber: 2
      },
      <SeatAssignments>{
        name: "Eddie Flowers",
        tableNumber: 2
      },
      <SeatAssignments>{
        name: "Arnold Flowers",
        tableNumber: 2
      },
      <SeatAssignments>{
        name: "Letrice Flowers",
        tableNumber: 2
      },
      <SeatAssignments>{
        name: "Chelsea Morales",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Matthew Garcia",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Lizbeth FanFan",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Eugene FanFan",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Neakmal Prak",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Tam Tran",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Sandy Dorleus",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Ray Oneuil",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Brittany Garcia",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Yanira Robinson",
        tableNumber: 3
      },
      <SeatAssignments>{
        name: "Andres Nivar",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Claudia Nivar",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Angelica Nivar",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Geovanny Acosta",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Flor Myra Fernandez",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Berta Ortiz",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Ninoschka Williams",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Jim Williams",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Frank Jimenez",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Carmen Jimenez",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Mariza Baez",
        tableNumber: 4
      },
      <SeatAssignments>{
        name: "Martin Molina",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Alexis Nicks",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Joan Lastra",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Michelle Hinson",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Ricky Lugo",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Kat Lugo",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Jose Pujols",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Nicole Pujols",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Manny Cabrera",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Yaniel Rodriguez",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Jordan Gutierrez",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Juan Rodriguez",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Andrew Glassman",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Mary Paulino",
        tableNumber: 5
      },
      <SeatAssignments>{
        name: "Gabriel Flowers",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Terry Flowers Jr.",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Solangel Flowers",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Sabrina Edwards",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "James Edwards",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Betty Flowers",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Raquel Flowers",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Mark Contreras",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Jisselle Medina",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Jalen Flowers",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Jeffy Flowers",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Sydni Flowers",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Kiandra House",
        tableNumber: 6
      },
      <SeatAssignments>{
        name: "Shaneese Hernandez",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Carolina Valdes",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Will Valdes",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Laurie Perez",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Eduardo Acosta",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Natasha Olano",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Amanda Gonzalez",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Marisol Torres",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Allan Nunez",
        tableNumber: 7
      },
      <SeatAssignments>{
        name: "Janett Jervis Powell",
        tableNumber: 8
      },
      <SeatAssignments>{
        name: "Lily Valdine McCoy",
        tableNumber: 8
      },
      <SeatAssignments>{
        name: "Agnes McCoy",
        tableNumber: 8
      },
      <SeatAssignments>{
        name: "Zanolee Martin",
        tableNumber: 8
      },
      <SeatAssignments>{
        name: "Robyn Martin",
        tableNumber: 8
      },
      <SeatAssignments>{
        name: "Daniella Umana Powell",
        tableNumber: 8
      },
      <SeatAssignments>{
        name: "Andres Hidalgo",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Natasha Hidalgo",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Mauricio Caro",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Olga Caro",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Angel De Leon",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Jason Cancel",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Adriana Cancel",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Max Lora",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Karen Seng",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Steven Glaria",
        tableNumber: 9
      },
      <SeatAssignments>{
        name: "Jeff Flowers",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Mondra Flowers",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Audie Flowers",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Jackie Flowers",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Terry Flowers",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Joy Flowers",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Donna Edwards",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Perry Edwards",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Lorna Miller",
        tableNumber: 10
      },
      <SeatAssignments>{
        name: "Will Reyes",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "Omar Rodriguez",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "Steven Guevara",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "Andres Felipe Galvis",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "Maria Paulina Uribe",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "John Faustin",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "Eric Rogers",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "Yanira Sanchez",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "Yliana Rodriguez",
        tableNumber: 11
      },
      <SeatAssignments>{
        name: "Wellington Fernandez",
        tableNumber: 12
      },
      <SeatAssignments>{
        name: "Eliza Pimpentel-Nivar",
        tableNumber: 12
      },
      <SeatAssignments>{
        name: "Richard Nivar",
        tableNumber: 12
      },
      <SeatAssignments>{
        name: "Maria Nivar",
        tableNumber: 12
      },
      <SeatAssignments>{
        name: "Janaisa Nivar",
        tableNumber: 12
      },
      <SeatAssignments>{
        name: "Rutdileny Cabrera",
        tableNumber: 12
      },
      <SeatAssignments>{
        name: "Rudy Cabrera",
        tableNumber: 12
      },
      <SeatAssignments>{
        name: "Rocio Cabrera",
        tableNumber: 12
      }
    ];

    //Find the table members and add them
    orginalList.forEach(person => {
      var tableNum = person.tableNumber;
      var members = orginalList.filter(x => {
        return x.tableNumber == tableNum;
      });

      person.tableMembers = members.map(x => x.name);
    });
    return orginalList;
  }

}

export class SeatAssignments {
  name: string;
  tableNumber: number;
  tableMembers: string[];
  constructor() {
    this.tableMembers = [];
  }
}