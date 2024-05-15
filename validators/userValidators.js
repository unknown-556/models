import { z } from 'zod';

export const signUpValidator = z.object({
  name: z.string(),
  userName: z.string(),
  password: z
    .string()
    .min(6, { message: 'Password should be at least 6 characters long' })
    .max(10, { message: 'Password should not exceed 10 characters' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/, {
      message: 'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    })
  ,
  email: z.string().min(3).max(30),
  phoneNumber: z.string().min(10).max(11),
  profilePicture: z.string()
    .url()
    .max(1024).min(1)
    .required({ message: 'Please upload a valid profile picture' }),
});

export const signInValidator = z.object({
  email: z.string(),
  password: z.string().min(8).max(12)
    .url()
    .max(1024).min(1)
});
