
import './App.css';
import GradeAddForm from './components/grade-form/Form';
import GradeSearchBox from './components/grade-table/TableSearch';
import GradeTable from './components/grade-table/Table';
import GradeTableHeader from './components/grade-table/TableHeader';
import { useState } from 'react';

function App() {

  const [txtValue, setTxtValue] = useState("");
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    courseNo: "",
    courseName: "",
    courseUnits: 0,
    courseGrade: "",
  });

  

  const handleForm =(e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, {id: data.length + 1, courseNo: form.courseNo, courseName: form.courseName, courseUnits: form.courseUnits, courseGrade: form.courseGrade}])

  };


  return (
    <div className="App">
      <div className='container mx-auto p-[1rem]'>
        <h1 className='font-bold text-[2.5rem] mb-6 text-red-950'>GRADE QPI CALCULATOR</h1>
        <div className='flex flex-row items-start justify-center gap-10'>
          <div>
            <GradeAddForm form={form} onChange={handleForm} handleSubmit={handleSubmit} /> 
          </div>
          <div className='flex flex-col items-start gap-2'>
            <GradeSearchBox value={txtValue} onChange={(e)=> {setTxtValue(e.target.value)}}/>
            <table className='w-full border-collapse rounded-[10px] bg-red-200'>
              <thead>
                <GradeTableHeader />
              </thead>
              <tbody>
                <GradeTable items={data} query={txtValue}/>
              </tbody> 
            </table>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default App;