// this file contains data for buttons used in menu

// menu button can either be a link OR has onClick action
export type ButtonAction = string | (() => void);
class MenuButton {
  text: string;
  action: ButtonAction;

  constructor(text: string, action: ButtonAction) {
    this.text = text;
    this.action = action;
  }
}

export type MenuButtons = MenuButton[];

// temporary creating mockGuestMode to help create Menu functionality
const mockGuestMode = () => {};
const loginButton = new MenuButton('Login', '/login');
const signUpButton = new MenuButton('Signup', '/signup');
const guestModeButton = new MenuButton('Try as Guest', mockGuestMode);

// buttons before user logs in
export const preAuthButtons: MenuButton[] = [
  loginButton,
  signUpButton,
  guestModeButton,
];

// buttons after user has logged in
export const postAuthButton: MenuButton[] = [];
