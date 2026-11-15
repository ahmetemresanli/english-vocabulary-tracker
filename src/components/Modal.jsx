import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
export default function Modal({ title, children, close }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current, previous = document.activeElement
    dialog.showModal()
    return () => { dialog.close(); previous?.focus() }
  }, [])
  return <dialog ref={ref} aria-labelledby="modal-title" onCancel={e => { e.preventDefault(); close() }} onClick={e => { if(e.target === e.currentTarget) close() }}><div className="modal-head"><h2 id="modal-title">{title}</h2><button className="icon-button" onClick={close} aria-label="Kapat"><X size={20}/></button></div>{children}</dialog>
}
