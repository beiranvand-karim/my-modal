import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  private modals: any[] = [];

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals.filter(m => m.id !== id);
  }

  open(id: string) {
    const myM = this.modals.find(m => m.id === id);
    myM.open();
  }

  close(id: string) {
    const myM = this.modals.find(m => m.id === id);
    myM.close();
  }

}
