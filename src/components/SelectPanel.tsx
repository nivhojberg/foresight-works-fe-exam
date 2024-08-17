import '../styles/SelectPanel.css';
import { Option } from '../types/types';
import SelectOption from './SelectOption';
import SelectAllButton from './SelectAllButton';
import useFilteredOptions from '../hooks/useFilteredOptions';

type Props = {
  name: string;
  options: Option[];
  isMultiple: boolean;
  onClose: () => void;
  testId: string;
};

const SelectPanel = ({ name, options, isMultiple, onClose, testId }: Props) => {
  const { filteredOptions, onSearch } = useFilteredOptions(options);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <>
      <div className='Select-panel-background' onClick={handleBackgroundClick} />
      <div className='Select-panel' onClick={event => event.stopPropagation()}>
        <input
          type='text'
          className='Text-input'
          placeholder='Search'
          onChange={onSearch}
          data-testid={`select-${testId}-search-input`}
        />
        <div className='Options-container'>
          {filteredOptions.map((option: Option) => (
            <SelectOption key={option.value} name={name} option={option} isMultiple={isMultiple} />
          ))}
        </div>
        {isMultiple && <SelectAllButton testId={testId} />}
      </div>
    </>
  );
};

export default SelectPanel;

