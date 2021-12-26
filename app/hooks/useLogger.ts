import {useEffect} from 'react';
const useLogger = (log: any) => () => {
  useEffect(() => {
    console.log(log);
  }, [log]);
};
export default useLogger;
