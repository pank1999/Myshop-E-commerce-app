import './NewUser.css';

export default function NewUser() {
  return (
    <div className='NewUser'>
        <h2 className='Title'>New User</h2>
        <form className='UserForm'>
             <div className='UserFormItem'>
                    <labal>Username</labal>
                    <input type="text" placeholder='pankaj@1888'/>
             </div>
             <div className='UserFormItem'>
                    <labal>Password</labal>
                    <input type="password" placeholder="pankaj"/>
             </div>
             <div className='UserFormItem'>
                    <labal>Full Name</labal>
                    <input type="text" placeholder='pankaj pandey'/>
             </div>
             <div className='UserFormItem'>
                    <labal>D.O.B</labal>
                    <input type="date" placeholder='02/09/2000'/>
             </div>
             <div className='UserFormItem'>
                    <labal>Email</labal>
                    <input type="email" placeholder="pankaj@gmail.com"/>
             </div>
             <div className='UserFormItem'>
                    <labal>Mobile No</labal>
                    <input type="text" placeholder="8630211986"/>
             </div>
             <div className='UserFormItem'>
                    <labal>Address</labal>
                    <input type="text" placeholder="address Home"/>
             </div>
             <div className='UserFormItem'>
                    <labal>Gender</labal>
                    <div className='Gender'>
                       <input type="radio" name="gender" id='male' value="male" /><span>Male</span>
                       <input type="radio" name="gender"  id='female' value="female"/> <span>Female</span>
                       <input type="radio" name="gender" id='others' value="others" /> <span>others</span>
                    </div>
             </div>
             <div className='UserFormItem'>
                    <labal>Active</labal>
                    <select className='userSelect' name='active' id='active'>
                        <option  value="Yes">Yes</option>
                        <option  value="No">No</option>
                    </select>
             </div>
             <button className='userAddButton'>Create</button>

        </form>
    </div>
  )
}
