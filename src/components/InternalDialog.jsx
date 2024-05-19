import {useState} from "react"
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import './InternalDialog.css'

function InternalDialog() {
    const [visible, setVisible] = useState(false)

    const header = (
        <div className="p-d-flex p-ai-center p-jc-between" style={{ width: '100%' }}>
            <span className="p-dialog-title">Información</span>
        </div>
    )
    
    const footer = (
        <div>
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} style={{ backgroundColor: 'var(--blue-700)', color: 'var(--gray-50)'}}/>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-secondary" style={{ backgroundColor: 'var(--blue-700)', color: 'var(--gray-50)'}}/>
        </div>
    )

    return (
        <>
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} style={{ backgroundColor: 'var(--blue-700)', color: 'var(--gray-50)'}}/>
            <Dialog header={header} visible={visible} style={{width: '50vw' }} footer={footer} onHide={() => setVisible(false)}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </>
    )
}

export default InternalDialog
