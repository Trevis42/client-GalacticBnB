import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { BrianPhotoComponent } from './brian-photo/brian-photo.component';
import { PhotosService } from './services/photos.service';
import { HostsliceComponent } from './hostmod/hostslice/hostslice.component';
import { HostheaderComponent } from './hostmod/hostheader/hostheader.component';
import { LefthostbodyComponent } from './hostmod/lefthostbody/lefthostbody.component';
import { RighthostbodyComponent } from './hostmod/righthostbody/righthostbody.component';
import { HosticonsComponent } from './hostmod/hosticons/hosticons.component';
import { HostbioComponent } from './hostmod/hostbio/hostbio.component';
import { HostduringyourstayComponent } from './hostmod/hostduringyourstay/hostduringyourstay.component';
import { HostsuperhostexplainationComponent } from './hostmod/hostsuperhostexplaination/hostsuperhostexplaination.component';
import { HostlanguageandresponserateComponent } from './hostmod/hostlanguageandresponserate/hostlanguageandresponserate.component';
import { HostbuttonsandsecurityComponent } from './hostmod/hostbuttonsandsecurity/hostbuttonsandsecurity.component';
import { HostDataService } from './host-data-service/host-data.service';
import { CohostDataService } from './cohost-data-service/cohost-data.service';
import { HouseRulesComponent } from './things-to-know/house-rules/houserules.component';
import { HealthSafetyComponent } from './things-to-know/health&safety/health&safety.component';
import { CancellationComponent } from './things-to-know/cancellation-policy/cancellation.component';
import { TtkContainerComponent } from './things-to-know/ttk-container/ttkcontainer.component';
import { TtkDataService } from './things-to-know/ttk-data-service/ttk-data.service';
import { TitleMptsComponent } from './mpts/title-mpts/title-mpts.component';
import { MptsComponentComponent } from './mpts/mpts-component/mpts-component.component';
import { CardMptsComponent } from './mpts/card-mpts/card-mpts.component';
import { HostcohostComponent } from './hostmod/hostcohost/hostcohost.component';
import { ListingInfoContainerComponent } from './listingInfo/listing-info-container/listing-info-container.component';
import { TitleInfoComponent } from './listingInfo/title-info/title-info.component';
import { StayDescriptorComponent } from './listingInfo/stay-descriptor/stay-descriptor.component';
import { QuickInfoComponent } from './listingInfo/quick-info/quick-info.component';
import { BioBlurbInfoComponent } from './listingInfo/bio-blurb-info/bio-blurb-info.component';
import { SleepingArrangementsInfoComponent } from './listingInfo/sleeping-arrangements-info/sleeping-arrangements-info.component';
import { AmenitiesInfoComponent } from './listingInfo/amenities-info/amenities-info.component';
import { LocationComponent } from './location/location/location.component';
import { MapComponent } from './location/map/map.component';
import { PointsComponent } from './location/points/points.component';
import { CityComponent } from './location/city/city.component';
import { ReviewsComponent } from './Reviews/reviews.component';
import { ReviewsService } from './services/reviews.service';
import { DirectoryComponent } from './directory/directory.component';
import { ListingInfoService } from './services/listingInfo.service';
import { FooterComponent } from './footer/footer.component';
import { BrianTtdComponent } from './brian-ttd/brian-ttd.component';
import { HeaderComponent } from './header/header.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CalenderComponent } from './calender/calender.component';
import { MainpgComponent } from './mainpg/mainpg.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CovidComponent } from './header/covid/covid.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { LogoComponent } from './logo/logo.component';
import { MoreFiltersComponent } from './more-filters/more-filters.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsComponent } from './results/results.component';
import { ResultOtherPlacesComponent } from './result-other-places/result-other-places.component';
import { CancelFlexComponent } from './cancel-flex/cancel-flex.component';
import { GuestsSearchbarComponent } from './guests-searchbar/guests-searchbar.component';
import { GuestExpandedComponent } from './guest-expanded/guest-expanded.component';
import { TypeofPlaceComponent } from './type-of-place/type-of-place.component';
import { TypeOfPlaceExpandedComponent } from './type-of-place-expanded/type-of-place-expanded.component';

import { PricefilterComponent } from './pricefilter/pricefilter.component';
import { ExploreNearbyComponent } from './explore-nearby/explore-nearby.component';
import { PriceExpandComponent } from './price-expand/price-expand.component';
import { MoreFiltersModalComponent } from './more-filters-modal/more-filters-modal.component';
import { MoreFiltersModalContent } from './more-filters-modal/more-filters-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HostsliceComponent,
    BrianPhotoComponent,
    HostheaderComponent,
    LefthostbodyComponent,
    RighthostbodyComponent,
    HosticonsComponent,
    HostbioComponent,
    HostduringyourstayComponent,
    HostsuperhostexplainationComponent,
    HostlanguageandresponserateComponent,
    HostbuttonsandsecurityComponent,
    HouseRulesComponent,
    HealthSafetyComponent,
    CancellationComponent,
    TtkContainerComponent,
    TitleMptsComponent,
    MptsComponentComponent,
    CardMptsComponent,
    LocationComponent,
    MapComponent,
    PointsComponent,
    CityComponent,
    ListingInfoContainerComponent,
    TitleInfoComponent,
    StayDescriptorComponent,
    QuickInfoComponent,
    BioBlurbInfoComponent,
    SleepingArrangementsInfoComponent,
    AmenitiesInfoComponent,
    HostcohostComponent,
    DirectoryComponent,
    HeaderComponent,
    ReviewsComponent,
    FooterComponent,
    CalenderComponent,
    BrianTtdComponent,
    MainpgComponent,
    ReservationComponent,
    CovidComponent,
    SearchPageComponent,
    LogoComponent,
    MoreFiltersComponent,
    SearchBarComponent,
    ResultsComponent,
    ResultOtherPlacesComponent,
    CancelFlexComponent,
    GuestsSearchbarComponent,
    GuestExpandedComponent,
    ResultsComponent,
    TypeofPlaceComponent,
    TypeOfPlaceExpandedComponent,
    PricefilterComponent,
    ExploreNearbyComponent,
    PriceExpandComponent,
    MoreFiltersModalComponent,
    MoreFiltersModalContent,
  ],
  imports: [
    FormsModule,
    MbscModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleMapsModule,
    NgbModule,
  ],

  exports: [MoreFiltersModalComponent],

  providers: [
    HostDataService,
    PhotosService,
    CohostDataService,
    TtkDataService,
    ReviewsService,
    ListingInfoService,
  ],

  bootstrap: [AppComponent, MoreFiltersModalComponent, MoreFiltersComponent],
})
export class AppModule {}
