import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatListItemComponent } from './chat/chat-list-item/chat-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatListComponent,
    ChatListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
