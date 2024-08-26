import toast from 'react-hot-toast'

type ToastType = {
    status: string;
    message: string
}

export const toastAction = ({status, message}: ToastType) => {
    if(typeof status === "string" && status === "success") {
        return toast.success(message)
        
    } else {
        return toast.error(message)
    }
} 