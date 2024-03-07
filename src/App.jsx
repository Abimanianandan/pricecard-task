import React from 'react';
import Card from './component/Card';

const App = () => {
  const data=[
    {
      Title:"FREE",
      Price:"$0",
      User:"Single User",
      isUser:true,
      Storage:"50GB Strage",
      isStorage:true,
      PublicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      Access:"Community Access",
      isAccess:true,
      PrivateProjects:"Unlimited  Private Projects",
      isPrivateProjects:false,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      Domain:"Free Subdomain",
      isDomain:false,
      Status:"Monthly Status Reports" ,
      isStatus:false
    },
    {
      Title:"PLUS",
      Price:"$9",
      User:"5 Users",
      isUser:true,
      Storage:"50GB Strage",
      isStorage:true,
      PublicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      Access:"Community Access",
      isAccess:true,
      PrivateProjects:"Unlimited  Private Projects",
      isPrivateProjects:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      Domain:"Free Subdomain",
      isDomain:true,
      Status:"Monthly Status Reports",
      isStatus:false
    },
    {
      Title:"PRO",
      Price:"$49",
      User:"Unlimited Users",
      isUser:true,
      Storage:"50GB Strage",
      isStorage:true,
      PublicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      Access:"Community Access",
      isAccess:true,
      PrivateProjects:"Unlimited  Private Projects",
      isPrivateProjects:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      Domain:"Free Subdomain",
      isDomain:true,
      Status:"Monthly Status Reports",
      isStatus:true
    }
  ]
  return (
    <div>
       
       <Card data={data}/>
    </div>
  );
};

export default App;