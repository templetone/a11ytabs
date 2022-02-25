const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// array.from benötigen wir für unsere find Methode in der handleTabClick Funktion
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function tabClick(e) {
    //alle tab panels verstecken
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    //alle tabButtons als unselected markieren
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected','false');
    });

    //den angeklickten tab als selected markieren
    e.currentTarget.setAttribute('aria-selected','true');

    //das zugehörige tabPanel finden und dieses anzeigen
    const id = e.currentTarget.id;
    const tabPanel = tabPanels.find(
        panel => panel.getAttribute('aria-labelledby') === id
    );
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', tabClick));