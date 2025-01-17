OpenUserMenu();

function OpenUserMenu() {
  let openBtn = document.getElementById("Open-Button-User-Menu-ID");
  let userMenu = document.getElementById("user-menu-ID");
  let closeBtn = document.getElementById("button-close-user-menu-ID");

  openBtn.addEventListener("click", () => {
    userMenu.classList.toggle("side-menu-container-On");
  });
  closeBtn.addEventListener("click", () => {
    userMenu.classList.remove("side-menu-container-On");
  });
}

// let lvlLabel = document.getElementById("lvl-label-ID");
// let lvlNumber = document.getElementById("lvl-number-ID");
// let btn = document.getElementById("btn-lvl-ID");
// let expLabel = document.getElementById("exp-label-ID");

// let userLvl = 1;
// let userExp = 0;
// let needExp = 160;

// function updateUI() {
//   lvlLabel.innerHTML = userLvl;
//   lvlNumber.innerHTML = `${userExp} / ${needExp}`;
//   let percentageExp = (userExp / needExp) * 100;
//   expLabel.style.width = `${percentageExp}%`;
// }

// function AddExp() {
//   userExp += 23;

//   if (userExp >= needExp) {
//     userLvl += 1;
//     userExp = userExp - needExp;
//     needExp = Math.floor(needExp * 1.4);
//   }

//   updateUI();
// }

// updateUI();
