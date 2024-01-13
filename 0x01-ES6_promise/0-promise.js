export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('API response data');
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('API call failed');
      }
    }, 2000);
  });
}
