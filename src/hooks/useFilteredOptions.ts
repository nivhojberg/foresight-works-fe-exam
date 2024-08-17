import { useState } from 'react';
import { Option } from '../types/types';


const useFilteredOptions = (allOptions: Option[]) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(allOptions);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;

    if (searchValue === '') {
      setFilteredOptions(allOptions);
    } else {      
      setFilteredOptions(allOptions.filter((option: Option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      ));
    }
  };

  return { filteredOptions, onSearch }
};

export default useFilteredOptions;
