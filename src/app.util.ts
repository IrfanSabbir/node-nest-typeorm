const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@$!%*?&]).{8,}$/;

const PASSWORD_RULE_MESSAGE =
  'Password should have at least 1 lower and uppercase alongside a number and special character';

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE,
};

export const REGEX = {
  PASSWORD_RULE,
};
