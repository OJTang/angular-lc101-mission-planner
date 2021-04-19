import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  experimentBeingEdited: string = '';

  constructor() { }

add(experimentName: string) {
    this.experiments.push(experimentName);
  }
  

  remove(experimentName: string) {
    let index = this.experiments.indexOf(experimentName);
    this.experiments.splice(index, 1);
  }

  edit(experimentName: string){
    this.experimentBeingEdited = experimentName;
  }

  save(newName: string, experimentName: string) {
    let index = this.experiments.indexOf(experimentName);
    this.experiments.splice(index, 1, newName);
    this.experimentBeingEdited = '';
  }

  ngOnInit() {
  }

}
