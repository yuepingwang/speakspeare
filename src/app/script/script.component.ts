import { Component, OnInit } from '@angular/core';
import { Script } from '../script';

@Component({
  selector: 'app-script',// the CSS selector for this component
  templateUrl: './script.component.html',// location of this component's html file
  styleUrls: ['./script.component.css']//  location of this component's css file
})

// OnInit is a good place for a component to fetch its initial data
export class ScriptComponent implements OnInit {

	script: Script = {
		id: 1,
		content: "life"
	}

	constructor() { }

	ngOnInit() {
  }

}

script = 'Macbeth';