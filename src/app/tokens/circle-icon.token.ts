import { InjectionToken } from '@angular/core';

const icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" fill="currentColor" id="circleFill" class="bi bi-circle-fill" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg>';

export const CIRCLE_FILL_ICON = new InjectionToken<string>('Circle fill icon', {
  factory: () => icon,
});
