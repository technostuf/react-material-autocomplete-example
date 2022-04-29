import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Grid } from "@mui/material";

const AutoCompleteComponent = (props) => {
    const itFirms = [
        { title: 'Microsoft Corporation' },
        { title: 'IBM' },
        { title: 'Accenture' },
        { title: 'Oracle' },
        { title: 'SAP' },
        { title: "TCS - Tata Consultancy Services" },
        { title: 'DXC' },
    ];
    const defaultValue = { title: 'DXC' };
    const [value, setValue] = useState(defaultValue);

    const defaultProps = {
        options: itFirms,
        getOptionLabel: (option) => option.title,
    };

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <h1>React material autocomplete - technostuf.com</h1>
                <Stack spacing={1} sx={{ width: 500 }}>
                    <Autocomplete
                        {...defaultProps}
                        id="clear-on-escape"
                        clearOnEscape
                        defaultValue={defaultValue}
                        onChange={(event, newValue) => {
                            console.log(newValue);
                            setValue(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Select Company" variant="standard" />
                        )}
                    />
                    <p>Selected Country - {value?.title} </p>
                </Stack>
            </Grid>
        </>
    );
}
export default AutoCompleteComponent;