$.get("header.html", contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
});