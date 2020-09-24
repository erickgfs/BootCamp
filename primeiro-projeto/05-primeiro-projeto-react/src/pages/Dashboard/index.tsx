import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styled';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54405512?s=460&u=2824ba15ebac43282803d283272f577a3eab1b9b&v=4"
            alt="Erick Giovanni"
          />
          <div>
            <strong>Teste/teste2</strong>
            <p>testando com descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54405512?s=460&u=2824ba15ebac43282803d283272f577a3eab1b9b&v=4"
            alt="Erick Giovanni"
          />
          <div>
            <strong>Teste/teste2</strong>
            <p>testando com descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/54405512?s=460&u=2824ba15ebac43282803d283272f577a3eab1b9b&v=4"
            alt="Erick Giovanni"
          />
          <div>
            <strong>Teste/teste2</strong>
            <p>testando com descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
