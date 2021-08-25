document.body.addEventListener('touchmove', function (e) {
    if (e._isScroller) return;
    e.preventDefault();
}, {
    passive: false
});
