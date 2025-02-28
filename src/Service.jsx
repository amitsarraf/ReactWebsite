import React from 'react';
import Card from '../src/Card.jsx'
import Sdata from './Sdata'

const Service = () => {
  return (
    <section id="team-profile-section">
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-4 mx-auto">
            <div className="row-1 mx-auto">
              <div className="row gy-4">
                {
                  Sdata.map((value, index)=>{
                    return <Card key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    />
                   
                  })
                }
                </div>
                </div>
              </div>
            </div>
          </div>
    </section>
      )
    }

    
    export default Service;
