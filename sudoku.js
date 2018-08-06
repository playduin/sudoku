var imgPath = "images/";

var numbers = [81];
var myNumbers = [81];   
var selectedCell = 40;
var squares = [81];
var solved = false;

squares[0] = 1; squares[1] = 1; squares[2] = 1; squares[3] = 2; squares[4] = 2; squares[5] = 2; squares[6] = 3; squares[7] = 3; squares[8] = 3; squares[9] = 1; squares[10] = 1; squares[11] = 1; squares[12] = 2; squares[13] = 2; squares[14] = 2; squares[15] = 3; squares[16] = 3; squares[17] = 3; squares[18] = 1; squares[19] = 1; squares[20] = 1; squares[21] = 2; squares[22] = 2; squares[23] = 2; squares[24] = 3; squares[25] = 3; squares[26] = 3; squares[27] = 4; squares[28] = 4; squares[29] = 4; squares[30] = 5; squares[31] = 5; squares[32] = 5; squares[33] = 6; squares[34] = 6; squares[35] = 6; squares[36] = 4; squares[37] = 4; squares[38] = 4; squares[39] = 5; squares[40] = 5; squares[41] = 5; squares[42] = 6; squares[43] = 6; squares[44] = 6; squares[45] = 4; squares[46] = 4; squares[47] = 4; squares[48] = 5; squares[49] = 5; squares[50] = 5; squares[51] = 6; squares[52] = 6; squares[53] = 6; squares[54] = 7; squares[55] = 7; squares[56] = 7; squares[57] = 8; squares[58] = 8; squares[59] = 8; squares[60] = 9; squares[61] = 9; squares[62] = 9; squares[63] = 7; squares[64] = 7; squares[65] = 7; squares[66] = 8; squares[67] = 8; squares[68] = 8; squares[69] = 9; squares[70] = 9; squares[71] = 9; squares[72] = 7; squares[73] = 7; squares[74] = 7; squares[75] = 8; squares[76] = 8; squares[77] = 8; squares[78] = 9; squares[79] = 9; squares[80] = 9;
for (var i = 0; i < 81; ++i) {
	numbers[i] = 0;
	myNumbers[i] = 0;
}

function loadGame(num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num14, num15, num16, num17, num18, num19, num20, num21, num22, num23, num24, num25, num26, num27, num28, num29, num30, num31, num32, num33, num34, num35, num36, num37, num38, num39, num40, num41, num42, num43, num44, num45, num46, num47, num48, num49, num50, num51, num52, num53, num54, num55, num56, num57, num58, num59, num60, num61, num62, num63, num64, num65, num66, num67, num68, num69, num70, num71, num72, num73, num74, num75, num76, num77, num78, num79, num80) {
	numbers[0] = num0; numbers[1] = num1; numbers[2] = num2; numbers[3] = num3; numbers[4] = num4; numbers[5] = num5; numbers[6] = num6; numbers[7] = num7; numbers[8] = num8; numbers[9] = num9; numbers[10] = num10; numbers[11] = num11; numbers[12] = num12; numbers[13] = num13; numbers[14] = num14; numbers[15] = num15; numbers[16] = num16; numbers[17] = num17; numbers[18] = num18; numbers[19] = num19; numbers[20] = num20; numbers[21] = num21; numbers[22] = num22; numbers[23] = num23; numbers[24] = num24; numbers[25] = num25; numbers[26] = num26; numbers[27] = num27; numbers[28] = num28; numbers[29] = num29; numbers[30] = num30; numbers[31] = num31; numbers[32] = num32; numbers[33] = num33; numbers[34] = num34; numbers[35] = num35; numbers[36] = num36; numbers[37] = num37; numbers[38] = num38; numbers[39] = num39; numbers[40] = num40; numbers[41] = num41; numbers[42] = num42; numbers[43] = num43; numbers[44] = num44; numbers[45] = num45; numbers[46] = num46; numbers[47] = num47; numbers[48] = num48; numbers[49] = num49; numbers[50] = num50; numbers[51] = num51; numbers[52] = num52; numbers[53] = num53; numbers[54] = num54; numbers[55] = num55; numbers[56] = num56; numbers[57] = num57; numbers[58] = num58; numbers[59] = num59; numbers[60] = num60; numbers[61] = num61; numbers[62] = num62; numbers[63] = num63; numbers[64] = num64; numbers[65] = num65; numbers[66] = num66; numbers[67] = num67; numbers[68] = num68; numbers[69] = num69; numbers[70] = num70; numbers[71] = num71; numbers[72] = num72; numbers[73] = num73; numbers[74] = num74; numbers[75] = num75; numbers[76] = num76; numbers[77] = num77; numbers[78] = num78; numbers[79] = num79; numbers[80] = num80;
	for (var i = 0; i < 81; ++i) {
		if (numbers[i] != 0) {
			document.getElementById("cell" + i).src = imgPath + "" + numbers[i] + ".png";
		}
	}
}

