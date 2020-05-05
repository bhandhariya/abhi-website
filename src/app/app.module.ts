import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './site/index/index.component';
import { LLCComponent } from './site/start-with-your-business/llc/llc.component';
import { CCorporationComponent } from './site/start-with-your-business/c-corporation/c-corporation.component';
import { SCorporationComponent } from './site/start-with-your-business/s-corporation/s-corporation.component';
import { ProfitComponent } from './site/start-with-your-business/profit/profit.component';
import { DBAComponent } from './site/start-with-your-business/dba/dba.component';
import { IncorporationWizardComponent } from './site/start-with-your-business/incorporation-wizard/incorporation-wizard.component';
import { CompareEntityTypeComponent } from './site/start-with-your-business/compare-entity-type/compare-entity-type.component';
import { FreeNameSearchComponent } from './site/start-with-your-business/free-name-search/free-name-search.component';
import { HelpfulResourceComponent } from './site/start-with-your-business/helpful-resource/helpful-resource.component';
import { HeaderComponent } from './site/index/shared/header/header.component';
import { FooterComponent } from './site/index/shared/footer/footer.component';
import { LLCVsCorporationComponent } from './site/start-with-your-business/helpful-resource/llc-vs-corporation/llc-vs-corporation.component';
import { ReasonToGetADBAComponent } from './site/start-with-your-business/helpful-resource/reason-to-get-a-dba/reason-to-get-a-dba.component';
import { BusinessLiacencePermitComponent } from './site/start-with-your-business/helpful-resource/business-liacence-permit/business-liacence-permit.component';
import { ShouldYouCorporateYourBusinessComponent } from './site/start-with-your-business/helpful-resource/should-you-corporate-your-business/should-you-corporate-your-business.component';
import { LLCSCorpCCorpOrDBAYourOptionsComponent } from './site/start-with-your-business/helpful-resource/llc-s-corp-c-corp-or-dba-your-options/llc-s-corp-c-corp-or-dba-your-options.component';
import { ManageYourBusinessComponent } from './site/manage-your-business/manage-your-business.component';
import { AnnualReportsComponent } from './site/manage-your-business/annual-reports/annual-reports.component';
import { InitialReportsComponent } from './site/manage-your-business/initial-reports/initial-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LLCComponent,
    CCorporationComponent,
    SCorporationComponent,
    ProfitComponent,
    DBAComponent,
    IncorporationWizardComponent,
    CompareEntityTypeComponent,
    FreeNameSearchComponent,
    HelpfulResourceComponent,
    HeaderComponent,
    FooterComponent,
    LLCVsCorporationComponent,
    ReasonToGetADBAComponent,
    BusinessLiacencePermitComponent,
    ShouldYouCorporateYourBusinessComponent,
    LLCSCorpCCorpOrDBAYourOptionsComponent,
    ManageYourBusinessComponent,
    AnnualReportsComponent,
    InitialReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
