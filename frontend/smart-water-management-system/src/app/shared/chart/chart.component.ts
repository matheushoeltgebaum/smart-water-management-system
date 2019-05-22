import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input()
  public chartData: Array<any>;

  @Input()
  public chartLabels: Array<any>;
  public chartType = "bar";
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    aspectRatio: 3,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  public chartColors = [
    { backgroundColor: "#40e0d0", borderColor: "#00c2ad", borderWidth: 2 }
  ];

  constructor() {}

  ngOnInit() {}
}
