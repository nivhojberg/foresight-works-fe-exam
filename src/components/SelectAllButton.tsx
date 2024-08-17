import { useContext } from 'react';
import { SelectContext } from '../hooks/useSelectContext';

type Props = {
  testId: string;
};

const SelectAllButton = ({ testId }: Props) => {
  const { selectedOptions, onSelectAll } = useContext(SelectContext);

  return (
    <button className='Button' onClick={onSelectAll} data-testid={`${testId}-select-all-button`}>
      {selectedOptions.length > 0 ? 'Deselect All' : 'Select All'}
    </button>
  );
};

export default SelectAllButton;
