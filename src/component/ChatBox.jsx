import React, { useState } from "react";
import logo from '../../chatbot_project/src/robotimage/robot.jpg'
import { Button } from "react-bootstrap";
import "./chatbot.css"
import { ChatMessage } from "./ChatMessage";
import { analyse } from "./alltexts";


export function ChatBot() {
    const [messages, setMessages] = useState([
        {
            message: 'Hello Dear, Whats ur Name?'

        }
    ]);
    const [text, setText] = useState('');
    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
            const reply = analyse(text)
            list = [
                ...list,
                {message: reply}
            ]

        }
        else {
            list = [
                ...list,
                {
                    message: Hai,${text}
                },
                {
                    message: "How Can I Help You?"

                }
            ]
        }
        setMessages(list)
        setText("")
        setTimeout(() =>{
            document.querySelector('#copyright').scrollIntoView();
        }, 1);
    }
    return <>
        <div>
            <div className="d-flex align-items-center justify-content-center" >
                <img
                    src={logo} alt='logo' className="Logoimg"
                    height={200}
                    width={200}
                />
                <h1 className="text-primary">CHATBOT</h1>

            </div>
            <div className="textmessage">
                {
                    messages.length > 0 && messages.map((data) => <ChatMessage{...data} />)
                }
                <div className="d-flex mt-2">
                    <input type="text" className=" form-control" value={text} onChange={(e) => setText(e.target.value)} />
                    <Button type='primary' className="button ms-3" onClick={onSend}>
                        Send
                    </Button>

                </div>
                <div id="copyright" className="copyright">Copyright Reserved By SUJI</div>

            </div>
        </div>
    </>

}