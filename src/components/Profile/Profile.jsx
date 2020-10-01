import React from 'react';
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
debugger
    return (
       
        <div className={c.content}>
    
         
        <div className={c.profile_bigimg}>
          <img src="https://avatars.mds.yandex.net/get-pdb/752643/968aa6a1-2afe-487e-86cb-7ac8f493b324/s1200" alt="" />
        </div>
        <div className={c.profile}>
          <div className={c.profile_img}>
            <img src="https://i.pinimg.com/originals/00/3c/c9/003cc9a6329b24fdb4c1a2f843766d25.jpg" alt="" />
          </div>
          <div className={c.profile_info}>
            <div>Date of birth: <span className={c.profile_info__dob}>29 February</span> </div>
            <div>City: <span className={c.profile_info__city}>Kharkov</span> </div>
            <div>Education: <span className={c.profile_info__education}>KUAF</span> </div>
            <div>Web site: <span className={c.profile_info__site}>V0vchik@gmail.com</span> </div>
          </div>
        </div>
        <MyPosts postData={props.state.postData}
                           dispatch={props.dispatch}
                           newPostText={props.state.newPostText}/>
        
      </div>
    
    )
}

export default Profile