import { FormGroup } from '@angular/forms';

export function userPassEqualsValidator(formGroup: FormGroup) {

  const userName = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if(userName.trim() + password.trim()) {
    return userName !== password ? null : { userPassEqual: true };
  } else {
    return null
  }
}
