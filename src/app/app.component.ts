import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.component.service';
import * as Highcharts from 'highcharts';
import { DatePipe } from '@angular/common';
import { CHART_OPTIONS } from './app.config';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]

})
export class AppComponent implements OnInit {

  title = 'Welcome to Data Chart - Demo';
  dataChartForm: FormGroup;

  highcharts = Highcharts;
  chartOptions = CHART_OPTIONS
  dateTime: any;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.dataChartForm = this.fb.group({
      minValue: ['', [Validators.required, Validators.max(20000)]],
      maxValue: ['', [Validators.required, Validators.max(20000)]],
      interval: ['', [Validators.required, Validators.max(5000)]]
    });
    console.log(this.chartOptions);
  }

  submitForm() {
    this.hookApi();
    setInterval(this.hookApi.bind(this), this.dataChartForm.get('interval').value * 1000);
    setInterval(this.addTime.bind(this), 1000);
  }

  hookApi() {
    this.appService.getRandomNumber(this.dataChartForm.value).subscribe(val => {
      console.log(val);
    })
  }

  addTime() {
    this.dateTime = this.datePipe.transform(new Date(), "dd-MM-yy HH:mm:ss");
  }
}
