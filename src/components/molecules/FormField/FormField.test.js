import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormField from 'components/molecules/FormField/FormField';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
