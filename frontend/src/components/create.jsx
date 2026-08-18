import { useState, useEffect } from "react";
import AxiosInstance from "./Axios.jsx";

const Create = () => {
  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);

  console.log(countries, leagues, characteristics);

  const GetData = async () => {
    AxiosInstance.get('countries/').then((rest) => {
      setCountries(rest.data);
    });

    AxiosInstance.get('leagues/').then((rest) => {
      setLeagues(rest.data);
    });

    AxiosInstance.get('characteristics/').then((rest) => {
      setCharacteristics(rest.data);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (

    <div>
      Welcome to create page
    </div>
  );
};

export default Create;
