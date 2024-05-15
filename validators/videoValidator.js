import { z } from 'zod';

const videoValidator = z.validate(video => {
  const Duration = z.integer().between(1, 3600);   
  const Size = z.integer().between(1000000, 1000000000); 

  const type = z.string().endsWith('.mp4');  

  return z.boolean().and(
    type,
    Duration,
    Size
  );
});

export { video, videoValidator };