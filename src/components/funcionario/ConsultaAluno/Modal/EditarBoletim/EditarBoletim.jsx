import React from 'react'
import TableContainer from './TableContainer/TableContainer'
import { Row, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

import './EditarBoletim.css'


function EditarBoletim() {

    return (
        <div className="container-main">
            <div className='page-title'>
                <h1 className='title_ BoletimAlunoTitle'>Adicionar Boletim</h1>
                <p className='subtitle_'>Selecione o semestre para acessar o boletim respectivo</p>
            </div>

            <div className="ItemAlunoBoletim">
                <Label>Aluno</Label>
                <h2 className='title_'>Victor Cardoso</h2>
            </div>

            <div className='Form-Boletim'>

                <Row>
                    <Form>

                        <div className='Form-Boletim-part1'>

                            <FormGroup className='Input-boletim'>

                                <Label for="Semestre">
                                    Semestre
                                </Label>

                                <h2>1° Semestre 2023</h2>
                            </FormGroup>

                            <FormGroup className='Input-boletim'>

                                <Label for="Disciplina">
                                    Disciplina
                                </Label>

                                <h2>Harmonia</h2>
                            </FormGroup>
                        </div>

                        <div className='Form-Boletim-part2'>
                            <FormGroup className='Input-boletim'>
                                <Label for="Faltas">
                                    Faltas
                                </Label>

                                <Input
                                    id="Faltas"
                                    name="Faltas"
                                    type="number"

                                >


                                </Input>
                            </FormGroup>
                            <FormGroup className='Input-boletim'>
                                <Label for="Nota">
                                    Notas
                                </Label>

                                <Input
                                    id="Nota"
                                    name="Nota"
                                    type="number"

                                >


                                </Input>
                            </FormGroup>

                            <FormGroup className='Input-boletim'>
                                <Label for="Conceito">
                                    Conceito
                                </Label>

                                <Input
                                    id="Conceito"
                                    name="Conceito"
                                    type="select"

                                >
                                    <option>
                                        Selecionar
                                    </option>
                                    <option>
                                        Aprovado
                                    </option>
                                    <option>
                                        Reprovado
                                    </option>
                                </Input>
                            </FormGroup>
                        </div>

                        <div>
                            <div className='botoes-div-addaluno'>
 
                                <Button className='Cancel btn'>
                                    Cancelar
                                </Button>

                                <Button className='Confirm'>
                                    Salvar
                                </Button>

                            </div>
                        </div>

                    </Form>
                </Row>

            </div>

        </div>
    );
};

export default EditarBoletim;