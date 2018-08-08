import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListDisputesComponent } from '../list-disputes/list-disputes.component';
import { GetDisputeComponent } from '../get-dispute/get-dispute.component';


const routes: Route[] = [
    { path: '', redirectTo: '/disputes', pathMatch: 'full' },
    { path: 'disputes', component: ListDisputesComponent },
  { path: 'disputes/:id', component: GetDisputeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingDisputesModule { }
