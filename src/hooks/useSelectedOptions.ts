import { useState } from 'react';
import { Option } from '../types/types';

type Props = {
  isMultiple: boolean;
  options: Option[];
};

const useSelectedOptions = ({ isMultiple, options }: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const isOptionSelected = (option: Option) => {
    return selectedOptions.find(opt => opt.value === option.value) !== undefined;
  };

  const onClickOption = (option: Option) => {
    let newValue: Option[] = [...selectedOptions];

    if (isMultiple) {
      const indexOf = selectedOptions.map(option => option.value).indexOf(option.value);

      if (indexOf === -1) {
        newValue.push(option);
      } else {
        newValue.splice(indexOf, 1);
      }
    } else {
      newValue = [option];
    }

    setSelectedOptions(newValue);
  };

  const onSelectAll = () => {
    if (!isMultiple) {
      return;
    }

    if (selectedOptions.length > 0) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
  };

  return {
    selectedOptions,
    isOptionSelected,
    onClickOption,
    onSelectAll
  };
};

export default useSelectedOptions;
