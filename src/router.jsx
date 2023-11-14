import { Route, Routes } from "react-router-dom"
import React from "react";

import FuncionarioAluno from "./pages/FuncionarioAluno";
import FuncionarioDisciplina from "./pages/FuncionarioDisciplina";
import FuncionarioProfessor from "./pages/FuncionarioProfessor";
import AlunoMatricula from "./pages/AlunoMatricula";
import AlunoBoletim from "./pages/AlunoBoletim";

import Login from "./pages/Login";

import ConsultaBoletim from "./components/funcionario/ConsultaAluno/Modal/ConsultaBoletim/ConsultaBoletim";
import AdicionarBoletim from "./components/funcionario/ConsultaAluno/Modal/AdicionarBoletimFuncionario/AdicionarBoletim";
import EditarBoletim from "./components/funcionario/ConsultaAluno/Modal/EditarBoletim/EditarBoletim";


export default function Router() {
	return (
		<Routes>
			{/* Rotas Login */}

			<Route exact path="/login" element={<Login />} />

			{/* Rotas Aluno */}

			<Route exact path="/aluno/:idAluno/matricula" element={<AlunoMatricula />} />
			<Route exact path="/aluno/:idAluno/boletim" element={<AlunoBoletim />} />
			{/* <Route exact path="/aluno/:modalType/:id" element={<FuncionarioAluno/>}/>
				<Route exact path="/aluno/:modalType" element={<FuncionarioAluno/>}/> */}

			{/* Rotas Funcionário */}

			<Route exact path="/" element={<FuncionarioAluno />} />
			<Route exact path="/:modalType/:id" element={<FuncionarioAluno />} />
			<Route exact path="/:modalType" element={<FuncionarioAluno />} />

			<Route exact path="/disciplina" element={<FuncionarioDisciplina />} />
			<Route exact path="/disciplina/:modalType/:id" element={<FuncionarioDisciplina />} />
			<Route exact path="/disciplina/:modalType" element={<FuncionarioDisciplina />} />

			<Route exact path="/disciplina/:idDisciplina/turma/:modalType/:idTurma" element={<FuncionarioDisciplina />} />
			<Route exact path="/disciplina/:idDisciplina/turma/:modalType" element={<FuncionarioDisciplina />} />
			<Route exact path="/disciplina/turma/:modalType" element={<FuncionarioDisciplina />} />

			<Route exact path="/professor" element={<FuncionarioProfessor />} />
			<Route exact path="/professor/:modalType/:id" element={<FuncionarioProfessor />} />
			<Route exact path="/professor/:modalType" element={<FuncionarioProfessor />} />

			<Route exact path="/boletim" element={<ConsultaBoletim />} />
			<Route exact path="/addboletim" element={<AdicionarBoletim />} />
			<Route exact path="/editboletim" element={<EditarBoletim/>}/>


		</Routes>
	);
}
