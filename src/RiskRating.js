import { Grid, Typography, FormControl, TextField } from '@mui/material';
import { useField, Formik, Form } from 'formik';
import React, { useState, useEffect } from 'react';
import jsonData from './Signals.json';
// Inside your form component
// Inside your form component
const RiskRating = () => {
    const [tableData, setTableData] = useState([]);
    console.log(jsonData)
    const [transformedData, setTransformedData] = useState([]);

    // const [initialValues, setInitialValues] = useState<{ manualInputs: ManualInputs }>({ manualInputs: {} });
    // const [initialValues, setInitialValues] = useState({ manualInputs: { "CompanyOverview": 4, "EBITDAvsDSCForAF": 1 } });

    useEffect(() => {
        setTableData(jsonData);

    }, [jsonData]);

    useEffect(() => {
        console.log(tableData)
        if (tableData && tableData.signalCriteriaMapping) {
            const flattenedArray = tableData.signalCriteriaMapping.flatMap((item) =>
                item.signalCriteriaMappingAtSubFactor.map((subItem) => ({
                    signalName: subItem.signalName,
                    optionMapping: subItem.optionMapping,
                }))
            );
            setTransformedData(flattenedArray)
        }
    }, [tableData])

    useEffect(() => {
        console.log(transformedData, " The transformed data")
    }, [transformedData])


    return (
        <div></div>
    )

}

export default RiskRating;
