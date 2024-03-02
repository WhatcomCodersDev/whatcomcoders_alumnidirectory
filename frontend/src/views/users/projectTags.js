import React from 'react';
import { useField } from 'formik';
import { Autocomplete, Chip, TextField } from '@mui/material';
import theme from 'theme/typography';

const ProjectTagsField = ({ name, options, ...otherProps }) => {
  // const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleChange = (event, newValue) => {
    // setFieldValue(name, newValue);
  };

  return (
    <Autocomplete
      {...field}
      {...otherProps}
      multiple
      id={`${name}-autocomplete`}
      options={options}
      freeSolo
      onChange={handleChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant='outlined'
            label={option}
            {...getTagProps({ index })}
            sx={{ border: '1px solid grey', color: theme.color }} // TODO: Make same grey as other chips in project page
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} variant='outlined' label='Tags' />
      )}
      value={field.value || []} // Ensure the value is never undefined
    />
  );
};

export default ProjectTagsField;
