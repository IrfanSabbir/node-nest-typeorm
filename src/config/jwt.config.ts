export const jwtConfig = {
  secret: process.env.APP_SECRET,
  signOptions: { expiresIn: '1d' },
};