document.write('<div class="game">');
	for (var y = 0; y < 9; ++y) {
		if (y == 3 || y == 6) {
			document.write('<img src="' + imgPath + 'lineY.png" width="100%">');
		}
		document.write('<table cellpadding="0">');
		for (var x = 0; x < 9; ++x) {
			if (x == 3 || x == 6) {
				document.write('<img src="' + imgPath + 'lineX.png" height="11%">');
			}
			document.write('<img id="cell' + (x + y * 9) + '" src="' + imgPath + numbers[x + y * 9] + '.png" onClick="selectCell(' + (x + y * 9) + ')" width="11%">');
		}
		document.write('</table>');
	}
	document.write('</div>');
	window.addEventListener("keydown", function (event) {
	  if (event.defaultPrevented) {
		return;
	  }
	  var handled = false;
	  if (event.keyCode >= 48 && event.keyCode <= 57) {
		  writeNum(event.keyCode - 48);
	  }
	  if (event.keyCode == 8) {
		  writeNum(0);
	  }
	  
	  if (handled) {
		event.preventDefault();
	  }
	}, true);

function selectCell(cell) {
	if (numbers[selectedCell] != 0) {
		document.getElementById("cell" + selectedCell).src = imgPath + "" + numbers[selectedCell] + ".png";
	} else {
		document.getElementById("cell" + selectedCell).src = imgPath + "my" + myNumbers[selectedCell] + ".png";
	}
	selectedCell = cell;
	if (numbers[selectedCell] != 0) {
		document.getElementById("cell" + selectedCell).src = imgPath + "select" + numbers[cell] + ".png";
	} else {
		document.getElementById("cell" + selectedCell).src = imgPath + "mySelect" + myNumbers[cell] + ".png";
	}
}

function writeNum(num) {
	if (numbers[selectedCell] == 0 && !solved) {
		myNumbers[selectedCell] = num;
		document.getElementById("cell" + selectedCell).src = imgPath + "mySelect" + myNumbers[selectedCell] + ".png";
	}
	checkGame();
}

function checkGame() {
	var goodCount = 0;
	for (var y = 0; y < 9; ++y) {
		for (var x = 0; x < 9; ++x) {
			if (checkCell(x, y)) {
				++goodCount;
			}
		}
	}
	if (goodCount == 81) {
		solved = true;
		alert("Sudoku is solved!!!");
	}
}

var check = [81];
function checkCell(x, y) {
  for (var i = 0; i < 81; ++i) {
    check[i] = numbers[i];
    check[i] += myNumbers[i];
  }
  var error = false;
      var i = y - 1;
      while (i > -1) {
        if (check[x + y * 9] == check[x + i * 9]) {
          error = true;
        }
        --i;
      }
      i = y + 1;
      while (i < 9) {
        if (check[x + y * 9] == check[x + i * 9]) {
          error = true;
        }
        ++i;
      }
      i = x - 1;
      while (i > -1) {
        if (check[x + y * 9] == check[i + y * 9]) {
          error = true;
        }
        --i;
      }
      i = x + 1;
      while (i < 9) {
        if (check[x + y * 9] == check[i + y * 9]) {
          error = true;
        }
        ++i;
      }
      i = squares[x + y * 9];
      for (var ii = 0; ii < 81; ++ii) {
        if (squares[ii] == i && ii != x + y * 9) {
          if (check[ii] == check[x + y * 9]) {
            error = true;
          }
        }
      }
      if (check[x + y * 9] == 0) {
        error = true;
      }
  return !error;
}