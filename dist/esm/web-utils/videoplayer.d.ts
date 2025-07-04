export declare class VideoPlayer {
    videoEl: HTMLVideoElement | undefined;
    pipMode: boolean;
    pipWindow: Window | undefined;
    isPlaying: boolean | undefined;
    private _url;
    private _playerId;
    private _container;
    private _mode;
    private _width;
    private _height;
    private _zIndex;
    private _initial;
    private _videoType;
    private _videoContainer;
    private _firstReadyToPlay;
    private _isEnded;
    private _videoRate;
    private _videoExitOnEnd;
    private _videoLoopOnEnd;
    constructor(mode: string, url: string, playerId: string, rate: number, exitOnEnd: boolean, loopOnEnd: boolean, container: any, zIndex: number, width?: number, height?: number);
    initialize(): Promise<void>;
    private createVideoElement;
    private _goFullscreen;
    private _setPlayer;
    private _getVideoType;
    private _doHide;
    private _createEvent;
    private _closeFullscreen;
}
//# sourceMappingURL=videoplayer.d.ts.map