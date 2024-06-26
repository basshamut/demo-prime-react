import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import {InputText} from "primereact/inputtext"
import {useState} from "react"
import {useNavigate} from "react-router-dom"


export default function Login() {
    const [visible, setVisible] = useState(true)
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    function doLogin() {
        if(user === 'jesfaj7' && password === "12345"){
            navigate("/dashboard")
        }
    }

    return (
        <div className="card flex justify-content-center">
            <Dialog
                visible={visible}
                modal
                onHide={() => setVisible(true)}
                content={() => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            <InputText id="username" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50" value={user} onChange={(e) => setUser(e.target.value)}></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            <InputText id="password" label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Sign-In" onClick={() => doLogin()} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Forgot password" onClick={() => setVisible(false)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    )
}
