import { Component, OnInit ,ViewChild,Input} from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { schema } from './schema.value';

@Component({
  selector: 'app-viewjson',
  templateUrl: './viewjson.component.html',
  styleUrls: ['./viewjson.component.css']
})
export class ViewjsonComponent implements OnInit {
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
  @Input() data: object;

  options = new JsonEditorOptions();

  constructor() {
    this.options.mode = 'code';
    this.options.modes = ['code', 'text', 'tree', 'view'];
    this.options.schema = schema;
    this.options.statusBar = false;
    this.options.onChange = () => console.log(this.editor.get());
   }

  ngOnInit() {
  }

}
