$(document).on("click", "#btnGenerateSegitiga", function (e) {
    e.preventDefault();
    const num = $("#number").val();

    $.ajax({
        url: "generateSegitiga",
        method: "post",
        data: {
            num: num,
        },
        success: (res) => {
            $("#result").html(res);
        },
        error: (err) => {
            alert(err.responseJSON);
        },
    });
});
$(document).on("click", "#btnGenerateGanjil", function (e) {
    e.preventDefault();
    const num = $("#number").val();

    $.ajax({
        url: "generateGanjil",
        method: "post",
        data: {
            num: num,
        },
        success: (res) => {
            $("#result").html(res);
        },
        error: (err) => {
            alert(err.responseJSON);
        },
    });
});
$(document).on("click", "#btnGeneratePrima", function (e) {
    e.preventDefault();
    const num = $("#number").val();

    $.ajax({
        url: "generatePrima",
        method: "post",
        data: {
            num: num,
        },
        success: (res) => {
            $("#result").html(res);
        },
        error: (err) => {
            alert(err.responseJSON);
        },
    });
});
