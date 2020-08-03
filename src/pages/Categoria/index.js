import React, {  useState, useEffect  } from 'react';
import PageDefault from './../../components/PageDefault';
import {  Link  } from 'react-router-dom';
import FormField from '../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // chave: nome, descricao, etc...
        setValues({
            ...values,
            [chave]: valor, // nome: valor
        });
    }
    
    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value,
        );
    }

    useEffect(() => {
        if(window.location.href.includes('localhost')) {
            const URL = 'http://localhost:3000/categorias';
            fetch(URL)
                .then(async (respostaDoServer) => {
                    if(respostaDoServer.ok) {
                        const resposta = await respostaDoServer.json();
                        console.log(resposta);
                        setCategorias(resposta);
                        return;
                    }

                    throw new Error('Não foi possível pegar os dados');
                });
        }
    }, []);

    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria:
                {values.nome}
            </h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();

                setCategorias([
                    ...categorias,
                    values,
                ]);

                setValue(valoresIniciais);
            }}
            >
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="????"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Descrição:
                        <textarea
                        type="text"
                        value={values.descricao}
                        name="descricao"
                        onChange={handleChange}
                        />
                    </label>
                </div> */}

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Cor:
                        <input
                        type="color"
                        value={values.cor}
                        name="cor"
                        onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button type="submit">
                    Cadastrar
                </button>

            </form>

            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.id}`}>
                        {categoria.titulo}
                    </li>
                ))}
            </ul>

            <Link to="/">
                Ir para a home
            </Link>


        </PageDefault>
    );
}

export default CadastroCategoria;