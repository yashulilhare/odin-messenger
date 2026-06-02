import type {
  HTMLInputTypeAttribute,
  HTMLInputAutoCompleteAttribute,
} from 'react';

interface FormFiledGroup {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  isRequired?: boolean;
  regEx?: string;
}

class FormField implements FormFiledGroup {
  public type: HTMLInputTypeAttribute;
  public name: string;
  public placeholder: string;
  public isRequired?: boolean;
  public regEx?: string;
  public autoComplete?: HTMLInputAutoCompleteAttribute;

  constructor(
    type: HTMLInputTypeAttribute,
    name: string,
    placeholder: string,
    isRequired?: boolean,
    autoComplete?: HTMLInputAutoCompleteAttribute,
    regEx?: string,
  ) {
    this.type = type;
    this.name = name;
    this.placeholder = placeholder;
    this.isRequired = isRequired;
    this.autoComplete = autoComplete;
    this.regEx = regEx;
  }
}

const firstName = new FormField(
  'text',
  'firstName',
  'First Name',
  true,
  'name',
);

const lastName = new FormField(
  'text',
  'lastName',
  'Last Name (optional)',
  false,
);

const username = new FormField(
  'text',
  'username',
  'Choose yourself a username',
  true,
  'username',
);

const password = new FormField(
  'password',
  'password',
  'password',
  true,
  'new-password',
  '^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{5,}$',
);

export const signUpData = [firstName, lastName, username, password];
