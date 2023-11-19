import React from 'react'
import './Dashboard.css'

export default function Dashboard() {
  return (
   <div className='container-main'>
      <div className='page-title'>
         <h1 className='title_'>Dashboard</h1>
         <p className='subtitle_'>Registros</p>
      </div>

      <div className="stats-cards-container">
         <div className="stats-card">
            <span className='stats-number'>45</span>
            <span className='stats-title'>Alunos Matriculados</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>45</span>
            <span className='stats-title'>Alunos Matriculados</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>45</span>
            <span className='stats-title'>Alunos Matriculados</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>45</span>
            <span className='stats-title'>Alunos Matriculados</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>45</span>
            <span className='stats-title'>Alunos Matriculados</span>
         </div>
         <div className="stats-card">
            <span className='stats-number'>45</span>
            <span className='stats-title'>Alunos Matriculados</span>
         </div>
      </div>


      <div className="grafico-container">
         
      </div>
   </div>
  )
}
