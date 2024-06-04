$(function () {
     setDisabled(true);
      

     $("#IniciarTarefa").on("click", function (e) {
         $("#IniciarTarefa").hide();
         $("#image_loader").show();
         $("#submeter").show();
         e.preventDefault();
         setDisabled(false);
     });

     $("#FinalizarTarefa").on("click", function (e) {
         e.preventDefault();
         setDisabled(true);
     });

     function setDisabled(state) {
         $('.desabilita input,select,textarea, checkbox').each(function () {
             if(state) $("#submeter").hide() && $("#image_loader").hide();
             $(this).prop("disabled", state);
         });
     }
 });
 
Img = "";
var imageLoader = document.getElementById('image_loader');
var jayCrop;
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
  document.getElementById("full").style.display = "block";

    var reader = new FileReader();

    reader.onload = function(event) {
        var image = new Image();

        image.onload = function() {

            var canvas = document.createElement('canvas');

            canvas.width = image.width;
            canvas.height = image.height;

            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            $('#image_input').html(['<img src="', canvas.toDataURL(), '"/>'].join(''));
            var img = $('#image_input img')[0];

            var canvas = document.createElement('canvas');

            $('#image_input img').Jcrop({
                boxWidth: 480,
                bgColor: 'black',
                bgOpacity: .2,
                onSelect: imgSelect,
                aspectRatio : 1
            }, function() {
                jayCrop = this;
            });

            function imgSelect(selection) {
                canvas.width = selection.w;
                canvas.height = selection.h;

                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, selection.x, selection.y, selection.w, selection.h, 0, 0, canvas.width, canvas.height);
              
                
    Img = canvas.toDataURL();
              $('#imgUrl').attr('value', canvas.toDataURL()).hide();
            }
        }
        image.src = event.target.result;
    }
reader.readAsDataURL(e.target.files[0]);
}

function saveImg(){
  $('#image_output').attr('src', Img);
  document.getElementById("full").style.display = "none";
  document.getElementById("keepEdit").style.display = "block";
  document.getElementById("full").style.display = "none";
    $('#image_output').show();
    return false;
}

$('#annul').on('click', function() {
    jayCrop.release();
    return false;
});
