import { useContext } from 'react';
import '../styles/SelectOption.css';
import { SelectContext } from '../hooks/useSelectContext';
import { Option } from '../types/types';

type Props = {
  name: string;
  option: Option;
  isMultiple: boolean;
};

const SelectOption = ({ name, option, isMultiple }: Props) => {
  const { isOptionSelected, onClickOption } = useContext(SelectContext);

  const isSelected = isOptionSelected(option);
  const className = isSelected ? 'Select-option Selected' : 'Select-option';

  return (
    <div
      className={className}
      onClick={() => onClickOption(option)}
      data-testid={`select-option-${name}-${option.value}`}
    >
      {isMultiple && (
        <input
          type='checkbox'
          name={name}
          id={option.value}
          value={option.value}
          checked={isSelected}
          readOnly
        />
      )}
      <span className='Option-label'>{option.label}</span>
    </div>
  );
};

export default SelectOption;
