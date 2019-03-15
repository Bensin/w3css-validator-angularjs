import { Component, OnInit } from '@angular/core';
import { ScanService } from './scan.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  apiResponseA: any;
  apiResponseAStatus = false;
  url: string= '';
  constructor(
    private scanService: ScanService,
  ) { }

  ngOnInit() {
    this.onInitFn();
  }


  onInitFn() {
    
  }
  onClick(){
    const apiUrlA = 'https://jigsaw.w3.org/css-validator/validator?uri='+this.url+'&warning=0&output=json';
    
    this.scanService.getScan(apiUrlA).then(res=>{
      console.log(res);
    });
  }

}

