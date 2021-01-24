const lightbox = GLightbox({
    touchNavigation: true,
    loop: false,
    autoplayVideos: false,
    plyr: {
        config: {
            ratio: '16:9', // or '4:3'
            muted: false,
            hideControls: false,
            youtube: {
                noCookie: true,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3
            }
        }
    }
});