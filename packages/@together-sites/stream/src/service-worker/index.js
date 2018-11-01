import { register as load } from 'register-service-worker';

const ready = () => {
  console.info('The application is being served from cache by a service worker.');
};

const cached = () => {
  console.info('Content has been cached for offline use.');
};

const updated = () => {
  console.info('New content is available; please refresh.');
};

const offline = () => {
  console.info('No internet connection found; App is running in offline mode.');
};

const error = (error) => {
  console.error('Error during service worker registration', error);
};

export const register = () => {
  load(`${process.env.BASE_URL}service-worker.js`, {
    ready,
    cached,
    updated,
    offline,
    error,
  });
};
