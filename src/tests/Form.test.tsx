import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../components/Form';
import {
  EMAIL_INPUT_TEST_ID,
  GENDER_SELECT_OPTION_PREFIX_TEST_ID,
  GENDER_SELECT_TEST_ID,
  LANGUAGES_SELECT_OPTION_PREFIX_TEST_ID,
  LANGUAGES_SELECT_TEST_ID,
  NAME_INPUT_TEST_ID,
  SUBMIT_BUTTON_TEST_ID,
  TEST_EMAIL_VALUE,
  TEST_GENDER_VALUE,
  TEST_LANGUAGES_VALUES,
  TEST_NAME_VALUE
} from '../constants/tests.constants';

describe('Test form', () => {
  test('Test form render', () => {
    render(<Form />);
    const nameInputElement = screen.getByTestId(NAME_INPUT_TEST_ID);
    const emailInputElement = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const genderSelectElement = screen.getByTestId(GENDER_SELECT_TEST_ID);
    const languagesSelectElement = screen.getByTestId(LANGUAGES_SELECT_TEST_ID);
    const submitButtonElement = screen.getByTestId(SUBMIT_BUTTON_TEST_ID);
  
    expect(nameInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(genderSelectElement).toBeInTheDocument();
    expect(languagesSelectElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });
  
  test('Test submit form button should log payload', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    render(<Form />);
  
    const nameInputElement = screen.getByTestId(NAME_INPUT_TEST_ID);
    const emailInputElement = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const genderSelectElement = screen.getByTestId(GENDER_SELECT_TEST_ID);
    const languagesSelectElement = screen.getByTestId(LANGUAGES_SELECT_TEST_ID);
    const submitButtonElement = screen.getByTestId(SUBMIT_BUTTON_TEST_ID);
  
    fireEvent.change(nameInputElement, { target: { value: TEST_NAME_VALUE } });
    fireEvent.change(emailInputElement, { target: { value: TEST_EMAIL_VALUE } });
    fireEvent.click(genderSelectElement);
    fireEvent.click(screen.getByTestId(`${GENDER_SELECT_OPTION_PREFIX_TEST_ID}${TEST_GENDER_VALUE}`));
    fireEvent.click(languagesSelectElement);
    TEST_LANGUAGES_VALUES.forEach(value => {
      fireEvent.click(screen.getByTestId(`${LANGUAGES_SELECT_OPTION_PREFIX_TEST_ID}${value}`))
    });
    fireEvent.click(submitButtonElement);

    expect(logSpy).toHaveBeenCalledWith({
      name: TEST_NAME_VALUE,
      email: TEST_EMAIL_VALUE,
      gender: TEST_GENDER_VALUE,
      languages: TEST_LANGUAGES_VALUES
    });
  });
});
