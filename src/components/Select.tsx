import { useEffect, useState } from 'react';
import '../styles/Select.css';
import { Option } from '../types/types';
import ArrowIcon from './icons/ArrowIcon';
import SelectPanel from './SelectPanel';
import { SelectContextProvider } from '../hooks/useSelectContext';
import useSelectedOptions from '../hooks/useSelectedOptions';

type Props = {
  name: string;
  options: Option[];
  isMultiple: boolean;
  placeholder: string;
  onChange: (selectedValues: string[]) => void;
  testId: string;
};

const Select = ({ name, options, isMultiple, placeholder, onChange, testId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOptions, isOptionSelected, onClickOption, onSelectAll } = useSelectedOptions({ isMultiple, options });

  const className = isOpen ? 'Select Opened-select' : 'Select';
  const displayValue = selectedOptions.length === 0 ?
    placeholder : selectedOptions.map(option => option.label).join(', ');
  
  const handleSelectClick = () => setIsOpen(prev => !prev);

  const SelectContextValue = { selectedOptions, isOptionSelected, onClickOption, onSelectAll };

  useEffect(() => {
    onChange(selectedOptions.map(option => option.value));
  }, [selectedOptions])

  return (
    <SelectContextProvider value={SelectContextValue}>
      <div className={className} onClick={handleSelectClick} data-testid={testId}>
        <div className='Display-value' data-testid={`display-value-${testId}`}>{displayValue}</div>
        <ArrowIcon flipped={isOpen} />
        {isOpen && (
          <SelectPanel
            name={name}
            options={options}
            isMultiple={isMultiple}
            onClose={() => setIsOpen(false)}
            testId={testId}
          />
        )}
      </div>
    </SelectContextProvider>
  )
};

export default Select;
