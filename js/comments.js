//rotating comment section
let commentSection = document.getElementById("commentSection");
let commentName = document.getElementById("commentName");
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

let arrComments = [
  `Magnus Lunds's forløb er en Life-Changer for dem som går ind i det med en tro på Magnus og sig selv. Hvis du gør det, er chancen for du tjener dine penge hjem igen 99% sikker, fra mit perspektiv. Som han selv siger, "Hvis du aldrig giver op, så kan du ikke fejle" <br><br> Jeg startet selv i Marts som test person, og har i dag en månedsomsætning på 200.000 kr / md fra min webshop som Magnus har vist mig hvordan jeg bygger op, samt hvordan jeg brander, markedsfører og skalere. <br><br> Så til alle med en gnist om noget mere, og en tro på sig selv, så er det dette forløbet du kan udvikle dig selv i, sammen med din forretning, til du har personlig og økonomisk frihed.`,
  `Magnus Lund er ekstrem dygtig, og der findes ingen som ved mere om Dropshipping fundamentet end ham, som samtidig er exceptionel dygtig til at lære fra sig. Der er så mange guldkorn i dette forløb, som man ikke finder andre steder! <br><br> Hvis man virkelig gerne vil ændre sig og sit liv, så er dette kursus et must have. Der er alt man har behov for at vide hvis man vil igang med at tjene penge og blive selvstændig. Det er derudover bestemt alle pengene værd, hvis man går ind i dette 100%, og tager alt til sig, er de penge tjent hjem X100 (taler af erfaring). Jeg vil varmt anbefale dette kursus, det kan ændre ens liv på en dag.`,
  `Virkelig detaljeret forløb hvor Magnus virkelig tager dig i hånden langt hen ad vejen. Han giver alle mulige værktøjer som du kan arbejde med og blive god til, og jeg er helt sikker på at det han taler om kan bruges på meget andet også, man kan stort set bruge det i alle forretninger. Jeg har set utallige af kursus, men ingen som dette, med så meget læring, som virkelig bare åbner ens øjne op for, hvad der enligt er muligt for alle, på så simpel en måde/ide. Dagen efter jeg så Magnus's kursus færdigt, begyndte jeg at starte min egen webshop. Jeg kan bekræfte potentialet i dropshipping, og hans forretningsmodel er for vildt!`,
];
let arrCommentNames = [`ANDERS LUNDGAARD`, `NIKOLAJ VOIGT`, `ANDREAS BØGE`];

//to keep track of comments
let counter = 0;

//decrement counter
leftArrow.addEventListener("click", () => {
  if (counter == 0) {
    counter = arrComments.length - 1;
  } else {
    counter--;
  }
  commentSection.innerHTML = arrComments[counter];
  commentName.innerHTML = arrCommentNames[counter];
});

//increment counter
rightArrow.addEventListener("click", () => {
  if (counter == arrComments.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  commentSection.innerHTML = arrComments[counter];
  commentName.innerHTML = arrCommentNames[counter];
});

//initial state of array on page load
commentSection.innerHTML = arrComments[0];
commentName.innerHTML = arrCommentNames[0];
