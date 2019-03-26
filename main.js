(function($){
    // functions and variables come here
    let data;
    let url = "https://swapi.co/api/planets/?page=";
    let url2 = "https://swapi.co/api/people/?page=";
    let page = 7;
    let page2 = 9;
    let people = {};

    // function getPerson(){
    //     for(let i=1;i<=page2.length;i++){
    //         $.getJSON(url2 + i)
    //             .done(function(json){
    //                 people.push[{results[i].name:json.results[i].url}];
    //             })
    //     }
    //
    // }

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
                        let str = data.results[j].created;
                        let res = str.slice(0,10);
                        let residents = data.results[j].residents;
                        $('tbody').append('<tr><td>' + name + '</td><td>' + climate + '</td><td>' + diameter + '</td><td>' + gravity + '</td><td>' + orbital + '</td><td>' + population + '</td><td>' + residents + '</td><td>' + rotation + '</td><td>' + water + '</td><td>' + terrain + '</td><td>' + res + '</td></tr>');

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