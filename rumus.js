function luasPP(panjang,lebar) {
  hasilLuasPP = panjang * lebar;
  console.log(hasilLuasPP)
}

function kelilingPP(panjang,lebar){
  hasilKelilingPP = (panjang + lebar) * 2;
  console.log(hasilKelilingPP)
}

function luasPersegi(sisi){
  hasilLuasPersegi = sisi * sisi;
  console.log(hasilLuasPersegi)
}

function kelilingPersegi(sisi){
  hasilkelilingPersegi = sisi * 4;
  console.log(hasilkelilingPersegi)
}

module.exports = {
  luasPP,
  kelilingPP,
  luasPersegi,
  kelilingPersegi
}
