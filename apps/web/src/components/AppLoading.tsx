import { useEffect, useState } from 'react';

const AppLoading = () => {
  const [message, setMessage] = useState<null | string>(null);
  useEffect(() => {
    async function initFetch() {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const initUrl = baseUrl + '/me';
      const res = fetch(initUrl);
      res
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          if (typeof result === 'string') setMessage(result);
        })
        .catch(() => {
          setMessage('there was an error ');
        });
    }

    initFetch();
  }, []);
  return (
    <>
      {!message && <h1 className="text-center">Loading</h1>}
      {message && <h1 className="text-center">{message}</h1>}
    </>
  );
};

export default AppLoading;
