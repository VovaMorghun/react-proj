import React from 'react';

const Profile = () => {
    return (
        <div className="content">
        <div className="content_img">
          <img src="https://avatars.mds.yandex.net/get-pdb/752643/968aa6a1-2afe-487e-86cb-7ac8f493b324/s1200" alt="" />
        </div>
        <div className="profile">
          <div className="profile_img">
            <img src="https://i.pinimg.com/originals/00/3c/c9/003cc9a6329b24fdb4c1a2f843766d25.jpg" alt="" />
          </div>
          <div className="profile_info">
            <div>Date of birth: <span className="profile_info__dob">29 February</span> </div>
            <div>City: <span className="profile_info__city">Kharkov</span> </div>
            <div>Education: <span className="profile_info__education">KUAF</span> </div>
            <div>Web site: <span className="profile_info__site">V0vchik@gmail.com</span> </div>
          </div>
        </div>
        <div className="posts">
          <div className="post-title">My posts</div>
          <form action="" className="post-form">
            <input type="text" placeholder="your news..." className="post-form__input"/>
            <button type='submit' className="post-form__btn btn">Send</button>
          </form>
        </div>
        <div className="lastPosts">
          <div className="lastPosts-item">
            <div className="lastPosts-item__circl"></div>
            <div className="lastPosts-item__text">Hi evyone!</div>
          </div>
          <div className="lastPosts-item">
            <div className="lastPosts-item__circl"></div>
            <div className="lastPosts-item__text">My news</div>
          </div>
          <div className="lastPosts-item">
            <div className="lastPosts-item__circl"></div>
            <div className="lastPosts-item__text">Good morning</div>
          </div>
        </div>
      </div>
    
    )
}

export default Profile