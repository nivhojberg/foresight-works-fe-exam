import { fireEvent, render, screen } from '@testing-library/react';
import Select from '../components/Select';
import { MULTI_SELECT_DISPLAY_VALUE, MULTI_SELECT_NAME, MULTI_SELECT_OPTION_1_TEST_ID, MULTI_SELECT_OPTION_2_TEST_ID, MULTI_SELECT_OPTION_3_TEST_ID, MULTI_SELECT_PLACEHOLDER, MULTI_SELECT_TEST_ID, SELECT_ALL_BUTTON_TEST_ID, SELECT_SEARCH_INPUT_TEST_ID, SINGLE_SELECT_DISPLAY_VALUE, SINGLE_SELECT_NAME, SINGLE_SELECT_OPTION_1_TEST_ID, SINGLE_SELECT_OPTION_2_TEST_ID, SINGLE_SELECT_OPTION_3_TEST_ID, SINGLE_SELECT_PLACEHOLDER, SINGLE_SELECT_TEST_ID, TEST_OPTIONS } from '../constants/tests.constants';

const SINGLE_SELECT = (
  <Select
    isMultiple={false}
    name={SINGLE_SELECT_NAME}
    options={TEST_OPTIONS}
    placeholder={SINGLE_SELECT_PLACEHOLDER}
    onChange={() => {}}
    testId={SINGLE_SELECT_TEST_ID}
  />
);

const MULTI_SELECT = (
  <Select
    isMultiple={true}
    name={MULTI_SELECT_NAME}
    options={TEST_OPTIONS}
    placeholder={MULTI_SELECT_PLACEHOLDER}
    onChange={() => {}}
    testId={MULTI_SELECT_TEST_ID}
  />
);

describe('Test Select', () => {
  test('Test single select', () => {
    render(SINGLE_SELECT);
    const singleSelectElement = screen.getByTestId(SINGLE_SELECT_TEST_ID);
    expect(singleSelectElement).toBeInTheDocument();
    fireEvent.click(singleSelectElement);

    const option1Element = screen.getByTestId(SINGLE_SELECT_OPTION_1_TEST_ID);
    const option2Element = screen.getByTestId(SINGLE_SELECT_OPTION_2_TEST_ID);
    const option3Element = screen.getByTestId(SINGLE_SELECT_OPTION_3_TEST_ID);
    expect(option1Element).toBeInTheDocument();
    expect(option2Element).toBeInTheDocument();
    expect(option3Element).toBeInTheDocument();

    fireEvent.click(option1Element);
    expect(screen.getByTestId(SINGLE_SELECT_DISPLAY_VALUE).innerHTML).toEqual('1');
    fireEvent.click(option3Element);
    expect(screen.getByTestId(SINGLE_SELECT_DISPLAY_VALUE).innerHTML).toEqual('3');
  });

  test('Test multi select', () => {
    render(MULTI_SELECT);
    const multiSelectElement = screen.getByTestId(MULTI_SELECT_TEST_ID);
    expect(multiSelectElement).toBeInTheDocument();
    fireEvent.click(multiSelectElement);

    const option1Element = screen.getByTestId(MULTI_SELECT_OPTION_1_TEST_ID);
    const option2Element = screen.getByTestId(MULTI_SELECT_OPTION_2_TEST_ID);
    const option3Element = screen.getByTestId(MULTI_SELECT_OPTION_3_TEST_ID);
    expect(option1Element).toBeInTheDocument();
    expect(option2Element).toBeInTheDocument();
    expect(option3Element).toBeInTheDocument();

    fireEvent.click(option1Element);
    expect(screen.getByTestId(MULTI_SELECT_DISPLAY_VALUE).innerHTML).toEqual('1');
    fireEvent.click(option3Element);
    expect(screen.getByTestId(MULTI_SELECT_DISPLAY_VALUE).innerHTML).toEqual('1, 3');
  });

  test('Test multi select search filter', () => {
    render(MULTI_SELECT);
    const multiSelectElement = screen.getByTestId(MULTI_SELECT_TEST_ID);
    fireEvent.click(multiSelectElement);

    const searchInputElement = screen.getByTestId(SELECT_SEARCH_INPUT_TEST_ID);
    fireEvent.change(searchInputElement, { target: { value: '1' } });

    const option1Element = screen.queryByTestId(MULTI_SELECT_OPTION_1_TEST_ID);
    const option2Element = screen.queryByTestId(MULTI_SELECT_OPTION_2_TEST_ID);
    const option3Element = screen.queryByTestId(MULTI_SELECT_OPTION_3_TEST_ID);

    expect(option1Element).toBeInTheDocument();
    expect(option2Element).not.toBeInTheDocument();
    expect(option3Element).not.toBeInTheDocument();
  });

  test('Test multi select all and deselect all', () => {
    render(MULTI_SELECT);
    const multiSelectElement = screen.getByTestId(MULTI_SELECT_TEST_ID);
    fireEvent.click(multiSelectElement);
    
    const selectAllButton = screen.getByTestId(SELECT_ALL_BUTTON_TEST_ID);
    const option1Element = screen.getByTestId(MULTI_SELECT_OPTION_1_TEST_ID);

    fireEvent.click(option1Element);
    expect(screen.getByTestId(MULTI_SELECT_DISPLAY_VALUE).innerHTML).toEqual('1');
    fireEvent.click(selectAllButton);
    expect(screen.getByTestId(MULTI_SELECT_DISPLAY_VALUE).innerHTML).toEqual(MULTI_SELECT_PLACEHOLDER);

    fireEvent.click(selectAllButton);
    expect(screen.getByTestId(MULTI_SELECT_DISPLAY_VALUE).innerHTML).toEqual('1, 2, 3');
    fireEvent.click(selectAllButton);
    expect(screen.getByTestId(MULTI_SELECT_DISPLAY_VALUE).innerHTML).toEqual(MULTI_SELECT_PLACEHOLDER);
  });
});
