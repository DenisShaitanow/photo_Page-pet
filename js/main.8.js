/*! For license information please see main.88370506f7d856bf83ac.js.LICENSE.txt */
(() => {
  var t = {
      110: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function n(t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(r), !0).forEach(function (e) {
                  o(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : e(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        function o(t, e, n) {
          return (
            (e = i(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, i(o.key), o);
          }
        }
        function i(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var a = (function () {
          return (
            (t = function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.config = {
                  enabled: !1,
                  yandexMetrikaId: null,
                  googleAnalyticsId: null,
                  debug: !1,
                }),
                (this.isLocalhost = this.checkLocalhost());
            }),
            (e = [
              {
                key: "checkLocalhost",
                value: function () {
                  var t = window.location.hostname,
                    e = window.location.port;
                  return (
                    "localhost" === t ||
                    "127.0.0.1" === t ||
                    t.includes("192.168") ||
                    "3000" === e ||
                    t.includes(".local")
                  );
                },
              },
              {
                key: "init",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.config = n(n({}, this.config), t)),
                    this.isLocalhost &&
                      (console.log(
                        "🔧 Analytics disabled for localhost environment"
                      ),
                      (this.config.enabled = !1),
                      (this.config.debug = !0)),
                    this.config.enabled
                      ? (this.config.yandexMetrikaId &&
                          this.initYandexMetrika(),
                        this.config.googleAnalyticsId &&
                          this.initGoogleAnalytics(),
                        this.initCustomEvents(),
                        this.config.debug &&
                          console.log("📊 Analytics initialized:", this.config))
                      : this.initDebugMode();
                },
              },
              {
                key: "initDebugMode",
                value: function () {
                  console.log("🔍 Analytics Debug Mode Enabled"),
                    this.initCustomEvents();
                },
              },
              {
                key: "initYandexMetrika",
                value: function () {
                  var t = this.config.yandexMetrikaId;
                  if (this.isLocalhost)
                    console.log("⚠️ Yandex.Metrika skipped for localhost");
                  else {
                    (window.ym =
                      window.ym ||
                      function () {
                        (window.ym.a = window.ym.a || []).push(arguments);
                      }),
                      (window.ym.l = Date.now());
                    var e = document.createElement("script");
                    (e.async = !0),
                      (e.src = "https://mc.yandex.ru/metrika/tag.js"),
                      document.head.appendChild(e),
                      (e.onload = function () {
                        try {
                          window.ym(t, "init", {
                            clickmap: !0,
                            trackLinks: !0,
                            accurateTrackBounce: !0,
                            webvisor: !0,
                            trackHash: !0,
                            ecommerce: "dataLayer",
                          }),
                            console.log(
                              "✅ Yandex.Metrika initialized with ID:",
                              t
                            );
                        } catch (t) {
                          console.error(
                            "❌ Yandex.Metrika initialization error:",
                            t
                          );
                        }
                      });
                    var n = document.createElement("noscript");
                    (n.innerHTML =
                      '<div><img src="https://mc.yandex.ru/watch/'.concat(
                        t,
                        '" style="position:absolute; left:-9999px;" alt="" /></div>'
                      )),
                      document.body.appendChild(n);
                  }
                },
              },
              {
                key: "initGoogleAnalytics",
                value: function () {
                  var t = this.config.googleAnalyticsId;
                  if (this.isLocalhost)
                    console.log("⚠️ Google Analytics skipped for localhost");
                  else {
                    var e = document.createElement("script");
                    (e.async = !0),
                      (e.src =
                        "https://www.googletagmanager.com/gtag/js?id=".concat(
                          t
                        )),
                      document.head.appendChild(e),
                      (window.dataLayer = window.dataLayer || []),
                      (window.gtag = n),
                      n("js", new Date()),
                      n("config", t, {
                        page_title: document.title,
                        page_location: window.location.href,
                      }),
                      console.log(
                        "✅ Google Analytics initialized with ID:",
                        t
                      );
                  }
                  function n() {
                    dataLayer.push(arguments);
                  }
                },
              },
              {
                key: "initCustomEvents",
                value: function () {
                  this.trackButtons(),
                    this.trackGalleryViews(),
                    this.trackContactForms(),
                    this.trackTimeOnPage();
                },
              },
              {
                key: "trackButtons",
                value: function () {
                  var t = this;
                  document.addEventListener("click", function (e) {
                    var n = e.target.closest('.btn, .button, [role="button"]');
                    if (n) {
                      var o = n.textContent.trim(),
                        r = n.className;
                      t.trackEvent("button_click", {
                        button_text: o,
                        button_class: r,
                        page_url: window.location.href,
                      });
                    }
                  });
                },
              },
              {
                key: "trackGalleryViews",
                value: function () {
                  var t = this,
                    e = new MutationObserver(function (e) {
                      e.forEach(function (e) {
                        e.addedNodes.forEach(function (e) {
                          if (
                            1 === e.nodeType &&
                            e.matches &&
                            e.matches(".photo-gallery__item")
                          ) {
                            var n = t.getGalleryName();
                            t.trackEvent("gallery_view", {
                              gallery_name: n,
                              page_url: window.location.href,
                            });
                          }
                        });
                      });
                    }),
                    n = document.querySelector(".photo-gallery__grid");
                  n && e.observe(n, { childList: !0, subtree: !0 });
                },
              },
              {
                key: "trackContactForms",
                value: function () {
                  var t = this;
                  document.addEventListener("submit", function (e) {
                    var n = e.target;
                    n.matches &&
                      n.matches("form") &&
                      t.trackEvent("form_submit", {
                        form_name: n.name || "contact_form",
                        page_url: window.location.href,
                      });
                  });
                },
              },
              {
                key: "trackTimeOnPage",
                value: function () {
                  var t = this,
                    e = Date.now(),
                    n = !0;
                  [
                    "mousedown",
                    "mousemove",
                    "keypress",
                    "scroll",
                    "touchstart",
                  ].forEach(function (t) {
                    document.addEventListener(
                      t,
                      function () {
                        n = !0;
                      },
                      { passive: !0 }
                    );
                  }),
                    window.addEventListener("beforeunload", function () {
                      if (n) {
                        var o = Math.round((Date.now() - e) / 1e3);
                        t.trackEvent("time_on_page", {
                          duration: o,
                          page_url: window.location.href,
                        });
                      }
                    }),
                    setInterval(function () {
                      if (n) {
                        n = !1;
                        var o = Math.round((Date.now() - e) / 1e3);
                        t.trackEvent("page_engagement", {
                          duration: o,
                          page_url: window.location.href,
                        });
                      }
                    }, 3e4);
                },
              },
              {
                key: "trackEvent",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (this.config.enabled) {
                    if (this.config.yandexMetrikaId && window.ym)
                      try {
                        window.ym(
                          this.config.yandexMetrikaId,
                          "reachGoal",
                          t,
                          e
                        );
                      } catch (t) {
                        console.error("Yandex.Metrika track error:", t);
                      }
                    if (this.config.googleAnalyticsId && window.gtag)
                      try {
                        window.gtag("event", t, e);
                      } catch (t) {
                        console.error("Google Analytics track error:", t);
                      }
                    this.config.debug &&
                      console.log("📊 Analytics Event:", t, e);
                  } else
                    this.config.debug &&
                      console.log("📈 [Debug] Event: ".concat(t), e);
                },
              },
              {
                key: "getGalleryName",
                value: function () {
                  var t = document.querySelector("h1");
                  if (t) return t.textContent.trim();
                  var e = document.querySelector("[data-album-id]");
                  return e
                    ? e.getAttribute("data-album-id")
                    : "unknown_gallery";
                },
              },
              {
                key: "trackImageView",
                value: function (t, e) {
                  this.trackEvent("image_view", {
                    image_name: t,
                    gallery_name: e,
                    page_url: window.location.href,
                  });
                },
              },
              {
                key: "trackContact",
                value: function (t, e) {
                  this.trackEvent("contact_click", {
                    contact_type: t,
                    contact_value: e,
                    page_url: window.location.href,
                  });
                },
              },
            ]),
            e && r(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })();
        window.Analytics = new a();
      },
      483: () => {
        function t() {
          var n,
            o,
            r = "function" == typeof Symbol ? Symbol : {},
            i = r.iterator || "@@iterator",
            a = r.toStringTag || "@@toStringTag";
          function c(t, r, i, a) {
            var c = r && r.prototype instanceof s ? r : s,
              u = Object.create(c.prototype);
            return (
              e(
                u,
                "_invoke",
                (function (t, e, r) {
                  var i,
                    a,
                    c,
                    s = 0,
                    u = r || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: n,
                      a: y,
                      f: y.bind(n, 4),
                      d: function (t, e) {
                        return (i = t), (a = 0), (c = n), (d.n = e), l;
                      },
                    };
                  function y(t, e) {
                    for (
                      a = t, c = e, o = 0;
                      !f && s && !r && o < u.length;
                      o++
                    ) {
                      var r,
                        i = u[o],
                        y = d.p,
                        m = i[2];
                      t > 3
                        ? (r = m === e) &&
                          ((c = i[(a = i[4]) ? 5 : ((a = 3), 3)]),
                          (i[4] = i[5] = n))
                        : i[0] <= y &&
                          ((r = t < 2 && y < i[1])
                            ? ((a = 0), (d.v = e), (d.n = i[1]))
                            : y < m &&
                              (r = t < 3 || i[0] > e || e > m) &&
                              ((i[4] = t), (i[5] = e), (d.n = m), (a = 0)));
                    }
                    if (r || t > 1) return l;
                    throw ((f = !0), e);
                  }
                  return function (r, u, m) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === u && y(u, m), a = u, c = m;
                      (o = a < 2 ? n : c) || !f;

                    ) {
                      i ||
                        (a
                          ? a < 3
                            ? (a > 1 && (d.n = -1), y(a, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), i)) {
                          if ((a || (r = "next"), (o = i[r]))) {
                            if (!(o = o.call(i, c)))
                              throw TypeError(
                                "iterator result is not an object"
                              );
                            if (!o.done) return o;
                            (c = o.value), a < 2 && (a = 0);
                          } else
                            1 === a && (o = i.return) && o.call(i),
                              a < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    r +
                                    "' method"
                                )),
                                (a = 1));
                          i = n;
                        } else if ((o = (f = d.n < 0) ? c : t.call(e, d)) !== l)
                          break;
                      } catch (t) {
                        (i = n), (a = 1), (c = t);
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: o, done: f };
                  };
                })(t, i, a),
                !0
              ),
              u
            );
          }
          var l = {};
          function s() {}
          function u() {}
          function f() {}
          o = Object.getPrototypeOf;
          var d = [][i]
              ? o(o([][i]()))
              : (e((o = {}), i, function () {
                  return this;
                }),
                o),
            y = (f.prototype = s.prototype = Object.create(d));
          function m(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), e(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }
          return (
            (u.prototype = f),
            e(y, "constructor", f),
            e(f, "constructor", u),
            (u.displayName = "GeneratorFunction"),
            e(f, a, "GeneratorFunction"),
            e(y),
            e(y, a, "Generator"),
            e(y, i, function () {
              return this;
            }),
            e(y, "toString", function () {
              return "[object Generator]";
            }),
            (t = function () {
              return { w: c, m };
            })()
          );
        }
        function e(t, n, o, r) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch (t) {
            i = 0;
          }
          (e = function (t, n, o, r) {
            if (n)
              i
                ? i(t, n, {
                    value: o,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[n] = o);
            else {
              var a = function (n, o) {
                e(t, n, function (t) {
                  return this._invoke(n, o, t);
                });
              };
              a("next", 0), a("throw", 1), a("return", 2);
            }
          }),
            e(t, n, o, r);
        }
        function n(t, e, n, o, r, i, a) {
          try {
            var c = t[i](a),
              l = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(l) : Promise.resolve(l).then(o, r);
        }
        function o(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
          return o;
        }
        function r(t) {
          console.log("🔓 Пытаемся открыть модальное окно:", t);
          var e = document.querySelectorAll(".legal-modal");
          console.log(
            "🔍 Всего модальных окон с классом .legal-modal: ".concat(e.length)
          ),
            e.forEach(function (t, e) {
              console.log(
                "  "
                  .concat(e + 1, ". ID: ")
                  .concat(t.id, ", display: ")
                  .concat(t.style.display || "не задан")
              );
            });
          var n = document.getElementById(t);
          if (n) {
            console.log("✅ Модальное окно найдено:", t),
              (n.style.display = "block"),
              n.classList.add("show"),
              (document.body.style.overflow = "hidden");
            var o = n.querySelector(".legal-modal__body");
            o && (o.scrollTop = 0), console.log("✅ Модальное окно открыто");
          } else {
            console.error("❌ Модальное окно не найдено:", t),
              console.log("🔍 Поиск по всем элементам с ID:");
            var r = document.querySelectorAll("[id]");
            Array.from(r)
              .filter(function (t) {
                return t.id.includes("modal") || t.id.includes("rights");
              })
              .forEach(function (t) {
                console.log(
                  "  Найден элемент: ".concat(t.id, " (").concat(t.tagName, ")")
                );
              });
          }
        }
        function i(t) {
          console.log("🔒 Закрываем модальное окно:", t);
          var e = document.getElementById(t);
          e &&
            ((e.style.display = "none"),
            e.classList.remove("show"),
            (document.body.style.overflow = "auto"),
            console.log("✅ Модальное окно закрыто"));
        }
        function a() {
          console.log("⚙️ Настройка модальных окон...");
          var t = document.querySelector("footer"),
            e = document.getElementById("footer-placeholder");
          console.log("🔍 Проверка элементов футера:"),
            console.log("  footer элемент:", t ? "найден" : "не найден"),
            console.log("  footer-placeholder:", e ? "найден" : "не найден"),
            e &&
              console.log(
                "  Содержимое placeholder:",
                e.innerHTML.length,
                "символов"
              ),
            console.log("🔗 Проверка ссылок и модальных окон:");
          var n = document.querySelectorAll(".legal-modal"),
            a = document.querySelectorAll('[id*="modal"]');
          console.log("🔍 Диагностика DOM:"),
            console.log(
              "  Элементов с классом .legal-modal: ".concat(n.length)
            ),
            console.log('  Элементов с "modal" в ID: '.concat(a.length)),
            n.forEach(function (t, e) {
              console.log(
                "    "
                  .concat(e + 1, ". Модальное окно: ")
                  .concat(t.id, " (класс: ")
                  .concat(t.className, ")")
              );
            }),
            a.forEach(function (t, e) {
              t.classList.contains("legal-modal") ||
                console.log(
                  "    Другой элемент с modal: "
                    .concat(t.id, " (")
                    .concat(t.tagName, ")")
                );
            }),
            Object.entries({
              "privacy-link": "privacy-modal",
              "terms-link": "terms-modal",
              "rights-link": "rights-modal",
            }).forEach(function (t) {
              var e,
                n,
                i =
                  ((n = 2),
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })((e = t)) ||
                    (function (t, e) {
                      var n =
                        null == t
                          ? null
                          : ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                            t["@@iterator"];
                      if (null != n) {
                        var o,
                          r,
                          i,
                          a,
                          c = [],
                          l = !0,
                          s = !1;
                        try {
                          if (((i = (n = n.call(t)).next), 0 === e)) {
                            if (Object(n) !== n) return;
                            l = !1;
                          } else
                            for (
                              ;
                              !(l = (o = i.call(n)).done) &&
                              (c.push(o.value), c.length !== e);
                              l = !0
                            );
                        } catch (t) {
                          (s = !0), (r = t);
                        } finally {
                          try {
                            if (
                              !l &&
                              null != n.return &&
                              ((a = n.return()), Object(a) !== a)
                            )
                              return;
                          } finally {
                            if (s) throw r;
                          }
                        }
                        return c;
                      }
                    })(e, n) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return o(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return (
                          "Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(t)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? o(t, e)
                            : void 0
                        );
                      }
                    })(e, n) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()),
                a = i[0],
                c = i[1],
                l = document.getElementById(a),
                s = document.getElementById(c);
              console.log(
                "  ".concat(a, ": ").concat(l ? "✅ найден" : "❌ не найден")
              ),
                console.log(
                  "  ".concat(c, ": ").concat(s ? "✅ найден" : "❌ не найден")
                ),
                l && s
                  ? (console.log("✅ Настраиваем ".concat(a, " -> ").concat(c)),
                    l.addEventListener("click", function (t) {
                      return (
                        t.preventDefault(),
                        console.log("🖱️ Клик по ".concat(a)),
                        r(c),
                        !1
                      );
                    }))
                  : (l || console.error("❌ Ссылка не найдена: ".concat(a)),
                    s ||
                      console.error(
                        "❌ Модальное окно не найдено: ".concat(c)
                      ));
            });
          var c = document.querySelectorAll(".legal-modal__close");
          console.log("🔘 Найдено кнопок закрытия: ".concat(c.length)),
            c.forEach(function (t) {
              t.addEventListener("click", function () {
                var t = this.closest(".legal-modal");
                t && i(t.id);
              });
            }),
            document.addEventListener("click", function (t) {
              t.target.classList.contains("legal-modal") && i(t.target.id);
            }),
            document.addEventListener("keydown", function (t) {
              "Escape" === t.key &&
                document
                  .querySelectorAll(".legal-modal.show")
                  .forEach(function (t) {
                    return i(t.id);
                  });
            }),
            console.log("✅ Модальные окна настроены");
        }
        function c() {
          return l.apply(this, arguments);
        }
        function l() {
          var e;
          return (
            (e = t().m(function e() {
              var n, o, r, i, c, l, s, u, f;
              return t().w(
                function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        return (
                          (t.p = 0),
                          (n = function () {
                            s++,
                              console.log(
                                "🔧 Попытка настройки модальных окон "
                                  .concat(s, "/")
                                  .concat(u, "...")
                              );
                            var t = document.getElementById("terms-modal"),
                              e = document.getElementById("privacy-modal"),
                              o = document.getElementById("rights-modal");
                            if (
                              (console.log("📊 Состояние модальных окон:"),
                              console.log(
                                "  terms-modal: ".concat(
                                  t ? "найден" : "НЕ НАЙДЕН"
                                )
                              ),
                              console.log(
                                "  privacy-modal: ".concat(
                                  e ? "найден" : "НЕ НАЙДЕН"
                                )
                              ),
                              console.log(
                                "  rights-modal: ".concat(
                                  o ? "найден" : "НЕ НАЙДЕН"
                                )
                              ),
                              t && e && o)
                            )
                              return (
                                console.log(
                                  "✅ Все модальные окна найдены, настраиваем обработчики..."
                                ),
                                void a()
                              );
                            s < u
                              ? (console.log(
                                  "⏳ Не все модальные окна найдены, повторная попытка через ".concat(
                                    200 * s,
                                    "мс..."
                                  )
                                ),
                                setTimeout(n, 200 * s))
                              : (console.error(
                                  "❌ Не удалось найти все модальные окна после максимального количества попыток"
                                ),
                                console.log(
                                  "🔧 Настраиваем найденные модальные окна..."
                                ),
                                a());
                          }),
                          console.log("📥 Загружаем футер..."),
                          (o = window.location.pathname),
                          (r = "parts/_footer.html"),
                          o.includes("/pages/")
                            ? (r = "../../parts/_footer.html")
                            : o.includes("/gallery/") &&
                              (r = "../../../parts/_footer.html"),
                          console.log("📂 Путь к футеру:", r),
                          (t.n = 1),
                          fetch(r)
                        );
                      case 1:
                        if ((i = t.v).ok) {
                          t.n = 2;
                          break;
                        }
                        throw new Error(
                          "HTTP ".concat(i.status, ": ").concat(i.statusText)
                        );
                      case 2:
                        return (t.n = 3), i.text();
                      case 3:
                        if (
                          ((c = t.v),
                          console.log(
                            "📄 Футер загружен, размер:",
                            c.length,
                            "символов"
                          ),
                          (l = document.getElementById("footer-placeholder")))
                        ) {
                          t.n = 4;
                          break;
                        }
                        return (
                          console.error("❌ Не найден footer-placeholder"),
                          t.a(2)
                        );
                      case 4:
                        (l.innerHTML = c),
                          console.log("✅ Футер вставлен в DOM"),
                          console.log("🔍 Проверка содержимого футера:"),
                          console.log(
                            '  Содержит "rights-modal":',
                            c.includes("rights-modal")
                          ),
                          console.log(
                            '  Содержит "privacy-modal":',
                            c.includes("privacy-modal")
                          ),
                          console.log(
                            '  Содержит "terms-modal":',
                            c.includes("terms-modal")
                          ),
                          console.log("  Длина HTML:", c.length),
                          setTimeout(function () {
                            var t,
                              e = document.getElementById("rights-modal");
                            console.log(
                              "🔍 rights-modal в DOM через 50мс:",
                              e ? "найден" : "НЕ НАЙДЕН"
                            ),
                              e &&
                                (console.log("  Класс:", e.className),
                                console.log(
                                  "  Родитель:",
                                  null === (t = e.parentElement) || void 0 === t
                                    ? void 0
                                    : t.tagName
                                ));
                          }, 50),
                          (s = 0),
                          (u = 5),
                          setTimeout(n, 100),
                          (t.n = 6);
                        break;
                      case 5:
                        (t.p = 5),
                          (f = t.v),
                          console.error("❌ Ошибка загрузки футера:", f);
                      case 6:
                        return t.a(2);
                    }
                },
                e,
                null,
                [[0, 5]]
              );
            })),
            (l = function () {
              var t = this,
                o = arguments;
              return new Promise(function (r, i) {
                var a = e.apply(t, o);
                function c(t) {
                  n(a, r, i, c, l, "next", t);
                }
                function l(t) {
                  n(a, r, i, c, l, "throw", t);
                }
                c(void 0);
              });
            }),
            l.apply(this, arguments)
          );
        }
        console.log("🚀 Загружается direct-footer-loader.js"),
          (window.openModal = r),
          (window.closeModal = i),
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", c)
            : c(),
          console.log("📋 direct-footer-loader.js готов");
      },
      506: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, n(r.key), r);
          }
        }
        function n(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(e, "string");
              if ("object" != t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var o = (function () {
          return (
            (t = function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                console.log("🍔 Инициализация мобильного меню..."),
                (this.burger = document.querySelector(".header__burger")),
                (this.mobileMenu = document.querySelector(
                  ".header__mobile-menu"
                )),
                (this.body = document.body),
                (this.isOpen = !1),
                console.log("🍔 Найден бургер:", !!this.burger),
                console.log("🍔 Найдено мобильное меню:", !!this.mobileMenu),
                this.init();
            }),
            (n = [
              {
                key: "init",
                value: function () {
                  var t = this;
                  if (this.burger && this.mobileMenu) {
                    console.log("🍔 Подключение обработчиков..."),
                      this.burger.addEventListener("click", function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          console.log("🍔 Клик по бургеру"),
                          t.toggle();
                      });
                    var e = this.mobileMenu.querySelectorAll(
                      ".header__mobile-nav-link"
                    );
                    console.log("🍔 Найдено ссылок в меню:", e.length),
                      e.forEach(function (e) {
                        e.addEventListener("click", function () {
                          console.log("🍔 Клик по ссылке в меню"), t.close();
                        });
                      }),
                      document.addEventListener("keydown", function (e) {
                        "Escape" === e.key &&
                          t.isOpen &&
                          (console.log("🍔 Закрытие по ESC"), t.close());
                      }),
                      document.addEventListener("click", function (e) {
                        t.isOpen &&
                          !e.target.closest(".header") &&
                          (console.log("🍔 Закрытие по клику вне меню"),
                          t.close());
                      }),
                      window.addEventListener("resize", function () {
                        window.innerWidth > 768 &&
                          t.isOpen &&
                          (console.log(
                            "🍔 Закрытие при изменении размера окна"
                          ),
                          t.close());
                      }),
                      console.log("🍔 Мобильное меню готово к работе!");
                  } else console.warn("🍔 Mobile menu elements not found");
                },
              },
              {
                key: "toggle",
                value: function () {
                  console.log("🍔 Toggle вызван, состояние:", this.isOpen),
                    this.isOpen ? this.close() : this.open();
                },
              },
              {
                key: "open",
                value: function () {
                  console.log("🍔 Открытие меню..."),
                    this.burger.classList.add("header__burger--active"),
                    this.mobileMenu.classList.add(
                      "header__mobile-menu--active"
                    ),
                    this.body.classList.add("menu-open"),
                    this.burger.setAttribute("aria-expanded", "true"),
                    (this.isOpen = !0),
                    console.log("🍔 Меню открыто!");
                },
              },
              {
                key: "close",
                value: function () {
                  console.log("🍔 Закрытие меню..."),
                    this.burger.classList.remove("header__burger--active"),
                    this.mobileMenu.classList.remove(
                      "header__mobile-menu--active"
                    ),
                    this.body.classList.remove("menu-open"),
                    this.burger.setAttribute("aria-expanded", "false"),
                    (this.isOpen = !1),
                    console.log("🍔 Меню закрыто!");
                },
              },
            ]),
            n && e(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, n;
        })();
        document.addEventListener("DOMContentLoaded", function () {
          console.log("🍔 DOM загружен, инициализируем мобильное меню..."),
            new o();
        });
      },
      816: () => {
        !(function () {
          "use strict";
          document.addEventListener("DOMContentLoaded", function () {
            !(function () {
              var t = document.querySelector(".slider");
              if (t) {
                var e = document.querySelectorAll(".slider__slide"),
                  n = document.querySelectorAll(".slider__indicator"),
                  o = document.querySelector(".slider__arrow--prev"),
                  r = document.querySelector(".slider__arrow--next");
                if (0 !== e.length) {
                  var i = 0,
                    a = null;
                  r &&
                    r.addEventListener("click", function () {
                      l(), u();
                    }),
                    o &&
                      o.addEventListener("click", function () {
                        s(), u();
                      }),
                    n.forEach(function (t, e) {
                      t.addEventListener("click", function () {
                        c(e), u();
                      });
                    }),
                    document.addEventListener("keydown", function (t) {
                      "ArrowLeft" === t.key
                        ? (s(), u())
                        : "ArrowRight" === t.key && (l(), u());
                    }),
                    t.addEventListener("mouseenter", f),
                    t.addEventListener("mouseleave", u),
                    u();
                } else console.error("Слайды не найдены");
              }
              function c(t) {
                e.forEach(function (t) {
                  return t.classList.remove("slider__slide--active");
                }),
                  n.forEach(function (t) {
                    return t.classList.remove("slider__indicator--active");
                  }),
                  e[t].classList.add("slider__slide--active"),
                  n[t] && n[t].classList.add("slider__indicator--active"),
                  (i = t);
              }
              function l() {
                c((i + 1) % e.length);
              }
              function s() {
                c((i - 1 + e.length) % e.length);
              }
              function u() {
                f(), (a = setInterval(l, 5e3));
              }
              function f() {
                a && (clearInterval(a), (a = null));
              }
            })();
          });
        })();
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { exports: {} });
    return t[o](i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    n(506), n(816), n(483);
    var t = {
      enableLogging: !0,
      enablePerformanceMetrics: !0,
      enableErrorReporting: !0,
      debugMode: !1,
    };
    function e() {
      if (
        t.enableLogging &&
        ("localhost" === window.location.hostname ||
          "127.0.0.1" === window.location.hostname) &&
        t.enableLogging
      ) {
        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
          o[r] = arguments[r];
        (e = console).log.apply(e, ["[DEV]"].concat(o));
      }
    }
    function o(t) {
      return (
        (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        o(t)
      );
    }
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, i(o.key), o);
      }
    }
    function i(t) {
      var e = (function (t) {
        if ("object" != o(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != o(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == o(e) ? e : e + "";
    }
    var a = (function () {
      return (
        (t = function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.slider = document.querySelector(".slider")),
            (this.slides = document.querySelectorAll(".slider__slide")),
            (this.indicators = document.querySelectorAll(".slider__indicator")),
            (this.prevBtn = document.querySelector(".slider__arrow--prev")),
            (this.nextBtn = document.querySelector(".slider__arrow--next")),
            (this.currentSlide = 0),
            (this.slideCount = this.slides.length),
            (this.autoplayInterval = null),
            (this.autoplayDelay = 5e3),
            this.slider && this.init();
        }),
        (n = [
          {
            key: "init",
            value: function () {
              e("Slider: Инициализация слайдера"),
                this.slides.length
                  ? this.indicators.length
                    ? (console.log(
                        "Slider: Найдено "
                          .concat(this.slides.length, " слайдов и ")
                          .concat(this.indicators.length, " индикаторов")
                      ),
                      this.bindEvents(),
                      this.startAutoplay(),
                      this.updateIndicators())
                    : console.error("Slider: Не найдены индикаторы")
                  : console.error("Slider: Не найдены слайды");
            },
          },
          {
            key: "bindEvents",
            value: function () {
              var t = this;
              this.prevBtn &&
                this.prevBtn.addEventListener("click", function () {
                  return t.goToPrevSlide();
                }),
                this.nextBtn &&
                  this.nextBtn.addEventListener("click", function () {
                    return t.goToNextSlide();
                  }),
                this.indicators.forEach(function (e, n) {
                  e.addEventListener("click", function () {
                    return t.goToSlide(n);
                  });
                }),
                document.addEventListener("keydown", function (e) {
                  "ArrowLeft" === e.key
                    ? t.goToPrevSlide()
                    : "ArrowRight" === e.key && t.goToNextSlide();
                }),
                this.slider.addEventListener("mouseenter", function () {
                  return t.stopAutoplay();
                }),
                this.slider.addEventListener("mouseleave", function () {
                  return t.startAutoplay();
                }),
                this.slider.addEventListener("focusin", function () {
                  return t.stopAutoplay();
                }),
                this.slider.addEventListener("focusout", function () {
                  return t.startAutoplay();
                });
            },
          },
          {
            key: "goToSlide",
            value: function (t) {
              t !== this.currentSlide &&
                (this.slides[this.currentSlide].classList.remove(
                  "slider__slide--active"
                ),
                (this.currentSlide = t),
                this.slides[this.currentSlide].classList.add(
                  "slider__slide--active"
                ),
                this.updateIndicators(),
                e("Slider: Переход к слайду ".concat(t + 1)));
            },
          },
          {
            key: "goToNextSlide",
            value: function () {
              var t = (this.currentSlide + 1) % this.slideCount;
              this.goToSlide(t);
            },
          },
          {
            key: "goToPrevSlide",
            value: function () {
              var t =
                (this.currentSlide - 1 + this.slideCount) % this.slideCount;
              this.goToSlide(t);
            },
          },
          {
            key: "updateIndicators",
            value: function () {
              var t = this;
              this.indicators.forEach(function (e, n) {
                e.classList.toggle(
                  "slider__indicator--active",
                  n === t.currentSlide
                );
              });
            },
          },
          {
            key: "startAutoplay",
            value: function () {
              var t = this;
              this.stopAutoplay(),
                (this.autoplayInterval = setInterval(function () {
                  t.goToNextSlide();
                }, this.autoplayDelay));
            },
          },
          {
            key: "stopAutoplay",
            value: function () {
              this.autoplayInterval &&
                (clearInterval(this.autoplayInterval),
                (this.autoplayInterval = null));
            },
          },
          {
            key: "play",
            value: function () {
              this.startAutoplay();
            },
          },
          {
            key: "pause",
            value: function () {
              this.stopAutoplay();
            },
          },
          {
            key: "destroy",
            value: function () {
              this.stopAutoplay();
            },
          },
        ]),
        n && r(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t, n;
    })();
    function c(t) {
      return (
        (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        c(t)
      );
    }
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, s(o.key), o);
      }
    }
    function s(t) {
      var e = (function (t) {
        if ("object" != c(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != c(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == c(e) ? e : e + "";
    }
    var u = (function () {
      return (
        (t = function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.nav = document.querySelector(".nav")),
            (this.navToggle = document.querySelector(".nav__toggle")),
            (this.navMenu = document.querySelector(".nav__menu")),
            (this.navLinks = document.querySelectorAll(".nav__link")),
            this.nav && this.init();
        }),
        (n = [
          {
            key: "init",
            value: function () {
              e("Navigation: Инициализация навигации"), this.bindEvents();
            },
          },
          {
            key: "bindEvents",
            value: function () {
              var t = this;
              this.navToggle &&
                this.navToggle.addEventListener("click", function () {
                  return t.toggleMenu();
                }),
                this.navLinks.forEach(function (e) {
                  e.addEventListener("click", function (e) {
                    t.handleNavClick(e);
                  });
                }),
                document.addEventListener("click", function (e) {
                  !t.nav.contains(e.target) &&
                    t.navMenu.classList.contains("nav__menu--active") &&
                    t.closeMenu();
                });
            },
          },
          {
            key: "toggleMenu",
            value: function () {
              this.navMenu.classList.toggle("nav__menu--active"),
                this.navToggle.classList.toggle("nav__toggle--active");
            },
          },
          {
            key: "closeMenu",
            value: function () {
              this.navMenu.classList.remove("nav__menu--active"),
                this.navToggle.classList.remove("nav__toggle--active");
            },
          },
          {
            key: "handleNavClick",
            value: function (t) {
              var e = t.target.closest(".nav__link");
              if (e) {
                var n = e.getAttribute("href");
                if (n && n.startsWith("#")) {
                  t.preventDefault();
                  var o = n.substring(1),
                    r = document.getElementById(o);
                  r && r.scrollIntoView({ behavior: "smooth", block: "start" }),
                    this.closeMenu();
                }
              }
            },
          },
        ]),
        n && l(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t, n;
    })();
    function f(t) {
      return (
        (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        f(t)
      );
    }
    function d(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, y(o.key), o);
      }
    }
    function y(t) {
      var e = (function (t) {
        if ("object" != f(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != f(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == f(e) ? e : e + "";
    }
    var m = (function () {
      return (
        (t = function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.animatedElements = document.querySelectorAll(
              '[class*="animate-"], .fade-in, .slide-up, .slide-left, .slide-right, .zoom-in, [class*="delay-"]'
            )),
            (this.observer = null),
            this.animatedElements.length > 0 && this.init();
        }),
        (n = [
          {
            key: "init",
            value: function () {
              e("Animations: Инициализация анимаций"),
                this.applyInitialAnimations(),
                this.setupIntersectionObserver(),
                this.stabilizePage();
            },
          },
          {
            key: "stabilizePage",
            value: function () {
              var t = document.querySelector(".portfolio-categories__cta");
              t && t.classList.add("animate-in"),
                setTimeout(function () {
                  document.body.classList.add("page-loaded");
                }, 3e3),
                setTimeout(function () {
                  document.body.classList.add("force-visible");
                }, 5e3);
            },
          },
          {
            key: "applyInitialAnimations",
            value: function () {
              var t = this;
              this.animatedElements.forEach(function (e) {
                var n = e.getBoundingClientRect();
                n.top < window.innerHeight &&
                  n.bottom > 0 &&
                  setTimeout(function () {
                    t.animateElement(e);
                  }, 100);
              });
            },
          },
          {
            key: "setupIntersectionObserver",
            value: function () {
              var t = this;
              (this.observer = new IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    e.isIntersecting && t.animateElement(e.target);
                  });
                },
                { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0.1 }
              )),
                this.animatedElements.forEach(function (e) {
                  e.classList.contains("animate-in") ||
                    e.classList.contains("fade-in--visible") ||
                    t.observer.observe(e);
                });
            },
          },
          {
            key: "animateElement",
            value: function (t) {
              var n = this;
              t.classList.contains("animate-in") ||
                t.classList.contains("fade-in--visible") ||
                (t.classList.contains("fade-in") &&
                  t.classList.add("fade-in--visible"),
                (t.classList.contains("slide-up") ||
                  t.classList.contains("slide-left") ||
                  t.classList.contains("slide-right") ||
                  t.classList.contains("zoom-in")) &&
                  t.classList.add("animate-in"),
                (t.className.includes("animate-fade-in-up") ||
                  t.className.includes("animate-fade-in-down") ||
                  t.className.includes("animate-fade-in-left") ||
                  t.className.includes("animate-fade-in-right") ||
                  t.className.includes("animate-")) &&
                  t.classList.add("animate-in"),
                e("Animations: Анимация активирована для элемента", t),
                this.observer &&
                  setTimeout(function () {
                    n.observer.unobserve(t);
                  }, 1e3));
            },
          },
        ]) && d(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t, n;
    })();
    function v(t) {
      return (
        (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        v(t)
      );
    }
    function p(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, h(o.key), o);
      }
    }
    function h(t) {
      var e = (function (t) {
        if ("object" != v(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != v(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == v(e) ? e : e + "";
    }
    var b = (function () {
      return (
        (t = function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.portfolio = document.querySelector(".portfolio")),
            this.portfolio && this.init();
        }),
        (n = [
          {
            key: "init",
            value: function () {
              e("Portfolio: Инициализация портфолио");
            },
          },
        ]) && p(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t, n;
    })();
    function g(t) {
      return (
        (g =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        g(t)
      );
    }
    function w(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, S(o.key), o);
      }
    }
    function S(t) {
      var e = (function (t) {
        if ("object" != g(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != g(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == g(e) ? e : e + "";
    }
    var k = (function () {
      return (
        (t = function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.forms = document.querySelectorAll("form")),
            this.forms.length > 0 && this.init();
        }),
        (n = [
          {
            key: "init",
            value: function () {
              e("Forms: Инициализация форм");
            },
          },
        ]) && w(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t, n;
    })();
    function E(t) {
      return (
        (E =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        E(t)
      );
    }
    function L(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, _(o.key), o);
      }
    }
    function _(t) {
      var e = (function (t) {
        if ("object" != E(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != E(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == E(e) ? e : e + "";
    }
    var A = (function () {
      return (
        (t = function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            this.init();
        }),
        (n = [
          {
            key: "init",
            value: function () {
              e("Performance: Инициализация модуля производительности"),
                this.setupLazyLoading(),
                this.preloadCriticalImages();
            },
          },
          {
            key: "setupLazyLoading",
            value: function () {
              var t = document.querySelectorAll("img[data-src]");
              if (t.length > 0) {
                var e = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    if (t.isIntersecting) {
                      var n = t.target;
                      (n.src = n.dataset.src),
                        n.classList.remove("lazy"),
                        e.unobserve(n);
                    }
                  });
                });
                t.forEach(function (t) {
                  return e.observe(t);
                });
              }
            },
          },
          {
            key: "preloadCriticalImages",
            value: function () {
              document
                .querySelectorAll('img[data-priority="high"]')
                .forEach(function (t) {
                  var e = document.createElement("link");
                  (e.rel = "preload"),
                    (e.as = "image"),
                    (e.href = t.src || t.dataset.src),
                    document.head.appendChild(e);
                });
            },
          },
        ]) && L(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t, n;
    })();
    function j(t) {
      return (
        (j =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        j(t)
      );
    }
    function P(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, x(o.key), o);
      }
    }
    function O(t, e, n) {
      return (
        e && P(t.prototype, e),
        n && P(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function x(t) {
      var e = (function (t) {
        if ("object" != j(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != j(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == j(e) ? e : e + "";
    }
    var T = O(function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          e("PhotoViewer: Инициализация");
      }),
      I = n(110);
    function q(t) {
      return (
        (q =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        q(t)
      );
    }
    function M(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, D(o.key), o);
      }
    }
    function C(t, e, n) {
      return (
        e && M(t.prototype, e),
        n && M(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function D(t) {
      var e = (function (t) {
        if ("object" != q(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != q(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == q(e) ? e : e + "";
    }
    var F = C(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        e("Components: Инициализация");
    });
    function N(t) {
      return (
        (N =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        N(t)
      );
    }
    function Q(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, B(o.key), o);
      }
    }
    function G(t, e, n) {
      return (
        e && Q(t.prototype, e),
        n && Q(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function B(t) {
      var e = (function (t) {
        if ("object" != N(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != N(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == N(e) ? e : e + "";
    }
    var z = G(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        e("PortfolioFilter: Инициализация");
    });
    function Y(t) {
      return (
        (Y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        Y(t)
      );
    }
    function H(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, X(o.key), o);
      }
    }
    function V(t, e, n) {
      return (
        e && H(t.prototype, e),
        n && H(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function X(t) {
      var e = (function (t) {
        if ("object" != Y(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != Y(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == Y(e) ? e : e + "";
    }
    var R = V(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        e("ModernLightbox: Инициализация");
    });
    function Z(t) {
      return (
        (Z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        Z(t)
      );
    }
    function K(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, W(o.key), o);
      }
    }
    function U(t, e, n) {
      return (
        e && K(t.prototype, e),
        n && K(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function W(t) {
      var e = (function (t) {
        if ("object" != Z(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != Z(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == Z(e) ? e : e + "";
    }
    var $ = U(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        e("PortfolioIntegration: Инициализация");
    });
    function J(t) {
      return (
        (J =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        J(t)
      );
    }
    function tt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, nt(o.key), o);
      }
    }
    function et(t, e, n) {
      return (
        e && tt(t.prototype, e),
        n && tt(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function nt(t) {
      var e = (function (t) {
        if ("object" != J(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != J(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == J(e) ? e : e + "";
    }
    var ot = et(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        e("ScrollAnimations: Инициализация");
    });
    function rt(t) {
      return (
        (rt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        rt(t)
      );
    }
    function it(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, ct(o.key), o);
      }
    }
    function at(t, e, n) {
      return (
        e && it(t.prototype, e),
        n && it(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function ct(t) {
      var e = (function (t) {
        if ("object" != rt(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != rt(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == rt(e) ? e : e + "";
    }
    var lt = at(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        e("EnhancedForms: Инициализация");
    });
    function st(t) {
      return (
        (st =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        st(t)
      );
    }
    function ut(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, dt(o.key), o);
      }
    }
    function ft(t, e, n) {
      return (
        e && ut(t.prototype, e),
        n && ut(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function dt(t) {
      var e = (function (t) {
        if ("object" != st(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != st(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == st(e) ? e : e + "";
    }
    var yt = ft(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        e("ProgressiveImageLoading: Инициализация");
    });
    function mt(t) {
      return (
        (mt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        mt(t)
      );
    }
    function vt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, pt(o.key), o);
      }
    }
    function pt(t) {
      var e = (function (t) {
        if ("object" != mt(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != mt(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == mt(e) ? e : e + "";
    }
    var ht = (function () {
      return (
        (t = function t() {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            e("FAQAccordion: Начало инициализации"),
            setTimeout(function () {
              (n.faqItems = document.querySelectorAll(".faq-item")),
                e(
                  "FAQAccordion: Найдено ".concat(
                    n.faqItems.length,
                    " FAQ элементов"
                  )
                ),
                0 === n.faqItems.length
                  ? (e(
                      "FAQAccordion: FAQ элементы не найдены, повторная попытка через 1 секунду"
                    ),
                    setTimeout(function () {
                      (n.faqItems = document.querySelectorAll(".faq-item")),
                        e(
                          "FAQAccordion: Повторная попытка - найдено ".concat(
                            n.faqItems.length,
                            " FAQ элементов"
                          )
                        ),
                        n.init();
                    }, 1e3))
                  : n.init();
            }, 100);
        }),
        (n = [
          {
            key: "init",
            value: function () {
              0 !== this.faqItems.length
                ? (this.bindEvents(),
                  e(
                    "FAQAccordion: Инициализировано ".concat(
                      this.faqItems.length,
                      " FAQ элементов"
                    )
                  ),
                  (window.faqDebug = this))
                : e("FAQAccordion: FAQ элементы не найдены");
            },
          },
          {
            key: "bindEvents",
            value: function () {
              var t = this;
              this.faqItems.forEach(function (n, o) {
                var r = n.querySelector(".faq-item__trigger");
                if (r) {
                  e("FAQAccordion: Привязка событий для элемента ".concat(o)),
                    r.addEventListener("click", function (r) {
                      r.preventDefault(),
                        r.stopPropagation(),
                        e("FAQAccordion: Клик по элементу ".concat(o)),
                        t.toggleItem(n);
                    }),
                    r.addEventListener("keydown", function (e) {
                      return t.handleKeydown(e, n);
                    }),
                    r.setAttribute("aria-expanded", "false"),
                    r.setAttribute("aria-controls", "faq-content-".concat(o));
                  var i = n.querySelector(".faq-item__content");
                  i
                    ? (i.setAttribute("id", "faq-content-".concat(o)),
                      i.setAttribute("aria-hidden", "true"),
                      (i.style.maxHeight = "0px"),
                      e("FAQAccordion: Контент найден для элемента ".concat(o)))
                    : e(
                        "FAQAccordion: Контент НЕ найден для элемента ".concat(
                          o
                        )
                      );
                } else e("FAQAccordion: Триггер НЕ найден для элемента ".concat(o));
              });
            },
          },
          {
            key: "toggleItem",
            value: function (t) {
              var n = this;
              if (t) {
                t.querySelector(".faq-item__trigger"),
                  t.querySelector(".faq-item__content");
                var o = t.classList.contains("active");
                e(
                  "FAQAccordion: toggleItem - элемент ".concat(
                    o ? "активен" : "неактивен"
                  )
                ),
                  o
                    ? this.closeItem(t)
                    : (this.faqItems.forEach(function (e) {
                        e !== t &&
                          e.classList.contains("active") &&
                          n.closeItem(e);
                      }),
                      this.openItem(t));
              } else e("FAQAccordion: Элемент не передан в toggleItem");
            },
          },
          {
            key: "openItem",
            value: function (t) {
              var n = t.querySelector(".faq-item__trigger"),
                o = t.querySelector(".faq-item__content");
              if (o) {
                if (
                  (t.classList.add("active"),
                  n && n.setAttribute("aria-expanded", "true"),
                  o)
                ) {
                  o.setAttribute("aria-hidden", "false");
                  var r = o.scrollHeight;
                  (o.style.maxHeight = r + "px"),
                    e("FAQAccordion: Элемент открыт, высота: ".concat(r, "px"));
                }
              } else e("FAQAccordion: Контент не найден для открытия");
            },
          },
          {
            key: "closeItem",
            value: function (t) {
              var n = t.querySelector(".faq-item__trigger"),
                o = t.querySelector(".faq-item__content");
              o
                ? (t.classList.remove("active"),
                  n && n.setAttribute("aria-expanded", "false"),
                  o &&
                    (o.setAttribute("aria-hidden", "true"),
                    (o.style.maxHeight = "0px"),
                    e("FAQAccordion: Элемент закрыт")))
                : e("FAQAccordion: Контент не найден для закрытия");
            },
          },
          {
            key: "handleKeydown",
            value: function (t, e) {
              ("Enter" !== t.key && " " !== t.key) ||
                (t.preventDefault(), this.toggleItem(e));
            },
          },
          {
            key: "toggleItemByIndex",
            value: function (t) {
              this.faqItems[t] && this.toggleItem(this.faqItems[t]);
            },
          },
          {
            key: "closeAll",
            value: function () {
              var t = this;
              this.faqItems.forEach(function (e) {
                e.classList.contains("active") && t.closeItem(e);
              });
            },
          },
          {
            key: "debugState",
            value: function () {
              console.log("FAQ Debug State:"),
                this.faqItems.forEach(function (t, e) {
                  var n = t.querySelector(".faq-item__trigger"),
                    o = t.querySelector(".faq-item__content"),
                    r = t.classList.contains("active");
                  console.log("FAQ Item ".concat(e, ":"), {
                    isActive: r,
                    triggerExists: !!n,
                    contentExists: !!o,
                    contentMaxHeight: o ? o.style.maxHeight : "none",
                    ariaExpanded: n ? n.getAttribute("aria-expanded") : "none",
                  });
                });
            },
          },
        ]),
        n && vt(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t, n;
    })();
    function bt(t) {
      return (
        (bt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        bt(t)
      );
    }
    function gt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, St(o.key), o);
      }
    }
    function wt(t, e, n) {
      return (
        e && gt(t.prototype, e),
        n && gt(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function St(t) {
      var e = (function (t) {
        if ("object" != bt(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != bt(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == bt(e) ? e : e + "";
    }
    var kt = wt(function t() {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        e("TestimonialSlider: Инициализация");
    });
    function Et(t) {
      return (
        (Et =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        Et(t)
      );
    }
    function Lt(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    function _t() {
      var t,
        e,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        r = n.toStringTag || "@@toStringTag";
      function i(n, o, r, i) {
        var l = o && o.prototype instanceof c ? o : c,
          s = Object.create(l.prototype);
        return (
          At(
            s,
            "_invoke",
            (function (n, o, r) {
              var i,
                c,
                l,
                s = 0,
                u = r || [],
                f = !1,
                d = {
                  p: 0,
                  n: 0,
                  v: t,
                  a: y,
                  f: y.bind(t, 4),
                  d: function (e, n) {
                    return (i = e), (c = 0), (l = t), (d.n = n), a;
                  },
                };
              function y(n, o) {
                for (c = n, l = o, e = 0; !f && s && !r && e < u.length; e++) {
                  var r,
                    i = u[e],
                    y = d.p,
                    m = i[2];
                  n > 3
                    ? (r = m === o) &&
                      ((l = i[(c = i[4]) ? 5 : ((c = 3), 3)]),
                      (i[4] = i[5] = t))
                    : i[0] <= y &&
                      ((r = n < 2 && y < i[1])
                        ? ((c = 0), (d.v = o), (d.n = i[1]))
                        : y < m &&
                          (r = n < 3 || i[0] > o || o > m) &&
                          ((i[4] = n), (i[5] = o), (d.n = m), (c = 0)));
                }
                if (r || n > 1) return a;
                throw ((f = !0), o);
              }
              return function (r, u, m) {
                if (s > 1) throw TypeError("Generator is already running");
                for (
                  f && 1 === u && y(u, m), c = u, l = m;
                  (e = c < 2 ? t : l) || !f;

                ) {
                  i ||
                    (c
                      ? c < 3
                        ? (c > 1 && (d.n = -1), y(c, l))
                        : (d.n = l)
                      : (d.v = l));
                  try {
                    if (((s = 2), i)) {
                      if ((c || (r = "next"), (e = i[r]))) {
                        if (!(e = e.call(i, l)))
                          throw TypeError("iterator result is not an object");
                        if (!e.done) return e;
                        (l = e.value), c < 2 && (c = 0);
                      } else
                        1 === c && (e = i.return) && e.call(i),
                          c < 2 &&
                            ((l = TypeError(
                              "The iterator does not provide a '" +
                                r +
                                "' method"
                            )),
                            (c = 1));
                      i = t;
                    } else if ((e = (f = d.n < 0) ? l : n.call(o, d)) !== a)
                      break;
                  } catch (e) {
                    (i = t), (c = 1), (l = e);
                  } finally {
                    s = 1;
                  }
                }
                return { value: e, done: f };
              };
            })(n, r, i),
            !0
          ),
          s
        );
      }
      var a = {};
      function c() {}
      function l() {}
      function s() {}
      e = Object.getPrototypeOf;
      var u = [][o]
          ? e(e([][o]()))
          : (At((e = {}), o, function () {
              return this;
            }),
            e),
        f = (s.prototype = c.prototype = Object.create(u));
      function d(t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, s)
            : ((t.__proto__ = s), At(t, r, "GeneratorFunction")),
          (t.prototype = Object.create(f)),
          t
        );
      }
      return (
        (l.prototype = s),
        At(f, "constructor", s),
        At(s, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        At(s, r, "GeneratorFunction"),
        At(f),
        At(f, r, "Generator"),
        At(f, o, function () {
          return this;
        }),
        At(f, "toString", function () {
          return "[object Generator]";
        }),
        (_t = function () {
          return { w: i, m: d };
        })()
      );
    }
    function At(t, e, n, o) {
      var r = Object.defineProperty;
      try {
        r({}, "", {});
      } catch (t) {
        r = 0;
      }
      (At = function (t, e, n, o) {
        if (e)
          r
            ? r(t, e, {
                value: n,
                enumerable: !o,
                configurable: !o,
                writable: !o,
              })
            : (t[e] = n);
        else {
          var i = function (e, n) {
            At(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          };
          i("next", 0), i("throw", 1), i("return", 2);
        }
      }),
        At(t, e, n, o);
    }
    function jt(t, e, n, o, r, i, a) {
      try {
        var c = t[i](a),
          l = c.value;
      } catch (t) {
        return void n(t);
      }
      c.done ? e(l) : Promise.resolve(l).then(o, r);
    }
    function Pt(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (o, r) {
          var i = t.apply(e, n);
          function a(t) {
            jt(i, o, r, a, c, "next", t);
          }
          function c(t) {
            jt(i, o, r, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function Ot(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function xt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, It(o.key), o);
      }
    }
    function Tt(t, e, n) {
      return (
        e && xt(t.prototype, e),
        n && xt(t, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function It(t) {
      var e = (function (t) {
        if ("object" != Et(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var n = e.call(t, "string");
          if ("object" != Et(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" == Et(e) ? e : e + "";
    }
    var qt = (function () {
        return Tt(
          function t() {
            Ot(this, t),
              (this.modules = {}),
              (this.isInitialized = !1),
              e("App: Создание экземпляра приложения"),
              this.init();
          },
          [
            {
              key: "init",
              value:
                ((n = Pt(
                  _t().m(function t() {
                    var e = this;
                    return _t().w(
                      function (t) {
                        for (;;)
                          switch (t.n) {
                            case 0:
                              if ("loading" !== document.readyState) {
                                t.n = 1;
                                break;
                              }
                              document.addEventListener(
                                "DOMContentLoaded",
                                function () {
                                  e.loadTemplatesAndInit();
                                }
                              ),
                                (t.n = 2);
                              break;
                            case 1:
                              return (t.n = 2), this.loadTemplatesAndInit();
                            case 2:
                              return t.a(2);
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "loadTemplatesAndInit",
              value:
                ((t = Pt(
                  _t().m(function t() {
                    return _t().w(
                      function (t) {
                        for (;;)
                          switch (t.n) {
                            case 0:
                              try {
                                this.initModules();
                              } catch (t) {
                                console.error("Ошибка при инициализации:", t);
                              }
                            case 1:
                              return t.a(2);
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "initModules",
              value: function () {
                var t = this;
                try {
                  [
                    {
                      name: "performance",
                      Class: A,
                      description: "Оптимизация производительности",
                    },
                    {
                      name: "analytics",
                      Class: I.Analytics,
                      description: "Аналитика",
                    },
                    { name: "navigation", Class: u, description: "Навигация" },
                    {
                      name: "progressiveImageLoading",
                      Class: yt,
                      description: "Прогрессивная загрузка изображений",
                    },
                    {
                      name: "components",
                      Class: F,
                      description: "Улучшения компонентов",
                    },
                    { name: "animations", Class: m, description: "Анимации" },
                    {
                      name: "scrollAnimations",
                      Class: ot,
                      description: "Анимации прокрутки",
                    },
                    { name: "slider", Class: a, description: "Слайдер" },
                    { name: "portfolio", Class: b, description: "Портфолио" },
                    {
                      name: "portfolioFilter",
                      Class: z,
                      description: "Фильтрация портфолио",
                    },
                    {
                      name: "modernLightbox",
                      Class: R,
                      description: "Современный лайтбокс",
                    },
                    {
                      name: "photoViewer",
                      Class: T,
                      description: "Просмотр фотографий",
                    },
                    {
                      name: "portfolioIntegration",
                      Class: $,
                      description: "Интеграция портфолио",
                    },
                    { name: "forms", Class: k, description: "Формы" },
                    {
                      name: "enhancedForms",
                      Class: lt,
                      description: "Расширенные формы",
                    },
                    {
                      name: "faqAccordion",
                      Class: ht,
                      description: "FAQ аккордеон",
                    },
                    {
                      name: "testimonialSlider",
                      Class: kt,
                      description: "Слайдер отзывов",
                    },
                  ].forEach(function (n) {
                    var o = n.name,
                      r = n.Class,
                      i = n.description;
                    try {
                      (t.modules[o] = new r()),
                        e("✓ ".concat(i, " инициализирован"));
                    } catch (t) {
                      console.error(
                        "❌ Ошибка инициализации ".concat(i, ":"),
                        t
                      );
                    }
                  }),
                    (this.isInitialized = !0),
                    console.log("🚀 Приложение полностью загружено"),
                    this.modules.performance &&
                      this.modules.performance.measurePerformance(),
                    this.modules.analytics &&
                      this.modules.analytics.trackEvent(
                        "app",
                        "initialized",
                        "success"
                      );
                } catch (t) {
                  console.error("❌ Критическая ошибка при инициализации:", t),
                    this.modules.analytics &&
                      this.modules.analytics.trackEvent(
                        "app",
                        "initialization_error",
                        t.message
                      );
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                Object.entries(this.modules).forEach(function (t) {
                  var n,
                    o,
                    r =
                      ((o = 2),
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })((n = t)) ||
                        (function (t, e) {
                          var n =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != n) {
                            var o,
                              r,
                              i,
                              a,
                              c = [],
                              l = !0,
                              s = !1;
                            try {
                              if (((i = (n = n.call(t)).next), 0 === e)) {
                                if (Object(n) !== n) return;
                                l = !1;
                              } else
                                for (
                                  ;
                                  !(l = (o = i.call(n)).done) &&
                                  (c.push(o.value), c.length !== e);
                                  l = !0
                                );
                            } catch (t) {
                              (s = !0), (r = t);
                            } finally {
                              try {
                                if (
                                  !l &&
                                  null != n.return &&
                                  ((a = n.return()), Object(a) !== a)
                                )
                                  return;
                              } finally {
                                if (s) throw r;
                              }
                            }
                            return c;
                          }
                        })(n, o) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return Lt(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return (
                              "Object" === n &&
                                t.constructor &&
                                (n = t.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(t)
                                : "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                ? Lt(t, e)
                                : void 0
                            );
                          }
                        })(n, o) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()),
                    i = r[0],
                    a = r[1];
                  if (a && "function" == typeof a.destroy)
                    try {
                      a.destroy(), e("App: Модуль ".concat(i, " уничтожен"));
                    } catch (t) {
                      console.error(
                        "Ошибка при уничтожении модуля ".concat(i, ":"),
                        t
                      );
                    }
                }),
                  (this.modules = {}),
                  (this.isInitialized = !1),
                  console.log("🔄 Приложение остановлено");
              },
            },
            {
              key: "restart",
              value: function () {
                var t = this;
                e("App: Перезапуск приложения"),
                  this.destroy(),
                  setTimeout(function () {
                    t.init();
                  }, 100);
              },
            },
          ]
        );
        var t, n;
      })(),
      Mt = (function () {
        return Tt(
          function t() {
            Ot(this, t), (this.currentLightbox = null), this.init();
          },
          [
            {
              key: "init",
              value: function () {
                var t = this;
                this.setupPhotoLightbox(),
                  document.addEventListener("keydown", function (e) {
                    "Escape" === e.key && t.closeLightbox();
                  });
              },
            },
            {
              key: "setupPhotoLightbox",
              value: function () {
                var t = this,
                  e = document.querySelector(
                    ".about-home__photo-wrapper.photo-lightbox"
                  );
                e &&
                  e.addEventListener("click", function (e) {
                    e.preventDefault(), t.openLightbox();
                  });
              },
            },
            {
              key: "openLightbox",
              value: function () {
                var t = this,
                  e = document.querySelector(".about-home__image");
                if (e) {
                  var n = document.createElement("div");
                  (n.className = "lightbox-overlay"),
                    (n.innerHTML =
                      '\n      <div class="lightbox-content">\n        <div class="lightbox-loader">\n          <div class="loader-spinner"></div>\n        </div>\n        <img src="'
                        .concat(e.src, '" alt="')
                        .concat(
                          e.alt,
                          '" class="lightbox-image" style="display: none;">\n        <button class="lightbox-close" aria-label="Закрыть">\n          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n            <line x1="18" y1="6" x2="6" y2="18"></line>\n            <line x1="6" y1="6" x2="18" y2="18"></line>\n          </svg>\n        </button>\n        <div class="lightbox-hint">\n          <span>Колёсико мыши — масштаб • Двойной клик — сброс</span>\n        </div>\n      </div>\n    '
                        )),
                    document.body.appendChild(n),
                    (document.body.style.overflow = "hidden"),
                    requestAnimationFrame(function () {
                      n.classList.add("active");
                    });
                  var o = n.querySelector(".lightbox-close"),
                    r = n.querySelector(".lightbox-image"),
                    i = n.querySelector(".lightbox-loader");
                  o.addEventListener("click", function () {
                    return t.closeLightbox();
                  }),
                    n.addEventListener("click", function (e) {
                      e.target === n && t.closeLightbox();
                    }),
                    (r.onload = function () {
                      (i.style.display = "none"),
                        (r.style.display = "block"),
                        setTimeout(function () {
                          n.classList.add("show-hint");
                        }, 500);
                    }),
                    this.setupTouchGestures(n),
                    this.setupImageZoom(r),
                    (this.currentLightbox = n);
                }
              },
            },
            {
              key: "closeLightbox",
              value: function () {
                var t = this,
                  e =
                    this.currentLightbox ||
                    document.querySelector(".lightbox-overlay");
                if (e) {
                  var n = e.querySelector(".lightbox-image");
                  n && ((n.style.transform = ""), (n.style.transition = "")),
                    (e.style.background = ""),
                    (e.style.opacity = ""),
                    e.classList.remove("active"),
                    (document.body.style.overflow = ""),
                    setTimeout(function () {
                      e.parentNode && e.parentNode.removeChild(e),
                        (t.currentLightbox = null);
                    }, 300);
                }
              },
            },
            {
              key: "setupTouchGestures",
              value: function (t) {
                var e = this,
                  n = 0,
                  o = 0,
                  r = !1,
                  i = null,
                  a = "",
                  c = t.querySelector(".lightbox-image");
                t.addEventListener(
                  "touchstart",
                  function (t) {
                    1 === t.touches.length &&
                      ((n = t.touches[0].clientY),
                      (o = t.touches[0].clientX),
                      (r = !0),
                      (i = t.target),
                      (a = c.style.transform || ""));
                  },
                  { passive: !0 }
                ),
                  t.addEventListener(
                    "touchmove",
                    function (e) {
                      if (r && 1 === e.touches.length) {
                        var i = e.touches[0].clientY,
                          l = e.touches[0].clientX,
                          s = i - n,
                          u = l - o;
                        if (Math.abs(s) > Math.abs(u) && Math.abs(s) > 30) {
                          e.preventDefault();
                          var f = Math.max(0.3, 1 - Math.abs(s) / 300);
                          t.style.background = "rgba(0, 0, 0, ".concat(
                            0.9 * f,
                            ")"
                          );
                          var d = Math.max(0.7, 1 - Math.abs(s) / 800),
                            y = 0.8 * s;
                          (c.style.transform = ""
                            .concat(a, " translateY(")
                            .concat(y, "px) scale(")
                            .concat(d, ")")),
                            (c.style.transition = "none");
                        }
                      }
                    },
                    { passive: !1 }
                  ),
                  t.addEventListener(
                    "touchend",
                    function (l) {
                      if (r) {
                        r = !1;
                        var s = l.changedTouches[0].clientY,
                          u = l.changedTouches[0].clientX,
                          f = s - n,
                          d = u - o;
                        (c.style.transition = "transform 0.3s ease"),
                          Math.abs(f) > 120 && Math.abs(f) > Math.abs(d)
                            ? e.closeLightbox()
                            : Math.abs(f) < 30 && Math.abs(d) < 30
                            ? (i === t || i === c) && e.closeLightbox()
                            : ((t.style.background = ""),
                              (c.style.transform = a));
                      }
                    },
                    { passive: !0 }
                  ),
                  t.addEventListener(
                    "touchcancel",
                    function () {
                      r &&
                        ((r = !1),
                        (t.style.background = ""),
                        (c.style.transform = a),
                        (c.style.transition = "transform 0.3s ease"));
                    },
                    { passive: !0 }
                  );
              },
            },
            {
              key: "setupImageZoom",
              value: function (t) {
                var e = 1,
                  n = !1,
                  o = 0,
                  r = 0,
                  i = 0,
                  a = 0,
                  c = function () {
                    t.style.transform =
                      1 === e && 0 === i && 0 === a
                        ? ""
                        : "scale("
                            .concat(e, ") translate(")
                            .concat(i, "px, ")
                            .concat(a, "px)");
                  };
                t.addEventListener("wheel", function (t) {
                  t.preventDefault();
                  var n = t.deltaY > 0 ? -0.1 : 0.1;
                  1 === (e = Math.max(1, Math.min(3, e + n))) &&
                    ((i = 0), (a = 0)),
                    c();
                }),
                  t.addEventListener("mousedown", function (c) {
                    e > 1 &&
                      ((n = !0),
                      (o = c.clientX - i),
                      (r = c.clientY - a),
                      (t.style.cursor = "grabbing"),
                      c.preventDefault());
                  }),
                  document.addEventListener("mousemove", function (t) {
                    n &&
                      e > 1 &&
                      ((i = t.clientX - o), (a = t.clientY - r), c());
                  }),
                  document.addEventListener("mouseup", function () {
                    n &&
                      ((n = !1), (t.style.cursor = e > 1 ? "grab" : "default"));
                  }),
                  t.addEventListener("dblclick", function () {
                    (e = 1),
                      (i = 0),
                      (a = 0),
                      c(),
                      (t.style.cursor = "default");
                  }),
                  this.setupTouchZoom(t),
                  (t.style.cursor = "default");
              },
            },
            {
              key: "setupTouchZoom",
              value: function (t) {
                var e = this,
                  n = 0,
                  o = 1,
                  r = function () {
                    t.style.transform = 1 === o ? "" : "scale(".concat(o, ")");
                  };
                t.addEventListener("touchstart", function (t) {
                  2 === t.touches.length &&
                    (t.preventDefault(),
                    (n = e.getDistance(t.touches[0], t.touches[1])));
                }),
                  t.addEventListener("touchmove", function (t) {
                    if (2 === t.touches.length) {
                      t.preventDefault();
                      var i = e.getDistance(t.touches[0], t.touches[1]),
                        a = i / n;
                      (o = Math.max(1, Math.min(3, o * a))), r(), (n = i);
                    }
                  }),
                  t.addEventListener("touchend", function (t) {
                    t.touches.length < 2 && o <= 1.1 && ((o = 1), r());
                  });
              },
            },
            {
              key: "getDistance",
              value: function (t, e) {
                var n = t.clientX - e.clientX,
                  o = t.clientY - e.clientY;
                return Math.sqrt(n * n + o * o);
              },
            },
          ]
        );
      })(),
      Ct = new qt();
    new Mt(), (window.ChepinApp = Ct);
  })();
})();
//# sourceMappingURL=main.88370506f7d856bf83ac.js.map
