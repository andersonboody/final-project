import '@scss/styles.scss'
const brandsOpen = document.getElementById('brandsOpenAll')
const repairOpen = document.getElementById('repairOpenAll')
const modalFeedback = document.getElementById('opanModalFeedback')
const modalCall = document.getElementById('openModalCall')
const modalsAll = document.querySelector('#modals')
const modalFeedbackTatlet = document.getElementById('openModalFedbackTablet')
const modalCallTatlet = document.getElementById('openModalCallTablet')
const burgerMenu = document.getElementById('openBurgerMenu')
const asideClose = document.getElementById('asideCloseMenu')
let countChildBrands
let countChildRepair

if (screen.width > 1024) {
  countChildBrands = 9
  countChildRepair = 5
} else {
  countChildBrands = 7
  countChildRepair = 4
}

burgerMenu.addEventListener('click', function () {
  openAside()
})

asideClose.addEventListener('click', function () {
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
    '.modal__close-feedback',
    'modal__feedback--close',
    'modal__feedback--open'
  )
})

modalFeedbackTatlet.addEventListener('click', function () {
  openModal(
    '.modal__feedback',
    '.modal__close-feedback',
    'modal__feedback--close',
    'modal__feedback--open'
  )
})

modalCall.addEventListener('click', function () {
  openModal(
    '.modal__call',
    '.modal__close-call',
    'modal__call--close',
    'modal__call--open'
  )
})
modalCallTatlet.addEventListener('click', function () {
  openModal(
    '.modal__call',
    '.modal__close-call',
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
 * @param {*} classBlock - передать название блока
 * @param {*} classElem - передать класс элемента
 * @param {*} cardNumber - колличество элементов
 */

function hideOrOpen(classBlock, classElem, cardNumber) {
  const isOpen = classBlock.classList.contains('button__next--open')
  const displayStyle = isOpen ? 'flex' : 'none'
  const addClass = isOpen ? 'button__next--close' : 'button__next--open'
  const removeClass = isOpen ? 'button__next--open' : 'button__next--close'
  const replaseText = isOpen ? 'Скрыть' : 'Показать все'

  document
    .querySelectorAll(`${classElem}:nth-child(n+${cardNumber})`)
    .forEach((elem) => {
      elem.style.display = displayStyle
    })
  classBlock.classList.remove(removeClass)
  classBlock.classList.add(addClass)
  classBlock.textContent = replaseText
}

/**
 * Отображает модальное окно
 * @param {*} classModal - паредать блок модального окна
 * @param {*} classButtonClose - передать блок закрывающие кнопки модального окна
 * @param {*} modalHide - передать класс открывающий модальное окно
 * @param {*} modalOpen - передать класс закрывающий модальное окно
 */
function openModal(classModal, classButtonClose, modalHide, modalOpen) {
  const modal = modalsAll.querySelector(classModal)
  const modalClose = modalsAll.querySelector(classButtonClose)

  modal.classList.add(modalOpen)
  modal.classList.remove(modalHide)

  modalClose.addEventListener('click', function () {
    modal.classList.add(modalHide)
    modal.classList.remove(modalOpen)
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
}
