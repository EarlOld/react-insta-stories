import * as React from 'react';
import Spinner from '../components/Spinner';
import Play from '../components/Play';
import { Renderer, Tester } from './../interfaces';
import WithHeader from './wrappers/withHeader';
import WithSeeMore from './wrappers/withSeeMore';

export const renderer: Renderer = ({ story, action, isPaused, config, messageHandler }) => {
    const [loaded, setLoaded] = React.useState(false);
    const [paying, setPlaying] = React.useState(true);
    const [muted, setMuted] = React.useState(false);
    const { loader, storyStyles } = config;

    let computedStyles = {
        ...styles.storyContent,
        ...(storyStyles || {})
    }

    let vid = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (vid.current) {
            if (isPaused) {
                vid.current.pause();
            } else {
                vid.current.play().catch(() => { });
            }
        }
    }, [isPaused]);

    const onWaiting = () => {
        action("pause", true);
    }

    const onPlaying = () => {
        action("play", true);
    }

    const videoLoaded = () => {
        messageHandler('UPDATE_VIDEO_DURATION', { duration: vid.current.duration });
        setLoaded(true);
        action('pause');
        vid.current.play().then(() => {
            setPlaying(true);
            action('reset');
            action('play');
        }).catch(() => {
            setMuted(true);
            videoLoaded();
        });
    }

    const handleVideoPlay = () => {
        messageHandler('UPDATE_VIDEO_DURATION', { duration: vid.current.duration });

        vid.current.play().then(() => {
            setPlaying(true);
            action('play');
        }).catch(() => {
            setPlaying(false);
            action('pause');
        });
    }

    return <WithHeader story={story} globalHeader={config.header}>
        <WithSeeMore story={story} action={action}>
            <div style={styles.videoContainer}>
                {(!paying && loaded) && <div
                    style={{
                        width: '100%',
                        height: '100%',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: 9999,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ccc"
                    }}
                    onClick={handleVideoPlay}
                >
                    <Play />
                </div>}
                <video
                    ref={vid}
                    style={computedStyles}
                    src={story.url}
                    controls={false}
                    onLoadedData={videoLoaded}
                    playsInline
                    onWaiting={onWaiting}
                    onPlaying={onPlaying}
                    muted={muted}
                    autoPlay
                    webkit-playsinline="true"
                />
                {!loaded && (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            position: "absolute",
                            left: 0,
                            top: 0,
                            background: "rgba(0, 0, 0, 0.9)",
                            zIndex: 9,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#ccc"
                        }}
                    >
                        {loader || <Spinner />}
                    </div>
                )}
            </div>
        </WithSeeMore>
    </WithHeader>
}

const styles = {
    storyContent: {
        width: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "auto"
    },
    videoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export const tester: Tester = (story) => {
    return {
        condition: story.type === 'video',
        priority: 2
    }
}

export default {
    renderer,
    tester
}
