import { Directive, TemplateRef, ViewContainerRef, Renderer2, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective implements OnInit {
  private phones: any[];
  private oddColor: string;
  private evenColor: string;

  constructor(private template: TemplateRef<any>, private viewCont: ViewContainerRef, private render: Renderer2 ) { }

  @Input('appTable')
  set data(tableData: any) {
    this.phones = tableData.phones;
    this.oddColor = tableData.oddRowColor;
    this.evenColor = tableData.evenRowColor;
    console.log(tableData);
    if (this.phones.length) {
      this.viewCont.clear();
      this.viewCont.createEmbeddedView(this.template);
      this.createTable();
    }
  }

  ngOnInit() {
    
  }

  private createTable() {
    console.log(1);
    const keys = Object.keys(this.phones[0]);
    const temp = this.template.elementRef.nativeElement.nextSibling;
    console.log(temp);

    for (let i = 0; i <= this.phones.length; i++) {
      const row = this.render.createElement('tr');
      this.render.appendChild(temp, row);
      let node = temp.childNodes[i];
      console.log(node);
      if (i === 0) {
        for (let j = 0; j < keys.length; j++) {
          const th = this.render.createElement('th');
          th.innerHTML = keys[j];
          this.render.appendChild(node, th);
          // node = node.childNodes[j];
        }
      } else {
        (i % 2 !== 0) ? this.colorize(node, this.oddColor) : this.colorize(node, this.evenColor);
        for (const key of keys) {
          const td = this.render.createElement('td');
          td.innerHTML = this.phones[i - 1][key];
          this.render.appendChild(node, td);
        }
      }
    }
  }

  private colorize(node: ElementRef<any>, color: string = '') {
    this.render.setStyle(node, 'background', color);
  }

}
