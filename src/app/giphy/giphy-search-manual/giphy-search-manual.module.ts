import { GiphySearchListModule } from './../giphy-search-list/giphy-search-list.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from './../../share-module/share.module';
import { GiphySearchManualService } from './giphy-search-manual.service';
import { GiphySearchManualComponent } from './giphy-search-manual.component';

@NgModule({
  imports: [
      ShareModule,
      GiphySearchListModule
  ],
  declarations: [
    GiphySearchManualComponent
  ],
  exports: [
    GiphySearchManualComponent
  ],
  providers: [
    GiphySearchManualService
  ]
})
export class GiphySearchManualModule { }
