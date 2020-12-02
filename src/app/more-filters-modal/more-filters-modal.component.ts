import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoreFiltersComponent } from '../more-filters/more-filters.component';

@Component({
  selector: 'app-more-filters-modal',
  templateUrl: './more-filters-modal.component.html',
  styleUrls: ['./more-filters-modal.component.css'],
})
export class MoreFiltersModalComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openMoreFilters() {
    const modalRef = this.modalService.open(MoreFiltersComponent);
    this.modalService.open(modalRef, {
      backdropClass: 'light-blue-backdrop',
      scrollable: true,
      size: 'lg',
    });
  }
}
