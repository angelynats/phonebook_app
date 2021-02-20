export const rulesSignup = {
  name: 'required|string',
  email: 'required|email',
  password: 'required|string|min:6',
};

export const rulesLogin = {
  email: 'required|email',
  password: 'required|string|min:6',
};

export const rulesContact = {
  name: 'required|string',
  number: 'required|string|min:8',
};

export const messages = {
  required: field => `* ${field} is required`,
  'email.email': '* please enter a valid email address',
  'password.min': '* must be at least 6 characters long',
  'number.min': '* must be at least 8 characters long',
};
