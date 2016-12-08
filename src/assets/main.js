$(function() {


    $.ajax({
        url: 'https://www.codeschool.com/users/nmagog.json',
        dataType: 'jsonp',
        success: function(response) {
            response.courses.completed.map(function(item) {
                $('#badges').append(
                    `<div class="course">
                    <h3>${item.title}</h3>
                    <img src="${item.badge }"/>
                    <a href="${item.url}" target="_blank" class="btn btn-primary">See course</a>
                  </div>`
                );
            });
        }
    });

});