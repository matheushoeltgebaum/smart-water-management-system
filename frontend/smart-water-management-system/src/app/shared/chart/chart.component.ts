import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  public chartLabels: string[] = ["2015", "2016", "2017", "2018", "2019"];
  public chartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Consumo (l)'},
  ];
  public chartType = "bar";
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public chartColors = [{ backgroundColor: "#40e0d0" }];

  constructor() {}

  ngOnInit() {}
}
