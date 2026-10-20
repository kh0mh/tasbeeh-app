let StatusText = document.getElementById("status");
let StartButton = document.getElementById("startBtn");

StartButton.addEventListener("click", startTasbeeh);

const Orginalcolor = getComputedStyle(StatusText).color;
const OrginalText = StatusText.textContent;

const Athkar = [
  { name: "سبحان الله", color: "white", count: 33 },
  { name: "الحمدلله", color: "yellow", count: 33 },
  { name: "الله اكبر", color: "red", count: 33 },
  {
    name: "لا اله الا الله وحده لا شريك له له الملك وله الحمد وهو على كل شي ان قدير",
    color: "green",
    count: 1,
  },
];

let counter = 0;
let Index = 0;

function resetTasbeeh() {
  counter = 0;
  Index = 0;
  StatusText.style.color = Orginalcolor;
  StatusText.textContent = OrginalText;
  StartButton.disabled = false;
  StartButton.addEventListener("click", startTasbeeh);
}

function startTasbeeh() {
  StartButton.disabled = true;
  StartButton.removeEventListener("click", startTasbeeh);

  let intervalid = setInterval(() => {
    counter++;

    StatusText.textContent =
      Athkar[Index].name + (Athkar[Index].count > 1 ? " - " + counter : " ");
    StatusText.style.color = Athkar[Index].color;

    if (counter === Athkar[Index].count) {
      counter = 0;
      Index++;
    }

    if (Index === Athkar.length) {
      clearInterval(intervalid);

      setTimeout(() => {
        alert("في ميزان حسناتكم");
        resetTasbeeh();
      }, 1000);
    }
  }, 500);
}
