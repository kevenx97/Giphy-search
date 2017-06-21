import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GiphySearchManualComponent } from './giphy-search-manual.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'giphy-search', component: GiphySearchManualComponent }
		])
	]
})
export class GiphySearchManualRoutingModule {

}
