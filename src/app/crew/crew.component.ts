import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  
  memberBeingEdited: object = null;

  takenNames: string[] = ["Eileen Collins", "Mae Jemison", "Ellen Ochoa"];

  constructor() { }

  add(memberName: string, isFirst: boolean) {
    if (!this.takenNames.includes(memberName)) {
      this.crew.push({name: memberName, firstMission: isFirst})
      this.takenNames.push(memberName);
    }
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    let takenNamesIndex = this.takenNames.indexOf(member["name"]);
    this.crew.splice(index, 1);
    this.takenNames.splice(takenNamesIndex, 1);
  }

  edit(member: object){
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    let index = this.takenNames.indexOf(this.memberBeingEdited['name']);
    this.takenNames.splice(index, 1, name);
    this.memberBeingEdited = null;
  }

  ngOnInit() {
  }

}
