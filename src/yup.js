import * as yup from 'yup';

const schema = yup.object().shape({
  overwrittenscore: yup
    .string()
    .nullable()
    .notRequired()
    .test(
      'lessThan4',
      'Overwritten Score must be less than 4.00',
      function (value) {
        const otherValue = this.resolve(yup.ref('overwrittenscorecomments'));
        if (otherValue && otherValue.trim() !== '') {
          return parseFloat(value) < 4.00;
        }
        return true;
      }
    ),
  overwrittenscorecomments: yup
    .string()
    .when('overwrittenscore', {
      is: (value) => value && value.trim() !== '',
      then: yup.string().required('Overwritten Score Comments are required'),
      otherwise: yup.string(),
    }),
});
