function checkBreakpoint(x) {
    if (x.matches) {
        $(".projects-collection").children().eq(0).children().eq(3).css("display", "block");
        $(".projects-collection").children().eq(0).children().eq(4).css("display", "block");
        $(".projects-collection").children().eq(0).children().eq(5).css("display", "block");
    } else {
        $(".projects-collection").children().eq(0).children().eq(3).css("display", "none");
        $(".projects-collection").children().eq(0).children().eq(4).css("display", "none");
        $(".projects-collection").children().eq(0).children().eq(5).css("display", "none");
    }
}
const matchMediaDesktop = window.matchMedia("(min-width: 768px)");
checkBreakpoint(matchMediaDesktop);
matchMediaDesktop.addListener(checkBreakpoint);