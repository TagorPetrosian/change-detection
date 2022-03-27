import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemChildComponent } from './list/list-item/list-item-child/list-item-child.component';
import { ListItemGrandchildComponent } from './list/list-item/list-item-child/list-item-grandchild/list-item-grandchild.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageComponent } from './messages-list/message/message.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { MessageContentComponent } from './messages-list/message/message-content/message-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ListItemChildComponent,
    ListItemGrandchildComponent,
    MessagesListComponent,
    MessageComponent,
    MessageContentComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ScrollingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
