import React from 'react';
import logo from "../../logo.svg";
import { Upload, message, DatePicker, Form, Input, Select, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './CadastroUsuario.css'
import 'antd/dist/antd.css';

const { Option } = Select;
const dateFormat = 'DD/MM/YYYY';

class CadastroUsuario extends React.Component{
    
    state = {
        //usuario: {},
        loading: false,
        imageUrl: '',
    }

    generoOptions = ['Masculino', 'Femenino', 'Outro']

    constructor(props){
        super(props);

        this.beforeUpload = this.beforeUpload.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        this.getBase64 = this.getBase64.bind(this);
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('Por favor, envie sua imagem em JPG ou PNG!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('O tamanho da imagem deve ser de no máximo 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
    };


    render(){

        const { loading, imageUrl } = this.state;
        debugger;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Foto de Perfil</div>
            </div>
        );

        const opcoesGenero = this.generoOptions.map((genero) => {
            return <Option key={genero} value={genero}>{genero}</Option>
        })

        const message = "Este campo é obrigatório."

        return(
            <div className="containerCadastro">
                <div className="containerFormCadastro">
                    <div className="header">
                        <img className="logo" src={logo} alt="Logo" />
                        Cadastro
                    </div>

                    

                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={this.beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>

                    <Form style={{marginTop: 15}}>
                        <Form.Item name="nome" label="Nome" rules={[{ required: true, message: message }]}>
                            <Input />
                        </Form.Item>
                        
                        <Form.Item name="sobrenome" label="Sobrenome" rules={[{ required: true, message: message }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="genero" label="Gênero" rules={[{ required: false }]}>
                            <Select>
                                {opcoesGenero}
                            </Select>
                        </Form.Item>

                        <Form.Item name="dataNascimento" label="Data de Nascimento" rules={[{ required: true }]}>
                            <DatePicker 
                                format={dateFormat}
                                placeholder="Selecione uma data"
                            />
                        </Form.Item>
                        
                        <Form.Item name="telefone" label="Telefone" rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="endereco" label="Endereço" rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>
                        
                        
                        <Form.Item name="email" label="E-mail" rules={[{ required: true, message: message }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="senha" label="Senha" rules={[{ required: true, message: message }]}>
                            <Input.Password />
                        </Form.Item>
                        
                        <Form.Item name="confirmaSenha" label="Confirme a sua senha" rules={[{ required: true, message: message }]}>
                            <Input.Password />
                        </Form.Item>
                        
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>


                        
                    </Form>
                </div>
            </div>
        )
    }
}

export default CadastroUsuario;