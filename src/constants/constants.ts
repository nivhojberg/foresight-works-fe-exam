import { SelectContextProps } from '../types/types';

export const SELECT_CONTEXT_DEFAULT_VALUE: SelectContextProps = {
  selectedOptions: [],
  isOptionSelected: () => false,
  onClickOption: () => {},
  onSelectAll: () => {},
};

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-Binary' },
  { value: 'other', label: 'Other' },
  { value: 'prefer not to answer', label: 'Prefer not to answer' },
];

export const LANGUAGE_OPTIONS = [
  { value: 'hebrew', label: 'Hebrew' },
  { value: 'english', label: 'English' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'russian', label: 'Russian' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'italian', label: 'Italian' },
  { value: 'portuguese', label: 'Portuguese' },
  { value: 'german', label: 'German' },
  { value: 'turkish', label: 'Turkish' },
  { value: 'mandarin chinese', label: 'Mandarin Chinese' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'korean', label: 'Korean' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'other', label: 'Other' },
];
