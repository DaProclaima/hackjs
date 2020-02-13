const charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

function crack(value) {
  function toRadix(N, radix) {
    var HexN = '',
      Q = Math.floor(Math.abs(N)),
      R,
      strv = charset,
      radix = strv.length;
    do {
      R = Q % radix;
      HexN = strv.charAt(R) + HexN;
      Q = (Q - R) / radix;
    } while (Q != 0);
    return ((N < 0) ? '-' + HexN : HexN);
  };
  var start = (new Date()) * 1,
    index = -1;
  do {
    index++;
  } while (toRadix(index) != value);
  alert(((new Date()) * 1) - start);
}




