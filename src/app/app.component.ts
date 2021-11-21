import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { RestService } from './rest.service';
import { StudentComponent } from './student/student/student.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class Products
// {
//   productId:number=0;
//   productName:string="";
//   cost:number=0;

//   constructor(productId:number,productName:string,cost:number){
//     this.productId=productId;
//     this.productName=productName;
//     this.cost=cost;
//   }
// }

export class AppComponent {

  // constructor (private productServiceObj:ProductService){}
  // arrProductsObjs:Products[]=[];

  // getProductData(){
  //   // this.arrProductsObjs = this.productServiceObj.getAllProducts();
  // }
  title = 'my-app';
  inum=250;
  strName="Navnath";
  userobj={uid:"Navnath",pwd:"123"};

  imgURL="./assets/images/roses.jpeg";

  benablebutton=false;
  enablebutton(){
    // alert("button is enabled")
    this.benablebutton=false;
  }

  getDataFromAnotherComponent()
  {
    let studentComponentObj= new StudentComponent();
    console.log("datasent from student component from student module "+studentComponentObj.getName());
  }
  disablebutton(){
    // alert("b")
    this.benablebutton=true
  }

  verifyemail(email :string){
    alert('Please check your email, we have send verification email -'+email + ' please click on given link to verify your email')
  }

  strNametwowaydatabinding="Navnath kumbhar";

  strNameparenttochild="Navnath";


  Buttonclick(){
    alert("button clicked")
  }
  bcustomer=true;
  changetocustomer()
  {
    this.bcustomer=true;
  }
  changetoemployee(){
    this.bcustomer=false;
  }

  strColor="red";
  strFontsize="40"
  strCustomer="yes";

  userlist=[
    {uid:101,name:'Navnath',pwd:"123"},
    {uid:102,name:'raj',pwd:"123"},
    {uid:103,name:'varun',pwd:"123"},
    {uid:104,name:'sanket',pwd:"123"},
    {uid:105,name:'Suraj',pwd:"123"}
  ]

  bmorning=false;
  bevening=false;
  goodmorning(){
    alert("Hey Its morning , good morning")
    this.bmorning=true;
    this.bevening=false;
  }
  goodevening(){
    alert("Hey Its evening, good evening")
    this.bevening=true;
    this.bmorning=false;

  }
  strData="1";

  strDataToConvert='my Name is Navnath';
  stringconvert="navnath";

  iCurrencyData=35000;

  todayDateinmillis=Date.now();
  todayDateinobj=new Date();
  todayDateinstringformate=new Date().toDateString();

  jsonuserobj={"uid":120,"name":"Navnath","pwd":"12345"};
  jsonstudentobj=[
    {"id":111,"name":"Navnath","stream":"IT","marks":90},
    {"id":111,"name":"Raj","stream":"EN","marks":90},
    {"id":111,"name":"Varun","stream":"IT","marks":93}
  ]
  jsonempobj={"Eid":101, "name":"ABCD","dept":"IT"};
  jsoninsuranceobj=[
    {"PolicyNo":1,"PolicyHolderName":"NAVNATH","AmountOnMaturity":420000,"NomineeName":"ABCS","Monthly EMI":10000,"durationofPolicy In months":12},
    {"PolicyNo":2,"PolicyHolderName":"RAJ","AmountOnMaturity":220000,"NomineeName":"ABCS","Monthly EMI":3000,"durationofPolicy In months":12},
    {"PolicyNo":3,"PolicyHolderName":"VARUN","AmountOnMaturity":120000,"NomineeName":"ABCS","Monthly EMI":50000,"durationofPolicy In months":12}
  ]

  idatafordecimalpipe=250.213456789;
  idatadecimalpipe=529.123456789;

  idataforpercentpipe=2.50;
  idatapercentpipe=5.5;

  idatafromstringslice="Navnath kumbhar";

  idataslicepipe="munnar";

  iFarent=0;
  iCelcius=0;


  strDatastring="Uppercase pipe";

  icurrency=20000;

}
