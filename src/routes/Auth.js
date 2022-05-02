import React, { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onChange = (event) => {
        const {
            target: { 
                name, value 
            }
        } = event;
        switch(name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input 
                name="email"
                type="text" 
                placeholder="Email" 
                value={email}
                required 
                onChange={onChange} />
            <input 
                name="password" 
                type="password" 
                placeholder="Password" 
                value={password}
                required 
                onChange={onChange} />
            <input type="submit" value="Login" />
        </form>
        <div>
            <button>
                Continu with Google
            </button>
            <button>
                Continu with GitHub
            </button>
        </div>
    </div>
    )
}
export default Auth;