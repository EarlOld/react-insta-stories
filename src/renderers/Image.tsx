import * as React from 'react';
import Spinner from '../components/Spinner';
import { Renderer, Tester } from './../interfaces';
import WithHeader from './wrappers/withHeader';
import WithSeeMore from './wrappers/withSeeMore';
import GlobalContext from '../context/Global';
import { GlobalCtx } from "../interfaces";

export const renderer: Renderer = ({ story, action, config }) => {
    const [loaded, setLoaded] = React.useState(false);
    const { isPaused } = React.useContext<GlobalCtx>(GlobalContext);

    const { width, height, loader, storyStyles } = config;
    let computedStyles = {
        ...styles.storyContent,
        ...(storyStyles || {})
    }

    const imageLoaded = () => {
        if (!isPaused) {
            action('play');
        }
        setLoaded(true);
    }

    return <WithHeader story={story} globalHeader={config.header}>
        <WithSeeMore story={story} action={action}>
            <div>
                <img style={computedStyles} src={story.url} onLoad={imageLoaded} />
                {!loaded && (
                    <div
                        style={{
                            width: width,
                            height: height,
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
    story: {
        display: "flex",
        position: "relative",
        overflow: "hidden"
    },
    storyContent: {
        width: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "auto"
    }
};

export const tester: Tester = (story) => {
    return {
        condition: !story.content && (!story.type || story.type === 'image'),
        priority: 2
    }
}

export default {
    renderer,
    tester
}