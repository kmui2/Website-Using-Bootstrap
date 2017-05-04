$(document).ready(function () {
    $.get('js/assets/templates/nav.mustache.html', function (template) {
        var rendered = Mustache.render(template);
        $('.navbar').html(rendered);
    })
});