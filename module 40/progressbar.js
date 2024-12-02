window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let totalScrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = totalScrolled + "%";
};
