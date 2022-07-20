import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart({Title,data,dataKey}) {

  
  return (
    <div className="Chart">
       <h3 className="chartTitle">{Title}</h3>
       <ResponsiveContainer width="100%"  aspect={4/1}>
          <LineChart data={data}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey={dataKey} />
          
           <Tooltip />
           <Legend />
           <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
           
          </LineChart>
       </ResponsiveContainer>
    </div>
    
  )
}
