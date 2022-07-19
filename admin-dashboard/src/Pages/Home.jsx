import Chart from '../components/Charts/Chart';
import FeaturedInfo from '../components/FeaturedInfo/FeaturedInfo';
import './Home.css';

export default function Home() {
  return (
    <div className='Home'>
        <FeaturedInfo />
        <Chart />
    </div>
  )
}
