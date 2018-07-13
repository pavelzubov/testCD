import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { ChildComponent } from './block/child/child.component';
import { ChildchildComponent } from './block/child/childchild/childchild.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    ChildComponent,
    ChildchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
