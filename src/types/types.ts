export type Option = {
  label: string;
  value: string;
};

export type SelectContextProps = {
  selectedOptions: Option[];
  isOptionSelected: (option: Option) => boolean;
  onClickOption: (value: Option) => void;
  onSelectAll: () => void;
};
