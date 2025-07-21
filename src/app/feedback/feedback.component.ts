import { Component } from '@angular/core';
import { FeedbacksService } from '../feedbacks.service';
import { Feedback } from '../feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})

export class FeedbackComponent {
  feedback: Feedback = {
    feedbackId: 0,
    customerId: 0,
    customerName: '',
    productName: '',
    feedback: ''
  };

  submittedFeedback?: Feedback;
  feedbackList: Feedback[] = [];
  customerIdToSearch: number = 0;

  constructor(private feedbackService: FeedbacksService) {}

  // Submit feedback
  submitFeedback(): void {
    this.feedbackService.addFeedback(this.feedback).subscribe({
      next: (response) => {
        this.submittedFeedback = response;
        console.log('Feedback submitted:', response);
      },
      error: (err) => {
        console.error('Error submitting feedback:', err);
      }
    });
  }

}

