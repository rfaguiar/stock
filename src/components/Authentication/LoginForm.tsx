import React, {useState} from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import {login} from "../../redux/Authentication/Authentication.actions";

const LoginForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        user: '',
        pass: ''
    })
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleLogin = async () => {
        try {
            await dispatch(login(form))            
        } catch (err) {
            await Swal.fire('Error', err.response?.data?.message || err.message, 'error')
        }
    }
    
    return <Form title={"Login - Stock"} onSubmit={handleLogin}>
        <Input label={"User"} 
               name={"user"}
               placeholder={"E.g.: your_user_name321"}
               value={form.user}
               onChange={handleInputChange}
        />
        <Input type={"password"}
               label={"Password"}
               name={"pass"}
               value={form.pass}
               onChange={handleInputChange}
        />
        <Button>Login</Button>
    </Form>
}

export default LoginForm