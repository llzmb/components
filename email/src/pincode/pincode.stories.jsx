import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import EmailPincode from './pincode';
import withEmail from '../withEmail';
import readme from './README.md';

storiesOf('Email / EmailPincode', module)
  .addDecorator(withEmail)
  .addDecorator(withReadme(readme))
  .add('default', () => <EmailPincode>1234</EmailPincode>);
