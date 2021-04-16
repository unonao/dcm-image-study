//import './Viewer.css';
import React from 'react';
import * as cornerstone from 'cornerstone-core';
import * as cornerstoneMath from 'cornerstone-math';
import * as cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;

const imageId =
    "https://rawgit.com/cornerstonejs/cornerstoneWebImageLoader/master/examples/Renal_Cell_Carcinoma.jpg";

const divStyle = {
    width: "512px",
    height: "512px",
    position: "relative",
    color: "white"
};

const bottomLeftStyle = {
    bottom: "5px",
    left: "5px",
    position: "absolute",
    color: "white"
};

const bottomRightStyle = {
    bottom: "5px",
    right: "5px",
    position: "absolute",
    color: "white"
};

class CornerstoneElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stack: props.stack,
            viewport: cornerstone.getDefaultViewport(null, undefined),
            imageId: props.stack.imageIds[0]
        };

        this.onImageRendered = this.onImageRendered.bind(this);
        this.onNewImage = this.onNewImage.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
    }

    render() {
        return (
            <div>
                <div
                    className="viewportElement"
                    style={divStyle}
                    ref={input => {
                        this.element = input;
                    }}
                >
                    <canvas className="cornerstone-canvas" />
                    <div style={bottomLeftStyle}>Zoom: {this.state.viewport.scale}</div>
                    <div style={bottomRightStyle}>
                        WW/WC: {this.state.viewport.voi.windowWidth} /{" "}
                        {this.state.viewport.voi.windowCenter}
                    </div>
                </div>
            </div>
        );
    }

    onWindowResize() {
        console.log("onWindowResize");
        cornerstone.resize(this.element);
    }

    onImageRendered() {
        const viewport = cornerstone.getViewport(this.element);
        console.log(viewport);

        this.setState({
            viewport
        });

        console.log(this.state.viewport);
    }

    onNewImage() {
        const enabledElement = cornerstone.getEnabledElement(this.element);

        this.setState({
            imageId: enabledElement.image.imageId
        });
    }

    componentDidMount() {
        const element = this.element;

        // Enable the DOM Element for use with Cornerstone
        cornerstone.enable(element);

        // Load the first image in the stack
        cornerstone.loadImage(this.state.imageId).then(image => {
            // Display the first image
            cornerstone.displayImage(element, image);

            // Add the stack tool state to the enabled element
            const stack = this.props.stack;
            cornerstoneTools.addStackStateManager(element, ["stack"]);
            cornerstoneTools.addToolState(element, "stack", stack);
            cornerstoneTools.mouseInput.enable(element);
            cornerstoneTools.mouseWheelInput.enable(element);
            cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
            cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
            cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
            cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel

            cornerstoneTools.touchInput.enable(element);
            cornerstoneTools.panTouchDrag.activate(element);
            cornerstoneTools.zoomTouchPinch.activate(element);

            element.addEventListener(
                "cornerstoneimagerendered",
                this.onImageRendered
            );
            element.addEventListener("cornerstonenewimage", this.onNewImage);
            window.addEventListener("resize", this.onWindowResize);
        });
    }

    componentWillUnmount() {
        const element = this.element;
        element.removeEventListener(
            "cornerstoneimagerendered",
            this.onImageRendered
        );

        element.removeEventListener("cornerstonenewimage", this.onNewImage);

        window.removeEventListener("resize", this.onWindowResize);

        cornerstone.disable(element);
    }

    componentDidUpdate(prevProps, prevState) {
        const stackData = cornerstoneTools.getToolState(this.element, "stack");
        const stack = stackData.data[0];
        stack.currentImageIdIndex = this.state.stack.currentImageIdIndex;
        stack.imageIds = this.state.stack.imageIds;
        cornerstoneTools.addToolState(this.element, "stack", stack);

        //const imageId = stack.imageIds[stack.currentImageIdIndex];
        //cornerstoneTools.scrollToIndex(this.element, stack.currentImageIdIndex);
    }
}

const stack = {
    imageIds: [imageId],
    currentImageIdIndex: 0
};

const App = () => (
    <div>
        <h2>Cornerstone React Component Example</h2>
        <CornerstoneElement stack={{ ...stack }} />
    </div>
);

export default App;
