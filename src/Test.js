import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import jsonData from './values.json';

const MyTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(jsonData);
  }, []);

  const initialValues = {
    manualInputs: {},
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    // resetForm();
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    manualInputs: Yup.object().shape(
      tableData.reduce((schema, item) => {
        item.signalCriteriaMappingAtSubFactor.forEach((subItem) => {
          schema[subItem.signalName] = Yup.number().required('Please select an option');
        });
        return schema;
      }, {})
    ),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            {tableData.map((item, index) => (
              <div key={index}>
                <Typography variant="h6" gutterBottom>
                  {item.factor}
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Sub Factor</TableCell>
                        <TableCell>Signal Name</TableCell>
                        <TableCell>Options</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {item.signalCriteriaMappingAtSubFactor.map((subItem, subIndex) => {
                        const selectedValue = values.manualInputs[subItem.signalName] ?? null;
                        return (
                          <TableRow key={`${index}-${subIndex}`}>
                            <TableCell>{subItem.subFactor}</TableCell>
                            <TableCell>{subItem.signalName}</TableCell>
                            <TableCell>
                              <Field
                                name={`manualInputs.${subItem.signalName}`}
                                as={Select}
                                value={selectedValue}
                                onChange={(event) => {
                                  const selectedOption = event.target.value;
                                  setFieldValue(`manualInputs.${subItem.signalName}`, selectedOption);
                                }}
                              >
                                <MenuItem value={null}>Select an option</MenuItem>
                                {subItem.optionMapping.map((option, optionIndex) => (
                                  <MenuItem
                                    key={`${index}-${subIndex}-${optionIndex}`}
                                    value={option.optionMapping.max}
                                  >
                                    {option.name}
                                  </MenuItem>
                                ))}
                              </Field>
                              <ErrorMessage
                                name={`manualInputs.${subItem.signalName}`}
                                component="div"
                                className="error-message"
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyTable;
