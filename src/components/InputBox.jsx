import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function InputBox () {
    let [input, setInput] = useState("");
    let handleInputChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <div>
            <TextField value={input} onChange={handleInputChange} id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
    );
}