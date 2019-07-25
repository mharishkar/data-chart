import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.component.service';
import * as Highcharts from 'highcharts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]

})
export class AppComponent implements OnInit {

  title = 'Welcome to Data Chart - Demo';
  dataChartForm: FormGroup;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    xAxis: {
      categories: []
    },
    series: [{
      data: [],
      type: 'area'
    }]
  };
  dateTime: any;
  updateFlag: boolean;

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
  }

  submitForm() {
    this.hookApi();
    setInterval(this.hookApi.bind(this), this.dataChartForm.get('interval').value * 1000);
    setInterval(this.addTime.bind(this), 1000);
  }

  hookApi() {
    this.appService.getRandomNumber(this.dataChartForm.value).subscribe(res => {
      this.chartOptions.xAxis.categories.push(this.datePipe.transform(new Date(), 'HH:mm:ss'));
      this.chartOptions.series[0].data.push(parseInt(res.body));
      this.updateFlag = true;
    });
  }

  addTime() {
    this.dateTime = this.datePipe.transform(new Date(), 'dd-MM-yy HH:mm:ss');
  }
}
