import Chart from '../components/Charts/Chart';
import FeaturedInfo from '../components/FeaturedInfo/FeaturedInfo';
import './Home.css';
import {userData} from "../dummyDataCharts";
import WidgetSm from '../components/WidgetSm/WidgetSm';
import WidgetLg from '../components/WidgetLg/WidgetLg';

export default function Home() {
  return (
    <div className='Home'>
        <FeaturedInfo />
        <Chart data={userData} Title="User Analytics" dataKey="ActiveUser" />
        <div className="HomeWidget">
             <WidgetSm />
             <WidgetLg />
        </div>
    </div>
  )
}
