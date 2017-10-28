import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule, TreeNode } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { TreeService } from './tree.service';
import { NodeframeDirective } from './nodeframe.directive';

@NgModule({
  declarations: [
    AppComponent,
    NodeframeDirective
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
