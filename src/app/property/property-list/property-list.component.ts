import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.scss"],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      id: 1,
      name: "Birla House",
      type: "House",
      price: 12000,
    },
    {
      id: 2,
      name: "Erose Vella",
      type: "House",
      price: 12000,
    },
    {
      id: 3,
      name: "Macro Home",
      type: "House",
      price: 142000,
    },
    {
      id: 4,
      name: "Peal White House",
      type: "House",
      price: 180000,
    },
    {
      id: 5,
      name: "Shamol Chaya",
      type: "Apartment",
      price: 1205000,
    },
    {
      id: 6,
      name: "Mia Villa",
      type: "House",
      price: 22000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
