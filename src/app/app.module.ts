import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { PropertyComponent } from "./property/property.component";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { HousingService } from "./service/housing.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    PropertyComponent,
    PropertyCardComponent,
    PropertyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
