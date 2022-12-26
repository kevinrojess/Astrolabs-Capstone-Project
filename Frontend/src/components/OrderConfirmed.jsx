import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { green } from '@mui/material/colors';

function OrderConfirmed() {

    return (
        <div className="container mt-5 mb-5 justify-content-center text-center">
            <h2 className='mt-5'>Your order has been confirmed.</h2>
            <CheckCircleOutlinedIcon sx={{ color: green[500], fontSize: 200 }} />
            <h5 className='mt-2 mb-4'>Thank you for ordering!</h5>
            <p> We'll see you soon!</p>
        </div>
    );

}

export default OrderConfirmed;