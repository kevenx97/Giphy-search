import { NgModule } from '@angular/core';

import { ShareModule } from './../../share-module/share.module';
import { GiphySearchListComponent } from './giphy-search-list.component';

@NgModule({
    imports: [ ShareModule ],
    exports: [ GiphySearchListComponent],
    declarations: [ GiphySearchListComponent ]
})
export class GiphySearchListModule  {

}