import React from 'react';
import dayjs from 'dayjs';

const calculateProgressPercentage = (startDate, endDate) => {
  const now = dayjs(); 
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  
  const totalDuration = end.diff(start, 'millisecond');
  const elapsedDuration = now.diff(start, 'millisecond');
  
  const progress = Math.min((elapsedDuration / totalDuration) * 100, 100); // Clamp to 100%
    const daysLeft = end.diff(now, 'day');
  
  return {
    progress,
    daysLeft
  };
};


const ProgressUI = ({startDate,endDate}) => {
    const {progress,daysLeft} = calculateProgressPercentage(startDate, endDate);
    const iconWidth =150;
  
    return (
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
        <div >
          <h1 style={{ fontSize:'50px',margin: '0',color:'#76c7c0',marginBottom:'180px' }}>Sosoh's Australia Adventure 🦘&#128151; 
 </h1>
        </div>
        <div
          style={{
            width: '100%',
            maxWidth: '70%',
            margin: '0 auto',
            backgroundColor: '#e0e0e0',
            height: '20px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: '#76c7c0',
              height: '100%',
              transition: 'width 0.5s ease-in-out'
            }}
          ></div>
          <div
          style={{
            position: 'absolute',
            top: '-145px', // Adjust this value to float the icon above the progress bar
            left: `calc(${progress}% - ${iconWidth / 2}px)`,
            width: `${iconWidth}px`,
            height: `${iconWidth}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src="soso.png" // Replace with your icon path
            alt="Icon"
            style={{
              width: '100px',
              height: '100px',
              display: 'block'
            }}
          />
        </div>
        </div>
        <div style={{ marginTop: '20px', fontSize: '30px',display:'flex',flexDirection:'column',lineHeight:'5px'}}>
          <div style={{display:'flex',gridColumnGap:'10px',alignItems:'center',justifyContent:'center'}}>
                 <p >Progress Update:</p>
                <p style={{color:'#76c7c0'}}>{progress.toFixed(0)}%</p>
          </div>
          <div style={{display:'flex',gridColumnGap:'10px',alignItems:'center',justifyContent:'center'}}>
                 <p >Last Day:</p>
                <p style={{color:'#76c7c0'}}>{dayjs(endDate).format('DD MMM YYYY')}</p>
          </div>
          <div style={{display:'flex',gridColumnGap:'10px',alignItems:'center',justifyContent:'center'}}>
                <p>Days Remaining: </p>
                <p style={{color:'#76c7c0'}}>{daysLeft} days</p>
          </div>
        </div>
      </div>
    );
  };

export default ProgressUI;
