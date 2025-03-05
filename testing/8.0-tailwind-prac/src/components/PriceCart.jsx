import Button from '@mui/material/Button';
import { Card } from '@mui/material';

export default function PriceCart({title,amt,order,date,time}) {
    return (
    <Card>
        <div className="bg-slate-900 rounded p-4 h-32 w-96 flex flex-col justify-between">
        <div className="w-full flex gap-1 text-left">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" className="w-4 fill-white"><g data-name="27.Question"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/><path d="M13 16h-2v-4h1a3 3 0 1 0-3-3H7a5 5 0 1 1 6 4.9zM11 18h2v2h-2z"/></g></svg>
        </div>
        <div className="flex justify-between">
            <div>
                ₹{amt}
                <Button variant="outlined">Outlined</Button>
            </div>
            <div className="flex gap-1 items-center ">
                {order} orders
                <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" className="fill-white"><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </div>
        </div>
        <div className="flex justify-between mt-2">
            <div>
                Next Payment Date:
            </div>
            <div>
                {date}, {time}
            </div>
        </div>
    </div>
    </Card>)
};