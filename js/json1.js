/**
 * Created by zamaj on 11.04.2017.
 */
var country = [
    {
        "id": 1,
        "title": "United Kingdom",
        "text": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign state in Europe."
    },
    {
        "id": 2,
        "title": "France",
        "text": "France, officially the French Republic (French: R\u00e9publique fran\u00e7aise), is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories."
    },
    {
        "id": 3,
        "title": "Spain",
        "text": "Spain (Spanish: Espa\u00f1a), officially the Kingdom of Spain (Spanish: Reino de Espa\u00f1a), is a sovereign state located on the Iberian Peninsula in southwestern Europe."
    },
    {
        "id": 4,
        "title": "Germany",
        "text": "Germany, officially the Federal Republic of Germany (German: Bundesrepublik Deutschland), is a federal parliamentary republic in western-central Europe."
    }
];

var citys = [
    {"id": 1, "country_id": 1, "title": "London", "desc": ""},
    {"id": 2, "country_id": 1, "title": "Liverpool", "desc": ""},
    {"id": 3, "country_id": 2, "title": "Paris", "desc": ""},
    {"id": 4, "country_id": 3, "title": "Madrid", "desc": ""},
    {"id": 5, "country_id": 4, "title": "Berlin", "desc": ""},
    {"id": 6, "country_id": 4, "title": "Munich", "desc": ""},
    {"id": 7, "country_id": 4, "title": "Hamburg", "desc": ""}
];


//---------- Страны -----------//
function countryPrint(arr) {
    arr.forEach(
        function (obj) {
            $(".countries").append(`<div class="country" rel="${obj.id}"> \
                                      <div class="title"><h4>${obj.title}</h4></div> \
                                      <div class="text"><p>${obj.text}</p></div>  \
                                    </div> \
                                    <!--<p><i class="fa fa-trash" aria-hidden="true"></i></p> -->
                                  `);
        }
    )
}
countryPrint(country);
//----------Конец Страны -----------//

$(document).ready(function () {

    // print city
    function cityPrint(arr) {
        arr.forEach(
            function (obj) {
                $(".cities").append(`<div class="wrapper" data-count="${obj.country_id}"> \
                                       <div class="flex-cont"> \
                                        <div class="city"> \
                                          <div class="title"><h4>${obj.title}</h4></div> \
                                          <div class="text"><p>${obj.desc}</p></div>  \
                                        </div>  \
                                        <div class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></div> \
                                        <div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>  \
                                       </div> \
                                      </div> `);
            }
        )
    }
    cityPrint(citys);

    // $('.country:first').addClass('active');
    var activeCountry;

    $(".country").on('click',function () {
        $(".wrapper").hide();
        $(".wrapper:first").show();
        activeCountry = $(this).attr("rel");
        let tab = $(".cities").find(".wrapper[data-count^='" + activeCountry + "']").fadeIn();

        $(".country").removeClass("active");
        $(this).addClass("active");

        // Скрыть форму - сделать фун-ей
        $('#formCity').hide(400);
        $('#addCity').fadeIn(500);
    });


    // delete
    $('.remove > i').on('click', function () {
        $(this).closest('.wrapper').remove();
    });

    // Показать форму
    $('#addCity').on('click', function () {
        $(this).hide();
        $('#formCity').fadeIn(500);
    });

    // Скрыть форму
    $('.cansel').on('click', function () {
        $('#formCity').hide(400);
        $('#addCity').fadeIn(500);
    });

    // Добавление города
    $('.submit').on('click', function () {
        let activCountry = $('.country');
        if (activCountry.is('.active') == false) {
            alert('Выберите страну')
        } else {
            let nameCity =  document.querySelector('#nameCity').value;
            let descr =  document.querySelector('#descr').value;
            if (nameCity.length == 0){ // проверка на пустоту , цифры и другие знаки - сделать
                alert("Введите название страны")
            } else {
                $(".cities").append(`<div class="wrapper" data-count="${activeCountry}"> \
                                       <div class="flex-cont"> \
                                        <div class="city"> \
                                          <div class="title"><h4>${nameCity}</h4></div> \
                                          <div class="text"><p>${descr}</p></div>  \
                                        </div>  \
                                        <div class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></div> \
                                        <div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>  \
                                       </div> \
                                      </div> `);
                // Скрыть форму
                $('#formCity').hide(400);
                $('#addCity').fadeIn(500);
            }

            // Oчистить форму
            $('#nameCity').val('');
            $('#descr').val('');
        }
    })
});