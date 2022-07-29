import './Sidebar.css';
import {ChatBubbleOutline, FeedbackOutlined, LineStyle, MailOutline, PersonOutline, ReportOutlined, Timeline, TrendingUp, AccountCircleOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default function SideBar() {
  return (
    <div className="sidebar">
        <div className='sideBarWrapper'>
         <div className='sideBarMenu'>
            <h3 className='sideBarTitle'>
                    Dashboard
            </h3>
            <ul className='sideBarList'>
                 <li className='sideBarListItem active'>
                    <LineStyle className='sideBarIcon'/>
                    <Link to="/" className='linkItem ' >Home</Link>
                    
                 </li>
                 <li className='sideBarListItem'>
                    <Timeline className='sideBarIcon'/>
                    Analytics
                 </li>
                 <li className='sideBarListItem'>
                    <TrendingUp className='sideBarIcon'/>
                    Sales
                 </li>
                 
            </ul>
        </div>
    </div>

    <div className='sideBarMenu'>
            <h3 className='sideBarTitle'>
                    Quick Menu
            </h3>
            <ul className='sideBarList'>
                 <li className='sideBarListItem'>
                    <PersonOutline className='sideBarIcon'/>
                     <Link to="/Users" className='linkItem ' >User</Link>
                    
                 </li>
                 <li className='sideBarListItem'>
                    <Timeline  className='sideBarIcon'/>
                    <Link to="/Products" className='linkItem ' >
                    Products
                    </Link>
                    
                 </li>
                 <li className='sideBarListItem'>
                    <TrendingUp  className='sideBarIcon'/>
                    Transactions
                 </li>
                 <li className='sideBarListItem'>
                    <ReportOutlined  className='sideBarIcon'/>
                    Report
                 </li>
            </ul>
        </div>

        <div className='sideBarMenu'>
            <h3 className='sideBarTitle'>
                    Notifications
            </h3>
            <ul className='sideBarList'>
                 <li className='sideBarListItem'>
                    <MailOutline className='sideBarIcon'/>
                    Mail
                 </li>
                 <li className='sideBarListItem'>
                    <FeedbackOutlined  className='sideBarIcon'/>
                    Feedback
                 </li>
                 <li className='sideBarListItem'>
                    <ChatBubbleOutline  className='sideBarIcon'/>
                    Messages
                 </li>
                 
            </ul>
        </div>
    
        <div className='sideBarMenu'>
            <h3 className='sideBarTitle'>
                    Stuff
            </h3>
            <ul className='sideBarList'>
                 <li className='sideBarListItem'>
                    <AccountCircleOutlined className='sideBarIcon'/>
                    Manage
                 </li>
                 <li className='sideBarListItem'>
                    <Timeline  className='sideBarIcon'/>
                    Feedback
                 </li>
                 <li className='sideBarListItem'>
                    <TrendingUp  className='sideBarIcon'/>
                    Reports
                 </li>
                 
            </ul>
        </div>
    
    </div>
  )
}
