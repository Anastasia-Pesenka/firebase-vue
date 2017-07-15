webpackJsonp([1],Array(37).concat([
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(129),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ModuleHome_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ModuleHome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ModuleHome_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ModuleCanvas_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ModuleCanvas_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_ModuleCanvas_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ModuleSearch_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ModuleSearch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_ModuleSearch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FirebaseModule_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FirebaseModule_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_FirebaseModule_vue__);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: [{
        path: '/',
        name: 'Home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_ModuleHome_vue___default.a
    }, {
        path: '/canvas',
        name: 'Canvas',
        component: __WEBPACK_IMPORTED_MODULE_3__components_ModuleCanvas_vue___default.a
    }, {
        path: '/search-example',
        name: 'Search',
        component: __WEBPACK_IMPORTED_MODULE_4__components_ModuleSearch_vue___default.a
    }, {
        path: '/firebase',
        name: 'Firebase',
        component: __WEBPACK_IMPORTED_MODULE_5__components_FirebaseModule_vue___default.a
    }]
}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(77)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(127),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isFullwidth: Boolean,
    accordion: Boolean
  },

  computed: {
    $collapseItems() {
      return this.$children.filter(child => child._isCollapseItem);
    }
  },

  methods: {
    openByIndex(index) {
      if (this.accordion) {
        this.$collapseItems.forEach((item, i) => {
          if (i !== index) {
            item.isActived = false;
          }
        });
      }
    }
  }

});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    selected: Boolean,
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isActived: this.selected
    };
  },

  created() {
    this._isCollapseItem = true;
  },

  mounted() {
    this.$on('open', this.$parent.openByIndex);
    if (this.isActived) {
      this.$emit('open', this.index);
    }
  },

  beforeDestroy() {
    if (this.anime && this.targets) {
      __WEBPACK_IMPORTED_MODULE_0_animejs___default.a.remove(this.targets);
    }
    this.$off('open', this.$parent.openByIndex);
  },

  computed: {
    index() {
      return this.$parent.$collapseItems.indexOf(this);
    }
  },

  methods: {
    toggle() {
      if (this.isActived = !this.isActived) {
        this.$emit('open', this.index);
      }
    },

    getAnime(targets) {
      if (this.anime) return this.anime;
      return this.anime = __WEBPACK_IMPORTED_MODULE_0_animejs___default()({ targets });
    },

    cancel() {
      this.anime.pause();
    },

    before(targets) {
      if (!this.targets) this.targets = targets;
      targets.removeAttribute('style');
    },

    enter(targets, done) {
      const height = targets.scrollHeight;
      targets.style.height = 0;
      targets.style.opacity = 0;
      this.getAnime(targets).play({
        targets,
        duration: 377,
        easing: 'easeOutExpo',
        opacity: [0, 1],
        height,
        complete() {
          targets.removeAttribute('style');
          done();
        }
      });
    },

    leave(targets, complete) {
      this.getAnime(targets).play({
        targets,
        duration: 377,
        easing: 'easeOutExpo',
        opacity: [1, 0],
        height: 0,
        complete
      });
    }
  }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    alignment: {
      type: String,
      default: ''
    }
  },

  computed: {
    classObject() {
      const { alignment } = this;
      return {
        'tab-list': true,
        'is-flex': true,
        [`is-${alignment}`]: alignment
      };
    }
  }
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const TS = {
  'fade': {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
  },
  'fade-horizontal-rtl': {
    enterClass: 'fadeInRight',
    leaveClass: 'fadeOutLeft'
  },
  'fade-horizontal-ltr': {
    enterClass: 'fadeInLeft',
    leaveClass: 'fadeOutRight'
  },
  'slide-horizontal-rtl': {
    enterClass: 'slideInRight',
    leaveClass: 'slideOutLeft'
  },
  'slide-horizontal-ltr': {
    enterClass: 'slideInLeft',
    leaveClass: 'slideOutRight'
  },
  'fade-vertical-dtu': {
    enterClass: 'fadeInUp',
    leaveClass: 'fadeOutUp'
  },
  'fade-vertical-utd': {
    enterClass: 'fadeInDown',
    leaveClass: 'fadeOutDown'
  },
  'slide-vertical-dtu': {
    enterClass: 'slideInUp',
    leaveClass: 'slideOutUp'
  },
  'slide-vertical-utd': {
    enterClass: 'slideInDown',
    leaveClass: 'slideOutDown'
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: String,
    selected: Boolean,
    disabled: Boolean,
    label: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      default: 'out-in'
    }
  },

  data() {
    return {
      realSelected: this.selected,
      transition: TS['fade']
    };
  },

  created() {
    this.$parent.tabPanes.push(this);
  },

  beforeDestroy() {
    this.$parent.tabPanes.splice(this.index, 1);
  },

  computed: {
    classObject() {
      const { realSelected } = this;
      return {
        'tab-pane': true,
        'animated': true,
        'is-active': realSelected,
        'is-deactive': !realSelected
      };
    },
    layout() {
      return this.$parent.layout;
    },
    direction() {
      if (this.layout === 'top' || this.layout === 'bottom') {
        return 'horizontal';
      } else if (this.layout === 'left' || this.layout === 'right') {
        return 'vertical';
      }
      return '';
    },
    animation() {
      return this.$parent.animation;
    },
    onlyFade() {
      return this.$parent.onlyFade;
    },
    gte() {
      if (this.direction === 'vertical') {
        return 'utd';
      } else if (this.direction === 'horizontal') {
        return 'ltr';
      }
      return '';
    },
    lt() {
      if (this.direction === 'vertical') {
        return 'dtu';
      } else if (this.direction === 'horizontal') {
        return 'rtl';
      }
      return '';
    },
    hidden() {
      return this.realSelected ? 'false' : 'true';
    },
    index() {
      return this.$parent.tabPanes.indexOf(this);
    }
  },

  watch: {
    '$parent.realSelectedIndex'(index, prevIndex) {
      if (!this.onlyFade) {
        let transition;
        if (prevIndex === -1 || prevIndex > index) {
          transition = `${this.animation}${this.layout ? `-${this.direction}` : ''}${this.gte ? `-${this.gte}` : ''}`;
        } else {
          transition = `${this.animation}${this.layout ? `-${this.direction}` : ''}${this.lt ? `-${this.lt}` : ''}`;
        }
        this.transition = TS[transition] || TS['fade'];
      }
      this.realSelected = this.index === index;
    }
  }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TabList__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TabList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TabList__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TabList: __WEBPACK_IMPORTED_MODULE_0__TabList___default.a
  },

  props: {
    isFullwidth: Boolean,
    layout: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom', 'left', 'right'].indexOf(val) > -1;
      }
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    alignment: {
      type: String,
      default: ''
    },
    selectedIndex: {
      type: Number,
      default: -1
    },
    animation: {
      type: String,
      default: 'fade'
    },
    onlyFade: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      realSelectedIndex: this.selectedIndex,
      tabPanes: []
    };
  },

  mounted() {
    this.update();
    if (this.realSelectedIndex === -1) {
      this.select(0);
    }
  },

  methods: {
    update() {
      for (const tabPane of this.tabPanes) {
        if (!tabPane.disabled && tabPane.realSelected) {
          this.select(tabPane.index);
          break;
        }
      }
    },

    isActived(index) {
      return index === this.realSelectedIndex;
    },

    select(index) {
      this.$emit('tab-selected', index);
      this.realSelectedIndex = index;
    }
  },
  watch: {
    selectedIndex(newIndex) {
      this.select(newIndex);
    }
  }
});

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MenuGlobal__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MenuGlobal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_MenuGlobal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MenuFooterGlobal__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MenuFooterGlobal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_MenuFooterGlobal__);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    components: {
        'menu-global': __WEBPACK_IMPORTED_MODULE_0__components_MenuGlobal___default.a,
        'menu-footer-global': __WEBPACK_IMPORTED_MODULE_1__components_MenuFooterGlobal___default.a
    }
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fb_js__ = __webpack_require__(74);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let usersRef = __WEBPACK_IMPORTED_MODULE_0__fb_js__["a" /* db */].ref('test');
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'module-fb',
    data() {
        return {
            title: 'Firebase',
            subtitile: 'Работа с Firebase.',
            newUser: {
                name: '',
                email: ''
            }
        };
    },
    firebase: {
        users: {
            source: usersRef
        }
    },
    methods: {
        addUser: function () {
            usersRef.push(this.newUser);
            this.newUser.name = '';
            this.newUser.email = '';
        }
    }
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'global-footer-menu',
    data() {
        return {
            msg: 'Created by LisKorzun'
        };
    }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'global-menu',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_dataCanvas_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_bulma_tabs__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_bulma_collapse__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_bulma_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_bulma_collapse__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'module-canvas',
    components: {
        Tabs: __WEBPACK_IMPORTED_MODULE_1_vue_bulma_tabs__["a" /* Tabs */],
        TabPane: __WEBPACK_IMPORTED_MODULE_1_vue_bulma_tabs__["b" /* TabPane */],
        Collapse: __WEBPACK_IMPORTED_MODULE_2_vue_bulma_collapse__["Collapse"],
        CollapseItem: __WEBPACK_IMPORTED_MODULE_2_vue_bulma_collapse__["Item"]
    },
    data() {
        return {
            selected: ''
        };
    },
    created() {
        this.storage = __WEBPACK_IMPORTED_MODULE_0__data_dataCanvas_js__["a" /* default */];
        this.storage.moduleParts.forEach(function (part) {
            if (part.tabs && Array.isArray(part.tabs)) {
                part.tabs.forEach(function (tab) {
                    if (tab.content && Array.isArray(tab.content)) {
                        tab.content.forEach(function (item) {
                            if (item.id) {
                                switch (item.type) {
                                    case 'fiddle':
                                        item.url = '//jsfiddle.net/LisKorzun/' + item.id + '/embedded/' + (item.options || '') + '/?bodyColor=ffffff';
                                        break;
                                    default:
                                        item.url = '';
                                }
                            }
                        });
                    }
                });
            }
        }.bind(this));
    },
    methods: {
        selectPart(part) {
            this.selected = part;
            this.storage.moduleParts.forEach(function (tab) {
                tab.isActive = tab.id === part.id;
            });
        }
    }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'module-home',
    data() {
        return {
            title: 'Welcome',
            subtitile: 'Полезные примерчики. Краткие описания. Понятные инструкции.'
        };
    }
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_partials_grid_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_partials_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_partials_grid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'module-search',
    components: {
        'demo-grid': __WEBPACK_IMPORTED_MODULE_0__components_partials_grid_vue___default.a
    },
    mounted() {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/static/names.json').then(response => this.gridData = response.data).catch(function (error) {
            console.log(error);
        });
    },

    data() {
        return {
            title: 'Simple dynamic search example',
            subtitile: 'Простой пример динамического поиска',
            searchQuery: '',
            gridColumns: ['name', 'power'],
            gridData: []
        };
    }
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'grid',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    computed: {
        // a computed getter
        filteredData: function () {
            // `this` points to the vm instance
            return this.data.filter(function (obj) {
                return obj.name.indexOf(this.filterKey) !== -1;
            }.bind(this));
        }
    }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    title: 'CANVAS',
    subtitle: 'Элемент &lt;canvas&gt;, добавленный в HTML5, предназначен для создания графики с помощью JavaScript.<br>Например, его используют для рисования графиков, создания фотокомпозиций, анимаций и даже обработкии рендеринга видео в реальном времени.',
    moduleParts: [{
        name: 'Примеры',
        id: 'canvas-examples',
        isActive: true,
        tabs: [{
            name: 'Фигуры',
            id: 'figures-content-menu',
            type: 'collapse',
            content: [{
                name: 'Два прямоугольника',
                id: 'bvn5Luvd',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Прямоугольники внутри',
                id: 'anxseg6r',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Триугольник',
                id: 'cqtczvnm',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Смайл',
                id: 'L1knwahp',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Линии',
                id: '55y4z7vf',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Дуги',
                id: 'b1bsfh82',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Квадратичные кривые',
                id: 'e2La1vrr',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Кривые Безье',
                id: '2wnnh9aq',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Path2D объекты',
                id: 'odjm5rk3',
                type: 'fiddle',
                options: 'result,js,html'
            }]
        }, {
            name: 'Стили и цвета',
            id: 'style-content-menu',
            type: 'collapse',
            content: [{
                name: 'Фон',
                id: 'pba4pgx5',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Контур',
                id: '9yyh9n5h',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Прозрачность',
                id: '2731Lecm',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Использование rgba',
                id: 'uag3zLkL',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Толщина линий',
                id: '9vbgya01',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Ломаные линии',
                id: 'ggwadkp6',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Базовая аниация',
                id: 'uopxg0tq',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Линейный градиент',
                id: 'xeyc6b4t',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Круговой градиент',
                id: '9dacr9pu',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Паттерн картинки',
                id: 'hodeLmjk',
                type: 'fiddle',
                options: 'result,js,html'
            }]
        }, {
            name: 'Изображения',
            id: 'img-content-menu',
            type: 'collapse',
            content: [{
                name: 'Тайлинг изображения',
                id: 'caoykp1u',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Обрамление изображения',
                id: 'kc2Ls37f',
                type: 'fiddle',
                options: 'result,js,html'
            }]
        }, {
            name: 'Трансформации',
            id: 'trans-content-menu',
            type: 'collapse',
            content: [{
                name: 'Сохранение состояния',
                id: 'qwx19md8',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Использование translate()',
                id: 'coprybsb',
                type: 'fiddle',
                options: 'result,js,html'
            }, {
                name: 'Ротация',
                id: 'jy0z7cdc',
                type: 'fiddle',
                options: 'result,js,html'
            }]
        }]
    }]
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

