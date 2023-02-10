import React, {useRef, useState} from 'react';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import {Menu} from 'primereact/menu';
import {Button} from 'primereact/button';
import {Editor} from 'primereact/editor';
import showdown from 'showdown';
import {InputText} from "primereact/inputtext";
import {MenuItem} from "primereact/menuitem";

import './App.css';
import {Divider} from "primereact/divider";

interface Props {
}

const ChatApp: React.FC<Props> = () => {

    const [items, setItems] = useState([
        {
            label: 'INFORMACIÓN',
            items: [
                {
                    label: 'General',
                    icon: 'pi pi-fw pi-users',
                    command: () => {
                        console.log('All Team Members channel selected');
                    }
                },
                {
                    label: 'Random',
                    icon: 'pi pi-fw pi-question',
                    command: () => {
                        console.log('Random channel selected');
                    }
                }
            ]
        },
        {
            label: 'PROYECTOS',
            items: [
                {
                    label: 'Base de Datos',
                    icon: 'pi pi-fw pi-database',
                    command: () => {
                        console.log('Announcements channel selected');
                    }
                },
                {
                    label: 'Discusiones',
                    icon: 'pi pi-fw pi-comments',
                    command: () => {
                        console.log('Discussions channel selected');
                    }
                }
            ]
        },
        {
            label: 'MENSAJES DIRECTOS',
            items: [
                {
                    label: 'Alessandro Flores',
                    icon: 'pi pi-fw pi-user',
                    command: () => {
                        console.log('Announcements channel selected');
                    }
                },
                {
                    label: 'Yandira Quispe',
                    icon: 'pi pi-fw pi-user',
                    command: () => {
                        console.log('Discussions channel selected');
                    }
                }
            ]
        }
    ]);

    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('');

    const menu = useRef<Menu>(null);

    let itemsMenuChannel: MenuItem[] = [
        {label: 'Ver Información', icon: 'pi pi-fw pi-info'},
        {separator: true},
        {label: 'Mover a', icon: 'pi pi-fw pi-cog'},
        {separator: true},
        {label: 'Ver Miembros', icon: 'pi pi-fw pi-users'}
    ]

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const converter = new showdown.Converter();
        const markdownMsg = converter.makeMarkdown(message);
        setChatHistory([...chatHistory, markdownMsg]);
        setMessage('');
    };

    const renderHeader = () => {
        return (
            <>
                <span className="ql-formats" style={{marginLeft: '0'}}>
                    <button className="ql-bold"></button>
                    <button className="ql-italic"></button>
                    <button className="ql-strike"></button>
                </span>
                <span className="separator"></span>
                <span className="ql-formats">
                    <button className="ql-list" value="ordered"></button>
                    <button className="ql-list" value="bullet"></button>
                </span>
                <span className="separator"></span>
                <span className="ql-formats">
                    <button className="ql-blockquote"></button>
                    <button className="ql-code-block"></button>
                </span>
                <span className="separator"></span>
                <span className="ql-formats">
                    <button className="ql-link"></button>
                </span>
            </>
        );
    };

    return (
        <>
            <header>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"/>
                    <InputText className="p-inputtext-sm" placeholder="Buscar en ESMA System" style={{width: '36rem'}}/>
                </span>
            </header>

            <nav className="menu-nav">
                <Menu model={items}/>
            </nav>

            <main>

                {/*Header chat*/}
                <div>
                    <div className="header-chat">
                        <Button label="Base de Datos"
                                icon="pi pi-angle-down"
                                className="p-button-secondary p-button-text"
                                style={{marginLeft: '5px'}}
                                onClick={(e) => menu.current.toggle(e)}/>
                        <Menu model={itemsMenuChannel} popup ref={menu}/>
                    </div>


                    <Divider style={{margin: '0'}}/>
                </div>

                {/*Historial de Chat*/}
                <div>
                    {chatHistory.map((history, index) => (
                        <div key={index}>{history}</div>
                    ))}
                </div>

                {/*Input de Mensaje*/}
                <div className="editor-footer">
                    <div className="editor-message">
                        <div style={{paddingBottom: '5px'}}>
                            <small>Noe Lopez esta escribiendo ...</small>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} onKeyDown={(event => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    handleSubmit(event)
                                }
                            })
                            }>
                                <div className="editor-custom">
                                    <Editor
                                        headerTemplate={renderHeader()}
                                        value={message}
                                        onTextChange={(e) => setMessage(e.htmlValue)}
                                    />

                                    <div className="editor-buttonbar">
                                        <Button icon="pi pi-send" className="p-button-text" type="submit"
                                                style={{padding: '0.2rem 1rem'}}/>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </>

    );
};

export default ChatApp;
