export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const trueOrFalse = true;
    if (trueOrFalse) resolve('Promise I am');
    else reject(Error('The fake API is not working currently'));
  });
}
