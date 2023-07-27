import React from 'react';
import { View } from "react-native"
import { ToastType } from "./types"
import { getColorByToastType } from "./utils/getColorByToastType"
import { useEffect } from "react"
import { removeToast } from "./store"
import { Typography } from "../Typography"

export type ToastProps = { message: string, type: ToastType, id: number, duration: number }
/**
 * This is just an awful toast component used for prototyping
 */
export const Toast = ({ message, type, id, duration }: ToastProps) => {
    useEffect(() => {
        setTimeout(() => removeToast(id), duration * 1000);
    }, [])
    const color = getColorByToastType(type)
    return <View style={{ backgroundColor: color, padding: 16, borderRadius: 4, width: '100%', shadowRadius: 4, shadowColor: "#000000", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 } }}>
        <Typography group="interactive" variant="button" bold style={{ color: "white" }}>{message}</Typography>
    </View>
}