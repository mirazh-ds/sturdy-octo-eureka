import { useEffect } from 'react';



const usePreloadPages = () => {
  useEffect(() => {
    import('../pages/about');
  }, []);
};

export default usePreloadPages;