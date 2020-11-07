import {MatExpansionModule,MatListModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports:[MatExpansionModule,MatListModule],
  exports:[MatExpansionModule,MatListModule],
})

export class MaterialModule{}
