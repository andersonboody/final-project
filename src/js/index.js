import '@scss/styles.scss'
const brandsOpen = document.getElementById('brandsOpenAll')
const repairOpen = document.getElementById('repairOpenAll')
const menuIsOpen = document.getElementById('openMenu')
const menuIsClose = document.getElementById('closeMenu')
const modalsAll = document.querySelector('#modals')
const modalFeedback = document.getElementById('openModalFeedback')
const modalFeedbackTatlet = document.getElementById('openModalFedbackTablet')
const callFromAside = document.getElementById('asideCall')
const messageFromAside = document.getElementById('asideMessage')
const modalCall = document.getElementById('openModalCall')
const modalCallTatlet = document.getElementById('openModalCallTablet')
let countChildBrands
let countChildRepair

if (screen.width > 1024) {
  countChildBrands = 9
  countChildRepair = 5
} else {
  countChildBrands = 7
  countChildRepair = 4
}

menuIsOpen.addEventListener('click', function (evt) {
  openAside()
})

menuIsClose.addEventListener('click', function () {
  openAside()
})

brandsOpen.addEventListener('click', function () {
  hideOrOpen(brandsOpen, '.brand__card', countChildBrands)
})

repairOpen.addEventListener('click', function () {
  hideOrOpen(repairOpen, '.repair__card', countChildRepair)
})

modalFeedback.addEventListener('click', function () {
  openModal(
    '.modal__feedback',
    '#modalCloseFeedback',
    'modal__feedback--close',
    'modal__feedback--open'
  )
})

callFromAside.addEventListener('click', function () {
  openModal(
    '.modal__feedback',
    '#modalCloseFeedback',
    'modal__feedback--close',
    'modal__feedback--open'
  )
})

messageFromAside.addEventListener('click', function () {
  openModal(
    '.modal__feedback',
    '#modalCloseFeedback',
    'modal__feedback--close',
    'modal__feedback--open'
  )
})

modalFeedbackTatlet.addEventListener('click', function () {
  openModal(
    '.modal__feedback',
    '#modalCloseFeedback',
    'modal__feedback--close',
    'modal__feedback--open'
  )
})

modalCall.addEventListener('click', function () {
  openModal(
    '.modal__call',
    '#modalCloseCall',
    'modal__call--close',
    'modal__call--open'
  )
})
modalCallTatlet.addEventListener('click', function () {
  openModal(
    '.modal__call',
    '#modalCloseCall',
    'modal__call--close',
    'modal__call--open'
  )
})

new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  freeMode: true,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20
})

/**
 * Скрывает либо отображает элементы
 * @param {*} idButton - передать id раскрывающие кнопки
 * @param {*} classElem - передать класс элемента
 * @param {*} cardNumber - колличество элементов
 */
function hideOrOpen(idButton, classElem, cardNumber) {
  const isOpen = idButton.classList.contains('button-next--open')
  const displayStyle = isOpen ? 'flex' : 'none'
  const addClass = isOpen ? 'button-next--close' : 'button-next--open'
  const removeClass = isOpen ? 'button-next--open' : 'button-next--close'
  const replaseText = isOpen ? 'Скрыть' : 'Показать все'

  document
    .querySelectorAll(`${classElem}:nth-child(n+${cardNumber})`)
    .forEach((elem) => {
      elem.style.display = displayStyle
    })
  idButton.classList.remove(removeClass)
  idButton.classList.add(addClass)
  idButton.textContent = replaseText
}

/**
 * Отображает модальное окно
 * @param {*} classModal - паредать блок модального окна
 * @param {*} idButtonClose - передать id закрывающие кнопки модального окна
 * @param {*} modalHide - передать класс открывающий модальное окно
 * @param {*} modalOpen - передать класс закрывающий модальное окно
 */
function openModal(classModal, idButtonClose, modalHide, modalOpen) {
  const modal = modalsAll.querySelector(classModal)
  const modalClose = modalsAll.querySelector(idButtonClose)

  modal.classList.add(modalOpen)
  modal.classList.remove(modalHide)

  modalClose.addEventListener('click', function () {
    modal.classList.add(modalHide)
    modal.classList.remove(modalOpen)
  })
  modalsAll.addEventListener('click', function (evt) {
    if(!modal.contains(evt.target) && !evt.target.closest(classModal)) {
      modal.classList.add(modalHide)
      modal.classList.remove(modalOpen)
    }
  })
}

/**
 * Открывает боковое меню на планшете и мобильном
 */
function openAside() {
  const asideMenu = document.getElementById('aside')
  const isOpen = asideMenu.classList.contains('aside--hide')
  const addClass = isOpen ? 'aside--visible' : 'aside--hide'
  const removeClass = isOpen ? 'aside--hide' : 'aside--visible'

  asideMenu.classList.add(addClass)
  asideMenu.classList.remove(removeClass)

  document.addEventListener("click", function(evt) {
    if(!evt.target.closest(".aside__container") && asideMenu.contains(evt.target)) {
      asideMenu.classList.remove('aside--visible')
      asideMenu.classList.add('aside--hide')
    }
  })
}
