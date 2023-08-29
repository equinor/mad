import React from "react"
import { Button } from "@equinor/mad-components"


type LoginButtonProps = {onPress?: () => void}
export const LoginButton = ({onPress}:LoginButtonProps) => {
    return <Button title="Log in" onPress={onPress}/>
}