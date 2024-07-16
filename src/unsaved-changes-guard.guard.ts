import { CanActivateFn } from '@angular/router';

export const unsavedChangesGuardGuard: CanActivateFn = (route, state) => {
  return true;
};

export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

// @Injectable({
//   providedIn: 'root',
// })
// export class UnsavedChangesGuard implements CanDeactivate<HasUnsavedChanges> {
//   canDeactivate(component: HasUnsavedChanges): Observable<boolean> | boolean {
//     if (component.hasUnsavedChanges()) {
//       // Prompt the user to confirm leaving the page or perform other checks
//       return confirm('You have unsaved changes. Are you sure you want to leave?');
//     }
//     return true;
//   }
// }