import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-script',// the CSS selector for this component
  templateUrl: './script.component.html',// location of this component's html file
  styleUrls: ['./script.component.css']//  location of this component's css file
})

// OnInit is a good place for a component to fetch its initial data
export class ScriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

script = 'Macbeth';