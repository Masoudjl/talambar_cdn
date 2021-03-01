

function loadThirdPartyScripts(_force, _page)
{
  loadScriptRecaptcha();
  loadScriptGtag();
  loadScriptTawk();
  loadScriptRaychat();
  loadScriptImber();
}


function loadScriptRecaptcha()
{
  var myEl = $('meta[name="recaptcha"]');
  var myRecaptcha = myEl.attr('content');
  if(myEl && myEl.length > 0 && myRecaptcha)
  {
    // load script
    myUrl = "https://www.google.com/recaptcha/api.js?render=" + myRecaptcha;
    fileLoader(myUrl, 'runRecaptcha', true, undefined, 'async');
  }
}


function loadScriptGtag()
{
  var myEl = $('meta[name="gtag"]');
  var myGtag = myEl.attr('content');
  if(myEl && myEl.length > 0 && myGtag)
  {
    // load script
    myUrl = "https://www.googletagmanager.com/gtag/js?id=" + myGtag;
    fileLoader(myUrl, 'runGtag', true, undefined, 'defer');
  }
}


function loadScriptTawk()
{
  var myEl = $('meta[name="tawk"]');
  var myTawk = myEl.attr('content');
  if(myEl && myEl.length > 0 && myTawk)
  {
    // load script
    myUrl = 'https://embed.tawk.to/' + myTawk + '/default';

    fileLoader(myUrl, 'runTawk', true, undefined, 'defer utf8 crossorigin');
  }
}


function loadScriptRaychat()
{
  var myEl = $('meta[name="raychat"]');
  var myRaychat = myEl.attr('content');
  if(myEl && myEl.length > 0 && myRaychat)
  {
    // load script
    myUrl = "https://app.raychat.io/scripts/js/" + myRaychat + "?href="+window.location.href
    if(localStorage && localStorage.getItem("rayToken"))
    {
      myUrl += '&rid=' +localStorage.getItem("rayToken");
    }

    fileLoader(myUrl, 'runRaychat', true, undefined, 'defer utf8 crossorigin');
  }
}


function loadScriptImber()
{
  var myEl = $('meta[name="imber"]');
  var myImber = myEl.attr('content');
  if(myEl && myEl.length > 0 && myImber)
  {
    // load script
    myUrl = "https://widget.imber.live/imber?id=" + myImber;
    if(localStorage && localStorage.getItem("imber_token")) + '?jibres=' + urlEnv();
    {
      myUrl += '&token=' + localStorage.getItem("imber_token");
    }
    if(jibresUID())
    {
      myUrl += '&imber_sid=' + jibresUID();
    }
    // set default lang
    // window.IMBER_LANG = 'fa';

    // append element of imber
    $('.js').append('<div id="imber-top-parent"></div>');

    fileLoader(myUrl, 'runImber', true, undefined, 'defer utf8 crossorigin');
  }
}

