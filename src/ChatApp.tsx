


import React, {useState} from 'react';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import {Menu} from 'primereact/menu';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

interface Props {
}

const ChatApp: React.FC<Props> = () => {

    const [items, setItems] = useState([
        {
            label: 'General',
            items: [
                {
                    label: 'All Team Members',
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
            label: 'Categories',
            items: [
                {
                    label: 'Announcements',
                    icon: 'pi pi-fw pi-bullhorn',
                    command: () => {
                        console.log('Announcements channel selected');
                    }
                },
                {
                    label: 'Discussions',
                    icon: 'pi pi-fw pi-comments',
                    command: () => {
                        console.log('Discussions channel selected');
                    }
                }
            ]
        }
    ]);

    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setChatHistory([...chatHistory, message]);
        setMessage('');
    };

    const handleSendMessage = () => {
        console.log(`Sending message: ${message}`);
        setMessage('');
    };

    return (
        <div style={{display: 'flex', height: '100vh'}}>
            <div style={{width: '20%', height: '100%', backgroundColor: '#F7F7F7'}}>
                <Menu model={items}/>
            </div>
            <div className="chat-section" style={{ width: '82%', height: '100%' }}>
                <div className="chat-history" style={{ height: '85%', overflow: 'auto' }}>
                    {chatHistory.map((history, index) => (
                        <div key={index}>{history}</div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
                    <InputText
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ flex: '1' }}
                    />
                    <Button type="submit" label="Enviar" />
                </form>
            </div>
        </div>
    );
};

export default ChatApp;





/*

import React, { useState } from 'react';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './App.css';

const ChatApp: React.FC = () => {

    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setChatHistory([...chatHistory, message]);
        setMessage('');
    };

    return (
        <div className="container">
            <div className="sidebar" style={{ width: '18%', height: '100%' }}>
                <Accordion multiple={false}>
                    <AccordionTab header="Categoría 1">
                        Contenido de la categoría 1
                    </AccordionTab>
                    <AccordionTab header="Categoría 2">
                        Contenido de la categoría 2
                    </AccordionTab>
                </Accordion>
            </div>
            <div className="chat-section" style={{ width: '82%', height: '100%' }}>
                <div className="chat-history" style={{ height: '85%', overflow: 'auto' }}>
                    {chatHistory.map((history, index) => (
                        <div key={index}>{history}</div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
                    <InputText
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ flex: '1' }}
                    />
                    <Button type="submit" label="Enviar" />
                </form>
            </div>
        </div>
    );
};

export default ChatApp;


*/
