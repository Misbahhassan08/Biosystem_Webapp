import * as React from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Button from "react-bootstrap/Button";


export const RefreshButton = ({onClick}) => {
    return (
        <div>
            <Button onClick={onClick} className={'floating-btn'} style={{minWidth: '60px', minHeight: '60px', borderWidth: 0, boxShadow: '2px 2px 5px #c1c1c1', position: 'fixed', bottom: '20px', right: '20px', float: 'right', zIndex: '999'  }}>
                <AutorenewIcon sx={{fontSize: '30px'}} />
            </Button>
        </div>
    );
};