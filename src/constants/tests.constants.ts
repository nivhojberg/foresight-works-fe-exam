import { Option } from '../types/types';

export const LOGO_TEST_ID = 'logo';
export const NAME_INPUT_TEST_ID = 'name-input';
export const EMAIL_INPUT_TEST_ID = 'email-input';
export const GENDER_SELECT_TEST_ID = 'gender-select';
export const GENDER_SELECT_OPTION_PREFIX_TEST_ID = 'select-option-gender-';
export const LANGUAGES_SELECT_TEST_ID = 'languages-select';
export const LANGUAGES_SELECT_OPTION_PREFIX_TEST_ID = 'select-option-languages-';
export const SUBMIT_BUTTON_TEST_ID = 'submit-button';

export const TEST_NAME_VALUE = 'Test';
export const TEST_EMAIL_VALUE = 'test@email.com';
export const TEST_GENDER_VALUE = 'other';
export const TEST_LANGUAGES_VALUES = ['english', 'spanish'];

export const TEST_OPTIONS: Option[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
];

export const SINGLE_SELECT_NAME = 'singleselect';
export const MULTI_SELECT_NAME = 'multiselect';
export const SINGLE_SELECT_PLACEHOLDER = 'Select option';
export const MULTI_SELECT_PLACEHOLDER = 'Select options';
export const SINGLE_SELECT_TEST_ID = 'single-select-test-id';
export const MULTI_SELECT_TEST_ID = 'multi-select-test-id';

export const SINGLE_SELECT_OPTION_1_TEST_ID = `select-option-${SINGLE_SELECT_NAME}-1`;
export const SINGLE_SELECT_OPTION_2_TEST_ID = `select-option-${SINGLE_SELECT_NAME}-2`;
export const SINGLE_SELECT_OPTION_3_TEST_ID = `select-option-${SINGLE_SELECT_NAME}-3`;
export const MULTI_SELECT_OPTION_1_TEST_ID = `select-option-${MULTI_SELECT_NAME}-1`;
export const MULTI_SELECT_OPTION_2_TEST_ID = `select-option-${MULTI_SELECT_NAME}-2`;
export const MULTI_SELECT_OPTION_3_TEST_ID = `select-option-${MULTI_SELECT_NAME}-3`;

export const SINGLE_SELECT_DISPLAY_VALUE = `display-value-${SINGLE_SELECT_TEST_ID}`;
export const MULTI_SELECT_DISPLAY_VALUE = `display-value-${MULTI_SELECT_TEST_ID}`;

export const SELECT_SEARCH_INPUT_TEST_ID = `select-${MULTI_SELECT_TEST_ID}-search-input`;
export const SELECT_ALL_BUTTON_TEST_ID = `${MULTI_SELECT_TEST_ID}-select-all-button`;