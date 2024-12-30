import { useEffect, useState } from "react";
import {getActor} from '../api/tmdb-api'

const useActor = id => { //BOILERPLATE CODE FROM USEMOVIE
  const [actor, setActor] = useState(null);
  useEffect(() => {
    getActor(id).then(actor => {
      setActor(actor);
    });
  }, [id]);
  return [actor, setActor];
};

export default useActor;