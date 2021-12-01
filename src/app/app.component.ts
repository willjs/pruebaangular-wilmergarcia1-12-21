import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'PRODUCTOS';
  
  msg:string = '';
  valor1:string='data1';



 

  product = [
    {'name': 'Hoga', cantidad: '10', descripcion:'Lorem ipsum for you exan', data1: '1000'}
  ];


  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addproduct():void{
    this.product.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteproduct(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.product.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editproduct(i):void {
    this.hideUpdate = false;
    this.model2.name = this.product[i].name;
   this.model2.descripcion = this.product[i].descripcion;
    this.myValue = i;
  }

  updateproduct():void {
    let i = this.myValue;
    for(let j = 0; j < this.product.length; j++){
      if(i == j) {
        this.product[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }




  closeAlert():void {
    this.msg = '';
  }

}
