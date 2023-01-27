$(document).ready(function() {
    $('.not-human, .triangle').hide();
    $('.verify').addClass('disabled');
    
    function human(e) {
      if ($('.checkbox-text').hasClass('robot')) {
        return;
      }
      else {
          $('.checkbox-text').text("You're human!").css("color", "green").addClass('human');
          $('.checkbox').addClass('disabled');
          $('.checkbox').click(function(e) {
            e.preventDefault();
          });
      }
      
      $('.not-human, .triangle').slideUp();
    }
    
    function robot(event) {
      if ($('.checkbox-text').hasClass('human')) {
        return;
      }
      else {
        $('.checkbox-text').text("ROBOT").css("color", "red").addClass('robot');
        $('.checkbox').addClass('disabled');
        $('.checkbox').click(function(event) {
          event.preventDefault();
        });
      
        $('.not-human, .triangle').slideDown();
      }
    }
    
    $('.checkbox').click(function() {
      if ($('.checkbox').is(":checked")) {
        $(document).mousemove(function() {
          window.setTimeout(function() {
            human();
          }, 250);
        });
        
        window.setTimeout(function() {
          robot();
        }, 1000);
      };
    });
    
    $('.captcha-code').keyup(function(event) {
      if ($('.captcha-code').val().length <= 0) {
        $('.verify').addClass('disabled');
      }
      else {
        $('.verify').removeClass('disabled');
      };
    });
    
    $('.verify').click(function() {
      if ($('.captcha-code').val() == "captcha code") {
        $('.checkbox-text').removeClass('robot').addClass('human');
        $('.not-human, .triangle').slideUp();
      }
    });
  });