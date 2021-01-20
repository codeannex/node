import { app } from './app';

// Setup Database
(async () => {
  try {
    // connect to database 
  } catch(err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
})();
