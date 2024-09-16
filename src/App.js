import './App.css';
import Progress from './Progress';

function App() {
  return (
    <div 
    style={{
      width:'100%',
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ffe4ed'
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
