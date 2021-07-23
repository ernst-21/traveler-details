export const strongPass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\'$%\'^&\'*])(?=.{8,})');

export const wrongPasswordMessage = 'Password must contain at least: 8 characters, 1 lowercase, 1 uppercase, 1 special character. Please try again';
