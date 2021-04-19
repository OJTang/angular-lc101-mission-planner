import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['Habitat Dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  
  equipmentBeingEdited: string = '';

  constructor() { }

  add(equipmentName: string) {
    this.equipment.push(equipmentName);
  }
  

  remove(equipmentName: string) {
    let index = this.equipment.indexOf(equipmentName);
    this.equipment.splice(index, 1);
  }

  edit(equipmentName: string){
    this.equipmentBeingEdited = equipmentName;
  }

  save(newName: string, equipmentName: string) {
    let index = this.equipment.indexOf(equipmentName);
    this.equipment.splice(index, 1, newName);
    this.equipmentBeingEdited = '';
  }

  ngOnInit() {
  }

}

