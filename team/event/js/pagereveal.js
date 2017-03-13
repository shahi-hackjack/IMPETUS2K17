(function() {
  var pages = [].slice.call(document.querySelectorAll('.pages > .page')),

    currentPage = 0,

    revealerOpts = {

      nmbLayers : 3,

      //bgcolor : ['#0092DD', '#fff', '#3E3A35'],
      bgcolor : ['#29293d', '#a3a3c2', '#001a33'],
      effect : 'anim--effect-3',
      onStart : function(direction) {
        console.log(direction)

        var nextPage = pages[currentPage === 0 ? 1 : 0];
        console.log("nextPage",nextPage)
        classie.add(nextPage, 'page--animate-' + direction);
      },
      onEnd : function(direction) {
        // remove class page--animate-[direction] from next page
        var nextPage = pages[currentPage === 0 ? 1 : 0];
        nextPage.className = 'page';
      }
    };
    revealer = new Revealer(revealerOpts);


  document.querySelector('button.pagenav__button--top').addEventListener('click', function() { reveal('top',0); });
  document.querySelector('button.pagenav__button--right').addEventListener('click', function() { reveal('right',1); });
  document.querySelector('button.pagenav__button--left').addEventListener('click', function() { reveal('left',2); });

function right()
{
  alert("right")
}

   // triggers the effect by calling instance.reveal(direction, callbackTime, callbackFn)
  function reveal(direction,h) {
    var callbackTime = 750,
      callbackFn = function() {
        classie.remove(pages[currentPage], 'page--current');
                     console.log("currentpage=",currentPage)
        currentPage = currentPage === 0 ? h: 0;

        classie.add(pages[currentPage], 'page--current');


      };

    revealer.reveal(direction, callbackTime, callbackFn);
  }


})();
