(function($){
    // functions and variables come here
    let data;
    let url = "https://swapi.co/api/planets/?page=";
    let page = 7;
    let residents;

    function getPerson(){
        $.getJSON
    }



    function jsonLoad(){
        for(let i=1;i<=page;i++){
            $.getJSON(url + i)
                .done(function(json){
                    data = json;
                    console.log(data);
                    for(let j=0;j<data.results.length;j++){
                        let name = data.results[j].name;
                        let climate = data.results[j].climate;
                        let diameter = data.results[j].diameter;
                        let gravity = data.results[j].gravity;
                        let orbital = data.results[j].orbital_period;
                        let population = data.results[j].population;
                        let rotation = data.results[j].rotation_period;
                        let water = data.results[j].surface_water + "%";
                        let terrain = data.results[j].terrain;
                        let created = data.results[j].created;
                        let residents = data.results[j].residents;
                        $('tbody').append('<tr><td>' + name + '</td><td>' + climate + '</td><td>' + diameter + '</td><td>' + gravity + '</td><td>' + orbital + '</td><td>' + population + '</td><td>' + residents + '</td><td>' + rotation + '</td><td>' + water + '</td><td>' + terrain + '</td><td>' + created + '</td></tr>');

                    }
                })
        }


    }


    // onload
    $(document).ready(function(){
        // code comes here

        jsonLoad();


    })
})(jQuery);