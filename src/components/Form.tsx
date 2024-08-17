import React, { useRef, useState } from 'react';
import Select from './Select';
import '../styles/Form.css';
import { GENDER_OPTIONS, LANGUAGE_OPTIONS } from '../constants/constants';
import {
  EMAIL_INPUT_TEST_ID,
  GENDER_SELECT_TEST_ID,
  LANGUAGES_SELECT_TEST_ID,
  NAME_INPUT_TEST_ID,
  SUBMIT_BUTTON_TEST_ID
} from '../constants/tests.constants';

const Form = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleGenderChange = (selectedValues: string[]) => {
    setSelectedGender(selectedValues.length ? selectedValues[0] : '');
  };

  const handleLanguagesChange = (selectedValues: string[]) => {
    setSelectedLanguages(selectedValues);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const payload = {
      name: nameInputRef.current?.value,
      email: emailInputRef.current?.value,
      gender: selectedGender,
      languages: selectedLanguages,
    };
    console.log(payload);
  };

  return (
    <div className='Form'>
      <input
        type='text'
        className='Text-input'
        placeholder='Name'
        ref={nameInputRef}
        data-testid={NAME_INPUT_TEST_ID}
      />
      <input
        type='text'
        className='Text-input'
        placeholder='Email'
        ref={emailInputRef}
        data-testid={EMAIL_INPUT_TEST_ID}
      />
      <Select
        name='gender'
        options={GENDER_OPTIONS}
        isMultiple={false}
        placeholder='Select gender'
        onChange={handleGenderChange}
        testId={GENDER_SELECT_TEST_ID}
      />
      <Select
        name='languages'
        options={LANGUAGE_OPTIONS}
        isMultiple={true}
        placeholder='Select languages'
        onChange={handleLanguagesChange}
        testId={LANGUAGES_SELECT_TEST_ID}
      />
      <button
        type='submit'
        className='Button'
        onClick={onSubmit}
        data-testid={SUBMIT_BUTTON_TEST_ID}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
