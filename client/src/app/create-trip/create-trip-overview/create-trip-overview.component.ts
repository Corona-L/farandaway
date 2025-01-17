import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../../api-client.service';
import { TripOption } from '../../interfaces/trip-option';
import { UserInfoService } from '../../user-info.service';

@Component({
  selector: 'app-create-trip-overview',
  templateUrl: './create-trip-overview.component.html',
  styleUrls: ['./create-trip-overview.component.css'],
})
export class CreateTripOverviewComponent implements OnInit {
  // @Output() createTripEvent = new EventEmitter<Trip>()
  @Input() tripTitle: string = '';

  @Input() tripOrigin: string | undefined;

  tripOptions: TripOption[] = [];

  tripOptionTitles: string[] = ['Option 1', 'Option 2', 'Option 3'];

  constructor(
    private apiClientService: ApiClientService,
    private router: Router,
    private userInfoService: UserInfoService,
  ) {}

  ngOnInit(): void {}

  postTrip() {
    const trip = { title: this.tripTitle, options: this.tripOptions };
    this.apiClientService.postTrip(trip).subscribe(() => {
      // const tripId = created.id;
      const userId = this.userInfoService.getUserId();
      this.router.navigate([`/users/${userId}`]);
    });
  }

  addTripOption(newTripOption: TripOption) {
    this.tripOptions.push(newTripOption);
  }
}
