import { Grid, Typography, FormControl, TextField } from '@mui/material';
import { useField , Formik, Form} from 'formik';
import React, { useState, useEffect } from 'react';
const OneElement = ({ formikPath, name }) => {
    const [field, meta, helper] = useField(formikPath);
  
    return (
      <>
        <Grid item container lg={6} sm={6} xs={6} md={6} sx={{ mt: 2.5 }}>
          
        </Grid>
        <Grid item container lg={6} sm={6} xs={6} md={6}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField {...field} label={name} />
          </FormControl>
        </Grid>
      </>
    );
  };
// Inside your form component
// Inside your form component
const Keyind = () => {
    const [netWorthCount, setNetWorthCount] = useState(1); // State to hold the count of netWorth entries
  
    useEffect(() => {
      // Simulating API call to fetch the netWorth count
      // Replace this with your actual API call
      const fetchNetWorthCount = () => {
        // Assuming the API response is an object with a 'count' property
        const apiResponse = { count: 3 }; // Replace '3' with your actual API response
        
        // Update the netWorthCount state with the fetched count
        setNetWorthCount(apiResponse.count);
      };
  
      fetchNetWorthCount();
    }, []);
  
    const initialValues = {
      netWorth: Array.from({ length: netWorthCount }, () => ({
        assets: {
          personalHome: 0,
          investmentProperty: 0,
          cashSavings: 0,
          totalAssets: 0
        },
        liabilities: {
          debt: '',
          securedLoan: ''
        },
        income: {
          salary: '',
          rentalIncome: ''
        },
        expenditure: {
          HRA: ''
        }
      }))
    };
  
    const handleSubmit = (values) => {
      console.log(values);
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
        {({ values }) => (
          <Form>
            {/* Render oneElement for each netWorth entry */}
            {values.netWorth.map((netWorthEntry, index) => (
              <React.Fragment key={index}>
                {/* Render heading for each netWorth entry */}
                <h3>Net Worth {index + 1}</h3>
  
                {/* Render oneElement for each asset */}
                <h4>Assets</h4>
                {Object.entries(netWorthEntry.assets).map(([key, value]) => (
                  <OneElement
                    key={key}
                    formikPath={`netWorth[${index}].assets.${key}`}
                    name={key.charAt(0).toUpperCase() + key.slice(1)}
                  />
                ))}
  
                {/* Render oneElement for each liability */}
                <h4>Liabilities</h4>
                {Object.entries(netWorthEntry.liabilities).map(([key, value]) => (
                  <OneElement
                    key={key}
                    formikPath={`netWorth[${index}].liabilities.${key}`}
                    name={key.charAt(0).toUpperCase() + key.slice(1)}
                  />
                ))}
  
                {/* Render oneElement for each income */}
                <h4>Income</h4>
                {Object.entries(netWorthEntry.income).map(([key, value]) => (
                  <OneElement
                    key={key}
                    formikPath={`netWorth[${index}].income.${key}`}
                    name={key.charAt(0).toUpperCase() + key.slice(1)}
                  />
                ))}
  
                {/* Render oneElement for each expenditure */}
                <h4>Expenditure</h4>
                {Object.entries(netWorthEntry.expenditure).map(([key, value]) => (
                  <OneElement
                    key={key}
                    formikPath={`netWorth[${index}].expenditure.${key}`}
                    name={key.charAt(0).toUpperCase() + key.slice(1)}
                  />
                ))}
              </React.Fragment>
            ))}
  
            {/* Submit button and other form fields */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default Keyind;
  