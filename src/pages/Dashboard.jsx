import InternalDialog from "../components/dialog/InternalDialog.jsx"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import './Dashboard.css'

export default function Dashboard() {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)

    const closeSession = () => {
        navigate("/")
    }

    const showDialog = () => {
        setVisible(true)
    }

    const handleDialogClose = () => {
        setVisible(false)
    }

    return (
        <div className="flex flex-column px-8 py-5 gap-4">
            <div className="inline-flex flex-column gap-2">
                <Button label="Show" icon="pi pi-external-link" onClick={showDialog} className="custom-button"/>
                <InternalDialog isVisible={visible} onClose={handleDialogClose} />
            </div>
            <div className="inline-flex flex-column gap-2">
                <Button label="Close session" onClick={closeSession} className="custom-button"/>
            </div>
        </div>
    )
}
