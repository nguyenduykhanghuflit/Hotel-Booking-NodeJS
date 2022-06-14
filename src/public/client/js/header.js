$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  $('.form-control').each(function () {
    floatedLabel($(this));
  });

  $('.form-control').on('input', function () {
    floatedLabel($(this));
  });
  $('.sn').each(function () {
    floatedLabel2($(this));
  });

  function floatedLabel(input) {
    var $field = input.closest('.form-group');
    if (input.val()) {
      $field.addClass('input-not-empty');
    } else {
      $field.removeClass('input-not-empty');
    }
  }

  function floatedLabel2(input) {
    var $field = input.closest('.form-group');
    if (input.val()) {
      $field.removeClass('input-not-empty');
    } else {
      $field.addClass('input-not-empty');
    }
  }

  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  //bắt sự kiện submit

  toastr.options = {
    closeButton: false,
    debug: true,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '2000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };

  $('#date-checkin').val('2011/09/29');

  $('#btnSearch').click(function () {
    let checkin = new Date($('#date-checkin').val()),
      checkout = new Date($('#date-checkout').val()),
      room = $('#number-room').val(),
      adult = $('#number-adult').val();
    children = $('#number-children').val();

    window.location.href = `/rooms/filter?adult=${adult}&children=${children}`;
  });

  function CheckDateInvalid() {
    let d = new Date();
    d.setHours(0, 0, 0, 0);
    let checkin = new Date($('#date-checkin').val());
    let checkout = new Date($('#date-checkout').val());
    if (checkin < d || checkin == 'Invalid Date')
      toastr['warning']('Ngày nhận phòng phải tính từ hôm nay');
    else if (checkout <= checkin || checkout == 'Invalid Date')
      toastr['warning']('Ngày trả phòng phải sau ngày đặt phòng');
    else return true;
  }
  function CheckRoomInvalid() {
    let room = $('#number-room').val();
    let adult = $('#number-adult').val();
    if (room > adult)
      toastr['warning']('Số phòng không thể nhiều hơn số người');
    else return true;
  }
});
