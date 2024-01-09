$('.comparable-list-card-mother-div').click(function() {
  var checkbox = $(this).find('.compare-check-input');
  checkbox.prop('checked', !checkbox.prop('checked'));
  $(this).toggleClass('selected-compare-list');
});

