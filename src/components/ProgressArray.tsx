import React, { useContext, useState, useEffect, useRef } from 'react'
import Progress from './Progress'
import { ProgressContext, GlobalCtx, StoriesContext as StoriesContextInterface } from './../interfaces'
import ProgressCtx from './../context/Progress'
import GlobalContext from './../context/Global'
import StoriesContext from './../context/Stories'

export default ({ resetTimer, setResetTimer }) => {
    const [count, setCount] = useState<number>(0)
    const { currentId, next, videoDuration, pause } = useContext<ProgressContext>(ProgressCtx)
    const { defaultInterval, onStoryEnd, onStoryStart, onAllStoriesEnd } = useContext<GlobalCtx>(GlobalContext);
    const { stories } = useContext<StoriesContextInterface>(StoriesContext);

    useEffect(() => {
        setCount(0)
    }, [currentId, stories])

    useEffect(() => {
        if (resetTimer) {
            setCount(0)
            setResetTimer(false);
        }
    }, [resetTimer])

    useEffect(() => {
        if (pause) {
            cancelAnimationFrame(animationFrameId.current)
        } else {
            animationFrameId.current = requestAnimationFrame(incrementCount)
        }
    }, [currentId, pause])

    let animationFrameId = useRef<number>()

    let countCopy = count;
    const incrementCount = () => {
        if (countCopy === 0) storyStartCallback()
        setCount((count: number) => {
            const interval = getCurrentInterval()
            countCopy = count + (100 / ((interval / 1000) * 60))
            return count + (100 / ((interval / 1000) * 60))
        })
        if (countCopy < 100) {
            animationFrameId.current = requestAnimationFrame(incrementCount)
        } else {
            storyEndCallback();
            if (currentId === stories.length - 1) {
                allStoriesEndCallback();
            }
            cancelAnimationFrame(animationFrameId.current);
            next();
        }
    }

    const storyStartCallback = () => {
        onStoryStart && onStoryStart(currentId, stories[currentId])
    }

    const storyEndCallback = () => {
        onStoryEnd && onStoryEnd(currentId, stories[currentId])
    }

    const allStoriesEndCallback = () => {
        onAllStoriesEnd && onAllStoriesEnd(currentId, stories)
    }

    const getCurrentInterval = () => {
        if (stories[currentId].type === 'video') return videoDuration
        if (typeof stories[currentId].duration === 'number') return stories[currentId].duration
        return defaultInterval
    }

    return (
        <div style={{...styles.progressArr, opacity: pause ? 0 : 1}}>
            {stories.map((_, i) =>
                <Progress
                    key={i}
                    count={count}
                    width={1 / stories.length}
                    active={i === currentId ? 1 : (i < currentId ? 2 : 0)}
                />)}
        </div>
    )
}

const styles = {
    progressArr: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100%',
        flexWrap: 'row',
        position: 'absolute',
        transition: "opacity 2s",
        width: '98%',
        padding: 5,
        paddingTop: 7,
        alignSelf: 'center',
        zIndex: 99,
        filter: 'drop-shadow(0 1px 8px #222)'
    }
}