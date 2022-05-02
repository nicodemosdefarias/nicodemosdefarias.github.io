
jQuery(function(){
    jQuery('.showSingle').click(function(){
          var objdiv = $('#div'+$(this).attr('target'));
          var toggleDisplay = true;
          if(objdiv.css('display')=="none"){
                toggleDisplay = true;
          }
          jQuery('.targetDiv').hide();
          jQuery('#div'+$(this).attr('target')).toggle(toggleDisplay);
    });
});
