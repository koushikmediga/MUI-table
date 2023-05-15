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
import './MyTable.css';

const MyTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(jsonData);
  }, []);

  const initialValues = {
    manualInputs: {},
  };

  const calculateTotalWeight = (subFactors) => {
    return subFactors.reduce((sum, subFactor) => sum + subFactor.subFactorWeight, 0) ;
  };
  
  const calculateWeightedSum = (subFactors, factorWeight) => {
    const totalWeight = calculateTotalWeight(subFactors);
    return (factorWeight * totalWeight) / 100 ;
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
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form>
            {tableData.map((item, index) => {
              const subFactors = item.signalCriteriaMappingAtSubFactor;
              const factorWeight = item.factorWeight;
              // const sumOfWeights = subFactors.reduce((sum, subFactor) => sum + subFactor.weight, 0);

               // Calculate total weight and weighted sum
            let totalWeight = 0;
            let weightedSum = 0;

            subFactors.forEach((subFactor) => {
              const selectedValue = values.manualInputs[subFactor.signalName] ?? null;
              const weight = subFactor.subFactorWeight * selectedValue / 100;

              totalWeight += weight;
              weightedSum += weight * factorWeight;
            });


              return (
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
                        <TableCell>Risk Grade</TableCell>
                        <TableCell>Weightage</TableCell>
                        <TableCell>Weight</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {item.signalCriteriaMappingAtSubFactor.map((subItem, subIndex) => {
                        const selectedValue = values.manualInputs[subItem.signalName] ?? null;
                        const hasError = errors.manualInputs?.[subItem.signalName] && isSubmitting;

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
                                className={hasError ? 'error' : ''}
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
                              {hasError && (
                                <div className="error-message">Please select an option</div>
                              )}
                            </TableCell>
                            <TableCell>{selectedValue}</TableCell>
                            <TableCell>{subItem.subFactorWeight}</TableCell>
                            <TableCell>{subItem.subFactorWeight * selectedValue /100}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                    <TableBody>
                  <TableRow>
                    <TableCell align="right" colSpan={4}>
                      Total Weight:
                    </TableCell>
                    <TableCell>{totalWeight.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right" colSpan={4}>
                      Factor Weight:
                    </TableCell>
                    <TableCell>{factorWeight}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right" colSpan={4}>
                      Weighted Sum:
                    </TableCell>
                    <TableCell>{(weightedSum/100).toFixed(2)}</TableCell>
                  </TableRow>
                </TableBody>
                  </Table>
                </TableContainer>
              </div>);
})}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyTable
