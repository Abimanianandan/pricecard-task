import React from 'react';
import Card from './component/Card';

const App = () => {
  const data = [
    {
      Title: "FREE",
      Price: "$0",
      features: [
        {
          name: "Single User",
          enabled: true,
        },
        { name: "50GB Strage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited  Private Projects", enabled: false },
        {
          name: "Dedicated Phone Support",
          enabled: false,
        },
        { name: "Free Subdomain", enabled: false },
        { name: "Monthly Status Reports", enabled: false },
      ],
    },
    {
      Title: "PLUS",
      Price: "$9",
      features: [
        { name: "5 User", enabled: true },
        { name: "50GB Strage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited  Private Projects", enabled: true },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: false },
      ],
    },
    {
      Title: "PRO",
      Price: "$49",
      features: [
        { name: "Unlimited Users", enabled: true },
        { name: "50GB Strage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited  Private Projects", enabled: true },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: true },
        
      ],
    }
  ];
  return (
    <div>
       <div class="card-group justify-content-center justify-content-center " >
          {data.map((item,index)=>{
            return(
                  <Card item={item} index={index}/>
                  
            )
          })}
       </div>
    </div>
  );
};

export default App;