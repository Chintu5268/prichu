/*!
 * 
 *     MCAFEE RESTRICTED CONFIDENTIAL
 *     Copyright (c) 2022 McAfee, LLC
 *     
 *     The source code contained or described herein and all documents related
 *     to the source code ("Material") are owned by McAfee or its
 *     suppliers or licensors. Title to the Material remains with McAfee
 *     or its suppliers and licensors. The Material contains trade
 *     secrets and proprietary and confidential information of McAfee or its
 *     suppliers and licensors. The Material is protected by worldwide copyright
 *     and trade secret laws and treaty provisions. No part of the Material may
 *     be used, copied, reproduced, modified, published, uploaded, posted,
 *     transmitted, distributed, or disclosed in any way without McAfee's prior
 *     express written permission.
 *     
 *     No license under any patent, copyright, trade secret or other intellectual
 *     property right is granted to or conferred upon you by disclosure or
 *     delivery of the Materials, either expressly, by implication, inducement,
 *     estoppel or otherwise. Any license under such intellectual property rights
 *     must be expressed and approved by McAfee in writing.
 *     
 */
! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 77)
}([function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return i
    })), n.d(t, "b", (function() {
        return o
    })), n.d(t, "i", (function() {
        return s
    })), n.d(t, "d", (function() {
        return a
    })), n.d(t, "e", (function() {
        return c
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "g", (function() {
        return I
    })), n.d(t, "h", (function() {
        return O
    })), n.d(t, "a", (function() {
        return y
    }));
    var r = n(3);
    const i = {
            WHITELIST: "whitelist",
            PREFERENCE: "preference",
            STATISTICS: "statistics",
            ABOUT: "about"
        },
        o = {
            BLOCK_PAGE: "Block_Page",
            BROWSER_ACTION_CLICKED: "BrowserAction_Clicked",
            BROWSER_NAVIGATE: "Browser_Navigate",
            CRYPTOJACKING_BLOCK: "Cryptojacking_Block",
            DARK_WEB_SCAN: "DarkWebMonitoring",
            DOWNLOAD_BLOCK: "Download_Block",
            FIND_SIMILAR_PAGES: "SimilarPages",
            GET_SEARCH_EXTENSION: "EmbedSearchExtension",
            PROFILE_INFO: "ProfileInfo",
            REMOTE_ACCESS_TROJAN: "RemoteAccessTrojan",
            SEARCH_SUGGEST_BLOCK_PAGE: "SearchSuggest_BlockPage",
            SEARCH_SUGGEST: "SearchSuggest",
            SECURE_SEARCH_HIT: "Secure_Search_Hit",
            SIDEBAR_PANEL: "SideBar_Panel",
            SITE_REPORT: "SiteReport",
            SMA_REPUTATION: "SMA_Reputation",
            TOAST: "Toast",
            TYPOSQUATTING: "Typosquatting",
            WSS_ANALYTICS: "WSS_Analytics",
            APS: {
                EVENT_NAME: "AdvancedProtectionSignals",
                IMPRESSION_BALLOON: "IMPRESSION_BALLOON",
                IMPRESSION_HOVER: "IMPRESSION_HOVER",
                CLOSE_BALLOON: "CLOSE_BALLOON",
                TOAST_CLOSE: "TOAST_CLOSE",
                TOAST: "toast",
                BALLOON: "balloon"
            }
        },
        s = {
            REGULAR_TOAST: "RegularToast",
            EFFICACY_TOAST: "Efficacy_SS"
        },
        a = {
            BROWSER_ACTION_CLICKED: "BrowserActionClicked",
            TYPOSQUATTING: "Typosquatting",
            BLOCK_PAGE: "BlockPage",
            SECURE_SEARCH_HIT: "SecureSearchHit",
            CRYPTOJACKING_BLOCK: "CryptojackingBlock",
            SIDEBAR_PANEL: "SideBarPanel",
            SMA_REPUTATION: "SMAReputation",
            DOWNLOAD_BLOCK: "DownloadBlock"
        },
        c = {
            IMPRESSION: "Impression",
            WEBADVISOR: "WebAdvisor",
            CRYPTOJACKING: {
                LEARN_MORE_CLICKED: "LearnMoreClicked",
                WHITELISTED: "Whitelisted"
            },
            SIDEBAR_PANEL: {
                MAIN: "Main"
            },
            SELECTION: "Selection",
            DISMISSED: "Dismissed",
            HOVERED: "Hovered",
            CLOSE_CLICKED: "CloseClicked",
            CLICKED: "Clicked",
            ENABLE: "Enable",
            ADD: "Add",
            RAT_DETECTION: {
                ACKNOWLEDGED: "Acknowledged",
                WHITELISTED: "Whitelisted"
            },
            FIND_SIMILAR_PAGES: {
                LINK_CLICKED: "LinkNavigated"
            },
            ACCEPTED: "Accepted",
            DECLINED: "Declined",
            ACKNOWLEDGED: "Acknowledged",
            CLOSE: "Close",
            NEXT: "Next",
            GOT_IT: "GotIt",
            HOVER: "Hover"
        },
        l = {
            TOP: "Top",
            FRAME: "Frame",
            INLINE: "Inline"
        },
        u = "About",
        d = "Preferences",
        p = "Whitelist",
        f = "UserStatistics",
        h = "UNKNOWN",
        E = "Red",
        _ = "Yellow",
        m = "Green",
        T = "Yellow",
        g = "Red",
        S = "UNKNOWN",
        N = "Typosquatting",
        A = "Phishing",
        I = {
            DEFAULT: "DefaultSearch"
        },
        O = {
            ACTION: {
                CLICK: "click",
                KEYDOWN: "keydown",
                RETURN_KEY_CODE: 13,
                SHOW: "show",
                SEARCH_SUGGEST_KEY_CODES: [8, 32, 46, ...Object(r.g)(48, 57), ...Object(r.g)(65, 90), ...Object(r.g)(96, 107), ...Object(r.g)(109, 111), ...Object(r.g)(186, 192), ...Object(r.g)(219, 222)]
            },
            MISC: {
                LOADED: "Loaded",
                CHECKED: "checked",
                UNKNOWN: "UNKNOWN",
                ACTION_PANEL: "ActionPanel",
                ACCEPTED: "Accepted",
                DECLINED: "Declined",
                SETTINGS_TAB_PREFIX: "settings_tab_",
                GREEN: "GREEN",
                YELLOW: "YELLOW",
                RED: "RED",
                PREFERENCE: "Preference",
                DEFAULT: "default"
            },
            SEARCH_ENGINE: {
                GOOGLE: "google",
                YAHOO: "yahoo"
            },
            SOCIAL_MEDIA: {
                LINKEDIN: "linkedin",
                FACEBOOK: "facebook",
                YOUTUBE: "youtube",
                INSTAGRAM: "instagram",
                REDDIT: "reddit",
                TWITTER: "twitter"
            }
        };
    class y {
        static toColorTelemetry(e) {
            let t = h;
            switch (e) {
                case r.e.RED:
                    t = E;
                    break;
                case r.e.YELLOW:
                    t = _
            }
            return t
        }
        static toTelemetryBlockState(e) {
            let t = S;
            switch (e) {
                case r.a.GREEN:
                    t = m;
                    break;
                case r.a.YELLOW:
                    t = T;
                    break;
                case r.a.RED:
                    t = g;
                    break;
                case r.a.TYPOSQUATTING:
                    t = N;
                    break;
                case r.a.PHISHING:
                    t = A
            }
            return t
        }
        static toTelemetrySettingTab(e) {
            let t = d;
            switch (e) {
                case i.WHITELIST:
                    t = p;
                    break;
                case i.STATISTICS:
                    t = f;
                    break;
                case i.ABOUT:
                    t = u
            }
            return t
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "c", (function() {
        return i
    })), n.d(t, "g", (function() {
        return o
    })), n.d(t, "b", (function() {
        return s
    })), n.d(t, "h", (function() {
        return a
    })), n.d(t, "f", (function() {
        return c
    })), n.d(t, "d", (function() {
        return l
    })), n.d(t, "e", (function() {
        return u
    }));
    const r = {
            CACHE_STORE: "CACHE_STORE",
            CONTENT_HANDLER: "CONTENT_HANDLER",
            EXECUTE_COMMAND: "EXECUTE_COMMAND",
            FOCUS_OR_CREATE_TAB: "FOCUS_OR_CREATE_TAB",
            GET_BK_GLOBALS: "GET_BK_GLOBALS",
            GET_EXTENSION_STATUS: "GET_EXTENSION_STATUS",
            GET_TAB_DATA: "GET_TAB_DATA",
            GTI_REQUEST: "GTI_REQUEST",
            INSTALL_EXTENSION: "INSTALL_EXTENSION",
            LOGGER: "LOGGER",
            PLACEHOLDER_TEXT: "PLACEHOLDER_TEXT",
            REMOVE_TAB: "REMOVE_TAB",
            SEND_TELEMETRY: "SEND_TELEMETRY",
            SET_VIEWPORT: "SET_VIEWPORT",
            WHITELIST: "WHITELIST",
            RESET_NATIVE_SETTING: "RESET_NATIVE_SETTING",
            UPDATE_BK_NATIVE_SETTINGS: "UPDATE_BK_NATIVE_SETTINGS",
            PAGE_MID_SCROLL: "PAGE_MID_SCROLL",
            SHOW_SIDEBAR_MAIN: "SHOW_SIDEBAR_MAIN",
            GET_POPUP_DATA: "GET_POPUP_DATA",
            GET_SETTINGS_DATA: "GET_SETTINGS_DATA",
            RESET_SETTINGS: "RESET_SETTINGS",
            AUTO_RUN_VIDEO_SITE: "AUTO_RUN_VIDEO_SITE",
            GET_CLICK_EVENT_TIME: "GET_CLICK_EVENT_TIME",
            SAVE_CLICK_EVENT_TIME: "SAVE_CLICK_EVENT_TIME",
            GET_TYPOSQUATTING_DATA: "GET_TYPOSQUATTING_DATA",
            IS_FRAME_BLOCKED: "IS_FRAME_BLOCKED",
            IS_WHITELISTED: "IS_WHITELISTED",
            ANY_BLOCKED_IFRAMES: "ANY_BLOCKED_IFRAMES",
            ANY_BLOCKED_CRYPTOSCRIPTS: "ANY_BLOCKED_CRYPTOSCRIPTS",
            UNBLOCK_ALL_IFRAMES: "UNBLOCK_ALL_IFRAMES",
            VIEW_SITE_REPORT: "VIEW_SITE_REPORT",
            SEARCH_ANNOTATION: "SEARCH_ANNOTATION",
            UPDATE_ENGINE_STATS: "UPDATE_ENGINE_STATS",
            SOCIAL_MEDIA_ANNOTATION: "SOCIAL_MEDIA_ANNOTATION",
            UPDATE_RAT_DETECTION_SHOWING_FLAG: "UPDATE_RAT_DETECTION_SHOWING_FLAG",
            SEARCH_SUGGEST: "SEARCH_SUGGEST",
            GET_WEIGHTS: "GET_WEIGHTS",
            SAVE_FORM_INFO: "SAVE_FORM_INFO",
            GET_FORM_INFO_CACHE: "GET_FORM_INFO_CACHE",
            CLEAR_FORM_INFO_CACHE: "CLEAR_FORM_INFO_CACHE",
            SAVE_MULTISTEP_LOGIN: "SAVE_MULTISTEP_LOGIN",
            CLEAR_CACHED_DWS_INFO: "CLEAR_DWS_INFO",
            GET_CACHED_DWS_INFO: "GET_CACHED_DWS_INFO",
            UPDATE_DWS_WHITELIST: "UPDATE_DWS_WHITELIST",
            LAUNCH_IDPS_LOGIN: "LAUNCH_IDPS_LOGIN",
            UPDATE_DWS_SHOWN: "UPDATE_DWS_SHOWN",
            SAVE_FORM_INFO_FOR_WD: "SAVE_FORM_INFO_FOR_WD",
            GET_APS_DETAILS: "GET_APS_DETAILS",
            SIGN_UP_FORM_PRE_CHECK_PASSED: "SIGN_UP_FORM_PRE_CHECK_PASSED",
            SIGN_UP_FORM_DETECTED: "SIGN_UP_FORM_DETECTED",
            SET_FF_POLICY_COLLECTION: "SET_FF_POLICY_COLLECTION",
            SET_FF_POLICY_LAST_SHOWN: "SET_FF_POLICY_LAST_SHOWN"
        },
        i = {
            UNBLOCK_IFRAME: "UNBLOCK_IFRAME",
            BALLOON_MESSAGE: "BALLOON_MESSAGE",
            PAGE_OVERLAY: "PAGE_OVERLAY",
            SIDEBAR: "SIDEBAR",
            TOPBAR: "TOPBAR",
            PING_CONTENT_ANNOTATION: "PING_CONTENT_ANNOTATION",
            PING_CONTENT_RAT_DETECTION: "PING_CONTENT_RAT_DETECTION",
            PING_CONTENT_IFRAME_BANNER: "PING_CONTENT_IFRAME_BANNER",
            PING_CONTENT_AUTOPLAY_DETECTION: "PING_CONTENT_AUTOPLAY_DETECTION",
            PING_CONTENT_SIDEBAR_MAIN: "PING_CONTENT_SIDEBAR_MAIN",
            PING_CONTENT_FF_DL_OVERLAY: "PING_CONTENT_FF_DL_OVERLAY",
            PING_CONTENT_CRYPTO_BLOCK: "PING_CONTENT_CRYPTO_BLOCK",
            PING_CONTENT_FF_VIEWPORTS: "PING_CONTENT_FF_VIEWPORTS",
            PING_CONTENT_FSP: "PING_CONTENT_FSP",
            PING_CONTENT_IDPS: "PING_CONTENT_IDPS",
            PING_CONTENT_APS_TOAST: "PING_CONTENT_APS_TOAST",
            PING_CONTENT_APS_BALLOON: "PING_CONTENT_APS_BALLOON",
            PING_CONTENT_APS_OBSERVER: "PING_CONTENT_APS_OBSERVER",
            PING_CONTENT_SCROLL_MID_DETECTION: "PING_CONTENT_SCROLL_MID_DETECTION",
            PING_CONTENT_SITE_LISTENER: "PING_CONTENT_SITE_LISTENER",
            PING_IFRAME_FORM_CHECK: "PING_IFRAME_FORM_CHECK",
            PING_IFRAME_FORM_DETECTION: "PING_IFRAME_FORM_DETECTION",
            PING_IFRAME_BLOCK: "PING_IFRAME_BLOCK",
            APS_REGISTRATION_PAGE: "APS_REGISTRATION_PAGE",
            BROADCAST_TO_FOREGROUND: "BROADCAST_TO_FOREGROUND"
        },
        o = {
            MAIN: "MAIN",
            RELOAD: "RELOAD",
            SMA: "SMA",
            RAT_DETECTION: "RAT_DETECTION"
        },
        s = {
            ADVANCED_PROTECTION_SIGNAL: "ADVANCED_PROTECTION_SIGNAL",
            ADVANCED_PROTECTION_SIGNAL_TOAST: "ADVANCED_PROTECTION_SIGNAL_TOAST",
            DWS: "DWS",
            FIND_SIMILAR_PAGES: "FIND_SIMILAR_PAGES"
        },
        a = {
            CRYPTO_BLOCK: "CRYPTO_BLOCK",
            IFRAME_BLOCK: "IFRAME_BLOCK",
            TRIGGER_ALLOW: "TRIGGER_ALLOW"
        },
        c = {
            SEARCH_EXTENSION_OVERLAY: "SEARCH_EXTENSION_OVERLAY",
            FINISH_DOWNLOAD: "FINISH_DOWNLOAD"
        },
        l = {
            PING: 0,
            DISCONNECT_NATIVE: 1,
            SET_PROPERTY_EX: 2,
            SET_PROPERTY: 3,
            GET_PROPERTY: 4,
            CLEAR_GTI_CACHE: 5,
            RESET_CRYPTO: 6,
            CLEAN_TYPOSQUATING_WHITELIST: 7,
            CLEAR_TYPOSQUATING_CACHE: 8,
            CLEAN_CRYPTO_WHITELIST: 10,
            CLEAN_RAT_WHITELIST: 12,
            CLEAN_RAT_CACHE: 13,
            REPLACE_TRUSTED_DOMAIN: 15,
            VERIFY_GTI_REQUEST: 17,
            VERIFY_TYPOSQUAT_SERVER: 18,
            GET_ALL_WA_SETTINGS: 19,
            SET_STORAGE_PROPERTY: 20,
            GET_STORAGE_PROPERTY: 21,
            REINIT_SCHEDULED_TASKS: 22,
            OPEN_SETTINGS: 23,
            OPEN_ACTION_PANEL: 24,
            GET_MEMORY_FOOTPRINT: 26,
            ENDURANCE_TEST_RESET: 27,
            FORM_DETECTION_RESULT: 28,
            SHOW_UNUSED_SELECTORS: 29
        },
        u = {
            PONG: 0
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = chrome
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "c", (function() {
        return i
    })), n.d(t, "d", (function() {
        return o
    })), n.d(t, "e", (function() {
        return s
    })), n.d(t, "f", (function() {
        return a
    })), n.d(t, "b", (function() {
        return c
    })), n.d(t, "i", (function() {
        return l
    })), n.d(t, "j", (function() {
        return u
    })), n.d(t, "h", (function() {
        return d
    })), n.d(t, "g", (function() {
        return p
    }));
    const r = {
            GREEN: 0,
            YELLOW: 1,
            RED: 2,
            UNKNOWN: 3,
            HACKERSAFE: 4,
            TYPOSQUATTING: 5,
            PHISHING: 6,
            *[Symbol.iterator]() {
                for (const e of Object.keys(this)) "GREEN" !== e && "UNKNOWN" !== e && (yield this[e])
            }
        },
        i = {
            UNKNOWN: -1,
            FIREFOX: 1,
            CHROME: 2,
            EDGE: 3
        },
        o = {
            BROWSER_TYPE: 2,
            DEBUG_MODE: !1,
            EXTENSION_VERSION: "8.1.0.2161",
            LOG_LEVEL: 0,
            ENGINES_VERSION: "1.0.0.11",
            YEAR: 2022
        },
        s = {
            GREEN: 0,
            YELLOW: 1,
            RED: 2,
            UNKNOWN: 3,
            HACKERSAFE: 4,
            DISABLED: 5
        },
        a = {
            RAISE_NEW_TAB_EVENT: 3,
            UPDATE_CACHE_STATS: 4
        },
        c = {
            [s.GREEN]: "GREEN",
            [s.YELLOW]: "YELLOW",
            [s.RED]: "RED",
            [s.UNKNOWN]: "WHITE",
            [s.DISABLED]: "DISABLED"
        },
        l = {
            MINIMAL: 15,
            UNKNOWN: 30,
            MEDIUM: 50
        },
        u = e => {
            const t = {};
            return Object.keys(e).forEach(n => {
                t[e[n]] = n
            }), t
        },
        d = {
            CH: "https://chrome.google.com/webstore/detail/mcafee%C2%AE-secure-search/enppghjcblldgigemljohkgpcompnjgh",
            ED: "https://microsoftedge.microsoft.com/addons/detail/dbghilognjpbmkdcpjgodiieiflmlaeb"
        },
        p = (e, t) => Array.from(Array(t + 1).keys()).slice(e)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    var r = n(3),
        i = n(8),
        o = n(2),
        s = n(21);
    n(5), n(7);
    class a {
        static async toGTICategoriesString(e, t = !1) {
            const n = e => new Promise(t => {
                    s.a.getResString(e, e => t(e))
                }),
                r = async (e, t) => {
                    const r = {},
                        i = parseInt(e, 10);
                    if (isNaN(i)) return r;
                    const o = await n(`category_id_${i}_name`);
                    if (r.name = o, t) {
                        const e = await n(`category_id_${i}_description`);
                        r.description = e
                    }
                    return r
                }, i = [];
            for (const n of e) i.push(r(n, t));
            return await Promise.all(i)
        }
        static browserTypeToString(e = !1) {
            let t = "";
            switch (r.d.BROWSER_TYPE) {
                case 1:
                    t = "FF";
                    break;
                case 2:
                    t = "CH";
                    break;
                case 3:
                    t = "ED";
                    break;
                default:
                    t = "UN"
            }
            return e ? t.toLowerCase() : t
        }
        static toImagePaths(e) {
            let t = "images/browser_action/";
            switch (e.startsWith("small_") ? e : "small_" + e) {
                case "small_button_green.gif":
                    t += "green";
                    break;
                case "small_button_yellow.gif":
                    t += "yellow";
                    break;
                case "small_button_red.gif":
                    t += "red";
                    break;
                case "small_button_grey.gif":
                    t += "white";
                    break;
                case "small_button_disabled.gif":
                    t += "disabled";
                    break;
                default:
                    t += e
            }
            return {
                size16: t + "_16.png",
                size20: t + "_20.png",
                size32: t + "_32.png",
                size40: t + "_40.png"
            }
        }
        static colorToImagePaths(e) {
            let t = "white";
            switch (e) {
                case r.e.GREEN:
                    t = "green";
                    break;
                case r.e.YELLOW:
                    t = "yellow";
                    break;
                case r.e.RED:
                    t = "red";
                    break;
                case r.e.UNKNOWN:
                    t = "white";
                    break;
                case r.e.DISABLED:
                    t = "disabled"
            }
            return a.toImagePaths(t)
        }
        static toAnnotationImageClass(e) {
            let t = "";
            switch (a.toColor(e)) {
                case r.e.GREEN:
                    t = "OK";
                    break;
                case r.e.RED:
                    t = "WARN";
                    break;
                case r.e.YELLOW:
                    t = "INFO";
                    break;
                case r.e.UNKNOWN:
                    t = "UNKNOWN"
            }
            return t
        }
        static isPhishingURI(e) {
            return e && e.includes(i.b.PHISHING_CATEGORY)
        }
        static getIFrameBlockPageUrl() {
            return o.a.runtime.getURL("html/iframe_block_page.html")
        }
        static toBlockState(e) {
            const t = a.toColor(e);
            return t !== r.e.RED && t !== r.e.YELLOW || !a.isPhishingURI(e.cat) ? isNaN(t) ? r.a.UNKNOWN : t : r.a.PHISHING
        }
        static toColor(e) {
            let t = r.e.UNKNOWN;
            return void 0 === e || void 0 === e.rep || (t = e.rep < r.i.MINIMAL ? r.e.GREEN : e.rep < r.i.UNKNOWN ? r.e.UNKNOWN : e.rep < r.i.MEDIUM ? r.e.YELLOW : r.e.RED), t
        }
        static toSiteReportUrl(e) {
            return `${o.a.runtime.getURL("html/site_status_site_report.html")}?url=${escape(e)}`
        }
        static isExtensionUrl(e) {
            if (r.c.CHROME === r.d.BROWSER_TYPE && e.startsWith("chrome-extension://" + o.a.runtime.id) || r.c.EDGE === r.d.BROWSER_TYPE && e.startsWith("ms-browser-extension://" + o.a.runtime.id)) return !0;
            if (r.c.FIREFOX === r.d.BROWSER_TYPE) {
                let t = o.a.i18n.getMessage("@@extension_id");
                if (!t) {
                    const e = o.a.runtime.getURL("images/web_advisor/logo.png").split("/");
                    t = e.length >= 3 ? e[2] : ""
                }
                return t && e.startsWith("moz-extension://" + t)
            }
            return !1
        }
        static isSafeUrl(e) {
            return a.isSiteAdvisorUrl(e) || a.isExtensionUrl(e)
        }
        static isSiteAdvisorUrl(e) {
            return e.startsWith("http://" + i.b.SITE_ADVISOR_URL) || e.startsWith("https://" + i.b.SITE_ADVISOR_URL)
        }
        static isPropertRedirectUrl(e) {
            return a.isPropertyWebURL(e) || e.startsWith("edge://") || e.startsWith("chrome://")
        }
        static isProperWebURL(e) {
            return !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("ftp://"))
        }
        static getUINumber(e) {
            if (e >= 1e4) return "10k+";
            if (e >= 1e3) {
                let t = (e / 1e3).toFixed(1);
                return t = "0" === t.substring(2, 3) ? t.substring(0, 1) : t, t + "k+"
            }
            return "" + e
        }
        static hasEpochTimeElapsed(e, t) {
            return (new Date).getTime() / 1e3 > e + t
        }
        static isPersonalPolicyEnabled() {
            return !0
        }
        static isActivityPolicyEnabled() {
            return !0
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    class r {
        constructor() {
            this.tabData = new Map
        }
        static getResetValues() {
            return {
                blockedIframes: [],
                cryptoBlockData: null,
                tabDomainTrusted: !1
            }
        }
        static getDefaultValues() {
            return r.getResetValues()
        }
        reset(e) {
            this.update(e, r.getResetValues())
        }
        get(e) {
            return this.tabData.get(e) || r.getDefaultValues()
        }
        set(e, t) {
            this.tabData.set(e, t)
        }
        delete(e) {
            this.tabData.delete(e)
        }
        update(e, t) {
            const n = this.get(e);
            this.set(e, {
                ...n,
                ...t
            })
        }
        setTabBlockPageData(e, t) {
            const n = this.get(e);
            this.set(e, {
                ...n,
                blockPageData: t
            })
        }
        addBlockedFrame(e, t) {
            this.get(e).blockedIframes.push(t)
        }
        getBlockedFrames(e) {
            return this.get(e).blockedIframes
        }
        resetBlockedFrames(e) {
            this.get(e).blockedIframes = []
        }
    }
    var i = n(3),
        o = n(8),
        s = n(15);
    const a = {
        isTrustCheckRequired: !0,
        ExtensionTelemetryUrl: null,
        scheduleManager: null,
        schedules: null,
        isNativeConnected: !0,
        telemetryEngine: null,
        postInstallationPage: "https://www.mcafee.com/consumer/v/wa-how.html",
        listenerManager: null,
        firefoxInternalUUID: "",
        shadowMode: "closed",
        browserType: i.d.BROWSER_TYPE,
        cacheStore: null,
        ffViewports: null,
        garbageCollector: null,
        gtiCache: null,
        typoCache: null,
        logger: null,
        messageDispatcher: null,
        port: null,
        tabData: new r,
        tabIdToLastClickTime: new Map,
        useNativeLogger: !1,
        wasm: null,
        userAgentInBase64: null,
        gtiServer: o.b.GTI_SERVER,
        typoSquattingServer: o.b.TYPOSQUATTING_SERVER,
        tldParser: null,
        cryptoBlacklist: o.c,
        trustedDomains: o.e,
        nativeSettings: s.b,
        searchSuggest: null,
        ratBlacklist: o.d,
        wssMessageDispatcher: null,
        isWssConnected: null,
        wssNativeClient: null,
        WSS_INSTALLED: null,
        searchEngines: null,
        enginesVersionUrl: o.b.ENGINE_VERSION_URL,
        engineCheckInterval: 864e5,
        ENGINES_VERSION: i.d.ENGINES_VERSION,
        AUTO_PLAY_NOTIFICATION_ENABLED: !1,
        ALLOW_LOCALHOST: !1,
        IDPS_AUTH_URL: "https://csptoken.ccs.mcafee.com/auth/token",
        IDPS_BREACH_COUNT_URL: "https://identity.unifiedapis.mcafee.com/breach/v1/BreachCount",
        IDPS_CSP_CLIENT_ID: null,
        IDPS_IS_ENTITLED: !1,
        IDPS_PROVISION_ID: null,
        IDPS_LOGIN_DOMAIN: "https://protection.mcafee.com",
        UA_CLIENT: null,
        TYPOSQUATTING_MAX_CACHE: 100,
        TYPOSQUATTING_EXPIRY: 2592e6,
        WA_IMAGE_SECRET: null,
        apsUrlList: o.a
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }));
    var r = n(2),
        i = n(1),
        o = n(9);
    class s {
        static handlePromiseMessage(e, t = null) {
            return new Promise((n, i) => {
                r.a.runtime.sendMessage(e, e => {
                    "function" == typeof t ? t(n, i, e) : ((e, t, n) => {
                        r.a.runtime.lastError && t(r.a.runtime.lastError.message), e(n)
                    })(n, i, e)
                })
            })
        }
        static logger(e, t) {
            if (Object(o.f)() !== o.a.NONE) {
                Object(o.e)(e, t, o.d.CONTENT);
                const n = i.a.LOGGER;
                r.a.runtime.sendMessage({
                    command: n,
                    message: e,
                    logType: t
                })
            }
        }
        static logError(e) {
            s.logger(e, o.b.ERROR)
        }
        static logInfo(e) {
            s.logger(e, o.b.INFO)
        }
        static logWarn(e) {
            s.logger(e, o.b.WARN)
        }
        static logDebug(e) {
            s.logger(e, o.b.DEBUG)
        }
        static cacheStore(e, t) {
            const n = i.a.CACHE_STORE;
            return this.handlePromiseMessage({
                command: n,
                action: e,
                data: t
            })
        }
        static saveLastClickedTime(e) {
            const t = i.a.SAVE_CLICK_EVENT_TIME;
            r.a.runtime.sendMessage({
                command: t,
                last_event: e
            })
        }
        static getLastClickedTime() {
            const e = i.a.GET_CLICK_EVENT_TIME;
            return this.handlePromiseMessage({
                command: e
            })
        }
        static autoRunVideo(e) {
            const t = i.a.AUTO_RUN_VIDEO_SITE;
            r.a.runtime.sendMessage({
                command: t,
                url: e
            })
        }
        static isFrameBlocked(e) {
            const t = i.a.IS_FRAME_BLOCKED;
            return this.handlePromiseMessage({
                command: t,
                url: e
            })
        }
        static makeGTIRequest(e, t, n, r) {
            const o = {
                command: i.a.GTI_REQUEST,
                url: e,
                isSecureSearch: t,
                requestData: n,
                referer: r
            };
            return this.handlePromiseMessage(o)
        }
        static executeCommand(e, t) {
            const n = i.a.EXECUTE_COMMAND;
            r.a.runtime.sendMessage({
                command: n,
                commandId: e,
                params: t
            })
        }
        static focusOrCreateTab(e) {
            const t = i.a.FOCUS_OR_CREATE_TAB;
            r.a.runtime.sendMessage({
                command: t,
                url: e
            })
        }
        static closeTab() {
            const e = i.a.REMOVE_TAB;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static whitelist(e, t, n) {
            const r = i.a.WHITELIST;
            return this.handlePromiseMessage({
                action: e,
                command: r,
                type: t,
                data: n
            })
        }
        static getPopupData() {
            const e = i.a.GET_POPUP_DATA;
            return this.handlePromiseMessage({
                command: e
            })
        }
        static getSettingsData() {
            const e = i.a.GET_SETTINGS_DATA;
            return this.handlePromiseMessage({
                command: e
            })
        }
        static searchAnnotation(e, t) {
            const n = i.a.SEARCH_ANNOTATION;
            return this.handlePromiseMessage({
                action: e,
                data: t,
                command: n
            })
        }
        static socialMediaAnnotation(e, t) {
            const n = i.a.SOCIAL_MEDIA_ANNOTATION;
            return this.handlePromiseMessage({
                action: e,
                data: t,
                command: n
            })
        }
        static getBkGlobals() {
            const e = i.a.GET_BK_GLOBALS;
            return this.handlePromiseMessage({
                command: e
            })
        }
        static viewSiteReport(e = null, t = !1) {
            const n = i.a.VIEW_SITE_REPORT;
            r.a.runtime.sendMessage({
                command: n,
                url: e,
                showInNewTab: t
            })
        }
        static getTypoSquattingData(e) {
            const t = i.a.GET_TYPOSQUATTING_DATA;
            return this.handlePromiseMessage({
                command: t,
                domain: e
            })
        }
        static getPlaceholderText(e) {
            const t = i.a.PLACEHOLDER_TEXT;
            return this.handlePromiseMessage({
                command: t,
                id: e
            })
        }
        static setViewPort(e, t) {
            const n = i.a.SET_VIEWPORT;
            r.a.runtime.sendMessage({
                command: n,
                x: e,
                y: t
            })
        }
        static sendTelemetry(e) {
            const t = i.a.SEND_TELEMETRY;
            r.a.runtime.sendMessage({
                command: t,
                telemetry: e
            })
        }
        static anyBlockedIframes(e) {
            const t = i.a.ANY_BLOCKED_IFRAMES;
            return this.handlePromiseMessage({
                command: t,
                frameUrls: e
            })
        }
        static anyBlockedCryptoScripts() {
            const e = i.a.ANY_BLOCKED_CRYPTOSCRIPTS;
            return this.handlePromiseMessage({
                command: e
            })
        }
        static resetSettings() {
            const e = i.a.RESET_SETTINGS;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static sendEngineStat(e) {
            r.a.runtime.sendMessage({
                command: i.a.UPDATE_ENGINE_STATS,
                engine: e
            })
        }
        static contentHandler(e) {
            const t = i.a.CONTENT_HANDLER;
            r.a.runtime.sendMessage({
                command: t,
                message: e
            })
        }
        static getTabData(e = {}) {
            const t = {
                command: i.a.GET_TAB_DATA,
                ...e
            };
            return this.handlePromiseMessage(t)
        }
        static isWhitelisted(e) {
            const t = {
                command: i.a.IS_WHITELISTED,
                url: e
            };
            return this.handlePromiseMessage(t)
        }
        static getExtensionStatus(e) {
            return this.handlePromiseMessage({
                command: i.a.GET_EXTENSION_STATUS,
                extension_id: e
            })
        }
        static unblockAllIframes() {
            const e = i.a.UNBLOCK_ALL_IFRAMES;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static updateRatDetectionShowingFlag(e) {
            const t = i.a.UPDATE_RAT_DETECTION_SHOWING_FLAG;
            r.a.runtime.sendMessage({
                command: t,
                showed: e
            })
        }
        static getSearchSuggest(e) {
            const t = {
                command: i.a.SEARCH_SUGGEST,
                searchTerm: e
            };
            return this.handlePromiseMessage(t)
        }
        static resetNativeSetting(e) {
            const t = i.a.RESET_NATIVE_SETTING;
            r.a.runtime.sendMessage({
                command: t,
                setting: e
            })
        }
        static getModelWeights() {
            const e = {
                command: i.a.GET_WEIGHTS
            };
            return this.handlePromiseMessage(e)
        }
        static saveFormInfo(e) {
            const t = i.a.SAVE_FORM_INFO;
            r.a.runtime.sendMessage({
                command: t,
                data: e
            })
        }
        static saveFormInfoForWD(e) {
            const t = i.a.SAVE_FORM_INFO_FOR_WD;
            r.a.runtime.sendMessage({
                command: t,
                data: e
            })
        }
        static updateDWSWhitelist(e) {
            const t = i.a.UPDATE_DWS_WHITELIST;
            r.a.runtime.sendMessage({
                command: t,
                email: e
            })
        }
        static saveMultiStepLogin(e, t) {
            const n = i.a.SAVE_MULTISTEP_LOGIN;
            r.a.runtime.sendMessage({
                command: n,
                login: e,
                completeLogin: t
            })
        }
        static getFormInfoCache() {
            const e = i.a.GET_FORM_INFO_CACHE;
            return this.handlePromiseMessage({
                command: e
            })
        }
        static clearFormInfoCache() {
            const e = i.a.CLEAR_FORM_INFO_CACHE;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static getCachedDWSInfo(e) {
            const t = {
                command: i.a.GET_CACHED_DWS_INFO,
                email: e
            };
            return this.handlePromiseMessage(t)
        }
        static clearCachedDWSInfo(e) {
            const t = i.a.CLEAR_CACHED_DWS_INFO;
            r.a.runtime.sendMessage({
                command: t,
                email: e
            })
        }
        static updateDWSShown(e) {
            const t = i.a.UPDATE_DWS_SHOWN;
            r.a.runtime.sendMessage({
                command: t,
                email: e
            })
        }
        static getAPSDetails() {
            const e = i.a.GET_APS_DETAILS;
            return this.handlePromiseMessage({
                command: e
            })
        }
        static signUpFormDetected() {
            const e = i.a.SIGN_UP_FORM_DETECTED;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static updateBkNativeSettings(e, t) {
            const n = i.a.UPDATE_BK_NATIVE_SETTINGS;
            r.a.runtime.sendMessage({
                command: n,
                name: e,
                value: t
            })
        }
        static launchIDPSLogin() {
            const e = i.a.LAUNCH_IDPS_LOGIN;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static pageMidScrollSendMessage() {
            const e = i.a.PAGE_MID_SCROLL;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static showSidebarMain() {
            const e = i.a.SHOW_SIDEBAR_MAIN;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static setFFPolicyCollection({
            personal: e,
            activity: t
        }) {
            const n = i.a.SET_FF_POLICY_COLLECTION;
            r.a.runtime.sendMessage({
                command: n,
                personal: e,
                activity: t
            })
        }
        static setFFPolicyLastShown() {
            const e = i.a.SET_FF_POLICY_LAST_SHOWN;
            r.a.runtime.sendMessage({
                command: e
            })
        }
        static broadcastToForeground(e) {
            const t = i.c.BROADCAST_TO_FOREGROUND;
            r.a.runtime.sendMessage({
                command: t,
                payload: e
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a
    })), n.d(t, "c", (function() {
        return c
    })), n.d(t, "a", (function() {
        return l
    }));
    var r = n(12),
        i = n(11);
    const {
        NONE: o,
        ...s
    } = r.c, a = {
        SET: "SET",
        GET: "GET",
        CLEAR: "CLEAR"
    }, c = {
        BLOCK_PAGE_PHISHING_FIRST_VARIANT_COUNT: {
            name: "BLOCK_PAGE_PHISHING_FIRST_VARIANT_COUNT",
            type: "number"
        },
        BLOCK_PAGE_RED_FIRST_VARIANT_COUNT: {
            name: "BLOCK_PAGE_RED_FIRST_VARIANT_COUNT",
            type: "number"
        },
        BLOCK_PAGE_WHITELIST: {
            name: "BLOCK_PAGE_WHITELIST",
            type: "array"
        },
        BLOCK_PAGE_YELLOW_FIRST_VARIANT_COUNT: {
            name: "BLOCK_PAGE_YELLOW_FIRST_VARIANT_COUNT",
            type: "number"
        },
        CRYPTO_WHITELIST: {
            name: "CRYPTO_WHITELIST",
            type: "array"
        },
        ENGINE_DOWNLOAD_TASK: {
            name: "ENGINE_DOWNLOAD_TASK",
            type: "object"
        },
        ENGINES: {
            name: "ENGINES",
            type: "object"
        },
        ENGINES_FUTURE_TIME: {
            name: "ENGINES_FUTURE_TIME",
            type: "object"
        },
        ENGINES_VERSION: {
            name: "ENGINES_VERSION",
            type: "string"
        },
        EXTENSION_LOGGING: {
            name: "EXTENSION_LOGGING",
            options: [0, 1, 2, 3, 4],
            type: "number"
        },
        EXTN_UUID: {
            name: "EXTN_UUID",
            type: "string"
        },
        FIND_SIMILAR_PAGES_COUNT: {
            name: "FIND_SIMILAR_PAGES_COUNT",
            type: "number"
        },
        FIND_SIMILAR_PAGES_FIRST_SHOWN: {
            name: "FIND_SIMILAR_PAGES_FIRST_SHOWN",
            type: "date"
        },
        FIND_SIMILAR_PAGES_LAST_SHOWN: {
            name: "FIND_SIMILAR_PAGES_LAST_SHOWN",
            type: "date"
        },
        FIND_SIMILAR_PAGES_NEWS_TEXT_VARIANT: {
            name: "FIND_SIMILAR_PAGES_NEWS_TEXT_VARIANT",
            type: "number"
        },
        FIND_SIMILAR_PAGES_SHOPPING_TEXT_VARIANT: {
            name: "FIND_SIMILAR_PAGES_SHOPPING_TEXT_VARIANT",
            type: "number"
        },
        FIND_SIMILAR_PAGES_TOGGLE: {
            name: "FIND_SIMILAR_PAGES_TOGGLE",
            type: "boolean"
        },
        IFRAME_BLOCK_FIRST_TIME: {
            name: "IFRAME_BLOCK_FIRST_TIME",
            type: "boolean"
        },
        LAST_HEARTBEAT_SENT: {
            name: "LAST_HEARTBEAT_SENT",
            type: "object"
        },
        POPUP_STATS: {
            name: "POPUP_STATS",
            type: "object"
        },
        POST_INSTALLATION_PAGE_SHOWED: {
            name: "POST_INSTALLATION_PAGE_SHOWED",
            type: "object"
        },
        RAT_DETECTION_WHITELIST: {
            name: "RAT_DETECTION_WHITELIST",
            type: "array"
        },
        SEARCH_ANNOTATION_OPTION: {
            name: "SEARCH_ANNOTATION_OPTION",
            options: [...i.a],
            type: "string"
        },
        SOCIAL_MEDIA_ANNOTATION_OPTION: {
            name: "SOCIAL_MEDIA_ANNOTATION_OPTION",
            options: {
                ...s
            },
            type: "number"
        },
        SOCIAL_MEDIA_ANNOTATION_TOGGLE: {
            name: "SOCIAL_MEDIA_ANNOTATION_TOGGLE",
            type: "boolean"
        },
        TELEMETRY_HEARTBEAT_TASK: {
            name: "TELEMETRY_HEARTBEAT_TASK",
            type: "object"
        },
        TYPOSQUATTING_WHITELIST: {
            name: "TYPOSQUATTING_WHITELIST",
            type: "array"
        },
        CACHE_TYPOSQUATTING: {
            name: "CACHE_TYPOSQUATTING",
            type: "object"
        },
        USER_NATIVE_STATS: {
            name: "USER_NATIVE_STATS",
            type: "boolean"
        },
        WHITELIST_FLAG: {
            name: "WHITELIST_FLAG",
            type: "boolean"
        },
        FORM_DETECTION_WEIGHTS: {
            name: "FORM_DETECTION_WEIGHTS",
            type: "object"
        },
        DWS_INFO: {
            name: "DWS_INFO",
            type: "object"
        },
        DWS_WHITELIST: {
            name: "DWS_WHITELIST",
            type: "array"
        },
        DWS_UNIQUE_EMAILS: {
            name: "DWS_UNIQUE_EMAILS",
            type: "array"
        },
        APS_TOAST_FIRST_TIME: {
            name: "APS_TOAST_FIRST_TIME",
            type: "boolean"
        },
        APS_FULL_MSG_SHOWN_ARRAY: {
            name: "APS_FULL_MSG_SHOWN_ARRAY",
            type: "array"
        },
        FF_POLICY_PERSONAL_COLLECTION: {
            name: "FF_POLICY_PERSONAL_COLLECTION",
            type: "boolean"
        },
        FF_POLICY_ACTIVITY_COLLECTION: {
            name: "FF_POLICY_ACTIVITY_COLLECTION",
            type: "boolean"
        },
        FF_POLICY_LAST_SHOWN: {
            name: "FF_POLICY_LAST_SHOWN",
            type: "number"
        }
    }, l = {
        RAT_DETECTION_SHOWING: {
            name: "RAT_DETECTION_SHOWING",
            type: "map"
        },
        FORM_INFO: {
            name: "FORM_INFO",
            type: "object"
        },
        SAVE_MULTI_STEP_LOGIN: {
            name: "SAVE_MULTI_STEP_LOGIN",
            type: "object"
        },
        WD_FD_SCRAPPING_ENABLED: {
            name: "WD_FD_SCRAPPING_ENABLED",
            type: "boolean"
        },
        WD_FD_SCRAPPING_FORM_INFO: {
            name: "WD_FD_SCRAPPING_FORM_INFO",
            type: "map"
        },
        APS_EMAIL_LINKS: {
            name: "APS_EMAIL_LINKS",
            type: "array"
        },
        WSS_EMAIL: {
            name: "WSS_EMAIL",
            type: "string"
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "e", (function() {
        return i
    })), n.d(t, "c", (function() {
        return o
    })), n.d(t, "d", (function() {
        return s
    })), n.d(t, "a", (function() {
        return a
    }));
    const r = {
            MAX_CACHE_RECORDS: 1e3,
            MAX_RESERVED_CALLBACK_ID: 5,
            PHISHING_CATEGORY: 169,
            SITE_ADVISOR_URL: "www.siteadvisor.com/",
            GTI_SERVER: "https://webadvisorc.rest.gti.mcafee.com/1",
            TYPOSQUATTING_SERVER: "https://mip.api.mcafeewebadvisor.com/v1/typosquatting?",
            ENGINE_VERSION_URL: "https://sadownload.mcafee.com/products/SA/Win/extensions/engines/update.json"
        },
        i = new Set(["www.mcafee.com"]),
        o = ["wss://*.gasolina.ml/*", "*://kissdoujin.com/Content/js/c-hive.js*", "wss://*.sen-to-zdrowie.ml/*", "*://cookiescript.info/libs/*", "*://rocks.io/assets/*", "*://coin-have.com/c/*", "*://coinnebula.com/lib/*", "wss://*.coin-have.com/", "ws://digger.cryptobara.com/*", "ws://*.webminepool.tk/*", "*://*.lewd.ninja/static/m.js*", "*://tokyodrift.ga/dropyoulike/a-o/*", "*://*.2giga.link/hive/lib/*", "*://papoto.com/lib/*", "*://load.jsecoin.com/*", "ws://*.1q2w3.fun/*", "*://*/*plugins/ajcryptominer/assets/*", "*://monerominer.rocks/miner.php*", "*://minemytraffic.com/*", "*://*.monerise.com/core/*", "*://*.cookiescript.info/libs/*", "ws://hive.tubetitties.com/*", "wss://*.freecontent.racing/*", "wss://*.hodling.faith/*", "ws://gtg02.bestsecurepractice.com/proxy", "*://cryptoloot.pro/lib/*", "*://lmodr.biz/*", "*://*.webminepool.com/lib/base.js", "ws://*.sen-to-zdrowie.ml/*", "ws://*.morningdigit.com/*", "*://mine.nahnoji.cz/*", "*://*.minescripts.info/*", "*://jsecoin.com/server*", "*://coinhive.com/lib*", "wss://*.webminepool.tk/*", "ws://*.monerise.com/proxy/*", "*://kisshentai.net/Content/js/c-hive.js*", "*://mataharirama.xyz/*", "*://*.coinpirate.cf/*", "ws://*.playerassets.info/*", "wss://*.1q2w3.fun/*", "*://*.1q2w3.fun/*", "*://anime.reactor.cc/js/ch/cryptonight.wasm*", "*://webmine.cz/miner*", "wss://ws.l33tsite.info/*", "*://coinhive.com/captcha*", "wss://www.mutuza.win/proxy", "*://*.morningdigit.com/*", "ws://*.host.d-ns.ga/*", "*://*.doubleclick5.xyz/*", "*://miner.pr0gramm.com/xmr.min.js*", "*://*.freecontent.bid/*", "ws://lewd.ninja/comics/*", "wss://*.monerise.com:9333/proxy/*", "*://*.webminepool.com/lib/captcha.js", "*://coinerra.com/lib/*", "*://*.playerassets.info/*", "wss://*.webmine.pro/*", "wss://lewd.ninja/comics/*", "*://*.doubleclick1.xyz/*", "ws://*.freecontent.racing/*", "*://*.googleanalytcs.com/*", "wss://*.coinnebula.com/proxy*", "ws://*.monerise.com:9333/proxy/*", "ws://*.freecontent.loan/*", "*://party-nngvitbizn.now.sh/*", "wss://api.l33tsite.info/*", "*://coinlab.biz/lib/coinlab.js*", "wss://*.monerise.com/proxy/*", "ws://www.mutuza.win/proxy", "*://jscdndel.com/content/vidm.min.js*", "*://listat.biz/*", "*://minecrunch.co/web/*", "ws://*.chainblock.science/*", "*://baiduccdn1.com/lib/*", "*://*.mutuza.win/worker.js", "*://*.load.jsecoin.com/*", "*://ppoi.org/lib/*", "wss://*.chainblock.science/*", "wss://*.crypto-loot.com/proxy*", "wss://gtg02.bestsecurepractice.com/proxy", "wss://*.coinhive.com/proxy*", "*://coin-hive.com/captcha*", "*://jsccnn.com/content/vidm.min.js*", "*://monerominer.rocks/scripts/miner.js*", "*://*.jsecoin.com/server*", "*://server.jsecoin.com/*", "wss://*.coin-hive.com/proxy*", "*://*.doubleclick4.xyz/*", "*://miner.cryptobara.com/client/*", "*://*.rocks.io/assets/*", "*://*.ppoi.org/lib/*", "*://you.tubetitties.com/worker.js*", "wss://*.googleanalytcs.com/*", "wss://hive.tubetitties.com/*", "*://static.reasedoper.pw/*", "*://*.ppoi.org/token/*", "ws://*.webmine.pro/*", "*://you.tubetitties.com/hash.wasm*", "*://*.doubleclick3.xyz/*", "*://*.turnsocial.com/m.js", "ws://*.hodling.faith/*", "wss://*.morningdigit.com/*", "*://*.ad-miner.com/lib/*", "wss://*.2giga.link/wproxy*", "ws://*.googleanalytcs.com/*", "*://*.doubleclick6.xyz/*", "ws://turnsocial.now.sh/*", "*://cdn.cloudcoins.co/javascript/cloudcoins.min.js*", "*://joyreactor.cc/ws/ch/*", "*://minero.pw/miner.min.js*", "*://*.webmine.pro/*", "*://punchsub.net/chm.js", "wss://mine.nahnoji.cz/*", "wss://mine.torrent.pw/*", "*://*.mutuza.win/lib/*", "*://*.kickass.cd/power2/m.js", "ws://*.cpu2cash.link/*", "*://*.server.jsecoin.com/*", "*://*.mutuza.win/processor.js", "wss://turnsocial.now.sh/*", "*://kiwifarms.net/js/Jawsh/xmr/xmr.min.js*", "*://*.rocks.io/proxy*", "*://crypto-loot.com/lib*", "*://*.chmproxy.bid/lib/*", "ws://*.gasolina.ml/*", "*://*.stackpathdns.com/assets/javascript/cr.js", "*://*.coinblind.com/lib/*", "*://miner.pr0gramm.com/pm.min.js*", "*://*.bewhoyouare.gq/*", "wss://*.zlx.com.br/proxy*", "*://a-o.ninja/apk-AO/kingofthenorth/*", "*://ad-miner.com/lib/*", "*://*.webminepool.com/api/*", "*://*.cpu2cash.link/*", "*://*.hemnes.win/*", "wss://*.cpu2cash.link/*", "ws://*.coinpirate.cf/*", "ws://ws.l33tsite.info/*", "*://digger.cryptobara.com/client/*", "*://kickass.cd/m.js*", "ws://*.zlx.com.br/proxy*", "*://*.doubleclick2.xyz/*", "*://*.amazonaws.com/doubleclick13/*", "wss://*.freecontent.loan/*", "*://*.host.d-ns.ga/*", "*://*.candid.zone/youtube.com/*", "ws://api.l33tsite.info/*", "*://gtg2.bestsecurepractice.com/lib/*", "wss://*.host.d-ns.ga/*", "*://coin-hive.com/lib*", "ws://mine.nahnoji.cz/*", "wss://*.playerassets.info/*", "*://*.afminer.com/code/*", "wss://*.coinpirate.cf/*", "*://cookiescriptcdn.pro/libs/*", "*://*.goredirect.party/assets/*", "*://*.ZLX.COM.BR/assets/min.js*", "*://*.ZLX.COM.BR/assets/playermon.js*", "*://p.hemnes.win/lib/*", "*://gtg02.bestsecurepractice.com/proxy2/*", "*://gtg02.bestsecurepractice.com/meri.js", "*://gtg02.bestsecurepractice.com/lv.js", "*://gtg02.bestsecurepractice.com/worker.js", "*://gtg02.bestsecurepractice.com/processor.js", "*://gtg02.bestsecurepractice.com/demo.html", "*://*.turnsocial.com/c.wasm*", "*://*.turnsocial.com/m.js*", "*://cdn.minescripts.info/c/*", "*://tokyodrift.ga/dropyoulike/backup/c.wasm*", "*://punchsub.net/chm2.js", "*://*.kickass.cd/webmr4.js", "*://*.kickass.cd/m.js", "wss://*.authedmine.com/proxy"],
        s = [{
            domain: "www.beamyourscreen.com",
            urls: []
        }, {
            domain: "www.connectwise.com",
            urls: ["www.connectwise.com/platform/unified-management/control"]
        }, {
            domain: "get.gotoassist.com",
            urls: []
        }, {
            domain: "fastsupport.gotoassist.com",
            urls: []
        }, {
            domain: "www.join.me",
            urls: []
        }, {
            domain: "www.mikogo.com",
            urls: []
        }, {
            domain: "www.mikogo.de",
            urls: []
        }, {
            domain: "www.securelink.com",
            urls: []
        }, {
            domain: "join.zoho.com",
            urls: []
        }],
        a = {
            shopping: {
                "www.amazon.com": {
                    paths: ["buy/payselect/handlers", "buy/addressselect/handlers"]
                }
            },
            email: {
                "mail.google.com/mail": {
                    selector: "table[role=presentation] > tr div[data-message-id] a"
                },
                "outlook.live.com/mail": {
                    selector: "div[role=complementary][aria-label] a"
                },
                "outlook.office.com/mail": {
                    selector: "div[role=complementary][aria-label] a"
                },
                "outlook.office365.com/mail": {
                    selector: "div[role=complementary][aria-label] a"
                },
                "mail.yahoo.com": {
                    selector: "div[role=main] ul li a"
                }
            }
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    })), n.d(t, "d", (function() {
        return c
    })), n.d(t, "c", (function() {
        return u
    })), n.d(t, "e", (function() {
        return d
    })), n.d(t, "f", (function() {
        return p
    }));
    var r = n(5),
        i = n(3),
        o = n(7);
    const s = {
            NONE: 0,
            INFO: 1,
            ERROR: 2,
            WARN: 3,
            DEBUG: 4
        },
        a = {
            INFO: 1,
            ERROR: 2,
            WARN: 3,
            DEBUG: 4
        },
        c = {
            BACKGROUND: "BACKGROUND",
            CONTENT: "CONTENT",
            TELEMETRY: "TELEMETRY"
        },
        l = {
            DEFAULT: "color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",
            BACKGROUND: "color: #8D0DBA; font-weight: bold; background: #FFFFFF;",
            CONTENT: "color: #F54A26; font-weight: bold; background: #FFFFFF;",
            TELEMETRY: "color: #147831; font-weight: bold; background: #FFFFFF;"
        };
    class u {
        constructor() {
            this.nativeLogging = !1, this.browserType = i.d.BROWSER_TYPE, this.extensionType = "wa"
        }
        setNativeLogging(e) {
            r.a.useNativeLogger = e, this.nativeLogging = e
        }
        processLog(e, t, n, i = null) {
            if (this.nativeLogging) {
                const i = {
                    processType: t,
                    browserType: this.browserType,
                    extensionType: this.extensionType,
                    logType: n,
                    message: e
                };
                r.a.messageDispatcher && r.a.messageDispatcher.logger(i)
            }
            d(e, n, t, i)
        }
        log(e, t = c.BACKGROUND, n = null) {
            this.processLog(e, t, s.INFO, n)
        }
        error(e, t = c.BACKGROUND) {
            this.processLog(e, t, s.ERROR)
        }
        warn(e, t = c.BACKGROUND, n = null) {
            this.processLog(e, t, s.WARN, n)
        }
        debug(e, t = c.BACKGROUND, n = null) {
            this.processLog(e, t, s.DEBUG, n)
        }
    }
    const d = (e, t, n, r = null) => {
            const i = p();
            if (i === s.NONE) return;
            const o = `%c[${n} - ${(new Date).toLocaleString()}]: %c${e}`,
                c = l.DEFAULT;
            let u = l[n];
            if (u || (u = c), r && (u = `color: ${r}; font-weight: bold; background: #FFFFFF;`), i >= s.ERROR && t === a.ERROR && console.error(o, c, c), i >= s.INFO && t === a.INFO && console.log(o, u, c), i >= s.WARN && t === a.WARN) {
                const e = "color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";
                console.log("%cWARN - " + o, e, u, c)
            }
            if (i >= s.DEBUG && t === a.DEBUG) {
                const e = "color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";
                console.log("%cDEBUG - " + o, e, u, c)
            }
        },
        p = () => {
            const e = i.d.LOG_LEVEL,
                t = r.a.cacheStore && r.a.cacheStore.get(o.c.EXTENSION_LOGGING.name, null);
            return Number.isInteger(t) && Object.values(s).includes(t) ? t : e
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    const r = {
        ANNOTATION: {},
        BackgroundIPC: null,
        BackgroundCommons: null,
        ContextTelemetry: null,
        TelemetryEventNames: null,
        UrlParser: null,
        Utils: null,
        Commands: {},
        CommonConstants: {},
        extension: null,
        SearchEngineHelper: null
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    })), n.d(t, "d", (function() {
        return o
    })), n.d(t, "e", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    }));
    const r = {
            GET: "GET",
            SET: "SET"
        },
        i = {
            NONE: "NONE",
            ONLY_SECURE_SEARCH: "ONLY_SECURE_SEARCH",
            ALL: "ALL",
            *[Symbol.iterator]() {
                for (const e of Object.keys(this)) yield e
            }
        },
        o = {
            UNKNOWN: 0,
            GOOGLE: 1,
            YAHOO: 2,
            AOL: 3,
            ASK: 4,
            UOL: 5,
            GOO: 6,
            MYWAY: 7,
            TERRA: 8,
            WEB: 9,
            BIGLOBE: 10,
            GMX: 11,
            EXCITE: 12,
            SKY: 13,
            NAVER: 14,
            NIFTY: 15,
            RAKUTEN: 16,
            IXQUICK: 17,
            XFINITY: 18,
            SOGOU: 19,
            DOGPILE: 20,
            SEARCH: 21,
            WEBCRAWLER: 22,
            BING: 23,
            INFO: 24,
            YANDEX: 25,
            YIPPY: 26,
            WOW: 27,
            HAOSO: 28,
            DUCKDUCKGO: 30,
            ONESEARCH: 31,
            LINKEDIN: 100,
            FACEBOOK: 101,
            YOUTUBE: 102,
            INSTAGRAM: 103,
            REDDIT: 104,
            TWITTER: 105
        },
        s = {
            SHOPPING: {
                name: "shopping",
                variants: 3
            },
            NEWS: {
                name: "news",
                variants: 2
            },
            SEARCH: {
                name: "search",
                variants: 1
            },
            COOKING: {
                name: "cooking",
                variants: 1
            },
            STREAMING: {
                name: "streaming",
                variants: 1
            },
            TRAVEL: {
                name: "travel",
                variants: 1
            }
        },
        a = {
            SEARCH: 0,
            SOCIALMEDIA: 1,
            FSP: 2
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return r
    })), n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return o
    }));
    const r = {
            NONE: 0,
            LINKEDIN: 1,
            INSTAGRAM: 2,
            YOUTUBE: 4,
            FACEBOOK: 8,
            TWITTER: 16,
            REDDIT: 32
        },
        i = Object.values(r).reduce((e, t) => e + t),
        o = {
            TOGGLE_ON: "TOGGLE_ON",
            TOGGLE_OFF: "TOGGLE_OFF",
            ANNOTATION_ENABLE_ALL: "ANNOTATION_ENABLE_ALL",
            ANNOTATION_DISABLE_ALL: "ANNOTATION_DISABLE_ALL",
            ANNOTATION_ENABLE: "ANNOTATION_ENABLE",
            ANNOTATION_DISABLE: "ANNOTATION_DISABLE",
            GET: "GET"
        }
}, function(e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.6.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2021-03-02T17:08Z
     */
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function(n, i) {
        "use strict";
        var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            c = o.flat ? function(e) {
                return o.flat.call(e)
            } : function(e) {
                return o.concat.apply([], e)
            },
            l = o.push,
            u = o.indexOf,
            d = {},
            p = d.toString,
            f = d.hasOwnProperty,
            h = f.toString,
            E = h.call(Object),
            _ = {},
            m = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
            },
            T = function(e) {
                return null != e && e === e.window
            },
            g = n.document,
            S = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function N(e, t, n) {
            var r, i, o = (n = n || g).createElement("script");
            if (o.text = e, t)
                for (r in S)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function A(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
        }
        var I = function(e, t) {
            return new I.fn.init(e, t)
        };

        function O(e) {
            var t = !!e && "length" in e && e.length,
                n = A(e);
            return !m(e) && !T(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        I.fn = I.prototype = {
            jquery: "3.6.0",
            constructor: I,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = I.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return I.each(this, e)
            },
            map: function(e) {
                return this.pushStack(I.map(this, (function(t, n) {
                    return e.call(t, n, t)
                })))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(I.grep(this, (function(e, t) {
                    return (t + 1) % 2
                })))
            },
            odd: function() {
                return this.pushStack(I.grep(this, (function(e, t) {
                    return t % 2
                })))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: o.sort,
            splice: o.splice
        }, I.extend = I.fn.extend = function() {
            var e, t, n, r, i, o, s = arguments[0] || {},
                a = 1,
                c = arguments.length,
                l = !1;
            for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || m(s) || (s = {}), a === c && (s = this, a--); a < c; a++)
                if (null != (e = arguments[a]))
                    for (t in e) r = e[t], "__proto__" !== t && s !== r && (l && r && (I.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], o = i && !Array.isArray(n) ? [] : i || I.isPlainObject(n) ? n : {}, i = !1, s[t] = I.extend(l, o, r)) : void 0 !== r && (s[t] = r));
            return s
        }, I.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && h.call(n) === E)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                N(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (O(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (O(Object(e)) ? I.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : u.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    s = [];
                if (O(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return c(s)
            },
            guid: 1,
            support: _
        }), "function" == typeof Symbol && (I.fn[Symbol.iterator] = o[Symbol.iterator]), I.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }));
        var y =
            /*!
             * Sizzle CSS Selector Engine v2.3.6
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2021-02-16
             */
            function(e) {
                var t, n, r, i, o, s, a, c, l, u, d, p, f, h, E, _, m, T, g, S = "sizzle" + 1 * new Date,
                    N = e.document,
                    A = 0,
                    I = 0,
                    O = ce(),
                    y = ce(),
                    C = ce(),
                    v = ce(),
                    b = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    R = {}.hasOwnProperty,
                    L = [],
                    w = L.pop,
                    D = L.push,
                    P = L.push,
                    x = L.slice,
                    G = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    F = "[\\x20\\t\\r\\n\\f]",
                    U = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    k = "\\[" + F + "*(" + U + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + U + "))|)" + F + "*\\]",
                    H = ":(" + U + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + k + ")*)|.*)\\)|)",
                    W = new RegExp(F + "+", "g"),
                    B = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                    j = new RegExp("^" + F + "*," + F + "*"),
                    K = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                    Y = new RegExp(F + "|>"),
                    V = new RegExp(H),
                    q = new RegExp("^" + U + "$"),
                    $ = {
                        ID: new RegExp("^#(" + U + ")"),
                        CLASS: new RegExp("^\\.(" + U + ")"),
                        TAG: new RegExp("^(" + U + "|[*])"),
                        ATTR: new RegExp("^" + k),
                        PSEUDO: new RegExp("^" + H),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + M + ")$", "i"),
                        needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
                    },
                    X = /HTML$/i,
                    z = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) {
                        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    oe = function() {
                        p()
                    },
                    se = Se((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    P.apply(L = x.call(N.childNodes), N.childNodes), L[N.childNodes.length].nodeType
                } catch (e) {
                    P = {
                        apply: L.length ? function(e, t) {
                            D.apply(e, x.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(e, t, r, i) {
                    var o, a, l, u, d, h, m, T = t && t.ownerDocument,
                        N = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== N && 9 !== N && 11 !== N) return r;
                    if (!i && (p(t), t = t || f, E)) {
                        if (11 !== N && (d = Z.exec(e)))
                            if (o = d[1]) {
                                if (9 === N) {
                                    if (!(l = t.getElementById(o))) return r;
                                    if (l.id === o) return r.push(l), r
                                } else if (T && (l = T.getElementById(o)) && g(t, l) && l.id === o) return r.push(l), r
                            } else {
                                if (d[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                                if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), r
                            } if (n.qsa && !v[e + " "] && (!_ || !_.test(e)) && (1 !== N || "object" !== t.nodeName.toLowerCase())) {
                            if (m = e, T = t, 1 === N && (Y.test(e) || K.test(e))) {
                                for ((T = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = S)), a = (h = s(e)).length; a--;) h[a] = (u ? "#" + u : ":scope") + " " + ge(h[a]);
                                m = h.join(",")
                            }
                            try {
                                return P.apply(r, T.querySelectorAll(m)), r
                            } catch (t) {
                                v(e, !0)
                            } finally {
                                u === S && t.removeAttribute("id")
                            }
                        }
                    }
                    return c(e.replace(B, "$1"), t, r, i)
                }

                function ce() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function le(e) {
                    return e[S] = !0, e
                }

                function ue(e) {
                    var t = f.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                }

                function pe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function Ee(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function _e(e) {
                    return le((function(t) {
                        return t = +t, le((function(n, r) {
                            for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                        }))
                    }))
                }

                function me(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                        var t = e && e.namespaceURI,
                            n = e && (e.ownerDocument || e).documentElement;
                        return !X.test(t || n && n.nodeName || "HTML")
                    }, p = ae.setDocument = function(e) {
                        var t, i, s = e ? e.ownerDocument || e : N;
                        return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, E = !o(f), N != f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ue((function(e) {
                            return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ue((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ue((function(e) {
                            return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ue((function(e) {
                            return h.appendChild(e).id = S, !f.getElementsByName || !f.getElementsByName(S).length
                        })), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && E) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                        }, m = [], _ = [], (n.qsa = J.test(f.querySelectorAll)) && (ue((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + F + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + S + "-]").length || _.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || _.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || _.push(".#.+[+~]"), e.querySelectorAll("\\\f"), _.push("[\\r\\n\\f]")
                        })), ue((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = f.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
                        }))), (n.matchesSelector = J.test(T = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                            n.disconnectedMatch = T.call(e, "*"), T.call(e, "[s!='']:x"), m.push("!=", H)
                        })), _ = _.length && new RegExp(_.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test(h.compareDocumentPosition), g = t || J.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, b = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == f || e.ownerDocument == N && g(N, e) ? -1 : t == f || t.ownerDocument == N && g(N, t) ? 1 : u ? G(u, e) - G(u, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!i || !o) return e == f ? -1 : t == f ? 1 : i ? -1 : o ? 1 : u ? G(u, e) - G(u, t) : 0;
                            if (i === o) return pe(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[r] === a[r];) r++;
                            return r ? pe(s[r], a[r]) : s[r] == N ? -1 : a[r] == N ? 1 : 0
                        }, f) : f
                    }, ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function(e, t) {
                        if (p(e), n.matchesSelector && E && !v[t + " "] && (!m || !m.test(t)) && (!_ || !_.test(t))) try {
                            var r = T.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            v(t, !0)
                        }
                        return ae(t, f, null, [e]).length > 0
                    }, ae.contains = function(e, t) {
                        return (e.ownerDocument || e) != f && p(e), g(e, t)
                    }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) != f && p(e);
                        var i = r.attrHandle[t.toLowerCase()],
                            o = i && R.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !E) : void 0;
                        return void 0 !== o ? o : n.attributes || !E ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, ae.escape = function(e) {
                        return (e + "").replace(re, ie)
                    }, ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function(e) {
                        var t, r = [],
                            i = 0,
                            o = 0;
                        if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(b), d) {
                            for (; t = e[o++];) t === e[o] && (i = r.push(o));
                            for (; i--;) e.splice(r[i], 1)
                        }
                        return u = null, e
                    }, i = ae.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += i(t);
                        return n
                    }, (r = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: $,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = O[e + " "];
                                return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && O(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = ae.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    s = "last" !== e.slice(-4),
                                    a = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, c) {
                                    var l, u, d, p, f, h, E = o !== s ? "nextSibling" : "previousSibling",
                                        _ = t.parentNode,
                                        m = a && t.nodeName.toLowerCase(),
                                        T = !c && !a,
                                        g = !1;
                                    if (_) {
                                        if (o) {
                                            for (; E;) {
                                                for (p = t; p = p[E];)
                                                    if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                h = E = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [s ? _.firstChild : _.lastChild], s && T) {
                                            for (g = (f = (l = (u = (d = (p = _)[S] || (p[S] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === A && l[1]) && l[2], p = f && _.childNodes[f]; p = ++f && p && p[E] || (g = f = 0) || h.pop();)
                                                if (1 === p.nodeType && ++g && p === t) {
                                                    u[e] = [A, f, g];
                                                    break
                                                }
                                        } else if (T && (g = f = (l = (u = (d = (p = t)[S] || (p[S] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === A && l[1]), !1 === g)
                                            for (;
                                                (p = ++f && p && p[E] || (g = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++g || (T && ((u = (d = p[S] || (p[S] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [A, g]), p !== t)););
                                        return (g -= i) === r || g % r == 0 && g / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return i[S] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                    for (var r, o = i(e, t), s = o.length; s--;) e[r = G(e, o[s])] = !(n[r] = o[s])
                                })) : function(e) {
                                    return i(e, 0, n)
                                }) : i
                            }
                        },
                        pseudos: {
                            not: le((function(e) {
                                var t = [],
                                    n = [],
                                    r = a(e.replace(B, "$1"));
                                return r[S] ? le((function(e, t, n, i) {
                                    for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                                })) : function(e, i, o) {
                                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: le((function(e) {
                                return function(t) {
                                    return ae(e, t).length > 0
                                }
                            })),
                            contains: le((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || i(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: le((function(e) {
                                return q.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: Ee(!1),
                            disabled: Ee(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Q.test(e.nodeName)
                            },
                            input: function(e) {
                                return z.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: _e((function() {
                                return [0]
                            })),
                            last: _e((function(e, t) {
                                return [t - 1]
                            })),
                            eq: _e((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: _e((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: _e((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: _e((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            })),
                            gt: _e((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = fe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function Te() {}

                function ge(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function Se(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        s = n && "parentNode" === o,
                        a = I++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || s) return e(t, n, i);
                        return !1
                    } : function(t, n, c) {
                        var l, u, d, p = [A, a];
                        if (c) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || s) && e(t, n, c)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || s)
                                    if (u = (d = t[S] || (t[S] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((l = u[o]) && l[0] === A && l[1] === a) return p[2] = l[2];
                                        if (u[o] = p, p[2] = e(t, n, c)) return !0
                                    } return !1
                    }
                }

                function Ne(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function Ae(e, t, n, r, i) {
                    for (var o, s = [], a = 0, c = e.length, l = null != t; a < c; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
                    return s
                }

                function Ie(e, t, n, r, i, o) {
                    return r && !r[S] && (r = Ie(r)), i && !i[S] && (i = Ie(i, o)), le((function(o, s, a, c) {
                        var l, u, d, p = [],
                            f = [],
                            h = s.length,
                            E = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                                return n
                            }(t || "*", a.nodeType ? [a] : a, []),
                            _ = !e || !o && t ? E : Ae(E, p, e, a, c),
                            m = n ? i || (o ? e : h || r) ? [] : s : _;
                        if (n && n(_, m, a, c), r)
                            for (l = Ae(m, f), r(l, [], a, c), u = l.length; u--;)(d = l[u]) && (m[f[u]] = !(_[f[u]] = d));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], u = m.length; u--;)(d = m[u]) && l.push(_[u] = d);
                                    i(null, m = [], l, c)
                                }
                                for (u = m.length; u--;)(d = m[u]) && (l = i ? G(o, d) : p[u]) > -1 && (o[l] = !(s[l] = d))
                            }
                        } else m = Ae(m === s ? m.splice(h, m.length) : m), i ? i(null, s, m, c) : P.apply(s, m)
                    }))
                }

                function Oe(e) {
                    for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], c = s ? 1 : 0, u = Se((function(e) {
                            return e === t
                        }), a, !0), d = Se((function(e) {
                            return G(t, e) > -1
                        }), a, !0), p = [function(e, n, r) {
                            var i = !s && (r || n !== l) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                            return t = null, i
                        }]; c < o; c++)
                        if (n = r.relative[e[c].type]) p = [Se(Ne(p), n)];
                        else {
                            if ((n = r.filter[e[c].type].apply(null, e[c].matches))[S]) {
                                for (i = ++c; i < o && !r.relative[e[i].type]; i++);
                                return Ie(c > 1 && Ne(p), c > 1 && ge(e.slice(0, c - 1).concat({
                                    value: " " === e[c - 2].type ? "*" : ""
                                })).replace(B, "$1"), n, c < i && Oe(e.slice(c, i)), i < o && Oe(e = e.slice(i)), i < o && ge(e))
                            }
                            p.push(n)
                        } return Ne(p)
                }
                return Te.prototype = r.filters = r.pseudos, r.setFilters = new Te, s = ae.tokenize = function(e, t) {
                    var n, i, o, s, a, c, l, u = y[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, c = [], l = r.preFilter; a;) {
                        for (s in n && !(i = j.exec(a)) || (i && (a = a.slice(i[0].length) || a), c.push(o = [])), n = !1, (i = K.exec(a)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace(B, " ")
                            }), a = a.slice(n.length)), r.filter) !(i = $[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: s,
                            matches: i
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? ae.error(e) : y(e, c).slice(0)
                }, a = ae.compile = function(e, t) {
                    var n, i = [],
                        o = [],
                        a = C[e + " "];
                    if (!a) {
                        for (t || (t = s(e)), n = t.length; n--;)(a = Oe(t[n]))[S] ? i.push(a) : o.push(a);
                        (a = C(e, function(e, t) {
                            var n = t.length > 0,
                                i = e.length > 0,
                                o = function(o, s, a, c, u) {
                                    var d, h, _, m = 0,
                                        T = "0",
                                        g = o && [],
                                        S = [],
                                        N = l,
                                        I = o || i && r.find.TAG("*", u),
                                        O = A += null == N ? 1 : Math.random() || .1,
                                        y = I.length;
                                    for (u && (l = s == f || s || u); T !== y && null != (d = I[T]); T++) {
                                        if (i && d) {
                                            for (h = 0, s || d.ownerDocument == f || (p(d), a = !E); _ = e[h++];)
                                                if (_(d, s || f, a)) {
                                                    c.push(d);
                                                    break
                                                } u && (A = O)
                                        }
                                        n && ((d = !_ && d) && m--, o && g.push(d))
                                    }
                                    if (m += T, n && T !== m) {
                                        for (h = 0; _ = t[h++];) _(g, S, s, a);
                                        if (o) {
                                            if (m > 0)
                                                for (; T--;) g[T] || S[T] || (S[T] = w.call(c));
                                            S = Ae(S)
                                        }
                                        P.apply(c, S), u && !o && S.length > 0 && m + t.length > 1 && ae.uniqueSort(c)
                                    }
                                    return u && (A = O, l = N), g
                                };
                            return n ? le(o) : o
                        }(o, i))).selector = e
                    }
                    return a
                }, c = ae.select = function(e, t, n, i) {
                    var o, c, l, u, d, p = "function" == typeof e && e,
                        f = !i && s(e = p.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && 9 === t.nodeType && E && r.relative[c[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(c.shift().value.length)
                        }
                        for (o = $.needsContext.test(e) ? 0 : c.length; o-- && (l = c[o], !r.relative[u = l.type]);)
                            if ((d = r.find[u]) && (i = d(l.matches[0].replace(te, ne), ee.test(c[0].type) && me(t.parentNode) || t))) {
                                if (c.splice(o, 1), !(e = i.length && ge(c))) return P.apply(n, i), n;
                                break
                            }
                    }
                    return (p || a(e, f))(i, t, !E, n, !t || ee.test(e) && me(t.parentNode) || t), n
                }, n.sortStable = S.split("").sort(b).join("") === S, n.detectDuplicates = !!d, p(), n.sortDetached = ue((function(e) {
                    return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                })), ue((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || de("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && ue((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || de("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), ue((function(e) {
                    return null == e.getAttribute("disabled")
                })) || de(M, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                })), ae
            }(n);
        I.find = y, I.expr = y.selectors, I.expr[":"] = I.expr.pseudos, I.uniqueSort = I.unique = y.uniqueSort, I.text = y.getText, I.isXMLDoc = y.isXML, I.contains = y.contains, I.escapeSelector = y.escape;
        var C = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && I(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            v = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            b = I.expr.match.needsContext;

        function R(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function w(e, t, n) {
            return m(t) ? I.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            })) : t.nodeType ? I.grep(e, (function(e) {
                return e === t !== n
            })) : "string" != typeof t ? I.grep(e, (function(e) {
                return u.call(t, e) > -1 !== n
            })) : I.filter(t, e, n)
        }
        I.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? I.find.matchesSelector(r, e) ? [r] : [] : I.find.matches(e, I.grep(t, (function(e) {
                return 1 === e.nodeType
            })))
        }, I.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(I(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (I.contains(i[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < r; t++) I.find(e, i[t], n);
                return r > 1 ? I.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(w(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(w(this, e || [], !0))
            },
            is: function(e) {
                return !!w(this, "string" == typeof e && b.test(e) ? I(e) : e || [], !1).length
            }
        });
        var D, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (I.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || D, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof I ? t[0] : t, I.merge(this, I.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), L.test(r[1]) && I.isPlainObject(t))
                        for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = g.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(I) : I.makeArray(e, this)
        }).prototype = I.fn, D = I(g);
        var x = /^(?:parents|prev(?:Until|All))/,
            G = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function M(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        I.fn.extend({
            has: function(e) {
                var t = I(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (I.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    s = "string" != typeof e && I(e);
                if (!b.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && I.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(o.length > 1 ? I.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? u.call(I(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(I.uniqueSort(I.merge(this.get(), I(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), I.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return C(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return C(e, "parentNode", n)
            },
            next: function(e) {
                return M(e, "nextSibling")
            },
            prev: function(e) {
                return M(e, "previousSibling")
            },
            nextAll: function(e) {
                return C(e, "nextSibling")
            },
            prevAll: function(e) {
                return C(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return C(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return C(e, "previousSibling", n)
            },
            siblings: function(e) {
                return v((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return v(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (R(e, "template") && (e = e.content || e), I.merge([], e.childNodes))
            }
        }, (function(e, t) {
            I.fn[e] = function(n, r) {
                var i = I.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = I.filter(r, i)), this.length > 1 && (G[e] || I.uniqueSort(i), x.test(e) && i.reverse()), this.pushStack(i)
            }
        }));
        var F = /[^\x20\t\r\n\f]+/g;

        function U(e) {
            return e
        }

        function k(e) {
            throw e
        }

        function H(e, t, n, r) {
            var i;
            try {
                e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        I.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return I.each(e.match(F) || [], (function(e, n) {
                    t[n] = !0
                })), t
            }(e) : I.extend({}, e);
            var t, n, r, i, o = [],
                s = [],
                a = -1,
                c = function() {
                    for (i = i || e.once, r = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                },
                l = {
                    add: function() {
                        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                            I.each(n, (function(n, r) {
                                m(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== A(r) && t(r)
                            }))
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return I.each(arguments, (function(e, t) {
                            for (var n;
                                (n = I.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                        })), this
                    },
                    has: function(e) {
                        return e ? I.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return i = s = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = s = [], n || t || (o = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return l
        }, I.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", I.Callbacks("memory"), I.Callbacks("memory"), 2],
                        ["resolve", "done", I.Callbacks("once memory"), I.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", I.Callbacks("once memory"), I.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return I.Deferred((function(n) {
                                I.each(t, (function(t, r) {
                                    var i = m(e[r[4]]) && e[r[4]];
                                    o[r[1]]((function() {
                                        var e = i && i.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, r, i) {
                            var o = 0;

                            function s(e, t, r, i) {
                                return function() {
                                    var a = this,
                                        c = arguments,
                                        l = function() {
                                            var n, l;
                                            if (!(e < o)) {
                                                if ((n = r.apply(a, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                l = n && ("object" == typeof n || "function" == typeof n) && n.then, m(l) ? i ? l.call(n, s(o, t, U, i), s(o, t, k, i)) : (o++, l.call(n, s(o, t, U, i), s(o, t, k, i), s(o, t, U, t.notifyWith))) : (r !== U && (a = void 0, c = [n]), (i || t.resolveWith)(a, c))
                                            }
                                        },
                                        u = i ? l : function() {
                                            try {
                                                l()
                                            } catch (n) {
                                                I.Deferred.exceptionHook && I.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (r !== k && (a = void 0, c = [n]), t.rejectWith(a, c))
                                            }
                                        };
                                    e ? u() : (I.Deferred.getStackHook && (u.stackTrace = I.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            return I.Deferred((function(n) {
                                t[0][3].add(s(0, n, m(i) ? i : U, n.notifyWith)), t[1][3].add(s(0, n, m(e) ? e : U)), t[2][3].add(s(0, n, m(r) ? r : k))
                            })).promise()
                        },
                        promise: function(e) {
                            return null != e ? I.extend(e, i) : i
                        }
                    },
                    o = {};
                return I.each(t, (function(e, n) {
                    var s = n[2],
                        a = n[5];
                    i[n[1]] = s.add, a && s.add((function() {
                        r = a
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = s.fireWith
                })), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = a.call(arguments),
                    o = I.Deferred(),
                    s = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (H(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || m(i[n] && i[n].then))) return o.then();
                for (; n--;) H(i[n], s(n), o.reject);
                return o.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        I.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && W.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, I.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }))
        };
        var B = I.Deferred();

        function j() {
            g.removeEventListener("DOMContentLoaded", j), n.removeEventListener("load", j), I.ready()
        }
        I.fn.ready = function(e) {
            return B.then(e).catch((function(e) {
                I.readyException(e)
            })), this
        }, I.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --I.readyWait : I.isReady) || (I.isReady = !0, !0 !== e && --I.readyWait > 0 || B.resolveWith(g, [I]))
            }
        }), I.ready.then = B.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? n.setTimeout(I.ready) : (g.addEventListener("DOMContentLoaded", j), n.addEventListener("load", j));
        var K = function(e, t, n, r, i, o, s) {
                var a = 0,
                    c = e.length,
                    l = null == n;
                if ("object" === A(n))
                    for (a in i = !0, n) K(e, t, a, n[a], !0, o, s);
                else if (void 0 !== r && (i = !0, m(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(I(e), n)
                    })), t))
                    for (; a < c; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
            },
            Y = /^-ms-/,
            V = /-([a-z])/g;

        function q(e, t) {
            return t.toUpperCase()
        }

        function $(e) {
            return e.replace(Y, "ms-").replace(V, q)
        }
        var X = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function z() {
            this.expando = I.expando + z.uid++
        }
        z.uid = 1, z.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[$(t)] = n;
                else
                    for (r in t) i[$(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in r ? [t] : t.match(F) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || I.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !I.isEmptyObject(t)
            }
        };
        var Q = new z,
            J = new z,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    J.set(e, t, n)
                } else n = void 0;
            return n
        }
        I.extend({
            hasData: function(e) {
                return J.hasData(e) || Q.hasData(e)
            },
            data: function(e, t, n) {
                return J.access(e, t, n)
            },
            removeData: function(e, t) {
                J.remove(e, t)
            },
            _data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            _removeData: function(e, t) {
                Q.remove(e, t)
            }
        }), I.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = $(r.slice(5)), te(o, r, i[r]));
                        Q.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each((function() {
                    J.set(this, e)
                })) : K(this, (function(t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                    this.each((function() {
                        J.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    J.remove(this, e)
                }))
            }
        }), I.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, I.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = I.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = I._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                    I.dequeue(e, t)
                }), o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: I.Callbacks("once memory").add((function() {
                        Q.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), I.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? I.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = I.queue(this, e, t);
                    I._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && I.dequeue(this, e)
                }))
            },
            dequeue: function(e) {
                return this.each((function() {
                    I.dequeue(this, e)
                }))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = I.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Q.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                return a(), i.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            oe = g.documentElement,
            se = function(e) {
                return I.contains(e.ownerDocument, e)
            },
            ae = {
                composed: !0
            };
        oe.getRootNode && (se = function(e) {
            return I.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        });
        var ce = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === I.css(e, "display")
        };

        function le(e, t, n, r) {
            var i, o, s = 20,
                a = r ? function() {
                    return r.cur()
                } : function() {
                    return I.css(e, t, "")
                },
                c = a(),
                l = n && n[3] || (I.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (I.cssNumber[t] || "px" !== l && +c) && re.exec(I.css(e, t));
            if (u && u[3] !== l) {
                for (c /= 2, l = l || u[3], u = +c || 1; s--;) I.style(e, t, u + l), (1 - o) * (1 - (o = a() / c || .5)) <= 0 && (s = 0), u /= o;
                u *= 2, I.style(e, t, u + l), n = n || []
            }
            return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i
        }
        var ue = {};

        function de(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = ue[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = I.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i)
        }

        function pe(e, t) {
            for (var n, r, i = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ce(r) && (i[o] = de(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n)));
            for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }
        I.fn.extend({
            show: function() {
                return pe(this, !0)
            },
            hide: function() {
                return pe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    ce(this) ? I(this).show() : I(this).hide()
                }))
            }
        });
        var fe, he, Ee = /^(?:checkbox|radio)$/i,
            _e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i;
        fe = g.createDocumentFragment().appendChild(g.createElement("div")), (he = g.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), _.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", _.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", _.option = !!fe.lastChild;
        var Te = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function ge(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && R(e, t) ? I.merge([e], n) : n
        }

        function Se(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
        }
        Te.tbody = Te.tfoot = Te.colgroup = Te.caption = Te.thead, Te.th = Te.td, _.option || (Te.optgroup = Te.option = [1, "<select multiple='multiple'>", "</select>"]);
        var Ne = /<|&#?\w+;/;

        function Ae(e, t, n, r, i) {
            for (var o, s, a, c, l, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                if ((o = e[f]) || 0 === o)
                    if ("object" === A(o)) I.merge(p, o.nodeType ? [o] : o);
                    else if (Ne.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (_e.exec(o) || ["", ""])[1].toLowerCase(), c = Te[a] || Te._default, s.innerHTML = c[1] + I.htmlPrefilter(o) + c[2], u = c[0]; u--;) s = s.lastChild;
                I.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
            } else p.push(t.createTextNode(o));
            for (d.textContent = "", f = 0; o = p[f++];)
                if (r && I.inArray(o, r) > -1) i && i.push(o);
                else if (l = se(o), s = ge(d.appendChild(o), "script"), l && Se(s), n)
                for (u = 0; o = s[u++];) me.test(o.type || "") && n.push(o);
            return d
        }
        var Ie = /^([^.]*)(?:\.(.+)|)/;

        function Oe() {
            return !0
        }

        function ye() {
            return !1
        }

        function Ce(e, t) {
            return e === function() {
                try {
                    return g.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function ve(e, t, n, r, i, o) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (r = r || n, n = void 0), t) ve(e, a, n, r, t[a], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ye;
            else if (!i) return e;
            return 1 === o && (s = i, (i = function(e) {
                return I().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = I.guid++)), e.each((function() {
                I.event.add(this, t, i, r, n)
            }))
        }

        function be(e, t, n) {
            n ? (Q.set(e, t, !1), I.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, i, o = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (o.length)(I.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (o = a.call(arguments), Q.set(this, t, o), r = n(this, t), this[t](), o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
                    } else o.length && (Q.set(this, t, {
                        value: I.event.trigger(I.extend(o[0], I.Event.prototype), o.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(e, t) && I.event.add(e, t, Oe)
        }
        I.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, s, a, c, l, u, d, p, f, h, E, _ = Q.get(e);
                if (X(e))
                    for (n.handler && (n = (o = n).handler, i = o.selector), i && I.find.matchesSelector(oe, i), n.guid || (n.guid = I.guid++), (c = _.events) || (c = _.events = Object.create(null)), (s = _.handle) || (s = _.handle = function(t) {
                            return void 0 !== I && I.event.triggered !== t.type ? I.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match(F) || [""]).length; l--;) f = E = (a = Ie.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = I.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = I.event.special[f] || {}, u = I.extend({
                        type: f,
                        origType: E,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && I.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = c[f]) || ((p = c[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), I.event.global[f] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, s, a, c, l, u, d, p, f, h, E, _ = Q.hasData(e) && Q.get(e);
                if (_ && (c = _.events)) {
                    for (l = (t = (t || "").match(F) || [""]).length; l--;)
                        if (f = E = (a = Ie.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                            for (d = I.event.special[f] || {}, p = c[f = (r ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) u = p[o], !i && E !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, _.handle) || I.removeEvent(e, f, _.handle), delete c[f])
                        } else
                            for (f in c) I.event.remove(e, f + t[l], n, r, !0);
                    I.isEmptyObject(c) && Q.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, s, a = new Array(arguments.length),
                    c = I.event.fix(e),
                    l = (Q.get(this, "events") || Object.create(null))[c.type] || [],
                    u = I.event.special[c.type] || {};
                for (a[0] = c, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                if (c.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, c)) {
                    for (s = I.event.handlers.call(this, c, l), t = 0;
                        (i = s[t++]) && !c.isPropagationStopped();)
                        for (c.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !1 !== o.namespace && !c.rnamespace.test(o.namespace) || (c.handleObj = o, c.data = o.data, void 0 !== (r = ((I.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (c.result = r) && (c.preventDefault(), c.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, c), c.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, s, a = [],
                    c = t.delegateCount,
                    l = e.target;
                if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [], s = {}, n = 0; n < c; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? I(i, this).index(l) > -1 : I.find(i, this, null, [l]).length), s[i] && o.push(r);
                            o.length && a.push({
                                elem: l,
                                handlers: o
                            })
                        } return l = this, c < t.length && a.push({
                    elem: l,
                    handlers: t.slice(c)
                }), a
            },
            addProp: function(e, t) {
                Object.defineProperty(I.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[I.expando] ? e : new I.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return Ee.test(t.type) && t.click && R(t, "input") && be(t, "click", Oe), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return Ee.test(t.type) && t.click && R(t, "input") && be(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return Ee.test(t.type) && t.click && R(t, "input") && Q.get(t, "click") || R(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, I.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, I.Event = function(e, t) {
            if (!(this instanceof I.Event)) return new I.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Oe : ye, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && I.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[I.expando] = !0
        }, I.Event.prototype = {
            constructor: I.Event,
            isDefaultPrevented: ye,
            isPropagationStopped: ye,
            isImmediatePropagationStopped: ye,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Oe, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Oe, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Oe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, I.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, I.event.addProp), I.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            I.event.special[e] = {
                setup: function() {
                    return be(this, e, Ce), !1
                },
                trigger: function() {
                    return be(this, e), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: t
            }
        })), I.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            I.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === r || I.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), I.fn.extend({
            on: function(e, t, n, r) {
                return ve(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return ve(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, I(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ye), this.each((function() {
                    I.event.remove(this, e, n, t)
                }))
            }
        });
        var Re = /<script|<style|<link/i,
            Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
            we = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function De(e, t) {
            return R(e, "table") && R(11 !== t.nodeType ? t : t.firstChild, "tr") && I(e).children("tbody")[0] || e
        }

        function Pe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function xe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Ge(e, t) {
            var n, r, i, o, s, a;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (a = Q.get(e).events))
                    for (i in Q.remove(t, "handle events"), a)
                        for (n = 0, r = a[i].length; n < r; n++) I.event.add(t, i, a[i][n]);
                J.hasData(e) && (o = J.access(e), s = I.extend({}, o), J.set(t, s))
            }
        }

        function Me(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ee.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Fe(e, t, n, r) {
            t = c(t);
            var i, o, s, a, l, u, d = 0,
                p = e.length,
                f = p - 1,
                h = t[0],
                E = m(h);
            if (E || p > 1 && "string" == typeof h && !_.checkClone && Le.test(h)) return e.each((function(i) {
                var o = e.eq(i);
                E && (t[0] = h.call(this, i, o.html())), Fe(o, t, n, r)
            }));
            if (p && (o = (i = Ae(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (a = (s = I.map(ge(i, "script"), Pe)).length; d < p; d++) l = i, d !== f && (l = I.clone(l, !0, !0), a && I.merge(s, ge(l, "script"))), n.call(e[d], l, d);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, I.map(s, xe), d = 0; d < a; d++) l = s[d], me.test(l.type || "") && !Q.access(l, "globalEval") && I.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? I._evalUrl && !l.noModule && I._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, u) : N(l.textContent.replace(we, ""), l, u))
            }
            return e
        }

        function Ue(e, t, n) {
            for (var r, i = t ? I.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || I.cleanData(ge(r)), r.parentNode && (n && se(r) && Se(ge(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        I.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, i, o, s, a = e.cloneNode(!0),
                    c = se(e);
                if (!(_.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || I.isXMLDoc(e)))
                    for (s = ge(a), r = 0, i = (o = ge(e)).length; r < i; r++) Me(o[r], s[r]);
                if (t)
                    if (n)
                        for (o = o || ge(e), s = s || ge(a), r = 0, i = o.length; r < i; r++) Ge(o[r], s[r]);
                    else Ge(e, a);
                return (s = ge(a, "script")).length > 0 && Se(s, !c && ge(e, "script")), a
            },
            cleanData: function(e) {
                for (var t, n, r, i = I.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (X(n)) {
                        if (t = n[Q.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? I.event.remove(n, r) : I.removeEvent(n, r, t.handle);
                            n[Q.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }), I.fn.extend({
            detach: function(e) {
                return Ue(this, e, !0)
            },
            remove: function(e) {
                return Ue(this, e)
            },
            text: function(e) {
                return K(this, (function(e) {
                    return void 0 === e ? I.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            },
            append: function() {
                return Fe(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
                }))
            },
            prepend: function() {
                return Fe(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = De(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() {
                return Fe(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            },
            after: function() {
                return Fe(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (I.cleanData(ge(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return I.clone(this, e, t)
                }))
            },
            html: function(e) {
                return K(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Re.test(e) && !Te[(_e.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = I.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (I.cleanData(ge(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Fe(this, arguments, (function(t) {
                    var n = this.parentNode;
                    I.inArray(this, e) < 0 && (I.cleanData(ge(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), I.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            I.fn[e] = function(e) {
                for (var n, r = [], i = I(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), I(i[s])[t](n), l.apply(r, n.get());
                return this.pushStack(r)
            }
        }));
        var ke = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            He = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            We = function(e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in r = n.call(e), t) e.style[i] = o[i];
                return r
            },
            Be = new RegExp(ie.join("|"), "i");

        function je(e, t, n) {
            var r, i, o, s, a = e.style;
            return (n = n || He(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = I.style(e, t)), !_.pixelBoxStyles() && ke.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function Ke(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(l).appendChild(u);
                    var e = n.getComputedStyle(u);
                    r = "1%" !== e.top, c = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), oe.removeChild(l), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, o, s, a, c, l = g.createElement("div"),
                u = g.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", _.clearCloneStyle = "content-box" === u.style.backgroundClip, I.extend(_, {
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), c
                },
                scrollboxSize: function() {
                    return e(), o
                },
                reliableTrDimensions: function() {
                    var e, t, r, i;
                    return null == a && (e = g.createElement("table"), t = g.createElement("tr"), r = g.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", oe.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, oe.removeChild(e)), a
                }
            }))
        }();
        var Ye = ["Webkit", "Moz", "ms"],
            Ve = g.createElement("div").style,
            qe = {};

        function $e(e) {
            var t = I.cssProps[e] || qe[e];
            return t || (e in Ve ? e : qe[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;)
                    if ((e = Ye[n] + t) in Ve) return e
            }(e) || e)
        }
        var Xe = /^(none|table(?!-c[ea]).+)/,
            ze = /^--/,
            Qe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Je = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Ze(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function et(e, t, n, r, i, o) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                c = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (c += I.css(e, n + ie[s], !0, i)), r ? ("content" === n && (c -= I.css(e, "padding" + ie[s], !0, i)), "margin" !== n && (c -= I.css(e, "border" + ie[s] + "Width", !0, i))) : (c += I.css(e, "padding" + ie[s], !0, i), "padding" !== n ? c += I.css(e, "border" + ie[s] + "Width", !0, i) : a += I.css(e, "border" + ie[s] + "Width", !0, i));
            return !r && o >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - a - .5)) || 0), c
        }

        function tt(e, t, n) {
            var r = He(e),
                i = (!_.boxSizingReliable() || n) && "border-box" === I.css(e, "boxSizing", !1, r),
                o = i,
                s = je(e, t, r),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (ke.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!_.boxSizingReliable() && i || !_.reliableTrDimensions() && R(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === I.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === I.css(e, "boxSizing", !1, r), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
        }

        function nt(e, t, n, r, i) {
            return new nt.prototype.init(e, t, n, r, i)
        }
        I.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = je(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, s, a = $(t),
                        c = ze.test(t),
                        l = e.style;
                    if (c || (t = $e(a)), s = I.cssHooks[t] || I.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = re.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || c || (n += i && i[3] || (I.cssNumber[a] ? "" : "px")), _.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (c ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, s, a = $(t);
                return ze.test(t) || (t = $e(a)), (s = I.cssHooks[t] || I.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = je(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), I.each(["height", "width"], (function(e, t) {
            I.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !Xe.test(I.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : We(e, Qe, (function() {
                        return tt(e, t, r)
                    }))
                },
                set: function(e, n, r) {
                    var i, o = He(e),
                        s = !_.scrollboxSize() && "absolute" === o.position,
                        a = (s || r) && "border-box" === I.css(e, "boxSizing", !1, o),
                        c = r ? et(e, t, r, a, o) : 0;
                    return a && s && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), c && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = I.css(e, t)), Ze(0, n, c)
                }
            }
        })), I.cssHooks.marginLeft = Ke(_.reliableMarginLeft, (function(e, t) {
            if (t) return (parseFloat(je(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), I.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            I.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (I.cssHooks[e + t].set = Ze)
        })), I.fn.extend({
            css: function(e, t) {
                return K(this, (function(e, t, n) {
                    var r, i, o = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (r = He(e), i = t.length; s < i; s++) o[t[s]] = I.css(e, t[s], !1, r);
                        return o
                    }
                    return void 0 !== n ? I.style(e, t, n) : I.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), I.Tween = nt, nt.prototype = {
            constructor: nt,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || I.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (I.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = I.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
            }
        }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = I.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    I.fx.step[e.prop] ? I.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !I.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)] ? e.elem[e.prop] = e.now : I.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, I.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, I.fx = nt.prototype.init, I.fx.step = {};
        var rt, it, ot = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;

        function at() {
            it && (!1 === g.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, I.fx.interval), I.fx.tick())
        }

        function ct() {
            return n.setTimeout((function() {
                rt = void 0
            })), rt = Date.now()
        }

        function lt(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function ut(e, t, n) {
            for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function dt(e, t, n) {
            var r, i, o = 0,
                s = dt.prefilters.length,
                a = I.Deferred().always((function() {
                    delete c.elem
                })),
                c = function() {
                    if (i) return !1;
                    for (var t = rt || ct(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(r);
                    return a.notifyWith(e, [l, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
                },
                l = a.promise({
                    elem: e,
                    props: I.extend({}, t),
                    opts: I.extend(!0, {
                        specialEasing: {},
                        easing: I.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || ct(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = I.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                    }
                }),
                u = l.props;
            for (! function(e, t) {
                    var n, r, i, o, s;
                    for (n in e)
                        if (i = t[r = $(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = I.cssHooks[r]) && "expand" in s)
                            for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(u, l.opts.specialEasing); o < s; o++)
                if (r = dt.prefilters[o].call(l, e, u, l.opts)) return m(r.stop) && (I._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return I.map(u, ut, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), I.fx.timer(I.extend(c, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l
        }
        I.Animation = I.extend(dt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return le(n.elem, e, re.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    m(e) ? (t = e, e = ["*"]) : e = e.match(F);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, i, o, s, a, c, l, u, d = "width" in t || "height" in t,
                        p = this,
                        f = {},
                        h = e.style,
                        E = e.nodeType && ce(e),
                        _ = Q.get(e, "fxshow");
                    for (r in n.queue || (null == (s = I._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || a()
                        }), s.unqueued++, p.always((function() {
                            p.always((function() {
                                s.unqueued--, I.queue(e, "fx").length || s.empty.fire()
                            }))
                        }))), t)
                        if (i = t[r], ot.test(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (E ? "hide" : "show")) {
                                if ("show" !== i || !_ || void 0 === _[r]) continue;
                                E = !0
                            }
                            f[r] = _ && _[r] || I.style(e, r)
                        } if ((c = !I.isEmptyObject(t)) || !I.isEmptyObject(f))
                        for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = _ && _.display) && (l = Q.get(e, "display")), "none" === (u = I.css(e, "display")) && (l ? u = l : (pe([e], !0), l = e.style.display || l, u = I.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === I.css(e, "float") && (c || (p.done((function() {
                                h.display = l
                            })), null == l && (u = h.display, l = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            }))), c = !1, f) c || (_ ? "hidden" in _ && (E = _.hidden) : _ = Q.access(e, "fxshow", {
                            display: l
                        }), o && (_.hidden = !E), E && pe([e], !0), p.done((function() {
                            for (r in E || pe([e]), Q.remove(e, "fxshow"), f) I.style(e, r, f[r])
                        }))), c = ut(E ? _[r] : 0, r, p), r in _ || (_[r] = c.start, E && (c.end = c.start, c.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                }
            }), I.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? I.extend({}, e) : {
                    complete: n || !n && t || m(e) && e,
                    duration: e,
                    easing: n && t || t && !m(t) && t
                };
                return I.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in I.fx.speeds ? r.duration = I.fx.speeds[r.duration] : r.duration = I.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    m(r.old) && r.old.call(this), r.queue && I.dequeue(this, r.queue)
                }, r
            }, I.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(ce).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = I.isEmptyObject(e),
                        o = I.speed(t, n, r),
                        s = function() {
                            var t = dt(this, I.extend({}, e), o);
                            (i || Q.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = I.timers,
                            s = Q.get(this);
                        if (i) s[i] && s[i].stop && r(s[i]);
                        else
                            for (i in s) s[i] && s[i].stop && st.test(i) && r(s[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || I.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = Q.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = I.timers,
                            s = r ? r.length : 0;
                        for (n.finish = !0, I.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), I.each(["toggle", "show", "hide"], (function(e, t) {
                var n = I.fn[t];
                I.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i)
                }
            })), I.each({
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                I.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            })), I.timers = [], I.fx.tick = function() {
                var e, t = 0,
                    n = I.timers;
                for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || I.fx.stop(), rt = void 0
            }, I.fx.timer = function(e) {
                I.timers.push(e), I.fx.start()
            }, I.fx.interval = 13, I.fx.start = function() {
                it || (it = !0, at())
            }, I.fx.stop = function() {
                it = null
            }, I.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, I.fn.delay = function(e, t) {
                return e = I.fx && I.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                }))
            },
            function() {
                var e = g.createElement("input"),
                    t = g.createElement("select").appendChild(g.createElement("option"));
                e.type = "checkbox", _.checkOn = "" !== e.value, _.optSelected = t.selected, (e = g.createElement("input")).value = "t", e.type = "radio", _.radioValue = "t" === e.value
            }();
        var pt, ft = I.expr.attrHandle;
        I.fn.extend({
            attr: function(e, t) {
                return K(this, I.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    I.removeAttr(this, e)
                }))
            }
        }), I.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? I.prop(e, t, n) : (1 === o && I.isXMLDoc(e) || (i = I.attrHooks[t.toLowerCase()] || (I.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void I.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = I.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!_.radioValue && "radio" === t && R(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(F);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), pt = {
            set: function(e, t, n) {
                return !1 === t ? I.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, I.each(I.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = ft[t] || I.find.attr;
            ft[t] = function(e, t, r) {
                var i, o, s = t.toLowerCase();
                return r || (o = ft[s], ft[s] = i, i = null != n(e, t, r) ? s : null, ft[s] = o), i
            }
        }));
        var ht = /^(?:input|select|textarea|button)$/i,
            Et = /^(?:a|area)$/i;

        function _t(e) {
            return (e.match(F) || []).join(" ")
        }

        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Tt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(F) || []
        }
        I.fn.extend({
            prop: function(e, t) {
                return K(this, I.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[I.propFix[e] || e]
                }))
            }
        }), I.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && I.isXMLDoc(e) || (t = I.propFix[t] || t, i = I.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = I.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), _.optSelected || (I.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), I.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            I.propFix[this.toLowerCase()] = this
        })), I.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, s, a, c = 0;
                if (m(e)) return this.each((function(t) {
                    I(this).addClass(e.call(this, t, mt(this)))
                }));
                if ((t = Tt(e)).length)
                    for (; n = this[c++];)
                        if (i = mt(n), r = 1 === n.nodeType && " " + _t(i) + " ") {
                            for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (a = _t(r)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, s, a, c = 0;
                if (m(e)) return this.each((function(t) {
                    I(this).removeClass(e.call(this, t, mt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = Tt(e)).length)
                    for (; n = this[c++];)
                        if (i = mt(n), r = 1 === n.nodeType && " " + _t(i) + " ") {
                            for (s = 0; o = t[s++];)
                                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                            i !== (a = _t(r)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(n) {
                    I(this).toggleClass(e.call(this, n, mt(this), t), t)
                })) : this.each((function() {
                    var t, i, o, s;
                    if (r)
                        for (i = 0, o = I(this), s = Tt(e); t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + _t(mt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var gt = /\r/g;
        I.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = m(e), this.each((function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, I(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = I.map(i, (function(e) {
                        return null == e ? "" : e + ""
                    }))), (t = I.valHooks[this.type] || I.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                }))) : i ? (t = I.valHooks[i.type] || I.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
            }
        }), I.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = I.find.attr(e, "value");
                        return null != t ? t : _t(I.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            c = s ? o + 1 : i.length;
                        for (r = o < 0 ? c : s ? o : 0; r < c; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !R(n.parentNode, "optgroup"))) {
                                if (t = I(n).val(), s) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = I.makeArray(t), s = i.length; s--;)((r = i[s]).selected = I.inArray(I.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), I.each(["radio", "checkbox"], (function() {
            I.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = I.inArray(I(e).val(), t) > -1
                }
            }, _.checkOn || (I.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), _.focusin = "onfocusin" in n;
        var St = /^(?:focusinfocus|focusoutblur)$/,
            Nt = function(e) {
                e.stopPropagation()
            };
        I.extend(I.event, {
            trigger: function(e, t, r, i) {
                var o, s, a, c, l, u, d, p, h = [r || g],
                    E = f.call(e, "type") ? e.type : e,
                    _ = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = a = r = r || g, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(E + I.event.triggered) && (E.indexOf(".") > -1 && (_ = E.split("."), E = _.shift(), _.sort()), l = E.indexOf(":") < 0 && "on" + E, (e = e[I.expando] ? e : new I.Event(E, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : I.makeArray(t, [e]), d = I.event.special[E] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                    if (!i && !d.noBubble && !T(r)) {
                        for (c = d.delegateType || E, St.test(c + E) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                        a === (r.ownerDocument || g) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0;
                        (s = h[o++]) && !e.isPropagationStopped();) p = s, e.type = o > 1 ? c : d.bindType || E, (u = (Q.get(s, "events") || Object.create(null))[e.type] && Q.get(s, "handle")) && u.apply(s, t), (u = l && s[l]) && u.apply && X(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = E, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !X(r) || l && m(r[E]) && !T(r) && ((a = r[l]) && (r[l] = null), I.event.triggered = E, e.isPropagationStopped() && p.addEventListener(E, Nt), r[E](), e.isPropagationStopped() && p.removeEventListener(E, Nt), I.event.triggered = void 0, a && (r[l] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = I.extend(new I.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                I.event.trigger(r, null, t)
            }
        }), I.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    I.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return I.event.trigger(e, t, n, !0)
            }
        }), _.focusin || I.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                I.event.simulate(t, e.target, I.event.fix(e))
            };
            I.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this,
                        i = Q.access(r, t);
                    i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this,
                        i = Q.access(r, t) - 1;
                    i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                }
            }
        }));
        var At = n.location,
            It = {
                guid: Date.now()
            },
            Ot = /\?/;
        I.parseXML = function(e) {
            var t, r;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return r = t && t.getElementsByTagName("parsererror")[0], t && !r || I.error("Invalid XML: " + (r ? I.map(r.childNodes, (function(e) {
                return e.textContent
            })).join("\n") : e)), t
        };
        var yt = /\[\]$/,
            Ct = /\r?\n/g,
            vt = /^(?:submit|button|image|reset|file)$/i,
            bt = /^(?:input|select|textarea|keygen)/i;

        function Rt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) I.each(t, (function(t, i) {
                n || yt.test(e) ? r(e, i) : Rt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }));
            else if (n || "object" !== A(t)) r(e, t);
            else
                for (i in t) Rt(e + "[" + i + "]", t[i], n, r)
        }
        I.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = m(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !I.isPlainObject(e)) I.each(e, (function() {
                i(this.name, this.value)
            }));
            else
                for (n in e) Rt(n, e[n], t, i);
            return r.join("&")
        }, I.fn.extend({
            serialize: function() {
                return I.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = I.prop(this, "elements");
                    return e ? I.makeArray(e) : this
                })).filter((function() {
                    var e = this.type;
                    return this.name && !I(this).is(":disabled") && bt.test(this.nodeName) && !vt.test(e) && (this.checked || !Ee.test(e))
                })).map((function(e, t) {
                    var n = I(this).val();
                    return null == n ? null : Array.isArray(n) ? I.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ct, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(Ct, "\r\n")
                    }
                })).get()
            }
        });
        var Lt = /%20/g,
            wt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            xt = /^(?:GET|HEAD)$/,
            Gt = /^\/\//,
            Mt = {},
            Ft = {},
            Ut = "*/".concat("*"),
            kt = g.createElement("a");

        function Ht(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(F) || [];
                if (m(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Wt(e, t, n, r) {
            var i = {},
                o = e === Ft;

            function s(a) {
                var c;
                return i[a] = !0, I.each(e[a] || [], (function(e, a) {
                    var l = a(t, n, r);
                    return "string" != typeof l || o || i[l] ? o ? !(c = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1)
                })), c
            }
            return s(t.dataTypes[0]) || !i["*"] && s("*")
        }

        function Bt(e, t) {
            var n, r, i = I.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && I.extend(!0, e, r), e
        }
        kt.href = At.href, I.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ut,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": I.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Bt(Bt(e, I.ajaxSettings), t) : Bt(I.ajaxSettings, e)
            },
            ajaxPrefilter: Ht(Mt),
            ajaxTransport: Ht(Ft),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, s, a, c, l, u, d, p, f = I.ajaxSetup({}, t),
                    h = f.context || f,
                    E = f.context && (h.nodeType || h.jquery) ? I(h) : I.event,
                    _ = I.Deferred(),
                    m = I.Callbacks("once memory"),
                    T = f.statusCode || {},
                    S = {},
                    N = {},
                    A = "canceled",
                    O = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!s)
                                    for (s = {}; t = Pt.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return l ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = N[e.toLowerCase()] = N[e.toLowerCase()] || e, S[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == l && (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (l) O.always(e[O.status]);
                                else
                                    for (t in e) T[t] = [T[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || A;
                            return r && r.abort(t), y(0, t), this
                        }
                    };
                if (_.promise(O), f.url = ((e || f.url || At.href) + "").replace(Gt, At.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(F) || [""], null == f.crossDomain) {
                    c = g.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = kt.protocol + "//" + kt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = I.param(f.data, f.traditional)), Wt(Mt, f, t, O), l) return O;
                for (d in (u = I.event && f.global) && 0 == I.active++ && I.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !xt.test(f.type), i = f.url.replace(wt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Lt, "+")) : (p = f.url.slice(i.length), f.data && (f.processData || "string" == typeof f.data) && (i += (Ot.test(i) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (i = i.replace(Dt, "$1"), p = (Ot.test(i) ? "&" : "?") + "_=" + It.guid++ + p), f.url = i + p), f.ifModified && (I.lastModified[i] && O.setRequestHeader("If-Modified-Since", I.lastModified[i]), I.etag[i] && O.setRequestHeader("If-None-Match", I.etag[i])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && O.setRequestHeader("Content-Type", f.contentType), O.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : f.accepts["*"]), f.headers) O.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, O, f) || l)) return O.abort();
                if (A = "abort", m.add(f.complete), O.done(f.success), O.fail(f.error), r = Wt(Ft, f, t, O)) {
                    if (O.readyState = 1, u && E.trigger("ajaxSend", [O, f]), l) return O;
                    f.async && f.timeout > 0 && (a = n.setTimeout((function() {
                        O.abort("timeout")
                    }), f.timeout));
                    try {
                        l = !1, r.send(S, y)
                    } catch (e) {
                        if (l) throw e;
                        y(-1, e)
                    }
                } else y(-1, "No Transport");

                function y(e, t, s, c) {
                    var d, p, g, S, N, A = t;
                    l || (l = !0, a && n.clearTimeout(a), r = void 0, o = c || "", O.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, s && (S = function(e, t, n) {
                        for (var r, i, o, s, a = e.contents, c = e.dataTypes;
                            "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in a)
                                if (a[i] && a[i].test(r)) {
                                    c.unshift(i);
                                    break
                                } if (c[0] in n) o = c[0];
                        else {
                            for (i in n) {
                                if (!c[0] || e.converters[i + " " + c[0]]) {
                                    o = i;
                                    break
                                }
                                s || (s = i)
                            }
                            o = o || s
                        }
                        if (o) return o !== c[0] && c.unshift(o), n[o]
                    }(f, O, s)), !d && I.inArray("script", f.dataTypes) > -1 && I.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), S = function(e, t, n, r) {
                        var i, o, s, a, c, l = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                        for (o = u.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
                                if ("*" === o) o = c;
                                else if ("*" !== c && c !== o) {
                            if (!(s = l[c + " " + o] || l["* " + o]))
                                for (i in l)
                                    if ((a = i.split(" "))[1] === o && (s = l[c + " " + a[0]] || l["* " + a[0]])) {
                                        !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], u.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + c + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, S, O, d), d ? (f.ifModified && ((N = O.getResponseHeader("Last-Modified")) && (I.lastModified[i] = N), (N = O.getResponseHeader("etag")) && (I.etag[i] = N)), 204 === e || "HEAD" === f.type ? A = "nocontent" : 304 === e ? A = "notmodified" : (A = S.state, p = S.data, d = !(g = S.error))) : (g = A, !e && A || (A = "error", e < 0 && (e = 0))), O.status = e, O.statusText = (t || A) + "", d ? _.resolveWith(h, [p, A, O]) : _.rejectWith(h, [O, A, g]), O.statusCode(T), T = void 0, u && E.trigger(d ? "ajaxSuccess" : "ajaxError", [O, f, d ? p : g]), m.fireWith(h, [O, A]), u && (E.trigger("ajaxComplete", [O, f]), --I.active || I.event.trigger("ajaxStop")))
                }
                return O
            },
            getJSON: function(e, t, n) {
                return I.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return I.get(e, void 0, t, "script")
            }
        }), I.each(["get", "post"], (function(e, t) {
            I[t] = function(e, n, r, i) {
                return m(n) && (i = i || r, r = n, n = void 0), I.ajax(I.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, I.isPlainObject(e) && e))
            }
        })), I.ajaxPrefilter((function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        })), I._evalUrl = function(e, t, n) {
            return I.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    I.globalEval(e, t, n)
                }
            })
        }, I.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])), t = I(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            },
            wrapInner: function(e) {
                return m(e) ? this.each((function(t) {
                    I(this).wrapInner(e.call(this, t))
                })) : this.each((function() {
                    var t = I(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) {
                var t = m(e);
                return this.each((function(n) {
                    I(this).wrapAll(t ? e.call(this, n) : e)
                }))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    I(this).replaceWith(this.childNodes)
                })), this
            }
        }), I.expr.pseudos.hidden = function(e) {
            return !I.expr.pseudos.visible(e)
        }, I.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, I.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var jt = {
                0: 200,
                1223: 204
            },
            Kt = I.ajaxSettings.xhr();
        _.cors = !!Kt && "withCredentials" in Kt, _.ajax = Kt = !!Kt, I.ajaxTransport((function(e) {
            var t, r;
            if (_.cors || Kt && !e.crossDomain) return {
                send: function(i, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
                    t = function(e) {
                        return function() {
                            t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(jt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = t(), r = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                        4 === a.readyState && n.setTimeout((function() {
                            t && r()
                        }))
                    }, t = t("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        })), I.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        })), I.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return I.globalEval(e), e
                }
            }
        }), I.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), I.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function(r, i) {
                    t = I("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), g.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }));
        var Yt, Vt = [],
            qt = /(=)\?(?=&|$)|\?\?/;
        I.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Vt.pop() || I.expando + "_" + It.guid++;
                return this[e] = !0, e
            }
        }), I.ajaxPrefilter("json jsonp", (function(e, t, r) {
            var i, o, s, a = !1 !== e.jsonp && (qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(qt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return s || I.error(i + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                s = arguments
            }, r.always((function() {
                void 0 === o ? I(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Vt.push(i)), s && m(o) && o(s[0]), s = o = void 0
            })), "script"
        })), _.createHTMLDocument = ((Yt = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), I.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (_.createHTMLDocument ? ((r = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(r)) : t = g), o = !n && [], (i = L.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && I(o).remove(), I.merge([], i.childNodes)));
            var r, i, o
        }, I.fn.load = function(e, t, n) {
            var r, i, o, s = this,
                a = e.indexOf(" ");
            return a > -1 && (r = _t(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && I.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                o = arguments, s.html(r ? I("<div>").append(I.parseHTML(e)).find(r) : e)
            })).always(n && function(e, t) {
                s.each((function() {
                    n.apply(this, o || [e.responseText, t, e])
                }))
            }), this
        }, I.expr.pseudos.animated = function(e) {
            return I.grep(I.timers, (function(t) {
                return e === t.elem
            })).length
        }, I.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, s, a, c, l = I.css(e, "position"),
                    u = I(e),
                    d = {};
                "static" === l && (e.style.position = "relative"), a = u.offset(), o = I.css(e, "top"), c = I.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1 ? (s = (r = u.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(c) || 0), m(t) && (t = t.call(e, n, I.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, I.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    I.offset.setOffset(this, e, t)
                }));
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === I.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === I.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = I(e).offset()).top += I.css(e, "borderTopWidth", !0), i.left += I.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - I.css(r, "marginTop", !0),
                        left: t.left - i.left - I.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === I.css(e, "position");) e = e.offsetParent;
                    return e || oe
                }))
            }
        }), I.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            I.fn[e] = function(r) {
                return K(this, (function(e, r, i) {
                    var o;
                    if (T(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }), e, r, arguments.length)
            }
        })), I.each(["top", "left"], (function(e, t) {
            I.cssHooks[t] = Ke(_.pixelPosition, (function(e, n) {
                if (n) return n = je(e, t), ke.test(n) ? I(e).position()[t] + "px" : n
            }))
        })), I.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            I.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                I.fn[r] = function(i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return K(this, (function(t, n, i) {
                        var o;
                        return T(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? I.css(t, n, a) : I.style(t, n, i, a)
                    }), t, s ? i : void 0, s)
                }
            }))
        })), I.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            I.fn[t] = function(e) {
                return this.on(t, e)
            }
        })), I.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), I.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            I.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }));
        var $t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        I.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = a.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || I.guid++, i
        }, I.holdReady = function(e) {
            e ? I.readyWait++ : I.ready(!0)
        }, I.isArray = Array.isArray, I.parseJSON = JSON.parse, I.nodeName = R, I.isFunction = m, I.isWindow = T, I.camelCase = $, I.type = A, I.now = Date.now, I.isNumeric = function(e) {
            var t = I.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, I.trim = function(e) {
            return null == e ? "" : (e + "").replace($t, "")
        }, void 0 === (r = function() {
            return I
        }.apply(t, [])) || (e.exports = r);
        var Xt = n.jQuery,
            zt = n.$;
        return I.noConflict = function(e) {
            return n.$ === I && (n.$ = zt), e && n.jQuery === I && (n.jQuery = Xt), I
        }, void 0 === i && (n.jQuery = n.$ = I), I
    }))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return a
        }));
        var r = n(0),
            i = n(27),
            o = n(5),
            s = n(6);
        class a {
            static sendTelemetryMessages(t, n) {
                const {
                    sendTelemetry: i
                } = n.trigger, a = n.trigger.action, c = [r.h.ACTION.CLICK];

                function l(e) {
                    n.messages.forEach(n => {
                        const l = Object.assign({}, n.template),
                            u = i && (void 0 === l.count || 0 !== l.count);
                        let d = c.includes(a);
                        if (a === r.h.ACTION.KEYDOWN && t.whitelistedKeys) {
                            const n = e.keyCode;
                            d = t.whitelistedKeys.includes(n)
                        }(u || d) && (t.isFromBackground ? o.a.messageDispatcher.sendTelemetry(JSON.stringify(l)) : s.a.sendTelemetry(JSON.stringify(l)))
                    })
                }
                n.trigger.selector && n.trigger.action ? t.containerMeta ? t.containerMeta.query(n.trigger.selector).eq(0).on(n.trigger.action, l) : e(document).ready(() => e(n.trigger.selector).eq(0).on(n.trigger.action, l)) : (i || n.trigger.state === t.state) && l()
            }
            static handle(e) {
                new i.a(e).fetchTelemetryHandlers(e.identifier).forEach(t => {
                    this.sendTelemetryMessages(e, t)
                })
            }
        }
    }).call(this, n(13))
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return o
    })), n.d(t, "d", (function() {
        return c
    })), n.d(t, "a", (function() {
        return l
    })), n.d(t, "b", (function() {
        return d
    }));
    var r = n(3);
    class i {
        static PreprocessSecureSearchRegEx(e) {
            return e.trim().split("\n")
        }
        static getBrowserSuffix() {
            const {
                CH: e,
                FF: t,
                EDGE: n
            } = {
                CH: "_ch",
                FF: "_ff",
                IE: "_ie",
                EDGE: "_ed"
            }, i = {};
            return i[r.c.EDGE] = n, i[r.c.FIREFOX] = t, i[r.c.CHROME] = e, i[r.d.BROWSER_TYPE]
        }
    }
    const o = {
            SYSTEM: 0,
            USER: 1
        },
        {
            SYSTEM: s,
            USER: a
        } = o,
        c = {
            NONE: 0,
            INT: 1,
            INT64: 2,
            BOOL: 3,
            STRING: 4
        },
        l = {
            WEBBOOST_AUTO_PLAY_NOTIFICATION: "AutoPlayNotificationRequired",
            WEBBOOST_UPSELL_DISABLED: "WBUpsellDisabled",
            USE_NATIVE_LOGGER: "UseNativeLogger"
        },
        u = i.getBrowserSuffix(),
        d = {
            DEV_MODE: {
                scope: s,
                name: "dev_mode",
                value: !1
            },
            AFF_ID: {
                scope: s,
                name: "*Affid",
                value: 0
            },
            BINARY_VERSION: {
                scope: s,
                name: "version",
                value: null
            },
            EXTENSION_VERSION_CH: {
                scope: s,
                name: "ChromeExtVersion",
                value: "",
                writeOnly: !0
            },
            EXTENSION_VERSION_FF: {
                scope: s,
                name: "*FirefoxXPIVersion",
                value: "",
                writeOnly: !0
            },
            EXTENSION_VERSION_ED: {
                scope: s,
                name: "EdgeExtVersion",
                value: "",
                writeOnly: !0
            },
            BROWSER_TYPE: {
                scope: s,
                name: "browsertype",
                value: "",
                writeOnly: !0
            },
            USER_AGENT: {
                scope: s,
                name: "useragent",
                value: "",
                writeOnly: !0
            },
            SUGGESTION_URL: {
                scope: s,
                name: "suggestion_url",
                value: ""
            },
            SCRIPT_GENERATED_DEFAULT_SS_URL: {
                scope: a,
                name: "SCRIPT_GENERATED_DEFAULT_SS_URL" + u,
                value: ""
            },
            SECURE_SEARCH_REGEXES: {
                scope: a,
                name: "SECURE_SEARCH_REGEXES",
                value: "",
                preprocess: i.PreprocessSecureSearchRegEx
            },
            SHOW_SEARCH_SETTINGS: {
                scope: s,
                name: "*ShowSearchSettings",
                value: !0
            },
            SECURE_SEARCH_TOAST_STAMP: {
                scope: a,
                name: "*SSDateStampShowedToast" + u,
                value: 0
            },
            SECURE_SEARCH_ANNOTATION_ONLY: {
                scope: s,
                name: "*OnlyShowAnnotationsOnSecureSearch",
                value: !0
            },
            SECURE_SEARCH_SHOW_ICONS: {
                scope: a,
                name: "*Icons",
                value: !0
            },
            SECURE_SEARCH_CHOICE: {
                scope: a,
                name: "*SSToastChoice" + u,
                value: !1,
                writeOnly: !0
            },
            SS_DEF: {
                scope: s,
                name: "*SS_DEF" + u,
                value: 0
            },
            FF_EXTENSION_LAST_TOAST_TIME: {
                scope: a,
                name: "ff_extension_last_toast_time",
                value: 0,
                writeOnly: !0
            },
            FF_EXTENSION_TOAST_COUNT: {
                scope: a,
                name: "ff_extension_toast_count",
                value: 0,
                writeOnly: !0
            },
            CHECKLIST_START_INGORE_DATE_AV: {
                scope: s,
                name: "startIgnoreDateAV",
                value: "",
                writeOnly: !0
            },
            CHECKLIST_START_IGNORE_DATE_FW: {
                scope: s,
                name: "startIgnoreDateFW",
                value: "",
                writeOnly: !0
            },
            CHECKLIST_IGNORE_DURACTION: {
                scope: s,
                name: "ignoreDuration",
                value: "14",
                writeOnly: !0
            },
            CHECKLIST_GRACE_PERIOD_AV: {
                scope: s,
                name: "fixGracePeriodStartDateAV",
                value: "",
                writeOnly: !0
            },
            CHECKLIST_GRACE_PERIOD_FW: {
                scope: s,
                name: "fixGracePeriodStartDateFW",
                value: "",
                writeOnly: !0
            },
            CHECKLIST_GRACE_PERIOD_DURATION: {
                scope: s,
                name: "fixGracePeriodDuration",
                value: "24",
                writeOnly: !0
            },
            CRYPTOJACKING_DISABLED: {
                scope: s,
                name: "CryptojackingDisabled",
                value: !1
            },
            SMA_USER_TOGGLE: {
                scope: s,
                name: "sma_user_toggle" + u,
                value: !1,
                writeOnly: !0
            },
            SMA_ANNOTATION_OPTIONS: {
                scope: s,
                name: "sma_annotation_options" + u,
                value: 0,
                writeOnly: !0
            },
            PAGES_SCANNED: {
                scope: s,
                name: "*CounterPagesScanned",
                value: 0
            },
            PAGES_BLOCKED: {
                scope: s,
                name: "*CounterPagesBlocked",
                value: 0
            },
            DOWNLOADS_SCANNED: {
                scope: s,
                name: "*CounterDownloadsScanned",
                value: 0
            },
            DOWNLOADS_BLOCKED: {
                scope: s,
                name: "*CounterDownloadsBlocked",
                value: 0
            },
            CRYPTO_BLOCKED: {
                scope: s,
                name: "*CounterCryptoJackingBlocked",
                value: 0
            },
            BLOCKPAGE_WHITELIST: {
                scope: a,
                name: "*WhiteList",
                value: ""
            },
            TS_WHITELIST: {
                scope: a,
                name: "*TListWhiteList",
                value: ""
            },
            CSP_ID_SETTING: {
                scope: s,
                name: "CSPIdValue",
                value: "__not_available__"
            },
            UNINSTALL_SURVEY_ENABLED: {
                scope: s,
                name: "uninstall_survey_enabled",
                value: !1
            },
            UNINSTALL_SURVEY_URL: {
                scope: s,
                name: "uninstall_survey_url",
                value: ""
            },
            RAT_DETECTION_ENABLED: {
                scope: s,
                name: "rat_detection_enabled",
                value: !0
            },
            FIND_SIMILAR_PAGES_ENABLED: {
                scope: s,
                name: "find_similar_pages_enabled",
                value: !1
            },
            FIND_SIMILAR_PAGES_CADENCE_PER_HOUR: {
                scope: s,
                name: "find_similar_pages_cadence_per_hour",
                value: 0
            },
            FIND_SIMILAR_PAGES_TIMEOUT: {
                scope: s,
                name: "find_similar_pages_timeout",
                value: 15e3
            },
            FIND_SIMILAR_PAGES_DELAY: {
                scope: s,
                name: "find_similar_pages_delay",
                value: 0
            },
            FIND_SIMILAR_PAGES_LIMIT_COUNT_PER_DAY: {
                scope: s,
                name: "find_similar_pages_limit_count_per_day",
                value: 0
            },
            FIND_SIMILAR_PAGES_USER_TOGGLE: {
                scope: s,
                name: "find_similar_pages_user_toggle" + u,
                value: 0
            },
            IDPS_FEATURE_ENABLED: {
                scope: s,
                name: "idps_feature_enabled",
                value: 0
            },
            APS_COHORT: {
                scope: s,
                name: "aps_cohort",
                value: 0
            },
            ALT_TRIGGER: {
                scope: s,
                name: "alt_triggers_cohort",
                value: 0
            },
            IFRAME_FORM_CHECK_ENABLED: {
                scope: s,
                name: "iframe_form_check_enabled",
                value: !0
            }
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    class r {
        onHttpResponse(e) {
            if (!e.ok) {
                const t = `HttpService Status: ${e.status}\nError Text: ${e.statusText}`;
                return Promise.reject(new Error(t))
            }
            return e
        }
        sendHttpRequest({
            url: e,
            headers: t,
            body: n,
            method: r = "GET"
        }) {
            return fetch(e, {
                headers: t,
                method: r,
                body: n
            }).then(this.onHttpResponse)
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return o
        }));
        var r = n(6),
            i = n(20);
        class o {
            constructor(t = null, n = document) {
                if (this.resourcerequestor = new i.a, this.document = n, t) {
                    const n = e("#" + t);
                    n && (this.document = n[0].contentDocument)
                }
            }
            localeData(e, t = []) {
                return this.resourcerequestor.geti18nRes(e, t)
            }
            fillText(e, t) {
                const n = this.document.getElementById(e);
                if (n) {
                    const e = n.getAttribute("x-mcinsertposition");
                    if (e) return void n.insertAdjacentText(e, t);
                    n.textContent = t
                }
            }
            fillLocalizedTexts() {
                for (const {
                        id: e
                    } of this.document.querySelectorAll("*[x-mclocalizedtext]")) {
                    const t = this.localeData(e);
                    if (null == t) return !1;
                    this.fillText(e, t)
                }
                return !0
            }
            fillInputPlaceHolders() {
                for (const {
                        id: e
                    } of this.document.querySelectorAll("*[x-inputplaceholder]")) {
                    const t = this.localeData(e),
                        n = this.document.getElementById(e);
                    if (null == t) return !1;
                    null != n && n.setAttribute("placeholder", t)
                }
                return !0
            }
            fillPlaceHolderInternal(e) {
                r.a.getPlaceholderText(e).then(t => {
                    this.fillText(e, t.text)
                }).catch(() => {})
            }
            fillPlaceHolders() {
                for (const {
                        id: e
                    } of this.document.querySelectorAll("*[x-mcplaceholder]")) this.fillPlaceHolderInternal(e);
                return !0
            }
            init() {
                this.fillLocalizedTexts(), this.fillPlaceHolders(), this.fillInputPlaceHolders()
            }
        }
    }).call(this, n(13))
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }));
    class r {
        constructor() {
            this.tlds = null, this.getTlds()
        }
        getTlds() {
            fetch("https://publicsuffix.org/list/public_suffix_list.dat").then(e => e.ok ? e.text() : null).then(e => {
                const t = r.parseTLDData(e);
                this.tlds = t
            }).catch(() => null)
        }
        static parseTLDData(e) {
            const t = {};
            if (!e) return null;
            const n = e.split(/\n/);
            for (let e = 0; e < n.length; e += 1) {
                let r = n[e];
                if (!r) continue;
                const i = r.indexOf("//");
                if (0 === i) continue;
                i > 0 && (r = r.substring(0, i));
                const o = r.replace(/^(\s|!|\*\.)/g, "");
                let s = (r.match(/\./g) || []).length + 1;
                s -= r.startsWith("!") ? 1 : 0, t[o] = s
            }
            return 0 === Object.keys(t).length && t.constructor === Object ? null : t
        }
        parse(e) {
            const t = {
                    hostname: "",
                    subdomain: "",
                    domain: "",
                    domainOnly: "",
                    suffix: ""
                },
                n = new URL(e);
            if (!this.tlds || !n) return t;
            const {
                origin: r
            } = n, i = r.split(".");
            let o = "",
                s = 1;
            for (let e = i.length - 1; e >= 0; e -= 1) {
                const t = i[e];
                if (o = o ? `${t}.${o}` : t, !this.tlds[o]) break;
                s = this.tlds[o]
            }
            return i.length <= s || (t.subdomain = i.slice(0, -s - 1).join("."), t.domain = i.slice(-s - 1).join("."), t.domainOnly = i.slice(-s - 1, -s).join("."), t.suffix = i.slice(-s).join("."), t.hostname = n.hostname), t
        }
        static getURI(e) {
            let t = e.split("?");
            return t.length > 1 ? t[0] : (t = e.split("#"), t.length > 1 ? t[0] : e)
        }
        static getCleanURI(e) {
            let t = e;
            return t.endsWith("/") && (t = t.slice(0, -1)), t.startsWith("http://") ? t = t.slice(7) : t.startsWith("https://") && (t = t.slice(8)), this.getURI(t)
        }
        static getParam(e, t) {
            const n = e.indexOf("?");
            if (-1 === n) return null;
            const r = e.substring(n + 1).split("&");
            for (let e = 0; e < r.length; ++e) {
                const n = r[e].indexOf("=");
                if (-1 === n) continue;
                if (r[e].substring(0, n) === t) {
                    return r[e].substring(n + 1)
                }
            }
            return null
        }
        static getDomain(e) {
            if (void 0 === e || !/^https?:\/\//.test(e)) return "";
            return new URL(e).hostname
        }
        static decodeQueryParam(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }
    }
}, , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(16),
        i = n(2);
    class o {
        constructor() {
            this.http = new r.a
        }
        geti18nRes(e, t = []) {
            let n = i.a.i18n.getMessage(e, t);
            const r = i.a.i18n.getMessage("res_PRODUCT_NAME_TRADEMARKED");
            return n = n.replace(/%PRODUCTNAME%/g, r), n
        }
        getResStr(e, t) {
            const n = this.geti18nRes(e);
            t("??" === n ? "" : n)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    }));
    var r = n(10);
    class i {
        static getResString(e, t) {
            r.a.ANNOTATION.resourceRequestor.getResStr(e, n => {
                n ? t(n) : r.a.BackgroundIPC.logError(`Resource string ${e} failed to fetch through resource requestor`)
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return i
    })), n.d(t, "d", (function() {
        return o
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    }));
    var r = n(2);
    class i {
        static debounce(e, t, n) {
            let r;
            return (...i) => {
                const o = n && !r;
                clearTimeout(r), r = setTimeout(() => {
                    r = null, n || e(...i)
                }, t), o && e(...i)
            }
        }
        static isBrowserEN() {
            return r.a.i18n.getUILanguage().toLowerCase().startsWith("en")
        }
        static isChromeBrowser() {
            const e = window.navigator.userAgent.toLowerCase();
            return !(!e.includes("chrome") || !1 == !!window.chrome) && (!window.opr && !e.includes("edg"))
        }
    }
    const o = e => {
            "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? e() : document.addEventListener("DOMContentLoaded", e)
        },
        s = () => {
            const e = window.navigator.userAgent.toLowerCase(),
                t = /(edge)\/([\w.]+)/.exec(e) || /(edg)\/([\w.]+)/.exec(e) || /(opr)[/]([\w.]+)/.exec(e) || /(chrome)[ /]([\w.]+)/.exec(e) || /(iemobile)[/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(e) || /(webkit)[ /]([\w.]+).*(version)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(e) || /(webkit)[ /]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                n = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [],
                r = {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[4] || t[2] || "0",
                    platform: n[0] || ""
                };
            return "mozilla" === r.browser && (r.browser = "firefox"), "edg" === r.browser && (r.browser = "edge"), r
        };
    async function a(e) {
        const t = (new TextEncoder).encode(e),
            n = await crypto.subtle.digest("SHA-256", t);
        return Array.from(new Uint8Array(n)).map(e => e.toString(16).padStart(2, "0")).join("")
    }
}, , , , function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return i
    })), n.d(t, "b", (function() {
        return o
    })), n.d(t, "a", (function() {
        return s
    }));
    var r = n(7);
    const i = {
            BLOCK_PAGE: "BLOCK_PAGE",
            CRYPTOJACKING: "CRYPTOJACKING",
            TYPOSQUATTING: "TYPOSQUATTING",
            IFRAME: "IFRAME",
            RAT_DETECTION: "RAT_DETECTION"
        },
        o = {
            BLOCK_PAGE: r.c.BLOCK_PAGE_WHITELIST.name,
            CRYPTOJACKING: r.c.CRYPTO_WHITELIST.name,
            TYPOSQUATTING: r.c.TYPOSQUATTING_WHITELIST.name,
            IFRAME: r.c.BLOCK_PAGE_WHITELIST.name,
            RAT_DETECTION: r.c.RAT_DETECTION_WHITELIST.name
        },
        s = {
            ADD: "ADD",
            GET: "GET",
            REMOVE: "REMOVE",
            CLEAR: "CLEAR"
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }));
    var r = n(0),
        i = n(4);
    class o {
        constructor(e) {
            this._options = e, this.TELEMETRY_HANDLERS = this.initializeTelemetryHandler()
        }
        fetchTelemetryHandlers(e) {
            const t = [];
            return this.TELEMETRY_HANDLERS.forEach(n => {
                n.trigger.identifier && e !== n.trigger.identifier || t.push(n)
            }), t
        }
        initializeTelemetryHandler() {
            return [{
                trigger: {
                    identifier: r.b.BLOCK_PAGE,
                    sendTelemetry: this._options.isFromBackground || !1
                },
                messages: [{
                    template: {
                        name: r.d.BLOCK_PAGE,
                        interaction_type: r.e.IMPRESSION,
                        colour: r.a.toTelemetryBlockState(this._options.colour),
                        level: this._options.level,
                        style: this._options.level === r.f.FRAME ? "UNKNOWN" : this._options.blockPageStyle || "UNKNOWN",
                        _event_name: r.b.BLOCK_PAGE,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.BLOCK_PAGE,
                    selector: "#sidebar-close",
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.d.BLOCK_PAGE,
                        interaction_type: r.e.CLOSE_CLICKED,
                        colour: r.a.toTelemetryBlockState(this._options.colour),
                        level: this._options.level,
                        style: this._options.blockPageStyle || "UNKNOWN",
                        _event_name: r.b.BLOCK_PAGE,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.BROWSER_ACTION_CLICKED,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        name: r.d.BROWSER_ACTION_CLICKED,
                        interaction_type: r.e.WEBADVISOR,
                        badge_count: this._options.count,
                        _event_name: r.b.BROWSER_ACTION_CLICKED,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.BROWSER_NAVIGATE,
                    sendTelemetry: this._options.isFromBackground
                },
                messages: [{
                    template: {
                        url: this._options.url,
                        browser: i.a.browserTypeToString(),
                        _event_name: r.b.BROWSER_NAVIGATE
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.CRYPTOJACKING_BLOCK,
                    state: r.h.MISC.LOADED,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        interaction_type: r.e.IMPRESSION,
                        name: r.d.CRYPTOJACKING_BLOCK,
                        _event_name: r.b.CRYPTOJACKING_BLOCK,
                        browser: i.a.browserTypeToString(),
                        is_shown: !0,
                        domain: this._options.domain || "default",
                        crypto_miner: this._options.miner || "default"
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.CRYPTOJACKING_BLOCK,
                    selector: "#cryptojacking_learn_link",
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        interaction_type: r.e.CRYPTOJACKING.LEARN_MORE_CLICKED,
                        name: r.d.CRYPTOJACKING_BLOCK,
                        _event_name: r.b.CRYPTOJACKING_BLOCK,
                        browser: i.a.browserTypeToString(),
                        is_shown: !0,
                        domain: this._options.domain || "default",
                        crypto_miner: this._options.miner || "default"
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.CRYPTOJACKING_BLOCK,
                    selector: ".crypto-block-actions__close",
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        interaction_type: r.e.CLOSE_CLICKED,
                        name: r.d.CRYPTOJACKING_BLOCK,
                        _event_name: r.b.CRYPTOJACKING_BLOCK,
                        browser: i.a.browserTypeToString(),
                        is_shown: !0,
                        domain: this._options.domain || "default",
                        crypto_miner: this._options.miner || "default"
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.CRYPTOJACKING_BLOCK,
                    selector: "#cryptojacking_banner_allow_btn",
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        interaction_type: r.e.CRYPTOJACKING.WHITELISTED,
                        name: r.d.CRYPTOJACKING_BLOCK,
                        _event_name: r.b.CRYPTOJACKING_BLOCK,
                        browser: i.a.browserTypeToString(),
                        is_shown: !0,
                        domain: this._options.domain || "default",
                        crypto_miner: this._options.miner || "default"
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.DOWNLOAD_BLOCK,
                    state: r.h.MISC.LOADED,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        name: r.d.DOWNLOAD_BLOCK,
                        interaction_type: r.e.IMPRESSION,
                        process_name: r.h.MISC.UNKNOWN,
                        file_name: r.h.MISC.UNKNOWN,
                        colour: r.h.MISC.UNKNOWN,
                        ui_type: r.h.MISC.ACTION_PANEL,
                        _event_name: r.b.DOWNLOAD_BLOCK,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.PROFILE_INFO,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        name: r.b.PROFILE_INFO,
                        interaction_type: r.e.IMPRESSION,
                        tab: r.a.toTelemetrySettingTab(r.c.PREFERENCE),
                        _event_name: r.b.PROFILE_INFO,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.PROFILE_INFO,
                    selector: `#${r.h.MISC.SETTINGS_TAB_PREFIX}${r.c.PREFERENCE}`,
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.b.PROFILE_INFO,
                        interaction_type: r.e.IMPRESSION,
                        tab: r.a.toTelemetrySettingTab(r.c.PREFERENCE),
                        _event_name: r.b.PROFILE_INFO,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.PROFILE_INFO,
                    selector: `#${r.h.MISC.SETTINGS_TAB_PREFIX}${r.c.WHITELIST}`,
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.b.PROFILE_INFO,
                        interaction_type: r.e.IMPRESSION,
                        tab: r.a.toTelemetrySettingTab(r.c.WHITELIST),
                        _event_name: r.b.PROFILE_INFO,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.PROFILE_INFO,
                    selector: `#${r.h.MISC.SETTINGS_TAB_PREFIX}${r.c.ABOUT}`,
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.b.PROFILE_INFO,
                        interaction_type: r.e.IMPRESSION,
                        tab: r.a.toTelemetrySettingTab(r.c.ABOUT),
                        _event_name: r.b.PROFILE_INFO,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.PROFILE_INFO,
                    selector: `#${r.h.MISC.SETTINGS_TAB_PREFIX}${r.c.STATISTICS}`,
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.b.PROFILE_INFO,
                        interaction_type: r.e.IMPRESSION,
                        tab: r.a.toTelemetrySettingTab(r.c.STATISTICS),
                        _event_name: r.b.PROFILE_INFO,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SEARCH_SUGGEST_BLOCK_PAGE,
                    selector: "#block_page_search_input",
                    action: r.h.ACTION.KEYDOWN
                },
                messages: [{
                    template: {
                        name: r.b.SEARCH_SUGGEST,
                        interaction_type: r.e.IMPRESSION,
                        search_type: r.b.BLOCK_PAGE,
                        browser: i.a.browserTypeToString(),
                        _event_name: r.b.SEARCH_SUGGEST
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SEARCH_SUGGEST_BLOCK_PAGE,
                    sendTelemetry: this._options.selected
                },
                messages: [{
                    template: {
                        name: r.b.SEARCH_SUGGEST,
                        interaction_type: r.e.SELECTION,
                        search_type: r.b.BLOCK_PAGE,
                        browser: i.a.browserTypeToString(),
                        _event_name: r.b.SEARCH_SUGGEST
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SEARCH_SUGGEST_TYPOSQUATTING,
                    selector: "#typosquatting_message_search_input",
                    action: r.h.ACTION.KEYDOWN
                },
                messages: [{
                    template: {
                        name: r.b.SEARCH_SUGGEST,
                        interaction_type: r.e.IMPRESSION,
                        search_type: r.b.TYPOSQUATTING,
                        browser: i.a.browserTypeToString(),
                        _event_name: r.b.SEARCH_SUGGEST
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SEARCH_SUGGEST_TYPOSQUATTING,
                    sendTelemetry: this._options.selected
                },
                messages: [{
                    template: {
                        name: r.b.SEARCH_SUGGEST,
                        interaction_type: r.e.SELECTION,
                        search_type: r.b.TYPOSQUATTING,
                        browser: i.a.browserTypeToString(),
                        _event_name: r.b.SEARCH_SUGGEST
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SECURE_SEARCH_HIT,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        name: r.d.SECURE_SEARCH_HIT,
                        search_type: r.g.DEFAULT,
                        _event_name: r.b.SECURE_SEARCH_HIT,
                        browser: i.a.browserTypeToString(),
                        type_tag: this._options.typeTag,
                        provider_type: this._options.engineName
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SIDEBAR_PANEL,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        name: r.d.SIDEBAR_PANEL,
                        interaction_type: this._options.interaction_type,
                        _event_name: r.b.SIDEBAR_PANEL,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SITE_REPORT,
                    state: r.h.MISC.LOADED,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        name: r.b.SITE_REPORT,
                        interaction_type: r.e.IMPRESSION,
                        block_state: r.a.toTelemetryBlockState(this._options.blockState),
                        site_categories: this._options.siteCategories,
                        url: this._options.displayUrl,
                        style: r.h.MISC.ACTION_PANEL,
                        _event_name: r.b.SITE_REPORT,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SITE_REPORT,
                    selector: "#sidebar-close",
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.b.SITE_REPORT,
                        interaction_type: r.e.CLOSE_CLICKED,
                        block_state: r.a.toTelemetryBlockState(this._options.blockState),
                        site_categories: this._options.siteCategories,
                        url: this._options.displayUrl,
                        style: r.h.MISC.ACTION_PANEL,
                        _event_name: r.b.SITE_REPORT,
                        browser: i.a.browserTypeToString()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.SMA_REPUTATION,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        name: r.d.SMA_REPUTATION,
                        interaction_type: r.e.IMPRESSION,
                        _event_name: r.b.SMA_REPUTATION,
                        browser: i.a.browserTypeToString(),
                        site: this._options.site,
                        color: r.h.MISC.GREEN,
                        count: this._options[r.h.MISC.GREEN]
                    }
                }, {
                    template: {
                        name: r.d.SMA_REPUTATION,
                        interaction_type: r.e.IMPRESSION,
                        _event_name: r.b.SMA_REPUTATION,
                        browser: i.a.browserTypeToString(),
                        site: this._options.site,
                        color: r.h.MISC.RED,
                        count: this._options[r.h.MISC.RED]
                    }
                }, {
                    template: {
                        name: r.d.SMA_REPUTATION,
                        interaction_type: r.e.IMPRESSION,
                        _event_name: r.b.SMA_REPUTATION,
                        browser: i.a.browserTypeToString(),
                        site: this._options.site,
                        color: r.h.MISC.YELLOW,
                        count: this._options[r.h.MISC.YELLOW]
                    }
                }, {
                    template: {
                        name: r.d.SMA_REPUTATION,
                        interaction_type: r.e.IMPRESSION,
                        _event_name: r.b.SMA_REPUTATION,
                        browser: i.a.browserTypeToString(),
                        site: this._options.site,
                        color: r.h.MISC.UNKNOWN,
                        count: this._options[r.h.MISC.UNKNOWN]
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.TOAST,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: "ToastCheckCompleted",
                        category: "ToastCheck",
                        triggerType: "Impression",
                        browser: i.a.browserTypeToString()
                    }
                }, {
                    template: {
                        _event_name: "Secure_Search_Toast",
                        category: "SecureSearchToast",
                        action_type: "Impression",
                        browser: i.a.browserTypeToString(),
                        provider: this._options.toastData ? this._options.toastData.providerId : r.h.MISC.UNKNOWN,
                        toastType: this._options.toastData ? this._options.toastData.toastType : r.i.REGULAR_TOAST,
                        metadata: this._options.toastData ? this._options.toastData.metadata : r.h.MISC.DEFAULT
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.TYPOSQUATTING,
                    sendTelemetry: this._options.isFromBackground
                },
                messages: [{
                    template: {
                        name: r.d.TYPOSQUATTING,
                        interaction_type: r.e.IMPRESSION,
                        browser: i.a.browserTypeToString(),
                        _event_name: r.b.TYPOSQUATTING
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.REMOTE_ACCESS_TROJAN,
                    state: r.h.MISC.LOADED,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        name: r.b.REMOTE_ACCESS_TROJAN,
                        interaction_type: r.e.IMPRESSION,
                        browser: i.a.browserTypeToString(!0),
                        url: this._options.url,
                        _event_name: r.b.REMOTE_ACCESS_TROJAN
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.REMOTE_ACCESS_TROJAN,
                    selector: "#rat_detection_got_it_btn",
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.b.REMOTE_ACCESS_TROJAN,
                        interaction_type: r.e.RAT_DETECTION.ACKNOWLEDGED,
                        browser: i.a.browserTypeToString(!0),
                        url: this._options.url,
                        _event_name: r.b.REMOTE_ACCESS_TROJAN
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.REMOTE_ACCESS_TROJAN,
                    selector: "#sidebar_rat_detection_whitelist_btn",
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.b.REMOTE_ACCESS_TROJAN,
                        interaction_type: r.e.RAT_DETECTION.WHITELISTED,
                        browser: i.a.browserTypeToString(!0),
                        url: this._options.url,
                        _event_name: r.b.REMOTE_ACCESS_TROJAN
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.REMOTE_ACCESS_TROJAN,
                    selector: "#sidebar-close",
                    action: r.h.ACTION.CLICK
                },
                messages: [{
                    template: {
                        name: r.b.REMOTE_ACCESS_TROJAN,
                        interaction_type: r.e.CLOSE_CLICKED,
                        browser: i.a.browserTypeToString(!0),
                        url: this._options.url,
                        _event_name: r.b.REMOTE_ACCESS_TROJAN
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.FIND_SIMILAR_PAGES,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: r.b.FIND_SIMILAR_PAGES,
                        name: r.b.FIND_SIMILAR_PAGES,
                        interaction_type: this._options.interaction_type,
                        domain: this._options.domain,
                        browser: i.a.browserTypeToString().toLowerCase()
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.WSS_ANALYTICS,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: r.b.WSS_ANALYTICS,
                        message: this._options.message
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.DARK_WEB_SCAN,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: r.b.DARK_WEB_SCAN,
                        category: r.b.DARK_WEB_SCAN,
                        action_type: this._options.eventAction || r.h.MISC.UNKNOWN,
                        browser: "un" === i.a.browserTypeToString(!0) ? r.h.MISC.UNKNOWN : i.a.browserTypeToString(!0),
                        count: this._options.count || r.h.MISC.UNKNOWN,
                        type: this._options.type,
                        flow_id: this._options.flowId
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.APS.EVENT_NAME,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: r.b.APS.EVENT_NAME,
                        name: r.b.APS.EVENT_NAME,
                        action_type: r.e.IMPRESSION,
                        browser: i.a.browserTypeToString(!0),
                        type: r.b.APS.TOAST,
                        sequence: r.h.MISC.DEFAULT,
                        trigger: r.h.MISC.DEFAULT,
                        color: r.h.MISC.DEFAULT
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.APS.IMPRESSION_BALLOON,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: r.b.APS.EVENT_NAME,
                        name: r.b.APS.EVENT_NAME,
                        action_type: r.e.IMPRESSION,
                        browser: "un" === i.a.browserTypeToString(!0) ? r.h.MISC.UNKNOWN : i.a.browserTypeToString(!0),
                        type: r.b.APS.BALLOON,
                        sequence: this._options.sequence,
                        trigger: this._options.trigger,
                        color: this._options.color
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.APS.IMPRESSION_HOVER,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: r.b.APS.EVENT_NAME,
                        name: r.b.APS.EVENT_NAME,
                        action_type: r.e.HOVER,
                        browser: "un" === i.a.browserTypeToString(!0) ? r.h.MISC.UNKNOWN : i.a.browserTypeToString(!0),
                        type: r.b.APS.BALLOON,
                        sequence: this._options.sequence,
                        trigger: this._options.trigger,
                        color: this._options.color
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.APS.CLOSE_BALLOON,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: r.b.APS.EVENT_NAME,
                        name: r.b.APS.EVENT_NAME,
                        action_type: r.e.CLOSE,
                        browser: "un" === i.a.browserTypeToString(!0) ? r.h.MISC.UNKNOWN : i.a.browserTypeToString(!0),
                        type: r.b.APS.BALLOON,
                        sequence: this._options.sequence,
                        trigger: this._options.trigger,
                        color: this._options.color
                    }
                }]
            }, {
                trigger: {
                    identifier: r.b.APS.TOAST_CLOSE,
                    sendTelemetry: !0
                },
                messages: [{
                    template: {
                        _event_name: r.b.APS.EVENT_NAME,
                        name: r.b.APS.EVENT_NAME,
                        action_type: this._options.gotItButton ? r.e.GOT_IT : r.e.CLOSE,
                        browser: "un" === i.a.browserTypeToString(!0) ? r.h.MISC.UNKNOWN : i.a.browserTypeToString(!0),
                        type: r.b.APS.TOAST,
                        sequence: r.h.MISC.DEFAULT,
                        trigger: r.h.MISC.DEFAULT,
                        color: r.h.MISC.DEFAULT
                    }
                }]
            }]
        }
    }
}, , , , , , , , , , , , , function(e, t, n) {}, function(e, t) {
    e.exports = "../images/web_advisor/logo.png"
}, function(e, t) {
    e.exports = "../images/web_advisor/danger_icon.svg"
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return s
        }));
        var r = n(2),
            i = n(17),
            o = n(44);

        function s(t = [], n, s = document) {
            if (!n || !t) return;
            const a = e(n),
                c = [],
                l = new i.a;
            let u = 1;
            for (const e of t) {
                if (c.includes(e)) continue;
                c.push(e);
                const t = l.localeData(`category_id_${e}_name`),
                    n = l.localeData(`category_id_${e}_description`),
                    i = `\n      <li>\n        <span class="category-image">\n          <img id="category-info-${u}" class="category-info" src="${r.a.runtime.getURL("/images/action_panel/info-circle-icon.svg")}" alt="info-icon">\n        </span>\n        <span class="category">${t}</span>\n      </li>\n    `;
                a.append(i);
                const d = {
                    src: "#category-info-" + u,
                    title: t,
                    content: n,
                    offsetx: -20,
                    offsety: -5
                };
                u++;
                new o.a(d, s).init()
            }
        }
    }).call(this, n(13))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return i
        }));
        var r = n(2);
        class i {
            constructor(e, t = document) {
                this.details = e, this.root = t, this.id = e.popoverID || Math.random().toString(36).substring(7), this.srcElement = null, this.toolTipElement = null, this.onMouseOverHandler = this.onMouseOverHandler.bind(this), this.onMouseOutHandler = this.onMouseOutHandler.bind(this)
            }
            init() {
                const {
                    src: t,
                    content: n = null,
                    title: i = null,
                    tooltipContent: o = null
                } = this.details, s = `\n      <h3>\n        ${i}\n        ${!t.includes("category-info")?`<img src="${r.a.runtime.getURL("/images/web_advisor/info_icon.svg")}" />`:""}\n      </h3>\n      ${n}\n    `, a = `\n      <div id="${this.id}" class="popover-wrapper">\n        <div class="popover">\n          <div class="popover__arrow">\n            <div class="arrow__outer"></div>\n            <div class="arrow__inner"></div>\n          </div>\n          <div class="popover__content">\n            ${o||s}\n          </div>\n        </div>\n      </div>\n    `;
                this.root !== document ? e(this.root).append(a) : e("body").append(a), this.srcElement = e(t, this.root), this.toolTipElement = e("#" + this.id, this.root), this.srcElement.hover(this.onMouseOverHandler, this.onMouseOutHandler)
            }
            onMouseOverHandler() {
                const {
                    src: e,
                    offsetx: t = null,
                    offsety: n = null
                } = this.details, r = this.srcElement.parent().position(), i = this.toolTipElement.find(".popover__content").outerHeight(), o = this.toolTipElement.find(".popover__arrow"), s = o.innerWidth(), a = o.outerHeight();
                e.includes("category-info") && o.css({
                    left: "40px"
                }), this.toolTipElement.hide().css({
                    position: "absolute",
                    top: r.top - i - a / 2 + (n || 0) - 5 + "px",
                    left: r.left - s + (t || 0) + "px"
                }).fadeIn("fast"), this.toolTipElement.css({
                    visibility: "visible"
                })
            }
            onMouseOutHandler() {
                this.toolTipElement.fadeOut("fast", () => {
                    this.toolTipElement.css({
                        visibility: "hidden"
                    }), this.toolTipElement.css("left", "-1000px").show()
                })
            }
        }
    }).call(this, n(13))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return a
        }));
        var r = n(6),
            i = n(0),
            o = n(14),
            s = n(22);
        class a {
            constructor() {
                this.suggestionURL = null, this.secureSearchUrl = null, this.inputEl = null, this.telEventName = null
            }
            init({
                inputEl: t,
                suggestionURL: n,
                secureSearchUrl: r,
                telEventName: a
            }) {
                if (!t) return;
                const c = 13,
                    l = 27,
                    u = 38,
                    d = 40;
                if (this.inputEl = t, this.suggestionURL = n, this.secureSearchUrl = r, this.telEventName = a, n) {
                    const t = {
                        identifier: this.telEventName,
                        whitelistedKeys: i.h.ACTION.SEARCH_SUGGEST_KEY_CODES
                    };
                    o.a.handle(t), e(this.inputEl).keydown(s.a.debounce(t => {
                        const n = e(this.inputEl).val();
                        return t.keyCode === c ? (e(".search__suggest").hide(), void this.routeToSearchPage(n)) : t.keyCode !== d ? t.keyCode === u ? (t.preventDefault(), void this.highlightSuggestion("UP")) : void(t.keyCode !== l ? this.renderSuggestions(n) : e(".search__suggest").hide()) : void this.highlightSuggestion("DOWN")
                    }, 50)), e(this.inputEl).blur(() => {
                        e(".search__suggest").hide()
                    }), e("ul").on("mousedown", "li", t => {
                        this.sendTelemetry(), e(".search__suggest").hide(), this.routeToSearchPage(t.target.innerText)
                    }), e("ul").on("mouseenter", "li", (function() {
                        e(".selected").eq(0).removeClass("selected"), e(this).addClass("selected")
                    })), e("ul").on("mouseleave", "li", (function() {
                        e(this).removeClass("selected")
                    }))
                } else e(this.inputEl).keydown(t => {
                    t.keyCode === c && this.routeToSearchPage(e(this.inputEl).val())
                });
                e("#search-btn").click(() => this.routeToSearchPage(e(this.inputEl).val()))
            }
            routeToSearchPage(t) {
                const n = this.secureSearchUrl || "https://search.yahoo.com/search?fr=mcafee&type=C040US0D19700101&p=";
                t && (window.location.href = `${n}${encodeURIComponent(t)}`, e(".search__suggest").hide())
            }
            async renderSuggestions(t) {
                if (0 !== t.length) try {
                    const n = await r.a.getSearchSuggest(t);
                    if (0 === n.length) return void e(".search__suggest").hide();
                    this.showSuggestions(n)
                } catch (t) {
                    e(".search__suggest").hide()
                } else e(".search__suggest").hide()
            }
            showSuggestions(t) {
                const n = e(this.inputEl).parent().position(),
                    r = e(this.inputEl).parent().outerHeight();
                e(".search__suggest").css("top", n.top + r + 25 + "px"), e(".search__suggest > ul").html(""), t.forEach(t => {
                    e(".search__suggest > ul").append(`<li id="lyt">${t}</li>`)
                }), e(".search__suggest").show()
            }
            highlightSuggestion(t) {
                const n = e("DOWN" === t ? ".search__suggest > ul > li:first-child" : ".search__suggest > ul > li:last-child");
                if (e(".search__suggest").is(":hidden")) return;
                const r = e(".selected").eq(0);
                if (r.length) {
                    r.removeClass("selected");
                    const e = "DOWN" === t ? r.next() : r.prev();
                    e.length ? e.addClass("selected") : n.addClass("selected")
                } else n.addClass("selected");
                const i = e(".selected").text();
                this.sendTelemetry(), e(this.inputEl).val(i)
            }
            sendTelemetry() {
                const e = {
                    identifier: this.telEventName,
                    selected: !!this.suggestionURL
                };
                o.a.handle(e)
            }
        }
    }).call(this, n(13))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            n(40), n(41), n(42);
            var t = n(17),
                r = n(3),
                i = n(26),
                o = n(18),
                s = n(2),
                a = n(43),
                c = n(45),
                l = n(6),
                u = n(0);
            class d {
                constructor() {
                    this.suggestionURL = null, this.secureSearchUrl = null, this.url = null
                }
                async init() {
                    if (window.self === window.top) try {
                        const n = await l.a.getTabData(),
                            i = await l.a.getBkGlobals();
                        if (void 0 === n || void 0 === n.blockPageData) return void(document.location = "about:blank");
                        const {
                            SUGGESTION_URL: c,
                            SCRIPT_GENERATED_DEFAULT_SS_URL: u,
                            SHOW_SEARCH_SETTINGS: d
                        } = i.nativeSettings;
                        this.suggestionURL = c.value, this.secureSearchUrl = u.value;
                        const {
                            bState: p,
                            url: f,
                            categories: h
                        } = n.blockPageData;
                        if (this.url = f, null === p || p !== r.a.YELLOW && p !== r.a.RED && p !== r.a.PHISHING) return void(document.location = "about:blank");
                        let E = "danger",
                            _ = "red";
                        p !== r.a.YELLOW && p !== r.a.PHISHING || (E = "warning", _ = "yellow"), e("#site_status_state").addClass("status__rating--" + E), e(`<img class='wave' src=${s.a.runtime.getURL(`/images/site_status/wave_${_}.svg`)} />`).insertAfter(e("section.container")), e(".site-status__side-logo").append(`<img src=${s.a.runtime.getURL(`images/site_status/side_logo_${_}.svg`)} />`), e(".header__status--state").append(`<img src=${s.a.runtime.getURL(`/images/site_status/warning_${_}.svg`)} />`);
                        const m = new t.a;
                        m.init();
                        const T = `<a href="https://service.mcafee.com/FAQDocument.aspx?&id=TS100806" class='submit-ticket-link' target="_blank">${m.localeData("site_status_submit_ticket_text_link")}</a>`,
                            g = m.localeData("site_status_submit_ticket_text", [T]);
                        e("#site_status_submit_ticket_text").html(g);
                        const S = o.a.getURI(f);
                        m.fillText("site_status_url", encodeURI(S)), m.fillText("site_status_state", m.localeData("site_status_state_" + E)), m.fillText("site_status_body_text", m.localeData("site_status_body_text_" + E)), e("#search_suggest_input").focus(), e(".search__suggest").hide(), !1 === d.value && e(".description__search-input").hide(), Object(a.a)(h, ".description__categories > ul"), this.initListeners(), e("body").fadeIn()
                    } catch (e) {
                        l.a.logError(e), document.location = "about:blank"
                    } else document.location = "about:blank"
                }
                initListeners() {
                    const t = {
                        inputEl: "#search_suggest_input",
                        suggestionURL: this.suggestionURL,
                        secureSearchUrl: this.secureSearchUrl,
                        telEventName: u.b.SEARCH_SUGGEST_BLOCK_PAGE
                    };
                    (new c.a).init(t), e("#site_status_block_page_accept_risk").click(() => {
                        const e = o.a.getDomain(this.url);
                        l.a.whitelist(i.a.ADD, i.c.BLOCK_PAGE, {
                            domains: [e]
                        }), this.url && window.location.replace(this.url)
                    }), e("#site_status_block_page_go_back").click(() => {
                        window.history.length < 2 ? l.a.closeTab() : window.history.go(-1)
                    })
                }
            }
            e(document).ready(() => {
                (new d).init()
            })
        }.call(this, n(13))
}]);
//# sourceMappingURL=../sourceMap/chrome/site_status_block_page.map