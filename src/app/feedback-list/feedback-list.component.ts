import { Component } from '@angular/core';
import { Feedback } from '../feedback.model';
import { FeedbacksService } from '../feedbacks.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css'
})

export class FeedbackListComponent {
  feedbackList: Feedback[] = [];
  customerIdToSearch: number = 0;
  message: string = '';

  constructor(private feedbackService: FeedbacksService) {}

  getFeedbacksByCustomer(): void {
    this.feedbackService.getFeedbackByCustomerId(this.customerIdToSearch).subscribe({
      next: (data) => {
        this.feedbackList = data;
        this.message = data.length ? '' : 'No feedbacks found for this customer.';
      },
      error: (err) => {
        this.message = 'Error fetching feedbacks.';
        console.error(err);
      }
    });
  }
}
