import './App.css';
import Progress from './Progress';

function App() {
  return (
    <div 
    style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      minWidth:'100vw',
      minHeight:'100vh'
    }}>
      <div style={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        width:'100%',
        height:'100%',
        }}>
      <Progress 
      startDate='2024-08-18'
      endDate='2026-09-26'
      />

      </div>

    </div>
  );
}

export default App;
