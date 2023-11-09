$(function () {
    console.log("init");
    api({
        url: "/test",
        data: {},
        method: "post",
    }).then((res) => {
        console.log(res);
    });
});
