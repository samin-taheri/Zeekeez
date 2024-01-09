$(document).ready(function(){
  $('.proptable-checkbox').change(function() {
    if(this.checked) {
      $(this).closest('.flex-table').addClass('selected-div');
    } else {
      $(this).closest('.flex-table').removeClass('selected-div');
    }
  });

  $('.flex-table').click(function() {
    if($(this).hasClass('selected-div')) {
      $(this).find('.proptable-checkbox').prop('checked', false);
      $(this).removeClass('selected-div');
    } else {
      $(this).find('.proptable-checkbox').prop('checked', true);
      $(this).addClass('selected-div');
    }
  });

      $('.flex-table input, .flex-table select, .flex-table button').click(function(e) {
    // Etkinlik dinleyicisinin çalışmasını durdurun
    e.stopPropagation();
  });
});
