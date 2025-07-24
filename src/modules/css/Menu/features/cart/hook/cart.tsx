import { useState } from "react"

export const useShowCart = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [show, setShow] = useState<boolean>(false)


    return [show, setShow]
}