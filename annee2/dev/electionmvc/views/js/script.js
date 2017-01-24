 $(function () {
     $('#candidat').click(function () {
         $.get('/api/candidat', function (data) {

             for (var i = 0; i < data.length; i++) {
                 var _li = '<li>' + data[i].id + ' - ' + data[i].firstname + ' ' + data[i].lastname + ' - ' + data[i].partie + '</li>';
                 $('#candidatlist').append(_li);
             }
         })
     });

     $('#resultat').click(function () {
         $.get('/api/vote', function (data) {

             var o = {};

             for (var i = 0; i < data.length; i++) {
                 var candidat = data[i].vote;

                 if (o[candidat]) {
                     o[candidat]++;
                 } else {
                     o[candidat] = 1;
                 }
             }
             console.log(o);

             for (candidat in o) {
                 var _li = '<li>' + candidat + ' -> ' + o[candidat] + '</li>';
                 $('#result').append(_li);
             }
         })
     });


     $('#votantcreate').submit(function (e) {
         e.preventDefault();

         var _firstname = $('#firstname').val(),
             _lastname = $('#lastname').val(),
             _age = $('#age').val();

         $.post('api/voting', {
             firstname: _firstname,
             lastname: _lastname,
             age: _age
         }).done(function (data) {
             alert("data loaded: " + data);
         });
     });

     $('#vote1').submit(function (e) {
         e.preventDefault();

         var _lastname = $('#lastname1').val(),
             _vote = $('#vote').val();

         $.post('api/vote', {
             lastname: _lastname,
             vote: _vote
         }).done(function (data) {
             alert("Merci d'avoir voté");
         });
     });




     $("#votant").click(function () {
         $("#votantcreate").fadeIn("slow");
     });

     $("#pass").click(function () {
         $("#votantcreate").fadeOut("fast");
     });

     $("#pass").click(function () {
         $("#votant").fadeOut("fast");
     });

     $("#pass").click(function () {
         $("#vot").fadeIn("slow");
     });

     $("#vot").click(function () {
         $("#vote1").fadeIn("slow");
     });

     $("#vv").click(function () {
         $("#vot").fadeOut("slow");
     });

     $("#vv").click(function () {
         $(".border").fadeOut("slow");
     });

     $("#vv").click(function () {
         $("#vote1").fadeOut("slow");
     });

     $("#vv").click(function () {
         $("#resultat").fadeIn("slow");
     });


     $("#candidat").click(function () {
         $("#fillon").fadeIn("slow");
     });

     $("#candidat").click(function () {
         $("#valls").fadeIn("slow");
     });

     $("#candidat").click(function () {
         $("#macron").fadeIn("slow");
     });

     $("#candidat").click(function () {
         $("#marine").fadeIn("slow");
     });


 })