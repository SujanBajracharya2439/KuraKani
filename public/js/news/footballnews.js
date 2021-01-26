$(document).ready(function(){
    LoadData('.paginate');
    return GetResult(); 
});

function GetResult(){
    $.ajax({
        url: 'http://content.guardianapis.com/football?page-size=50&order-by=newest&show-fields=all&api-key=8b435306-1b3a-480d-b96d-32b7d969507a',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            var results = '';
            
            $.each(data.response.results, function(i){
                results += '<div form class="paginate">';
                results += '<div class="col-md-12 news-post">';
                results += '<div class="row">';
                
                results += '<a href='+data.response.results[i].webUrl+' target="_blank" style = "color:#4aa1f3 text-decoration: none;">';
                results += '<div class="col md-2">';

                results += '<img src='+data.response.results[i].fields.thumbnail+' class="img-responsive"/>'
                results += '</div>'

                results += '<div class="col-md-10">';
                results +='<h4 class="news-date">'+new Date(Date.parse(data.response.results[i].webPublicationsDate)).toDateString()+'</h4>';
                results +='<h3>'+data.response.results[i].fields.headline+'</h3>';
                results += '<p class="news-text">'+data.response.results[i].fields.webTitle+'</p>';
                results +='</div>';
                
                results += '</a>';
                results += '</div>';
                results += '</div>';
               
            });
            
            $('#newsResults').html(results);
          
        }
    })
}

function LoadData(divClass){

}