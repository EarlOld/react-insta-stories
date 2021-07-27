import React, { useContext, useEffect, useState } from 'react'
import { ProgressProps, ProgressContext } from './../interfaces'
import ProgressWrapper from './ProgressWrapper'
import ProgressCtx from './../context/Progress'

export default (props: ProgressProps) => {
    const { bufferAction, pause } = useContext<ProgressContext>(ProgressCtx)
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        setShow(!pause);
    }, [pause])


    const getProgressStyle = ({ active }) => {
        switch (active) {
            case 2:
                return { width: '100%' }
            case 1:
                return { transform: `scaleX(${props.count / 100})` }
            case 0:
                return { width: 0 }
            default:
                return { width: 0 }
        }
    }

    const { width, active } = props
    return (
        <ProgressWrapper width={width} pause={pause} bufferAction={bufferAction}>
            <div
                style={{ ...getProgressStyle({ active }), ...styles.inner, opacity: show ? 1 : 0 }} />
        </ProgressWrapper>
    )
}

const styles: any = {
    inner: {
        background: '#fff',
        height: '100%',
        maxWidth: '100%',
        borderRadius: 2,
        transformOrigin: 'center left',
        translate: ' left',
        transition: "opacity 1.5s",
        WebkitBackfaceVisibility: 'hidden',
        MozBackfaceVisibility: 'hidden',
        msBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',

        WebkitPerspective: 1000,
        MozPerspective: 1000,
        msPerspective: 1000,
        perspective: 1000
    }
}