const elsTabItem = document.querySelectorAll('.tabs__item');
const elsTablink = document.querySelectorAll('.js-tabs__link');
const elsTabPanel = document.querySelectorAll('.tabs__panel');

// Deactivate tab__items
function deactivateTabItems (){
  elsTabItem.forEach(function(elTabItem){
    elTabItem.classList.remove('tabs__item-active')
  });
}

// Deactivate tab__panels
function deactivateTabPanels (){
  elsTabPanel.forEach(function(elTabPanel){
    elTabPanel.classList.remove('tabs__panel--active')
  });
}

// Tab panel
elsTablink.forEach(function(elTablink){
  elTablink.addEventListener('click', function(evt){
    // Prevent page move
    evt.preventDefault();

    // Deactivate tab__items
    deactivateTabItems();

    // Add active class to current tabs__item
    elTablink.parentElement.classList.add('tabs__item-active');

    // Deactivate tab__panels
    deactivateTabPanels();

    // Show active tab panel
    // const elTargetTabPanels = document.querySelector(`#${elTablink.href.split('#')[1]}`)
    const elTargetTabPanels = document.querySelector(elTablink.dataset.tabTarget)
    elTargetTabPanels.classList.add('tabs__panel--active');
  })
});

