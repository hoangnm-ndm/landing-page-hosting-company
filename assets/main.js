// Hero

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// price

const tabsPrice = $$(".tab-item-price");
const panesPrice = $$(".tab-pane-price");

const tabActivePrice = $(".tab-item-price.active");
const linePrice = $(".tabs-price .line-price");

requestIdleCallback(function () {
  linePrice.style.left = tabActivePrice.offsetLeft + "px";
  linePrice.style.width = tabActivePrice.offsetWidth + "px";
});

tabsPrice.forEach((tab, index) => {
  const panePrice = panesPrice[index];

  tab.onclick = function () {
    $(".tab-item-price.active").classList.remove("active");
    $(".tab-pane-price.active").classList.remove("active");

    linePrice.style.left = this.offsetLeft + "px";
    linePrice.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    panePrice.classList.add("active");
  };
});
