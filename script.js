var calcSf = function(sfIn, guild){
  var sf;
  if(guild)
    sf = sfIn-15;
  else
    sf = sfIn;
  
  if(sf<0 || sf > 5000)
    return 0;
  else if(sf<60)
    return 0.1*(sf*sf*sf)+15*(sf*sf)+750*sf+0;
  else if(sf<120)
    return 0.11*(sf*sf*sf)+16.5*(sf*sf)+825*sf+1250;
  else if(sf<180)
    return 0.12*(sf*sf*sf)+18*(sf*sf)+900*sf+2500;
  else if(sf<230)
    return 0.13*(sf*sf*sf)+19.5*(sf*sf)+975*sf+3750;
  else if(sf<260)
    return 0.14*(sf*sf*sf)+21*(sf*sf)+1050*sf+5000;
  else if(sf<290)
    return 0.15*(sf*sf*sf)+22.5*(sf*sf)+1125*sf+6250;
  else if(sf<320)
    return 0.16*(sf*sf*sf)+24*(sf*sf)+1200*sf+7500;
  else if(sf<350)
    return 0.17*(sf*sf*sf)+25.5*(sf*sf)+1275*sf+8750;
  else if(sf<380)
    return 0.18*(sf*sf*sf)+27*(sf*sf)+1350*sf+10000;
  else if(sf<400)
    return 0.19*(sf*sf*sf)+28.5*(sf*sf)+1425*sf+11250;
  else
    return 0.20*(sf*sf*sf)+30*(sf*sf)+1500*sf+12500;
};

var calcLv = function(lv){
  if(lv<60 /*|| lv > 300*/)
    return 0;
  else if(lv<100)
    return 0.5*(lv*lv*lv);
  else if(lv<140)
    return 0.4*(lv*lv*lv);
  else if(lv<180)
    return 0.7*(lv*lv*lv);
  else if(lv<200)
    return 0.8*(lv*lv*lv);
  else if(lv<210)
    return (lv*lv*lv);
  else if(lv<220)
    return 1.1*(lv*lv*lv);
  else if(lv<230)
    return 1.15*(lv*lv*lv);
  else if(lv<240)
    return 1.2*(lv*lv*lv);
  else if(lv<250)
    return 1.25*(lv*lv*lv);
  else if(lv<260)
    return 1.3*(lv*lv*lv);
  else if(lv<270)
    return 1.35*(lv*lv*lv);
  else if(lv<280)
    return 1.4*(lv*lv*lv);
  else if(lv<290)
    return 1.45*(lv*lv*lv);
  else if(lv<300)
    return 1.5*(lv*lv*lv);
  else
    return 1.55*(lv*lv*lv);
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var calc = function() {
  var lv    = document.getElementById("lv").value;
  var sf    = document.getElementById("sf").value;
  var guild = document.getElementById("guild").checked;
  
  var powLv = Math.round(calcLv(lv));
  //console.log(powLv);
  var powSf = Math.round(calcSf(sf, guild));
  //console.log(powSf);
  //console.log(guild);
  var powBase = 12500;
  
  if(lv<60){
    powSf = 0;
    powBase = 0;
    document.getElementById("error").innerText = "Please set character level to 60 or higher.\nCharacters below level 60 cannot be assigned to the legion grid, and therefore can't contribute to raid power.";
  } else if(lv>300){
    document.getElementById("error").innerText = "NOTE: The entered level is currently unobtainable.";
  } else{
    document.getElementById("error").innerText = "";
  }
  
  document.getElementById("powLv").innerText = numberWithCommas(powLv);
  document.getElementById("powSf").innerText = numberWithCommas(powSf);
  document.getElementById("equipSf").innerText = numberWithCommas(guild?sf-15:sf);
  document.getElementById("powBase").innerText = numberWithCommas(powBase);

  document.getElementById("powTtl").innerText = numberWithCommas(powLv+powSf+powBase);
};

calc();

//document.getElementById("calcBtn").onclick = calc;

/*var el = document.getElementById("calcBtn");
if (el.addEventListener)
    el.addEventListener("click", calc, false);
else if (el.attachEvent)
    el.attachEvent('onclick', calc);*/