import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Button, Page, localeAr } from '@mobiscroll/react';

function App() {
    const [openPicker, setOpenPicker] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    const year = 2022;
    const month = 11;
    
    const show = () => {
        setOpenPicker(true);
    };
    
    const onClose = () => {
        setOpenPicker(false);
    };
    
    const inputProps = {
        className: 'md-mobile-picker-input',
        placeholder: 'Please Select...'
    };
    
    const boxInputProps = {
        className: 'md-mobile-picker-box-label',
        inputStyle: 'box',
        placeholder: 'Please Select...'
    };
    
    return (
        <Page>
            <div className="md-mobile-picker-inline">
                <Datepicker display="inline" controls={['calendar']} 
    colors={[
        { 
            date: new Date(year, month, 6),
            highlight: '#f3a146'
        },{ 
            date: new Date(year, month, 15),
            highlight: '#b4c145'
        },{ 
            date: new Date(year, month, 23),
            highlight: '#ff6a00'
        },{ 
            date: new Date(year, month, 11),
            background: '#ea4986',
            highlight: '#c7356d'
        },
    ]}
    marked={[
        { 
            date: new Date(year, month, 2), 
            color: '#46c4f3'
        }, { 
            date: new Date(year, month, 10), 
            color: '#7e56bd'
        }, { 
            date: new Date(year, month, 13), 
            color: '#f13f77'
        }, { 
            date: new Date(year, month, 13), 
            color: '#89d7c9'
        }, { 
            date: new Date(year, month, 21), 
            color: '#ffc400'
        }, { 
            date: new Date(year, month, 21), 
            color: '#8dec7d'
        },{ 
            recurring: { 
                repeat: 'yearly', month: 4, day: 1
            },
            color: 'ffc400'
        }
    ]}/>
            </div>
        </Page>
    ); 
}


export default App;