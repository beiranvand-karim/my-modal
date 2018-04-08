import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ModalService} from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() id: string;

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.el.nativeElement);

    this.renderer.listen(this.el.nativeElement, 'click', (e) => {
      if (!e.target.closest('.modal-body')) {
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
  }

  open(): void {
    this.el.nativeElement.style.display = 'inline';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.el.nativeElement.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
