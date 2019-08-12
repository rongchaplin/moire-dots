$(() => {
  const getRnd = (maxInt) => {
    return Array.from({length: maxInt}, () => Math.floor(Math.random() * maxInt));
  };
  const $canvas = $('.canvas');
  const maxHeight = Math.floor($canvas.height());
  const maxWidth = Math.floor($canvas.width());
  const rndHeights = getRnd(maxHeight);
  const rndWidths = getRnd(maxWidth);
  for (let h=0; h<rndHeights.length; h++){
    $canvas.append($('<span>').addClass('box').css({top: rndHeights[h], left: rndWidths[h]}));
  }
  const $canvasCopy = $canvas.clone();
  $('body').append($canvasCopy);
  $canvasCopy.css({'transform': 'rotate(2.5deg)'});
  const loop = () => {
    $canvasCopy.animate({top: "-2%"}, {
      duration: 1000,
      complete: function() {
        $canvasCopy.animate({top: "3%"}, {
          duration: 1000,
          complete: loop
        });
      }});
  };
  loop();
});