const firebaseApp = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp({
    apiKey: "AIzaSyBiAKNF1lpvMZhTod0lpC_bSFXdrAfJ-A8",
    authDomain: "fire-vue-a9f77.firebaseapp.com",
    databaseURL: "https://fire-vue-a9f77.firebaseio.com",
    projectId: "fire-vue-a9f77",
    storageBucket: "",
    messagingSenderId: "340681066578"
});

const db = firebaseApp.database();
/* harmony export (immutable) */ __webpack_exports__["a"] = db;


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuefire__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuefire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuefire__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuefire___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(76)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(79)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(130),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(131),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(78)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(128),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(135),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(134),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(132),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(124),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(70),
  /* template */
  __webpack_require__(133),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(136),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(126),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "module-canvas"
  }, [_c('section', {
    staticClass: "hero is-info is-small"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title",
    domProps: {
      "textContent": _vm._s(_vm.storage.title)
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "subtitle",
    domProps: {
      "innerHTML": _vm._s(_vm.storage.subtitle)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "hero-foot"
  }, [_c('nav', {
    staticClass: "tabs is-boxed"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('ul', _vm._l((_vm.storage.moduleParts), function(mainTab, index) {
    return _c('li', {
      key: mainTab.id,
      class: {
        'is-active': mainTab.isActive
      },
      on: {
        "click": function($event) {
          _vm.selectPart(mainTab)
        }
      }
    }, [_c('a', [_vm._v(_vm._s(mainTab.name))])])
  }))])])])]), _vm._v(" "), _vm._l((_vm.storage.moduleParts), function(mainTab, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (mainTab.isActive),
        expression: "mainTab.isActive"
      }],
      staticClass: "container"
    }, [_c('tabs', {
      key: mainTab.id,
      attrs: {
        "animation": "slide",
        "only-fade": false
      }
    }, _vm._l((mainTab.tabs), function(tab) {
      return _c('tab-pane', {
        key: tab.id,
        attrs: {
          "label": tab.name
        }
      }, [(tab.type === 'text') ? _vm._t("footer", [_vm._v("\n                    " + _vm._s(tab.content) + "\n                ")]) : _vm._e(), _vm._v(" "), (tab.type === 'collapse') ? _vm._t("footer", [_c('collapse', {
        attrs: {
          "accordion": "",
          "is-fullwidth": ""
        }
      }, _vm._l((tab.content), function(item) {
        return _c('collapse-item', {
          key: item.id,
          attrs: {
            "title": item.name
          }
        }, [_c('iframe', {
          attrs: {
            "width": "100%",
            "height": "300",
            "src": item.url,
            "allowfullscreen": "allowfullscreen",
            "frameborder": "0"
          }
        })])
      }))]) : _vm._e()], 2)
    }))], 1)
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "collapse is-fullwidth"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', _vm._l((_vm.columns), function(key) {
    return _c('th', [_vm._v("\n            " + _vm._s(_vm._f("capitalize")(key)) + "\n        ")])
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.filteredData), function(entry) {
    return _c('tr', _vm._l((_vm.columns), function(key) {
      return _c('td', [_vm._v("\n            " + _vm._s(entry[key]) + "\n        ")])
    }))
  }))])
},staticRenderFns: []}

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('menu-global'), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('menu-footer-global')], 1)
},staticRenderFns: []}

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ( _obj = {
      'vue-bulma-tabs': true
    }, _obj[("is-layout-" + _vm.layout)] = true, _obj )
  }, [_c('div', {
    class: ( _obj$1 = {
      tabs: true, 'is-fullwidth': _vm.isFullwidth
    }, _obj$1[("is-" + _vm.size)] = _vm.size, _obj$1[("is-" + _vm.alignment)] = _vm.alignment, _obj$1[("is-" + _vm.type)] = _vm.type, _obj$1 )
  }, [_vm._t("left-tab-list"), _vm._v(" "), _c('tab-list', _vm._l((_vm.tabPanes), function(tab, index) {
    return _c('li', {
      class: {
        'is-active': _vm.isActived(index), 'is-disabled': tab.disabled, 'is-flex': true
      },
      attrs: {
        "role": "tab",
        "aria-selected": _vm.isActived(index) ? 'true' : 'false',
        "aria-expanded": _vm.isActived(index) ? 'true' : 'false',
        "aria-disabled": tab.disabled ? 'true' : 'false',
        "selected": _vm.isActived(index),
        "disabled": tab.disabled
      },
      on: {
        "click": function($event) {
          _vm.select(index)
        }
      }
    }, [_c('a', {
      staticClass: "is-unselectable"
    }, [(tab.icon) ? _c('span', {
      class: ['icon', {
        'is-small': _vm.size !== 'large'
      }]
    }, [_c('i', {
      class: tab.icon
    })]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(tab.label))])])])
  })), _vm._v(" "), _vm._t("right-tab-list")], 2), _vm._v(" "), _c('div', {
    staticClass: "tab-content is-flex"
  }, [_vm._t("default")], 2)])
  var _obj;
  var _obj$1;
},staticRenderFns: []}

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: _vm.classObject,
    attrs: {
      "role": "tablist"
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card collapse-item",
    class: {
      'is-fullwidth': _vm.$parent.isFullwidth, 'is-active': _vm.isActived
    }
  }, [_c('header', {
    staticClass: "card-header touchable",
    attrs: {
      "role": "tab",
      "aria-expanded": _vm.selected ? 'true' : 'fase'
    },
    on: {
      "click": _vm.toggle
    }
  }, [_c('h3', {
    staticClass: "card-header-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "collapsed-fade",
      "css": false,
      "appear": ""
    },
    on: {
      "before-appear": _vm.before,
      "appear": _vm.enter,
      "appear-cancel": _vm.cancel,
      "before-enter": _vm.before,
      "enter": _vm.enter,
      "enter-cancel": _vm.cancel,
      "leave": _vm.leave,
      "leave-cancel": _vm.cancel
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActived),
      expression: "isActived"
    }],
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "card-content-box"
  }, [_vm._t("default")], 2)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "card-header-icon"
  }, [_c('i', {
    staticClass: "fa fa-angle-right"
  })])
}]}

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.animation,
      "mode": "out-in",
      "appear": "",
      "appear-active-class": _vm.transition.enterClass,
      "enter-active-class": _vm.transition.enterClass,
      "leave-active-class": _vm.transition.leaveClass
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.realSelected),
      expression: "realSelected"
    }],
    class: _vm.classObject,
    attrs: {
      "role": "tabpanel",
      "aria-labelledby": _vm.label,
      "aria-hidden": _vm.hidden
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "global-menu navbar"
  }, [_c('div', {
    staticClass: "navbar-brand"
  }, [_c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": "/"
    }
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-home"
  })])]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": "/canvas"
    }
  }, [_vm._v("canvas")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": "/search-example"
    }
  }, [_vm._v("search-example")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item",
    attrs: {
      "to": "/firebase"
    }
  }, [_vm._v("Firebase")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero is-primary is-medium"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n                " + _vm._s(_vm.title) + "\n            ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n                " + _vm._s(_vm.subtitile) + "\n            ")])])])])
},staticRenderFns: []}

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer global-footer-menu"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content has-text-centered"
  }, [_c('p', [_vm._v(" " + _vm._s(_vm.msg) + "\n                "), _vm._m(0)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "icon",
    attrs: {
      "href": "https://github.com/LisKorzun",
      "target": "_blank"
    }
  }, [_c('i', {
    staticClass: "fa fa-github"
  })])
}]}

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "hero is-primary is-medium"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n                    " + _vm._s(_vm.title) + "\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n                    " + _vm._s(_vm.subtitile) + "\n                ")])])])]), _vm._v(" "), _c('ul', _vm._l((_vm.users), function(user) {
    return _c('li', [_vm._v(_vm._s(user.name) + " -" + _vm._s(user.email) + " ")])
  })), _vm._v(" "), _c('form', {
    staticClass: "container",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.addUser($event)
      }
    }
  }, [_c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newUser.name),
      expression: "newUser.name"
    }],
    staticClass: "input is-info",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    },
    domProps: {
      "value": (_vm.newUser.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newUser.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newUser.email),
      expression: "newUser.email"
    }],
    staticClass: "input is-primary",
    attrs: {
      "type": "text",
      "placeholder": "Email"
    },
    domProps: {
      "value": (_vm.newUser.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newUser.email = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field is-grouped"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])])])
}]}

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "hero is-primary is-medium"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\n                    " + _vm._s(_vm.title) + "\n                ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n                    " + _vm._s(_vm.subtitile) + "\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "container",
    attrs: {
      "id": "demo"
    }
  }, [_c('form', {
    attrs: {
      "id": "search"
    }
  }, [_c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "control has-icons-left"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchQuery),
      expression: "searchQuery"
    }],
    staticClass: "input",
    attrs: {
      "name": "query",
      "placeholder": "search ..."
    },
    domProps: {
      "value": (_vm.searchQuery)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchQuery = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._m(0)])])]), _vm._v(" "), _c('demo-grid', {
    attrs: {
      "data": _vm.gridData,
      "columns": _vm.gridColumns,
      "filter-key": _vm.searchQuery
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])
}]}

/***/ })
]),[75]);
//# sourceMappingURL=app.f9952137d73c1c91a6af.js.map