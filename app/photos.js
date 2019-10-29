/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "/photos.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "+7m4":
/*!***********************************************************!*\
  !*** ./src/photos/ducks/albums/components/AlbumsList.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var photos_styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photos/styles/albumsList.styl */ "6qED");
/* harmony import */ var photos_styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photos_styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-ui/react/Layout */ "Bh3+");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var components_Error_Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Error/Empty */ "KOJc");
/* harmony import */ var photos_components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! photos/components/LoadMoreButton */ "RPnM");
/* harmony import */ var _AlbumItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AlbumItem */ "BUUs");







var FALLBACK_CREATION_DATE = null;

var sortByCreationDate = function sortByCreationDate(a, b) {
  // descending order, so newer albums first
  return new Date(b.created_at || FALLBACK_CREATION_DATE) - new Date(a.created_at || FALLBACK_CREATION_DATE);
};

var AlbumsList = function AlbumsList(_ref) {
  var data = _ref.data,
      hasMore = _ref.hasMore,
      fetchMore = _ref.fetchMore,
      t = _ref.t;
  return data.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Error_Empty__WEBPACK_IMPORTED_MODULE_4__["EmptyPhotos"], {
    localeKey: "albums"
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_2__["Content"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: photos_styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_0___default.a['pho-album-list']
  }, data.sort(sortByCreationDate).map(function (a) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AlbumItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      album: a,
      key: a.id
    });
  }), hasMore && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(photos_components_LoadMoreButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: t('Albums.load_more'),
    onClick: fetchMore
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__["translate"])()(AlbumsList));

/***/ }),

/***/ "+TPL":
/*!************************************!*\
  !*** ./src/photos/locales/zh.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "/FPF":
/*!*********************************************!*\
  !*** ./src/sharing/SharingDetailsModal.jsx ***!
  \*********************************************/
/*! exports provided: SharingDetailsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingDetailsModal", function() { return SharingDetailsModal; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _share_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share.styl */ "jrFr");
/* harmony import */ var _share_styl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_share_styl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Recipient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Recipient */ "MzcY");
/* harmony import */ var _components_WhoHasAccess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/WhoHasAccess */ "GFJL");
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cozy-ui/react/Modal */ "cLsY");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! models */ "OjRq");













var SharingDetailsModal =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SharingDetailsModal, _Component);

  function SharingDetailsModal() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SharingDetailsModal);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SharingDetailsModal).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SharingDetailsModal, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          t = _this$context.t,
          f = _this$context.f;
      var _this$props = this.props,
          onClose = _this$props.onClose,
          sharingType = _this$props.sharingType,
          owner = _this$props.owner,
          recipients = _this$props.recipients,
          document = _this$props.document,
          _this$props$documentT = _this$props.documentType,
          documentType = _this$props$documentT === void 0 ? 'Document' : _this$props$documentT,
          onRevoke = _this$props.onRevoke;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: t("".concat(documentType, ".share.details.title")),
        secondaryAction: onClose,
        className: _share_styl__WEBPACK_IMPORTED_MODULE_6___default.a['share-modal'],
        into: "body",
        size: "small",
        mobileFullscreen: true
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_11__["ModalContent"], {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_6___default.a['share-modal-content']
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_6___default.a['share-details']
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Recipient__WEBPACK_IMPORTED_MODULE_9__["UserAvatar"], {
        name: t("".concat(documentType, ".share.sharedBy"), {
          name: models__WEBPACK_IMPORTED_MODULE_12__["Contact"].getDisplayName(owner)
        }),
        url: owner.instance
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_6___default.a['share-details-created']
      }, t("".concat(documentType, ".share.details.createdAt"), {
        date: f(document.created_at || null, 'Do MMMM YYYY')
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_6___default.a['share-details-perm']
      }, t("".concat(documentType, ".share.details.").concat(sharingType === 'one-way' ? 'ro' : 'rw'))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_6___default.a['share-details-perm-desc']
      }, t("".concat(documentType, ".share.details.desc.").concat(sharingType === 'one-way' ? 'ro' : 'rw')))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_6___default.a['divider']
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_WhoHasAccess__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: t('Share.recipients.accessCount', {
          count: recipients.length
        }),
        recipients: recipients,
        document: document,
        documentType: documentType,
        onRevoke: onRevoke
      })));
    }
  }]);

  return SharingDetailsModal;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(SharingDetailsModal, "contextTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  f: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
});

/***/ }),

/***/ "/NMv":
/*!**********************************************************!*\
  !*** ./src/photos/ducks/timeline/components/Toolbar.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/toolbar.styl */ "t0Aa");
/* harmony import */ var _styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var _components_UploadButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/UploadButton */ "nEYx");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Button */ "SvPG");
/* harmony import */ var photos_assets_icons_icon_checkbox_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! photos/assets/icons/icon-checkbox.svg */ "DbnX");









var MoreMenu = function MoreMenu(_ref) {
  var t = _ref.t,
      disabled = _ref.disabled,
      uploadPhotos = _ref.uploadPhotos,
      selectItems = _ref.selectItems;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    disabled: disabled,
    position: "right",
    className: _styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_0___default.a['pho-toolbar-menu'],
    component: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Button__WEBPACK_IMPORTED_MODULE_6__["MoreButton"], null)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "upload"
    }),
    className: 'u-hide--desk'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UploadButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onUpload: uploadPhotos,
    disabled: disabled,
    label: t('Toolbar.menu.photo_upload'),
    inMenu: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('u-hide--tablet', _styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_0___default.a['pho-action-upload'])
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: 'u-hide--desk'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    onSelect: selectItems,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: photos_assets_icons_icon_checkbox_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
    })
  }, t('Toolbar.menu.select_items')));
};

MoreMenu.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  uploadPhotos: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  selectItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var Toolbar = function Toolbar(_ref2) {
  var t = _ref2.t,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      uploadPhotos = _ref2.uploadPhotos,
      selectItems = _ref2.selectItems;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_0___default.a['pho-toolbar'],
    role: "toolbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UploadButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: 'u-hide--mob',
    onUpload: uploadPhotos,
    disabled: disabled,
    label: t('Toolbar.photo_upload')
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MoreMenu, {
    t: t,
    disabled: disabled,
    uploadPhotos: uploadPhotos,
    selectItems: selectItems
  }));
};

Toolbar.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  uploadPhotos: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  selectItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "/TmC":
/*!*********************************************************!*\
  !*** ./src/sharing/components/ShareRecipientsInput.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sharing_propTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sharing/propTypes */ "G9pQ");
/* harmony import */ var sharing_components_ShareAutosuggest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sharing/components/ShareAutosuggest */ "fyrk");
/* harmony import */ var sharing_share_styl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sharing/share.styl */ "jrFr");
/* harmony import */ var sharing_share_styl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sharing_share_styl__WEBPACK_IMPORTED_MODULE_12__);














var ShareRecipientsInput =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ShareRecipientsInput, _Component);

  function ShareRecipientsInput() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ShareRecipientsInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ShareRecipientsInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      loading: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onFocus", function () {
      var _this$props = _this.props,
          contacts = _this$props.contacts,
          groups = _this$props.groups;

      if (contacts.hasMore || contacts.fetchStatus === 'loading' || groups.hasMore || groups.fetchStatus === 'loading') {
        _this.setState({
          loading: true
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getContactsAndGroups", function () {
      // we need contacts to be loaded to be able to add all group members to recipients
      var _this$props2 = _this.props,
          contacts = _this$props2.contacts,
          groups = _this$props2.groups;

      if (contacts.hasMore || contacts.fetchStatus === 'loading') {
        return contacts.data;
      } else {
        return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(contacts.data), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(groups.data));
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ShareRecipientsInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          contacts = _this$props3.contacts,
          groups = _this$props3.groups;

      if (this.state.loading && !contacts.hasMore && contacts.fetchStatus === 'loaded' && !groups.hasMore && groups.fetchStatus === 'loaded') {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          label = _this$props4.label,
          onPick = _this$props4.onPick,
          onRemove = _this$props4.onRemove,
          placeholder = _this$props4.placeholder,
          recipients = _this$props4.recipients;
      var loading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_12___default.a['coz-form-label'],
        htmlFor: "email"
      }, label), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(sharing_components_ShareAutosuggest__WEBPACK_IMPORTED_MODULE_11__["default"], {
        loading: loading,
        contactsAndGroups: this.getContactsAndGroups(),
        recipients: recipients,
        onFocus: this.onFocus,
        onPick: onPick,
        onRemove: onRemove,
        placeholder: placeholder
      }));
    }
  }]);

  return ShareRecipientsInput;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(ShareRecipientsInput, "contextTypes", {
  client: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
});

ShareRecipientsInput.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  contacts: sharing_propTypes__WEBPACK_IMPORTED_MODULE_10__["contactsResponseType"].isRequired,
  groups: sharing_propTypes__WEBPACK_IMPORTED_MODULE_10__["groupsResponseType"].isRequired,
  recipients: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  onPick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
ShareRecipientsInput.defaultProps = {
  label: 'To:',
  recipients: []
};
/* harmony default export */ __webpack_exports__["default"] = (ShareRecipientsInput);

/***/ }),

/***/ "/WUI":
/*!*******************************!*\
  !*** ./src/models/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cozy-doctypes */ "Le8U");
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__);


class Contact extends cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__["Contact"] {
  static getInitials(contactOrRecipient, defaultValue = '') {
    if (Contact.isContact(contactOrRecipient)) {
      return cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__["Contact"].getInitials(contactOrRecipient);
    } else {
      const s = contactOrRecipient.public_name || contactOrRecipient.name || contactOrRecipient.email;
      return s && s[0].toUpperCase() || defaultValue;
    }
  }

  static getDisplayName(contact, defaultValue = '') {
    if (Contact.isContact(contact)) {
      return cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__["Contact"].getDisplayName(contact);
    } else {
      return contact.public_name || contact.name || contact.email || defaultValue;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "0Apg":
/*!***********************************************************!*\
  !*** ./src/lib/react-cozy-helpers/BarContextProvider.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var BarContextProvider =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BarContextProvider, _React$Component);

  function BarContextProvider() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BarContextProvider);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BarContextProvider).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BarContextProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return this.props;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.children) return null;
      if (!Array.isArray(this.props.children)) return this.props.children;
      return this.props.children[0];
    }
  }]);

  return BarContextProvider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

BarContextProvider.childContextTypes = {
  //child context keys
  client: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (BarContextProvider);

/***/ }),

/***/ "0NMG":
/*!************************************!*\
  !*** ./src/photos/locales/da.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "0kzd":
/*!************************************!*\
  !*** ./src/photos/locales/sv.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "0yyf":
/*!***************************************!*\
  !*** ./src/photos/styles/layout.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pho-sidebar":"pho-sidebar--1JZDr","pho-content":"pho-content--6vy4r","pho-content-wrapper":"pho-content-wrapper--1u34M","spin":"spin--OsM9y","shake":"shake--V0phk"};

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1BUi":
/*!***********************************************!*\
  !*** ./src/sharing/components/recipient.styl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"recipient-status":"recipient-status--2uFD7","recipient-menu-btn":"recipient-menu-btn--2_GX0","recipient":"recipient--HkJgC","recipients-list-light":"recipients-list-light--3bHel","recipient-avatar":"recipient-avatar--1Cmmp","recipient-avatar--small":"recipient-avatar--small--2hoPQ","recipient-avatar-link":"recipient-avatar-link--3gLdE","recipient-avatar-plusx":"recipient-avatar-plusx--2ruV6","recipient-idents":"recipient-idents--3NhkH","recipient-ident-status":"recipient-ident-status--3W1WI","recipient-user":"recipient-user--2ON6I","recipient-details":"recipient-details--tV3VQ","avatar":"avatar--2xuqM","recipients-avatars":"recipients-avatars--1PuFV","--interactive":"_--interactive--3t-An","recipient-owner":"recipient-owner--3PukF","recipient-menu":"recipient-menu--Gn7vM","action-unshare":"action-unshare--W0mml","action-unshare-desc":"action-unshare-desc--8flsy","spin":"spin--2Hvw_","shake":"shake--KwEfF"};

/***/ }),

/***/ "1rOY":
/*!***************************************!*\
  !*** ./src/photos/locales/ro_RO.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "1tzb":
/*!*******************************************!*\
  !*** ./src/sharing/components/Avatar.jsx ***!
  \*******************************************/
/*! exports provided: Avatar, AvatarPlusX, AvatarLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPlusX", function() { return AvatarPlusX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarLink", function() { return AvatarLink; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tooltip */ "Cp2O");
/* harmony import */ var _recipient_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipient.styl */ "1BUi");
/* harmony import */ var _recipient_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_recipient_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _colorhash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colorhash */ "VSpF");







var Avatar = function Avatar(_ref) {
  var text = _ref.text,
      size = _ref.size,
      textId = _ref.textId;
  var initial = text.charAt(0);
  var bg = Object(_colorhash__WEBPACK_IMPORTED_MODULE_6__["default"])().getColor(textId);
  var style = {
    backgroundColor: bg
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient-avatar'], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient-avatar--small'], size === 'small')),
    style: style,
    "data-tip": textId,
    "data-for": "recipient-avatar-".concat(text)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, initial), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_4__["SharingTooltip"], {
    id: "recipient-avatar-".concat(text)
  }));
};
Avatar.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  textId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Avatar.defaultProps = {
  text: '',
  size: 'small-plus',
  textId: ''
};
var AvatarPlusX = function AvatarPlusX(_ref2) {
  var size = _ref2.size,
      _ref2$extraRecipients = _ref2.extraRecipients,
      extraRecipients = _ref2$extraRecipients === void 0 ? [] : _ref2$extraRecipients;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient-avatar'], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient-avatar--small'], size === 'small')),
    "data-tip": true,
    "data-for": "extra-recipients-avatar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: _recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient-avatar-plusx']
  }, "+", Math.min(extraRecipients.length, 99)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_4__["SharingTooltip"], {
    id: "extra-recipients-avatar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipRecipientList"], {
    recipientNames: extraRecipients
  })));
};
AvatarPlusX.propTypes = {
  extraRecipients: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
AvatarPlusX.defaultProps = {
  extraRecipients: [],
  size: 'medium'
};
var AvatarLink = function AvatarLink(_ref3) {
  var _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 'medium' : _ref3$size;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient-avatar'], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient-avatar--small'], size === 'small'))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: _recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient-avatar-link']
  }));
};

/***/ }),

/***/ "1xvC":
/*!***************************************!*\
  !*** ./src/photos/locales/uk_UA.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Ekz":
/*!*****************************************************!*\
  !*** ./src/lib/react-cozy-helpers/ModalManager.jsx ***!
  \*****************************************************/
/*! exports provided: default, showModal, ModalManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalManager", function() { return ModalManager; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "/MKj");



var SHOW_MODAL = 'SHOW_MODAL';
var HIDE_MODAL = 'HIDE_MODAL';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    show: false,
    component: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SHOW_MODAL:
      return {
        show: true,
        component: action.component
      };

    case HIDE_MODAL:
      return {
        show: false,
        component: null
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);
var showModal = function showModal(component) {
  return {
    type: SHOW_MODAL,
    component: component,
    meta: {
      hideActionMenu: true
    }
  };
};

var hideModal = function hideModal() {
  var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: HIDE_MODAL,
    meta: meta
  };
};

var ModalManager = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state.ui.modal);
})(function (_ref) {
  var show = _ref.show,
      component = _ref.component,
      dispatch = _ref.dispatch;
  if (!show) return null;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(component, {
    onClose: function onClose(meta) {
      return dispatch(hideModal(meta));
    }
  });
});

/***/ }),

/***/ "2OO4":
/*!************************************!*\
  !*** ./src/photos/locales/en.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, quotaalert, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}},"quotaalert":{"title":"Your disk space is full :(","desc":"Please remove files, empty your trash or increase your disk space before uploading files again.","confirm":"OK","increase":"Increase your disk space"}};

/***/ }),

/***/ "2lpW":
/*!*********************************************!*\
  !*** ./src/photos/ducks/timeline/index.jsx ***!
  \*********************************************/
/*! exports provided: default, TimelineBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineBoard", function() { return TimelineBoard; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cozy-client */ "SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Timeline */ "MJrX");
/* harmony import */ var _components_PhotoBoard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PhotoBoard */ "TtgU");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dates */ "LOX2");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");









 // constants

var TIMELINE = 'timeline';
var FILES_DOCTYPE = 'io.cozy.files';

var TIMELINE_QUERY = function TIMELINE_QUERY(client) {
  return client.find(FILES_DOCTYPE).where({
    class: 'image',
    trashed: false
  }).select(['dir_id', 'name', 'size', 'updated_at', 'metadata']).sortBy({
    'metadata.datetime': 'desc'
  }).include(['albums']);
};

var TIMELINE_MUTATIONS = function TIMELINE_MUTATIONS(client) {
  return {
    uploadPhoto: function () {
      var _uploadPhoto = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(file, dirId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", client.mutate({
                  mutationType: 'UPLOAD_PHOTO',
                  execute: function () {
                    var _execute = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
                    /*#__PURE__*/
                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
                      var _ref, diskUsage, error;

                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (!window.chrome) {
                                _context.next = 10;
                                break;
                              }

                              _context.next = 3;
                              return client.getStackClient().fetchJSON('GET', '/settings/disk-usage');

                            case 3:
                              _ref = _context.sent;
                              diskUsage = _ref.data;

                              if (!diskUsage.attributes.quota) {
                                _context.next = 10;
                                break;
                              }

                              if (!(parseInt(diskUsage.attributes.used) + parseInt(file.size) > parseInt(diskUsage.attributes.quota))) {
                                _context.next = 10;
                                break;
                              }

                              error = new Error('Payload Too Large');
                              error.status = 413;
                              throw error;

                            case 10:
                              return _context.abrupt("return", client.collection('io.cozy.files').createFile(file, {
                                dirId: dirId
                              }));

                            case 11:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    function execute() {
                      return _execute.apply(this, arguments);
                    }

                    return execute;
                  }()
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function uploadPhoto(_x, _x2) {
        return _uploadPhoto.apply(this, arguments);
      }

      return uploadPhoto;
    }(),
    deletePhoto: function deletePhoto(photo) {
      return client.destroy(photo);
    }
  };
};
/**
 *  Create the title for the section, following these rules:
 *  - If the period is within same month: D - D M Y
 *  - Else: D M Y - D M Y
 *  - Exception: don't show the year if it is the current one.
 */


var getSectionTitle = function getSectionTitle(album, f) {
  if (album.period) {
    var startPeriod = album.period.start;
    var endPeriod = album.period.end;

    if (!Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isSameMonth"])(f, endPeriod, startPeriod)) {
      return Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatDMY"])(f, startPeriod) + ' - ' + Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatDMY"])(f, endPeriod);
    }

    if (!Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(f, endPeriod, startPeriod)) {
      return Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatD"])(f, startPeriod) + '-' + Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatDMY"])(f, endPeriod);
    }

    return Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatDMY"])(f, startPeriod);
  }

  return Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatDMY"])(f, album.name);
};
/**
 * Add the hours to the section's title if other sections are the same day.
 * The rules are the following:
 *  - If the album's period is within the same hour:  HH
 *  - Else: HH-HH
 */


var getSectionTitleHours = function getSectionTitleHours(dates, index, section, f) {
  if (section.album) {
    if (index > 0 && Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(f, dates[index - 1], dates[index]) || index < dates.length - 1 && Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(f, dates[index], dates[index + 1])) {
      // Several sections for this day: add the hours
      var startPeriod = section.album.period.start;
      var endPeriod = section.album.period.end;
      var titleWithHours = section.title + ' · ' + Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatH"])(f, startPeriod) + 'h';

      if (!Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isSameHour"])(f, endPeriod, startPeriod)) {
        titleWithHours += '-' + Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatH"])(f, endPeriod) + 'h';
      }

      return titleWithHours;
    }
  }

  return section.title;
};
/**
 * A section matches if a not-clustered photo's datetime:
 * - Is inside its period, or the same day
 */


var getMatchingSection = function getMatchingSection(sections, datetime, f) {
  return Object.keys(sections).find(function (date) {
    if (sections[date].album) {
      var startPeriod = sections[date].album.period.start;
      var endPeriod = sections[date].album.period.end;
      var isInsidePeriod = Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isEqualOrNewer"])(datetime, startPeriod) && Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isEqualOrOlder"])(datetime, endPeriod);
      return isInsidePeriod || Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(f, datetime, endPeriod);
    } else {
      // If the section has no album, it is not a cluster but a daily section
      return Object(_dates__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(f, datetime, date);
    }
  });
};
/**
 * Retrieve photos by clusters. Each clusterized photo is referenced by an album
 * having an 'auto' field to true.
 * If a photo is not clusterized yet (newly updated ones), we try to insert them
 * inside existing clusters, or group them per day otherwise.
 */


var getPhotosByClusters = function getPhotosByClusters(photos, f) {
  var sections = {};
  var photosNotClustered = [];
  photos.forEach(function (p) {
    var refAlbums = p.albums ? p.albums.data : []; // A photo can be referenced by only one auto album

    var album = refAlbums.find(function (ref) {
      return ref.auto;
    }); // The photo is not referenced by an auto album yet

    if (!album) {
      photosNotClustered.push(p);
    } else {
      var date = album.name;

      if (!sections.hasOwnProperty(date)) {
        var title = getSectionTitle(album, f);
        sections[date] = {
          photos: [],
          title: title,
          album: album
        };
      }

      sections[date].photos.push(p);
    }
  }); // We deal with the not-clustered photos after the loop to make sure all
  // the sections have been processed.
  // It simulates a clustering, waiting for the actual one to be processed.

  photosNotClustered.forEach(function (photo) {
    var datetime = photo.metadata && photo.metadata.datetime ? photo.metadata.datetime : photo.created_at;
    var sectionDate = getMatchingSection(sections, datetime, f);

    if (sectionDate) {
      sections[sectionDate].photos.push(photo);
    } else {
      // Create a new section for this day, without a period, to differentiate from clusters' sections
      var day = Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatYMD"])(f, datetime); // Match the albums's format

      sections[day] = {
        title: Object(_dates__WEBPACK_IMPORTED_MODULE_8__["formatDMY"])(f, datetime),
        photos: [photo]
      };
    }
  });
  var sortedDates = Object.keys(sections);
  sortedDates.sort(function (a, b) {
    return new Date(b).getTime() - new Date(a).getTime();
  });
  return sortedDates.map(function (date, i) {
    return {
      title: getSectionTitleHours(sortedDates, i, sections[date], f),
      photos: sections[date].photos
    };
  });
}; // eslint-disable-next-line


/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_9__["translate"])()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: TIMELINE_QUERY,
    as: TIMELINE,
    mutations: TIMELINE_MUTATIONS
  }, function (_ref2, mutations) {
    var data = _ref2.data,
        result = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["data"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Timeline__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      lists: data ? getPhotosByClusters(data, props.f) : [],
      data: data
    }, mutations, result, props));
  });
}));
/**
 *
 * This component is used by the Picker, when we create an album
 * We have to deal with selection for instance
 */

var TimelineBoard = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_9__["translate"])()(function (_ref3) {
  var selection = _ref3.selection,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ["selection"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_5__["Query"], {
    query: TIMELINE_QUERY
  }, function (_ref4) {
    var data = _ref4.data,
        result = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, ["data"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_PhotoBoard__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      lists: data ? getPhotosByClusters(data, props.f) : [],
      photosContext: "timeline",
      onPhotoToggle: selection.toggle,
      onPhotosSelect: selection.select,
      onPhotosUnselect: selection.unselect
    }, result, props));
  });
});

/***/ }),

/***/ "2sk9":
/*!*****************************************!*\
  !*** ./src/photos/styles/confirms.styl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"u-shake":"u-shake--301R8","shake":"shake--Hx9aG","u-o-100":"u-o-100--1l6_J","u-o-90":"u-o-90--Vl2PX","u-o-80":"u-o-80--1iZh6","u-o-70":"u-o-70--1Orn8","u-o-60":"u-o-60--29A2S","u-o-50":"u-o-50--1vWRz","u-o-40":"u-o-40--23WHb","u-o-30":"u-o-30--C42_r","u-o-20":"u-o-20--Wp1zJ","u-o-10":"u-o-10--1yTAG","u-o-05":"u-o-05--1IKgP","u-o-025":"u-o-025--2gpCh","u-o-0":"u-o-0--2YnvF","fil-confirm-text":"fil-confirm-text--3OV-5","icon-trash":"icon-trash--2L617","icon-restore":"icon-restore--qTvX6","icon-shared":"icon-shared--2ytpg","icon-related":"icon-related--3HRWq","icon-eye":"icon-eye--2EIWz","icon-link":"icon-link--2hb-A","icon-forbidden":"icon-forbidden--23UiV","spin":"spin--3SvvM"};

/***/ }),

/***/ "2xTg":
/*!****************************************************************!*\
  !*** ./src/sharing/components/ContactsAndGroupsDataLoader.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ContactsAndGroupsDataLoader =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ContactsAndGroupsDataLoader, _Component);

  function ContactsAndGroupsDataLoader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ContactsAndGroupsDataLoader);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ContactsAndGroupsDataLoader).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ContactsAndGroupsDataLoader, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.contacts.hasMore !== this.props.contacts.hasMore || nextProps.contacts.fetchStatus !== this.props.contacts.fetchStatus || nextProps.contacts.data.length !== this.props.contacts.data.length || nextProps.groups.hasMore !== this.props.groups.hasMore || nextProps.groups.fetchStatus !== this.props.groups.fetchStatus || nextProps.groups.data.length !== this.props.groups.data.length;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.contacts.hasMore) {
        this.props.contacts.fetchMore();
      }

      if (this.props.groups.hasMore) {
        this.props.groups.fetchMore();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ContactsAndGroupsDataLoader;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactsAndGroupsDataLoader);

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "32XB":
/*!******************************************!*\
  !*** ./src/drive/styles/actionmenu.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"fil-actionmenu-inner":"fil-actionmenu-inner--3JhFX","fil-actionmenu-recipients":"fil-actionmenu-recipients--28pEX","fil-action":"fil-action--3huaS","fil-actionmenu-overlay":"fil-actionmenu-overlay--1o4R9","fil-mobileactionmenu":"fil-mobileactionmenu--2J9Kc","fil-mobileactionmenu-header":"fil-mobileactionmenu-header--j3KI4","fil-mobileactionmenu-file-name":"fil-mobileactionmenu-file-name--3VXSo","fil-mobileactionmenu-file-ext":"fil-mobileactionmenu-file-ext--2sio1","fil-mobileactionmenu-category":"fil-mobileactionmenu-category--34XX7","fil-action-phone-download":"fil-action-phone-download--3zG6S","fil-action-openWith":"fil-action-openWith--NJ1ah","fil-action-download":"fil-action-download--378G6","fil-action-destroy":"fil-action-destroy--1FAXj","fil-action-trash":"fil-action-trash--268pI","fil-action-restore":"fil-action-restore--36vfQ","fil-action-rename":"fil-action-rename--1hqjC","fil-action-share":"fil-action-share--1BpnI","fil-action-moveto":"fil-action-moveto--o2Fw2","fil-action-qualify":"fil-action-qualify--2C734"};

/***/ }),

/***/ "3Jea":
/*!********************************************!*\
  !*** ./src/sharing/components/status.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"u-shake":"u-shake--2w9Ah","shake":"shake--3lQxc","u-o-100":"u-o-100--fIdgC","u-o-90":"u-o-90--1n38D","u-o-80":"u-o-80--y360z","u-o-70":"u-o-70--35vTa","u-o-60":"u-o-60--s4-Cn","u-o-50":"u-o-50--3MPnn","u-o-40":"u-o-40--1PWFb","u-o-30":"u-o-30--1pEPX","u-o-20":"u-o-20--3PArr","u-o-10":"u-o-10--3F8WR","u-o-05":"u-o-05--_JIuM","u-o-025":"u-o-025--o8h8s","u-o-0":"u-o-0--3KlCg","shared-status":"shared-status--2MD96","shared-status-label":"shared-status-label--3Pk0H","spin":"spin--3YGV1"};

/***/ }),

/***/ "3M/O":
/*!************************************!*\
  !*** ./src/photos/locales/el.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4/b3":
/*!***************************************!*\
  !*** ./src/photos/locales/es_ES.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "42zN":
/*!**************************************************!*\
  !*** ./src/sharing/assets/icons/icon-eye-16.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-eye-16_32a783455d403df2cdd48aa32afb9d27",
  "use": "icon-eye-16_32a783455d403df2cdd48aa32afb9d27-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-eye-16_32a783455d403df2cdd48aa32afb9d27\">\n    <defs>\n        <path d=\"M0,8 C0,8 2,2 8,2 C14,2 16,8 16,8 C16,8 14,14 8,14 C2,14 0,8 0,8 Z M8,12 C10.2091391,12 12,10.2091391 12,8 C12,5.79086089 10.2091391,4 8,4 C5.79086089,4 4,5.79086089 4,8 C4,10.2091391 5.79086089,12 8,12 Z M8,10 C6.89543045,10 6,9.10456955 6,8 C6,6.89543045 6.89543045,6 8,6 C9.10456955,6 10,6.89543045 10,8 C10,9.10456955 9.10456955,10 8,10 Z\" id=\"icon-eye-16_32a783455d403df2cdd48aa32afb9d27_path-1\" />\n    </defs>\n    <g id=\"icon-eye-16_32a783455d403df2cdd48aa32afb9d27_icons/16/eye\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <mask id=\"icon-eye-16_32a783455d403df2cdd48aa32afb9d27_mask-2\" fill=\"white\">\n            <use xlink:href=\"#icon-eye-16_32a783455d403df2cdd48aa32afb9d27_path-1\" />\n        </mask>\n        <use id=\"icon-eye-16_32a783455d403df2cdd48aa32afb9d27_Mask\" fill=\"#95999d\" fill-opacity=\"0.5\" xlink:href=\"#icon-eye-16_32a783455d403df2cdd48aa32afb9d27_path-1\" />\n    </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "46r7":
/*!************************************!*\
  !*** ./src/photos/locales/nl.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Foto's","albums":"Albums","shared":"Gedeeld door mij","trash":"Prullenbak","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Haal Cozy mobiel op jouw telefoon!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"Er is een fout opgetreden tijdens het laden van de album lijst. Probeer het later nog eens.","album_photos_title":"Er is een fout opgetreden tijdens het laden van de lijst van foto's in dit album. Probeer het later nog eens.","timeline_photos_title":"Er is een fout opgetreden tijdens het laden van de lijst van foto's. Probeer het later nog eens.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Ververs nu","generic":"Er is een fout opgetreden, probeer het opnieuw.","album_rename_abort":"De naam van het album kan niet leeg zijn."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Verwijderen","album_quit":"Leave & delete shared album","album_download":"Download","more":"Meer","menu":{"select_items":"Selecteer foto's","photo_upload":"Upload foto's","rename_album":"Hernoem album","album_delete":"Verwijder album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Laad meer foto's","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"Er is een fout opgetreden tijdens het ophalen van de foto's.","already_added_photo":"Dit album bevat deze foto al."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Afsluiten"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} foto |||| %{smart_count} foto's","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Meer albums laden","add_photos":{"title":"Voeg toe aan album","success":"Album %{name} is bijgewerkt met %{smart_count} foto. |||| Album %{name} is bijgewerkt met %{smart_count} foto's.","error":{"generic":"Er is een fout opgetreden tijdens het bijwerken van het album, probeer het opnieuw.","reference":"Sommige foto's zijn niet toegevoegd aan het album. Controleer en probeer nog eens.","response":{"Forbidden":"Toepassing heeft geen toestemming om albums aan te passen."}}},"share":{"cta":"Delen","title":"Deel met anderen","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Iedereen die de gedeelde snelkoppeling heeft kan deze foto's zien en downloaden.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Snelkoppeling om te delen","copy":"Kopiëren","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Binnenkort beschikbaar!","desc":"Deel alles via e-mail met jouw vrienden en familie!"},"close":"Sluiten","gettingLink":"Getting your link...","error":{"generic":"Er is een fout opgetreden tijdens het genereren van de snelkoppeling, probeer het opnieuw.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"Nieuwe album naam","create_label":"Creëer een nieuw album","create_button":"Creëer"},"success":"Album %{name} is gecreëerd met %{smart_count} foto. |||| Album %{name} is gecreëerd met %{smart_count} foto's.","error":{"generic":"Er is een fout opgetreden tijdens het creëren van het album, probeer het later nog eens.","already_exists":"Het album %{name} bestaat al, kies een andere naam.","name_missing":"Je moet het album een naam geven."}},"fetchAlbums":{"error":{"index_missing":"Je moet een album index opgeven om albums op te halen."}},"remove_photos":{"success":"De foto is verwijderd uit album %{album_name}","error":{"generic":"Er is een fout opgetreden tijdens het verwijderen van de foto, probeer het opnieuw."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"Er is een fout opgetreden tijdens het verwijderen van de foto, probeer het opnieuw."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Afsluiten","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Dit album permanent verwijderen?","cancel":"Annuleren","delete":"Verwijder permanent","forbidden":"Je kunt dit album of deze selectie niet meer benaderen.","eye":"Jouw foto's worden niet verwijderd.","link":"Als je het hebt gedeeld, kunnen mensen het niet meer benaderen."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploaden van %{smart_count} foto naar Cozy Foto's |||| Uploaden van %{smart_count} foto's naar Cozy Foto's","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"In behandeling"},"alert":{"success":"%{smart_count} foto succesvol ge-upload. |||| %{smart_count} foto's succesvol ge-upload.","success_conflicts":"%{smart_count} foto ge-upload met %{conflictNumber} conflict(en). |||| %{smart_count} foto's ge-upload met %{conflictNumber} conflict(en).","errors":"Er is iets fout gegaan tijdens het uploaden van de foto's."}}};

/***/ }),

/***/ "4MjQ":
/*!************************************!*\
  !*** ./src/photos/locales/ru.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Фотографии","albums":"Альбомы","shared":"Отправлено мной","trash":"Мусор","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Получить Cozy","btn-client-mobile":"Получить Cozy Drive на мобильный!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"У вас нет добавленных фотографий.","timeline_photos_text":"Нажмите кнопку \"Загрузить\" для добавления фото.","albums_title":"У вас нет созданных альбомов.","albums_text":"Для начала кликните \"Новый альбом\" для добавления своего первого альбома.","album_photos_title":"Фотографий в этом альбоме пока нет.","album_photos_text":"Для начала кликните \"Добавить фото в альбом\" для добавления фотографий.","shared_album_photos_title":"Фотографий в этом альбоме пока нет.","shared_album_photos_text":"Вернуться позже"},"Error":{"albums_title":"Во время получения списка альбомов произошла ошибка. Пожалуйста, повторите попытку позже.","album_photos_title":"При получении списка фотографий альбома произошла ошибка. Пожалуйста, повторите попытку позже.","timeline_photos_title":"При получении списка фотографий произошла ошибка. Пожалуйста, повторите попытку позже.","public_album_error_title":"Возникла ошибка при построении списка фотографий. Попробуйте повторить позже.","public_album_unshared_title":"Простите, эта ссылка больше недоступна.","public_album_unshared_text":"Один потерян, десять найдено... или просто проверьте с помощью владельца. Этот файл не может быть потерян.","refresh":"Обновить сейчас","generic":"Произошла ошибка, повторите попытку.","album_rename_abort":"Имя альбома не может быть пустым."},"Toolbar":{"photo_upload":"Загрузить","album_new":"Новый альбом","album_delete":"Удалить","album_quit":"Выйти и удалить общий альбом","album_download":"Скачать","more":"Больше","menu":{"select_items":"Выбрать фото","photo_upload":"Загрузить фото","rename_album":"Переименовать альбом","album_delete":"Удалить альбом","album_quit":"Выйти и удалить общий альбом","download_album":"Скачать альбом","add_photos":"Добавить фото в альбом"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Загрузить еще фотографий","select_all":"Выбрать все","unselect_all":"Снять выделение"},"Alerter":{"photos":{"fetching_error":"Во время загрузки фотографий произошла ошибка.","already_added_photo":"Этот альбом уже содержит эту фотографию."}},"SelectionBar":{"selected_count":"предмет выбран |||| предмета(ов) выбрано","delete":"Удалить","album-add":"Добавить в альбом","album-remove":"Удалить из альбома","download":"Скачать","close":"Закрыть"},"Share":{"status":{"pending":"Отложенный","accepted":"Принятый","refused":"Отклоненный","error":"Ошибка","unregistered":"Ошибка","mail-not-sent":"Ошибка","revoked":"Ошибка"},"type":{"one-way":"Можно Просмотреть(скоро)","two-way":"Можно Изменить"},"create-cozy":"Создать мой cozy"},"Albums":{"album_item_description":"%{smart_count} фотография |||| %{smart_count} фотографии","album_item_shared_ro":"Доступно(чтение)","album_item_shared_rw":"Доступно(чтение\\запись)","load_more":"Load more albums","add_photos":{"title":"Добавить в альбом","success":"Альбом %{name} был обновлен на %{smart_count} фото. |||| Альбом %{name} был обновлен на %{smart_count} фото.","error":{"generic":"Произошла ошибка при обновлении альбома, попробуйте снова.","reference":"Некоторые фото не добавлены в альбом. Пожалуйста проверьте и попробуйте снова.","response":{"Forbidden":"У приложения нет разрешения на обновление альбомов."}}},"share":{"cta":"Поделится","title":"Поделится с другими","details":{"title":"Детали доступа","createdAt":"на %{date}","ro":"Только чтение","rw":"Чтение\\запись"},"sharedByMe":"Доступно","sharedWithMe":"Доступно для меня","shareByLink":{"subtitle":"По публичной ссылки","desc":"Любой перешедший по предоставленной ссылке сможет смотреть и скачивать ваши фото.","fetchFailed":"Упс! Кажется, ваше подключение ограничено, повторите попытку позже, когда станет лучше.","creating":"Создание ссылки...","copy":"Копировать ссылку","copied":"Ссылка добавлена в буфер обмена","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"По электронной почте","subtitle":"По электронной почте","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Отправить","genericSuccess":"Вы отправили приглашение %{count} контактам.","success":"Вы отправили приглашение на %{email}.","comingsoon":"Скоро! Вы получите возможность поделится документами или фотографией с вашей семьей, друзьями и коллегами в одно нажатие кнопки. Не волнуйтесь, мы дадим знать как будет готово!"},"unshare":{"title":"Удалить из альбома","success":"Вы убрали доступ к этому альбому для %{email}."},"sharingLink":{"title":"Ссылка для публикации","copy":"Копировать","copied":"Скопировано"},"whoHasAccess":{"title":"Кто имеет доступ"},"protectedShare":{"title":"Скоро!","desc":"Поделитесь чем-нибудь по электронной почте с семьей и друзьями!"},"close":"Закрыть","gettingLink":"Получение вашей ссылки...","error":{"generic":"Произошла ошибка при создании ссылки общего доступа для альбома, повторите попытку.","revoke":"Произошла ошибка при отмене ссылки на общий доступ к альбому, повторите попытку."}},"create":{"panel_form":{"label":"Добавьте имя для вашего альбома","placeholder":"Новый альбом","cancel":"Отмена","submit":"Создать новый альбом","update":"Добавить фото в альбом"},"inline_form":{"placeholder":"Имя нового альбома","create_label":"Создать новый альбом","create_button":"Создать"},"success":"Альбом %{name} был создан с  %{smart_count} фото. |||| Альбом %{name} был создан с %{smart_count} фото.","error":{"generic":"Произошла ошибка создания альбома, повторите попытку.","already_exists":"Альбом %{name} уже существует, выберете другое имя.","name_missing":"Вы должны дать название своему альбому"}},"fetchAlbums":{"error":{"index_missing":"Для извлечения альбомов должен быть указан индекс альбома."}},"remove_photos":{"success":"Фото было удалено из альбома %{album_name}","error":{"generic":"При удалении фото произошла ошибка. Повторите попытку."}},"remove_album":{"success":"Альбом %{name} удален.","error":{"generic":"При удалении альбома произошла ошибка. Повторите попытку."}},"quit_album":{"success":"Альбом %{name} удален.","error":{"generic":"При выходе из альбома произошла ошибка. Повторите попытку."}}},"Viewer":{"close":"Закрыть","noviewer":{"title":"Просмотрщик не знает как распознать этот тип файлов.","download":"Скачать этот файл","openWith":"Открыть через..."},"actions":{"download":"Скачать"},"loading":{"error":"Этот файл не смог загрузится. У вас полностью работоспособно интернет соединение?","retry":"Повтор"}},"destroyconfirmation":{"title":"Полностью удалить этот альбом?","cancel":"Отмена","delete":"Удалить полностью","forbidden":"Вы больше не сможете получить доступ к этому или другим выбранным альбомам.","eye":"Ваши фотографии не будут удалены.","link":"Если вы поделились им, люди не смогут получить к нему доступ."},"quitconfirmation":{"title":"Полностью выйти и удалить этот общий альбом?","cancel":"Отмена","quit":"Выйти и удалить","forbidden":"Вы больше не сможете получить доступ к этому или другим выбранным альбомам."},"timeline":{"DeleteConfirm":{"title":"Удалить этот элемент? |||| Удалить эти элементы?","trash":"Он будет перемещен в Корзину. |||| Они будут перемещены в Корзину.","restore":"Вы все еще можете восстановить его, когда захотите. |||| Вы все еще можете восстановить их, когда захотите.","shared":"Если вы поделились им, люди не смогут получить к нему доступ.  ||||Если вы поделились ими, люди не смогут получить к ним доступ. ","related":"Некоторые выбранные фотографии добавлены в альбом. Они будут удалены из него, если вы удалите их.","cancel":"Отмена","delete":"Удалить"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Загрузка %{smart_count} фото в Cozy Фото |||| Загрузка %{smart_count} фото в  Cozy Фото","header_mobile":"Uploading %{done} of %{total}","header_done":"%{done} из %{total} успешно загружено","close":"отмена","item":{"pending":"Ожидающий"},"alert":{"success":"%{smart_count} фото успешно загружено. |||| %{smart_count} фото успешно загружено. ","success_conflicts":"%{smart_count} фото загружено с %{conflictNumber} конфликтом(ами). |||| %{smart_count} фото загружены с %{conflictNumber} конфликтом(ами).","errors":"Ошибки при загрузке фотографий."}}};

/***/ }),

/***/ 5:
/*!*************************************************************************************************************************************************!*\
  !*** multi ./node_modules/babel-polyfill/lib/index.js ./node_modules/cozy-scripts/utils/reactExposer.js ./src/photos/targets/browser/index.jsx ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/quentinvalmori/Sites/cozy-drive/node_modules/babel-polyfill/lib/index.js */"201c");
__webpack_require__(/*! /Users/quentinvalmori/Sites/cozy-drive/node_modules/cozy-scripts/utils/reactExposer.js */"7NIr");
module.exports = __webpack_require__(/*! /Users/quentinvalmori/Sites/cozy-drive/src/photos/targets/browser/index.jsx */"oGE2");


/***/ }),

/***/ "510Z":
/*!***************************************!*\
  !*** ./src/components/Image/index.js ***!
  \***************************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageLoader */ "8C5O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return _ImageLoader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "59mS":
/*!*************************************!*\
  !*** ./src/photos/styles/main.styl ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"u-shake":"u-shake--jsFDP","shake":"shake--3-Vkv","u-o-100":"u-o-100--3NgxQ","u-o-90":"u-o-90--1HDpO","u-o-80":"u-o-80--1I9nb","u-o-70":"u-o-70--3QV-j","u-o-60":"u-o-60--1QLxy","u-o-50":"u-o-50--jArI6","u-o-40":"u-o-40--3Q8vH","u-o-30":"u-o-30--3LyB0","u-o-20":"u-o-20--3Aqqq","u-o-10":"u-o-10--3v5K_","u-o-05":"u-o-05--2aGws","u-o-025":"u-o-025--2bvm8","u-o-0":"u-o-0--h266O","spin":"spin--2CdRK"};

/***/ }),

/***/ "5ZYL":
/*!****************************************!*\
  !*** ./src/photos/styles/loading.styl ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pho-loading":"pho-loading--2vILC","pho-empty":"pho-empty--2ISCA"};

/***/ }),

/***/ "5d0r":
/*!************************************!*\
  !*** ./src/photos/locales/ar.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"الصور","albums":"الألبومات","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"تحصل على كوزي","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"حذف","album_quit":"Leave & delete shared album","album_download":"تنزيل","more":"More","menu":{"select_items":"Select photos","photo_upload":"تحميل الصور","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"تحديد الكل","unselect_all":"إلغاء تحديد الكل"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"حذف","album-add":"Add to album","album-remove":"Remove from album","download":"تنزيل","close":"إغلاق"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"خطأ","unregistered":"خطأ","mail-not-sent":"خطأ","revoked":"خطأ"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"إرسال","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"نسخ","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"عن قريب !","desc":"Share anything by email with your family and friends!"},"close":"إغلاق","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"إلغاء","submit":"إنشاء ألبوم جديد","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"إغلاق","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"تنزيل"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"إلغاء","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"إلغاء","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"إلغاء","delete":"حذف"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"إغلاق","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "5wWc":
/*!***********************************!*\
  !*** ./src/photos/lib/confirm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



const confirm = (component, saga) => {
  const wrapper = document.body.appendChild(document.createElement('div'));

  const abort = () => {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(wrapper);
  };

  const confirm = () => {
    saga().then(() => {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(wrapper);
    });
  };

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(component, {
    confirm,
    abort
  }), wrapper);
};

/* harmony default export */ __webpack_exports__["default"] = (confirm);

/***/ }),

/***/ "6D2N":
/*!***************************************!*\
  !*** ./src/photos/locales/de_DE.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Fotos","albums":"Alben","shared":"Von mir geteilt","trash":"Müll","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Hol dir Cozy Drive auf dein Handy!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"Beim Abrufen der Albumliste ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","album_photos_title":"Beim Abrufen der Album-Fotoliste ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","timeline_photos_title":"Beim Abrufen der Fotosliste ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","public_album_error_title":"Beim Abrufen der Fotosliste ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","public_album_unshared_title":"Dieser Link ist leider nicht mehr verfügbar.","public_album_unshared_text":"Eins verloren, zehn gefunden ... oder bitte einfach nur den Besitzer um Hilfe. Diese Datei ist möglicherweise nicht verloren.","refresh":"Jetzt aktualisieren","generic":"Es ist ein Fehler aufgetreten. Versuche es erneut.","album_rename_abort":"Es ist ein Fehler aufgetreten. Versuche es erneut."},"Toolbar":{"photo_upload":"Hochladen","album_new":"Neues Album","album_delete":"Löschen","album_quit":"Leave & delete shared album","album_download":"Herunterladen","more":"Mehr","menu":{"select_items":"Fotos auswählen","photo_upload":"Fotos hochladen","rename_album":"Album umbenennen","album_delete":"Album löschen","album_quit":"Leave & delete shared album","download_album":"Album downloaden","add_photos":"Fotos zum Album hinzufügen"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Lade mehr Fotos","select_all":"Alle auswählen","unselect_all":"Alle abwählen"},"Alerter":{"photos":{"fetching_error":"Beim Holen der Fotos ist ein Fehler aufgetreten.","already_added_photo":"Dieses Album enthält bereits dieses Foto."}},"SelectionBar":{"selected_count":"Ausgewähltes Foto |||| Ausgewählte Fotos","delete":"Löschen","album-add":"Zum Album hinzufügen","album-remove":"Aus dem Album entfernen","download":"Herunterladen","close":"Schließen"},"Share":{"status":{"pending":"Ausstehend","accepted":"Accepted","refused":"Verweigert","error":"Fehler","unregistered":"Fehler","mail-not-sent":"Fehler","revoked":"Fehler"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} Foto |||| %{smart_count} Fotos","album_item_shared_ro":"Geteilt (lesend)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Zum Album hinzufügen","success":"Album %{name} wurde mit %{smart_count} Foto aktualisiert. |||| Album %{name} wurde mit %{smart_count} Fotos aktualisiert.","error":{"generic":"Beim Aktualisieren des Albums ist ein Fehler aufgetreten. Bitte versuche es erneut.","reference":"Einige Fotos wurden nicht zum Album hinzugefügt. Bitte überprüfe das und versuche es erneut.","response":{"Forbidden":"Die Anwendung ist nicht berechtigt, Alben zu aktualisieren."}}},"share":{"cta":"Teilen","title":"Mit Anderen teilen","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Jeder kann mit dem Link deine Fotos sehen und herunterladen.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"per Email","subtitle":"By email","email":"Email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Sende","genericSuccess":"You sent an invite to %{count} contacts.","success":"Du hast eine Einladung an %{email} geschickt.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link zum Teilen","copy":"Kopieren","copied":"Kopiert"},"whoHasAccess":{"title":"Wer hat Zugriff"},"protectedShare":{"title":"Demnächst!","desc":"Teile etwas per E-Mail mit Familie und Freunden!"},"close":"Schließen","gettingLink":"Deinen Link bekommen ...","error":{"generic":"Beim Erstellen des Album-Share-Links ist ein Fehler aufgetreten. Bitte versuche es erneut.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Füge deinem neuen Album einen Namen hinzu","placeholder":"Unbenanntes Album","cancel":"Abbruch","submit":"Erstelle neues Album","update":"Fotos zum Album hinzufügen"},"inline_form":{"placeholder":"Neuer Albumname","create_label":"Erstelle ein neues Album","create_button":"Erstelle"},"success":"Album %{name} erstellt mit %{smart_count} Foto. |||| Album %{name} erstellt mit %{smart_count} Fotos.","error":{"generic":"Beim Erstellen des Albums ist ein Fehler aufgetreten. Bitte versuche es erneut.","already_exists":"Das Album %{name} existiert bereits, bitte wähle ein Anderes aus.","name_missing":"Du musst deinem Album einen Namen geben."}},"fetchAlbums":{"error":{"index_missing":"Ein Alben-Index muss bereitgestellt werden, um Alben zu holen."}},"remove_photos":{"success":"Das Foto wurde aus dem Album %{album_name} entfernt","error":{"generic":"Beim Entfernen des Fotos ist ein Fehler aufgetreten. Bitte versuche es erneut."}},"remove_album":{"success":"Album %{name} wurde gelöscht.","error":{"generic":"Beim Entfernen des Albums ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Schließen","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Herunterladen"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Dieses Album dauerhaft löschen?","cancel":"Abbruch","delete":"Dauerhaft löschen","forbidden":"Sie können nicht mehr auf dieses Album oder die Auswahl zugreifen.","eye":"Deine Fotos werden nicht gelöscht.","link":"Wenn du es geteilt hast, können die Leute nicht darauf zugreifen."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Dieses Element löschen? |||| Diese Elemente löschen?","trash":"Es wird in den Papierkorb verschoben. |||| Sie werden in den Papierkorb verschoben.","restore":"Du kannst es wiederherstellen wann immer du willst. |||| Du kannst sie wiederherstellen wann immer du willst.","shared":"Wenn du es geteilt hast, können die Leute nicht darauf zugreifen. |||| Wenn du sie geteilt hast, können die Leute nicht darauf zugreifen.","related":"Einige der Fotos in der Auswahl beziehen sich auf ein Album. Sie werden aus ihm entfernt, wenn du sie löschst.","cancel":"Abbruch","delete":"Entferne"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"%{smart_count} Foto zu Cozy Fotos hochgeladen. |||| %{smart_count} Fotos zu Cozy Fotos hochgeladen.","header_mobile":"Uploading %{done} of %{total}","header_done":"%{done} von %{total} erfolgreich hochgeladen","close":"Schließen","item":{"pending":"Ausstehend"},"alert":{"success":"%{smart_count} Foto erfolgreich hochgeladen. |||| %{smart_count} Fotos erfolgreich hochgeladen.","success_conflicts":"%{smart_count} Foto hochgeladen mit %{conflictNumber} Konflikt(en). |||| %{smart_count} Fotos hochgeladen mit %{conflictNumber} Konflikt(en).","errors":"Beim Upload der Fotos sind Fehler aufgetreten."}}};

/***/ }),

/***/ "6dOw":
/*!****************************************!*\
  !*** ./src/drive/lib/extraDoctypes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "6mLT":
/*!************************************!*\
  !*** ./src/photos/locales/it.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Foto","albums":"Album","shared":"Condivisi con me","trash":"Cestino","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Scarica Cozy","btn-client-mobile":"Scarica Cozy sul tuo smartphone!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"Non hai ancora nessuna foto.","timeline_photos_text":"Fai clic sul pulsante \"Carica\" per aggiungere foto.","albums_title":"Non hai ancora nessun album.","albums_text":"Inizia facendo clic su \"Nuovo album\" per creare il tuo primo album.","album_photos_title":"Non c'è ancora nessuna foto in questo album.","album_photos_text":"Inizia facendo clic su \"Aggiungi foto all'album\" per aggiungerne qualcuna.","shared_album_photos_title":"Non c'è ancora nessuna foto in questo album.","shared_album_photos_text":"Torna dopo"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Spiacente, il collegamento non è più disponibile.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Aggiorna adesso","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Carica","album_new":"Nuovo album","album_delete":"Elimina","album_quit":"Lascia e elimina album condiviso","album_download":"Scarica","more":"Altro","menu":{"select_items":"Seleziona foto","photo_upload":"Carica foto","rename_album":"Rinomina album","album_delete":"Elimina album","album_quit":"Lascia e elimina album condiviso","download_album":"Scarica album","add_photos":"Aggiungi foto all'album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Carica altre foto","select_all":"Seleziona tutto","unselect_all":"Deseleziona tutto"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"Questo album contiene già questa foto."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Elimina","album-add":"Aggiungi ad album","album-remove":"Rimuovi da album","download":"Scarica","close":"Chiudi"},"Share":{"status":{"pending":"In attesa","accepted":"Accettato","refused":"Rifiutato","error":"Errore","unregistered":"Errore","mail-not-sent":"Errore","revoked":"Errore"},"type":{"one-way":"Può visualizzare (in arrivo)","two-way":"Può cambiare"},"create-cozy":"Crea mio cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Condiviso (solo lettura)","album_item_shared_rw":"Condiviso (lettura/scrittura)","load_more":"Load more albums","add_photos":{"title":"Aggiungi ad album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Condividi","title":"Condividi con altri","details":{"title":"Dettagli condivisione","createdAt":"On %{date}","ro":"Solo lettura","rw":"Lettura/Scrittura"},"sharedByMe":"Condiviso","sharedWithMe":"Condiviso con me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"Per email","subtitle":"Per email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Invia","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Rimuovi da album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Collegamento da condividere","copy":"Copia","copied":"Copiato"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"In arrivo!","desc":"Condividi qualsiasi cosa tramite email con la tua famiglia e i tuoi amici!"},"close":"Chiudi","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Aggiungi un nome al tuo album","placeholder":"Album senza titolo","cancel":"Annulla","submit":"Crea nuovo album","update":"Aggiungi foto ad album"},"inline_form":{"placeholder":"Nome nuovo album","create_label":"Crea nuovo album","create_button":"Crea"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"Devi dare un nome al tuo album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Chiudi","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Scarica questo file","openWith":"Apri con..."},"actions":{"download":"Scarica"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Riprova"}},"destroyconfirmation":{"title":"Eliminare in modo permanente questo album?","cancel":"Annulla","delete":"Elimina permanentemente","forbidden":"You won't be able to access this album or selection anymore.","eye":"Le tue foto non saranno eliminate.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Annulla","quit":"Lascia ed Elimina","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Annulla","delete":"Rimuovi"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"chiudi","item":{"pending":"In attesa"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "6qED":
/*!*******************************************!*\
  !*** ./src/photos/styles/albumsList.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pho-album-list":"pho-album-list--3W0t6","pho-album-list--thumbnails":"pho-album-list--thumbnails--3FASv","pho-album":"pho-album--nBuXk","pho-album-link":"pho-album-link--1J30Z","pho-album-photo-item":"pho-album-photo-item--18xZx","pho-album-title":"pho-album-title--1N0Rf","pho-album-description":"pho-album-description--3z6S7","pho-album-shared":"pho-album-shared--2T6ed","pho-album-list--selectable":"pho-album-list--selectable--1eSpV","pho-album-link--disabled":"pho-album-link--disabled--309dC"};

/***/ }),

/***/ "71Dd":
/*!*********************************************!*\
  !*** ./src/sharing/components/Identity.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sharing/components/recipient.styl */ "1BUi");
/* harmony import */ var sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_3__);





var Identity = function Identity(_ref) {
  var name = _ref.name,
      details = _ref.details;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_3___default.a['recipient-idents'], 'u-ml-1')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_3___default.a['recipient-user']
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_3___default.a['recipient-details']
  }, details));
};

Identity.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  details: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Identity.defaultProps = {
  details: '-'
};
/* harmony default export */ __webpack_exports__["default"] = (Identity);

/***/ }),

/***/ "7Kgf":
/*!************************************!*\
  !*** ./src/photos/locales/sq.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "8C5O":
/*!**********************************************!*\
  !*** ./src/components/Image/ImageLoader.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/logger */ "OTOu");
/* harmony import */ var cozy_realtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! cozy-realtime */ "oBqo");
/* harmony import */ var cozy_realtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(cozy_realtime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cozy-client */ "SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_13__);










/* global cozy */





var TTL = 10000;
var PENDING = 'PENDING';
var LOADING_LINK = 'LOADING_LINK';
var LOADING_FALLBACK = 'LOADING_FALLBACK';
var LOADED = 'LOADED';
var FAILED = 'FAILED';

var ImageLoader =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(ImageLoader, _React$Component);

  function ImageLoader() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ImageLoader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ImageLoader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      status: PENDING,
      src: null
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "_mounted", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "handleCreate", function (doc) {
      var _this$props = _this.props,
          file = _this$props.file,
          size = _this$props.size;

      if (file._id === doc._id && doc.format === size) {
        _this.loadLink();

        _this.unsubscribeRealtime();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "unsubscribeRealtime", function () {
      _this.realtime && _this.realtime.unsubscribe('created', _this.type, _this.handleCreate);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ImageLoader, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var client;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                client = this.props.client;
                this._mounted = true;
                this.loadNextSrc();
                this.realtime = new cozy_realtime__WEBPACK_IMPORTED_MODULE_12___default.a({
                  client: client
                });
                this.type = 'io.cozy.files.thumbnails';
                this.realtime.subscribe('created', this.type, this.handleCreate);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
    /**
     * Reload the link when realtime tell us that the
     * thumbnail is created. By default size === small
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
      clearTimeout(this.timeout);

      if (this.img) {
        this.img.onload = this.img.onerror = null;
        this.img.src = '';
      }

      this.unsubscribeRealtime();
    }
  }, {
    key: "getFileId",
    value: function getFileId(file) {
      return file.id || file._id;
    }
  }, {
    key: "loadNextSrc",
    value: function loadNextSrc() {
      var lastError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var status = this.state.status;
      /**
       * If we know that the navigator is offline, don't try to loadLink.
       * */

      if (status === PENDING && window.navigator.onLine) this.loadLink();else if (status === LOADING_LINK) this.loadFallback();else if (status === LOADING_FALLBACK || !window.navigator.onLine) {
        lib_logger__WEBPACK_IMPORTED_MODULE_11__["default"].warn('failed loading thumbnail', lastError);
        this.setState({
          status: FAILED
        });
        this.props.onError(lastError);
      }
    }
  }, {
    key: "checkImageSource",
    value: function checkImageSource(src) {
      var _this2 = this;

      var cleanImageLoader = function cleanImageLoader() {
        clearTimeout(_this2.timeout);
        _this2.img.onload = _this2.img.onerror = null;
        _this2.img.src = '';
        _this2.img = null;
      };

      return new Promise(function (resolve, reject) {
        _this2.img = new Image();
        _this2.img.onload = resolve;
        _this2.img.onerror = reject;
        _this2.img.src = src;
        _this2.timeout = setTimeout(function () {
          return reject(new Error('Loading image took too long'));
        }, TTL);
      }).then(cleanImageLoader, cleanImageLoader);
    }
  }, {
    key: "getFileLinks",
    value: function () {
      var _getFileLinks = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(file) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!file.links) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", file.links);

              case 4:
                _context2.next = 6;
                return cozy.client.files.statById(this.getFileId(file), false);

              case 6:
                response = _context2.sent;

                if (response.links) {
                  _context2.next = 9;
                  break;
                }

                throw new Error('Could not fetch file links');

              case 9:
                return _context2.abrupt("return", response.links);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getFileLinks(_x) {
        return _getFileLinks.apply(this, arguments);
      }

      return getFileLinks;
    }()
  }, {
    key: "loadLink",
    value: function () {
      var _loadLink = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this$props2, file, size, client, links, link, src;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  status: LOADING_LINK
                });
                _this$props2 = this.props, file = _this$props2.file, size = _this$props2.size, client = _this$props2.client;
                _context3.prev = 2;
                _context3.next = 5;
                return this.getFileLinks(file, size);

              case 5:
                links = _context3.sent;
                link = links[size];

                if (link) {
                  _context3.next = 9;
                  break;
                }

                throw new Error("".concat(size, " link is not available"));

              case 9:
                src = client.options.uri + link;
                _context3.next = 12;
                return this.checkImageSource(src);

              case 12:
                if (this._mounted) {
                  this.setState({
                    status: LOADED,
                    src: src
                  });
                }

                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](2);
                this.loadNextSrc(_context3.t0);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 15]]);
      }));

      function loadLink() {
        return _loadLink.apply(this, arguments);
      }

      return loadLink;
    }()
  }, {
    key: "loadFallback",
    value: function () {
      var _loadFallback = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var file, src;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.setState({
                  status: LOADING_FALLBACK
                });
                file = this.props.file;
                _context4.prev = 2;
                _context4.next = 5;
                return this.getDownloadLink(this.getFileId(file));

              case 5:
                src = _context4.sent;
                _context4.next = 8;
                return this.checkImageSource(src);

              case 8:
                if (this._mounted) {
                  this.setState({
                    status: LOADED,
                    src: src
                  });
                }

                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](2);
                this.loadNextSrc(_context4.t0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 11]]);
      }));

      function loadFallback() {
        return _loadFallback.apply(this, arguments);
      }

      return loadFallback;
    }()
  }, {
    key: "getDownloadLink",
    value: function getDownloadLink(fileId) {
      return this.props.client.collection('io.cozy.files').getDownloadLinkById(fileId);
    }
  }, {
    key: "render",
    value: function render() {
      var src = this.state.src;
      var _this$props3 = this.props,
          render = _this$props3.render,
          renderFallback = _this$props3.renderFallback; //If the navigator is not onLine, let's render the fallback directly

      if (src && window.navigator.onLine) return render(src);else if (renderFallback) return renderFallback();else return null;
    }
  }]);

  return ImageLoader;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

ImageLoader.propTypes = {
  file: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOf(['small', 'medium', 'large']),
  onError: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  renderFallback: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  client: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired
};
ImageLoader.defaultProps = {
  size: 'small',
  onError: function onError() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_client__WEBPACK_IMPORTED_MODULE_13__["withClient"])(ImageLoader));

/***/ }),

/***/ "8Ctd":
/*!***************************************!*\
  !*** ./src/photos/locales/sq_AL.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "96Ws":
/*!***************************************!*\
  !*** ./src/photos/locales/zh_CN.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"照片","albums":"相册","shared":"我分享的","trash":"垃圾","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"上传","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"读取照片时发生错误。","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "9Xrh":
/*!*********************************************************!*\
  !*** ./src/sharing/components/EditableSharingModal.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/flow */ "56YH");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cozy-client */ "SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! models */ "OjRq");
/* harmony import */ var sharing_propTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sharing/propTypes */ "G9pQ");
/* harmony import */ var sharing_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sharing/context */ "skT2");
/* harmony import */ var sharing_components_ContactsAndGroupsDataLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sharing/components/ContactsAndGroupsDataLoader */ "2xTg");
/* harmony import */ var sharing_components_ShareModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sharing/components/ShareModal */ "krg7");












var EditableSharingModal = function EditableSharingModal(_ref) {
  var client = _ref.client,
      contacts = _ref.contacts,
      document = _ref.document,
      groups = _ref.groups,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["client", "contacts", "document", "groups"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(sharing_components_ContactsAndGroupsDataLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    contacts: contacts,
    groups: groups
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_8__["default"].Consumer, null, function (_ref2) {
    var documentType = _ref2.documentType,
        isOwner = _ref2.isOwner,
        getRecipients = _ref2.getRecipients,
        getSharingLink = _ref2.getSharingLink,
        share = _ref2.share,
        revoke = _ref2.revoke,
        shareByLink = _ref2.shareByLink,
        revokeSharingLink = _ref2.revokeSharingLink,
        hasSharedParent = _ref2.hasSharedParent,
        hasSharedChild = _ref2.hasSharedChild;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(sharing_components_ShareModal__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      document: document,
      documentType: documentType,
      contacts: contacts,
      createContact: function createContact(contact) {
        return client.create(models__WEBPACK_IMPORTED_MODULE_6__["Contact"].doctype, contact);
      },
      groups: groups,
      recipients: getRecipients(document.id),
      link: getSharingLink(document.id),
      isOwner: isOwner(document.id),
      hasSharedParent: hasSharedParent(document),
      hasSharedChild: hasSharedChild(document),
      onShare: share,
      onRevoke: revoke,
      onShareByLink: shareByLink,
      onRevokeLink: revokeSharingLink
    }, rest));
  }));
};

EditableSharingModal.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  document: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  contacts: sharing_propTypes__WEBPACK_IMPORTED_MODULE_7__["contactsResponseType"].isRequired,
  groups: sharing_propTypes__WEBPACK_IMPORTED_MODULE_7__["groupsResponseType"].isRequired
};

var contactsQuery = function contactsQuery(client) {
  return client.all(models__WEBPACK_IMPORTED_MODULE_6__["Contact"].doctype).where({
    _id: {
      $gt: null
    },
    trashed: {
      $or: [{
        $eq: false
      }, {
        $exists: false
      }]
    },
    $or: [{
      cozy: {
        $not: {
          $size: 0
        }
      }
    }, {
      email: {
        $not: {
          $size: 0
        }
      }
    }]
  }).indexFields(['_id']);
};

var groupsQuery = function groupsQuery(client) {
  return client.all(models__WEBPACK_IMPORTED_MODULE_6__["Group"].doctype);
};

/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_4___default()(Object(cozy_client__WEBPACK_IMPORTED_MODULE_5__["queryConnect"])({
  contacts: {
    query: contactsQuery,
    as: 'contacts'
  },
  groups: {
    query: groupsQuery,
    as: 'groups'
  }
}), cozy_client__WEBPACK_IMPORTED_MODULE_5__["withClient"])(EditableSharingModal));

/***/ }),

/***/ "A3Xe":
/*!****************************************!*\
  !*** ./src/folder-references/index.js ***!
  \****************************************/
/*! exports provided: REF_PHOTOS, REF_UPLOAD, REF_BACKUP, getReferencedFolders, getOrCreateFolderWithReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF_PHOTOS", function() { return REF_PHOTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF_UPLOAD", function() { return REF_UPLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF_BACKUP", function() { return REF_BACKUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferencedFolders", function() { return getReferencedFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateFolderWithReference", function() { return getOrCreateFolderWithReference; });
/* harmony import */ var drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drive/lib/doctypes */ "z6Q1");

const REF_PHOTOS = `${drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_APPS"]}/photos`;
const REF_UPLOAD = `${drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_APPS"]}/photos/upload`;
const REF_BACKUP = `${drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_APPS"]}/photos/mobile`;
const getReferencedFolders = async (client, reference) => {
  const {
    included
  } = await client.collection(drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_FILES"]).findReferencedBy({
    _type: drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_APPS"],
    _id: reference
  });
  return included.filter(folder => /^\/\.cozy_trash/.test(folder.attributes.path) === false);
};
const getOrCreateFolderWithReference = async (client, path, reference) => {
  const existingFolders = await getReferencedFolders(client, reference);

  if (existingFolders.length) {
    return existingFolders[0];
  } else {
    const collection = client.collection(drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_FILES"]);
    const dirId = await collection.ensureDirectoryExists(path);
    await collection.addReferencesTo({
      _id: reference,
      _type: drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_APPS"]
    }, [{
      _id: dirId
    }]);
    const {
      data: dirInfos
    } = await collection.get(dirId);
    return dirInfos;
  }
};

/***/ }),

/***/ "ACi5":
/*!************************************!*\
  !*** ./src/photos/locales/de.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Fotos","albums":"Alben","shared":"Von mir geteilt","trash":"Müll","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Hol dir Cozy Drive auf dein Handy!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"Beim Abrufen der Albumliste ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","album_photos_title":"Beim Abrufen der Album-Fotoliste ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","timeline_photos_title":"Beim Abrufen der Fotosliste ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","public_album_error_title":"Beim Abrufen der Fotosliste ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.","public_album_unshared_title":"Dieser Link ist leider nicht mehr verfügbar.","public_album_unshared_text":"Eins verloren, zehn gefunden ... oder bitte einfach nur den Besitzer um Hilfe. Diese Datei ist möglicherweise nicht verloren.","refresh":"Jetzt aktualisieren","generic":"Es ist ein Fehler aufgetreten. Versuche es erneut.","album_rename_abort":"Der Albumname darf nicht leer sein."},"Toolbar":{"photo_upload":"Hochladen","album_new":"Neues Album","album_delete":"Löschen","album_quit":"Leave & delete shared album","album_download":"Herunterladen","more":"Mehr","menu":{"select_items":"Fotos auswählen","photo_upload":"Fotos hochladen","rename_album":"Album umbenennen","album_delete":"Album löschen","album_quit":"Leave & delete shared album","download_album":"Album downloaden","add_photos":"Fotos zum Album hinzufügen"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Lade mehr Fotos","select_all":"Alle auswählen","unselect_all":"Alle abwählen"},"Alerter":{"photos":{"fetching_error":"Beim Holen der Fotos ist ein Fehler aufgetreten.","already_added_photo":"Dieses Album enthält bereits dieses Foto."}},"SelectionBar":{"selected_count":"Ausgewähltes Foto |||| Ausgewählte Fotos","delete":"Löschen","album-add":"Zum Album hinzufügen","album-remove":"Aus dem Album entfernen","download":"Herunterladen","close":"Schließen"},"Share":{"status":{"pending":"Ausstehend","accepted":"Accepted","refused":"Verweigert","error":"Fehler","unregistered":"Fehler","mail-not-sent":"Fehler","revoked":"Fehler"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} Foto |||| %{smart_count} Fotos","album_item_shared_ro":"Geteilt (lesend)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Zum Album hinzufügen","success":"Album %{name} wurde mit %{smart_count} Foto aktualisiert. |||| Album %{name} wurde mit %{smart_count} Fotos aktualisiert.","error":{"generic":"Beim Aktualisieren des Albums ist ein Fehler aufgetreten. Bitte versuche es erneut.","reference":"Einige Fotos wurden nicht zum Album hinzugefügt. Bitte überprüfe das und versuche es erneut.","response":{"Forbidden":"Die Anwendung ist nicht berechtigt, Alben zu aktualisieren."}}},"share":{"cta":"Teilen","title":"Mit Anderen teilen","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Jeder kann mit dem Link deine Fotos sehen und herunterladen.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"per Email","subtitle":"By email","email":"Email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Sende","genericSuccess":"You sent an invite to %{count} contacts.","success":"Du hast eine Einladung an %{email} geschickt.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link zum Teilen","copy":"Kopieren","copied":"Kopiert"},"whoHasAccess":{"title":"Wer hat Zugriff"},"protectedShare":{"title":"Demnächst!","desc":"Teile etwas per E-Mail mit Familie und Freunden!"},"close":"Schließen","gettingLink":"Deinen Link bekommen ...","error":{"generic":"Beim Erstellen des Album-Share-Links ist ein Fehler aufgetreten. Bitte versuche es erneut.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Füge deinem neuen Album einen Namen hinzu","placeholder":"Unbenanntes Album","cancel":"Abbruch","submit":"Erstelle neues Album","update":"Fotos zum Album hinzufügen"},"inline_form":{"placeholder":"Neuer Albumname","create_label":"Erstelle ein neues Album","create_button":"Erstelle"},"success":"Album %{name} erstellt mit %{smart_count} Foto. |||| Album %{name} erstellt mit %{smart_count} Fotos.","error":{"generic":"Beim Erstellen des Albums ist ein Fehler aufgetreten. Bitte versuche es erneut.","already_exists":"Das Album %{name} existiert bereits, bitte wähle ein Anderes aus.","name_missing":"Du musst deinem Album einen Namen geben."}},"fetchAlbums":{"error":{"index_missing":"Ein Alben-Index muss bereitgestellt werden, um Alben zu holen."}},"remove_photos":{"success":"Das Foto wurde aus dem Album %{album_name} entfernt","error":{"generic":"Beim Entfernen des Fotos ist ein Fehler aufgetreten. Bitte versuche es erneut."}},"remove_album":{"success":"Album %{name} wurde gelöscht.","error":{"generic":"Beim Entfernen des Albums ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Schließen","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Herunterladen"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Dieses Album dauerhaft löschen?","cancel":"Abbruch","delete":"Dauerhaft löschen","forbidden":"Sie können nicht mehr auf dieses Album oder die Auswahl zugreifen.","eye":"Deine Fotos werden nicht gelöscht.","link":"Wenn du es geteilt hast, können die Leute nicht darauf zugreifen."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Dieses Element löschen? |||| Diese Elemente löschen?","trash":"Es wird in den Papierkorb verschoben. |||| Sie werden in den Papierkorb verschoben.","restore":"Du kannst es wiederherstellen wann immer du willst. |||| Du kannst sie wiederherstellen wann immer du willst.","shared":"Wenn du es geteilt hast, können die Leute nicht darauf zugreifen. |||| Wenn du sie geteilt hast, können die Leute nicht darauf zugreifen.","related":"Einige der Fotos in der Auswahl beziehen sich auf ein Album. Sie werden aus ihm entfernt, wenn du sie löschst.","cancel":"Abbruch","delete":"Entferne"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"%{smart_count} Foto zu Cozy Fotos hochgeladen. |||| %{smart_count} Fotos zu Cozy Fotos hochgeladen.","header_mobile":"Uploading %{done} of %{total}","header_done":"%{done} von %{total} erfolgreich hochgeladen","close":"Schließen","item":{"pending":"Ausstehend"},"alert":{"success":"%{smart_count} Foto erfolgreich hochgeladen. |||| %{smart_count} Fotos erfolgreich hochgeladen.","success_conflicts":"%{smart_count} Foto hochgeladen mit %{conflictNumber} Konflikt(en). |||| %{smart_count} Fotos hochgeladen mit %{conflictNumber} Konflikt(en).","errors":"Beim Upload der Fotos sind Fehler aufgetreten."}}};

/***/ }),

/***/ "AISZ":
/*!*********************************************!*\
  !*** ./src/photos/components/PhotoList.jsx ***!
  \*********************************************/
/*! exports provided: PhotoList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoList", function() { return PhotoList; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var justified_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! justified-layout */ "sIaW");
/* harmony import */ var justified_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(justified_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/photoList.styl */ "kKu1");
/* harmony import */ var _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_photoList_styl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Photo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Photo */ "sXRB");











var photoDimensionsFallback = {
  width: 1,
  height: 1 // Returns pseudo responsive row height based on container width. Trying to get
  // something between 190 and 240.

};

var adaptRowHeight = function adaptRowHeight(containerWidth) {
  return 180 + (containerWidth || 1800) / 30;
}; // Some photos use EXIF orientation tags, and their width/height are thus incorrect
// if we don't take into account this orientation


var handlePhotoOrientation = function handlePhotoOrientation(metadata) {
  if (metadata.orientation && metadata.orientation > 4) {
    return {
      width: metadata.height,
      height: metadata.width
    };
  }

  return metadata;
};

var PhotoList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PhotoList, _Component);

  function PhotoList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PhotoList);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PhotoList).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotoList, [{
    key: "isPhotoSelected",
    value: function isPhotoSelected(photo, selected) {
      var selectedIds = selected.map(function (p) {
        return p._id;
      });
      return selectedIds.indexOf(photo._id) !== -1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          t = _this$props.t,
          key = _this$props.key,
          title = _this$props.title,
          photos = _this$props.photos,
          selected = _this$props.selected,
          showSelection = _this$props.showSelection,
          onPhotoToggle = _this$props.onPhotoToggle,
          onPhotosSelect = _this$props.onPhotosSelect,
          onPhotosUnselect = _this$props.onPhotosUnselect,
          containerWidth = _this$props.containerWidth; // containerWidth = 0 on the first render, skip it

      if (!containerWidth) {
        return null;
      }

      var confDesk = {
        spacing: 16,
        padding: 32
      };
      var confMob = {
        spacing: 8,
        padding: 0
      };
      var conf = containerWidth >= 768 ? confDesk : confMob; // @see https://flickr.github.io/justified-layout/

      var layout = justified_layout__WEBPACK_IMPORTED_MODULE_6___default()(photos.map(function (photo) {
        var metadata = photo.metadata || photo.attributes.metadata;
        return metadata && metadata.width && metadata.height ? handlePhotoOrientation(metadata) : photoDimensionsFallback;
      }), {
        containerWidth: containerWidth,
        targetRowHeight: adaptRowHeight(containerWidth),
        // Must be relevant with styles
        boxSpacing: {
          horizontal: conf.spacing,
          vertical: conf.spacing
        },
        containerPadding: {
          top: 0,
          right: conf.padding,
          bottom: 0,
          left: conf.padding
        }
      });
      var selectedIds = selected.map(function (p) {
        return p._id;
      });
      var allSelected = photos.every(function (p) {
        return selectedIds.indexOf(p._id) !== -1;
      }); // we need to process the right position of the last photo of the first row so that we can align
      // the SELECT ALL button with the photo

      var firstRowTop = layout.boxes[0].top;
      var secondRowFirstIndex = layout.boxes.findIndex(function (b) {
        return b.top !== firstRowTop;
      });
      var firstRowLastBox = secondRowFirstIndex === -1 ? layout.boxes[layout.boxes.length - 1] : layout.boxes[secondRowFirstIndex - 1];
      var firstRowLastBoxRight = containerWidth - firstRowLastBox.left - firstRowLastBox.width - conf.padding;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        "data-test-id": "photo-section",
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_styles_photoList_styl__WEBPACK_IMPORTED_MODULE_9___default.a['pho-section'], showSelection && _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_9___default.a['pho-section--has-selection']),
        key: key,
        style: {
          width: "".concat(containerWidth, "px")
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_9___default.a['pho-section-header']
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, title), showSelection && photos.length > 1 && allSelected && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        style: {
          marginRight: "".concat(firstRowLastBoxRight, "px")
        },
        onClick: function onClick() {
          return onPhotosUnselect(photos);
        }
      }, t('Board.unselect_all')), showSelection && photos.length > 1 && !allSelected && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        style: {
          marginRight: "".concat(firstRowLastBoxRight, "px")
        },
        onClick: function onClick() {
          return onPhotosSelect(photos);
        }
      }, t('Board.select_all'))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_9___default.a['pho-photo-wrapper'] // Specify the width & height for making justified layout work.
        ,
        style: {
          width: "".concat(containerWidth, "px"),
          height: "".concat(layout.containerHeight, "px")
        }
      }, photos.map(function (photo, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Photo__WEBPACK_IMPORTED_MODULE_10__["default"], {
          photo: photo,
          box: layout.boxes[index],
          key: photo.id,
          selected: _this.isPhotoSelected(photo, selected),
          onToggle: onPhotoToggle
        });
      })));
    }
  }]);

  return PhotoList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_8__["translate"])()(PhotoList));

/***/ }),

/***/ "AzIT":
/*!***************************************************!*\
  !*** ./src/components/pushClient/pushClient.styl ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"coz-btn-client":"coz-btn-client--1LuMZ","coz-banner-client":"coz-banner-client--xEL17","coz-btn-clientMobile":"coz-btn-clientMobile--3n2yA","coz-banner-text":"coz-banner-text--tBptv","close-banner":"close-banner---KAV7","spin":"spin--2_Zjm","shake":"shake--1oABm"};

/***/ }),

/***/ "BDb7":
/*!*******************************************!*\
  !*** ./src/photos/ducks/upload/index.jsx ***!
  \*******************************************/
/*! exports provided: UploadQueue, ADD_TO_UPLOAD_QUEUE, default, addToUploadQueue, purgeUploadQueue, onQueueEmpty, getUploadQueue, getProcessed, getSuccessful */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_UPLOAD_QUEUE", function() { return ADD_TO_UPLOAD_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToUploadQueue", function() { return addToUploadQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purgeUploadQueue", function() { return purgeUploadQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onQueueEmpty", function() { return onQueueEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUploadQueue", function() { return getUploadQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessed", function() { return getProcessed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuccessful", function() { return getSuccessful; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "fvjX");
/* harmony import */ var lib_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/logger */ "OTOu");
/* harmony import */ var cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cozy-ui/react/Alerter */ "67rm");
/* harmony import */ var _UploadQueue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UploadQueue */ "jQ+K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadQueue", function() { return _UploadQueue__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var react_cozy_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cozy-helpers */ "Yo2A");
/* harmony import */ var drive_web_modules_upload_QuotaAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! drive/web/modules/upload/QuotaAlert */ "tFpY");











var SLUG = 'upload';
var ADD_TO_UPLOAD_QUEUE = 'ADD_TO_UPLOAD_QUEUE';
var UPLOAD_FILE = 'UPLOAD_FILE';
var RECEIVE_UPLOAD_SUCCESS = 'RECEIVE_UPLOAD_SUCCESS';
var RECEIVE_UPLOAD_ERROR = 'RECEIVE_UPLOAD_ERROR';
var PURGE_UPLOAD_QUEUE = 'PURGE_UPLOAD_QUEUE'; //!TODO mutualize in FileCollection

var PENDING = 'pending';
var LOADING = 'loading';
var LOADED = 'loaded';
var FAILED = 'failed';
var CONFLICT = 'conflict';
var QUOTA = 'quota';

var itemInitialState = function itemInitialState(file) {
  return {
    file: file,
    status: PENDING
  };
};

var status = function status(action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return LOADING;

    case RECEIVE_UPLOAD_SUCCESS:
      return LOADED;

    case RECEIVE_UPLOAD_ERROR:
      return action.status;
  }
};

var item = function item(state, action) {
  return Object.assign({}, state, {
    status: status(action)
  });
};

var queue = function queue() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_TO_UPLOAD_QUEUE:
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(state), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(action.files.map(function (f) {
        return itemInitialState(f);
      })));

    case PURGE_UPLOAD_QUEUE:
      return [];

    case UPLOAD_FILE:
    case RECEIVE_UPLOAD_SUCCESS:
    case RECEIVE_UPLOAD_ERROR:
      return state.map(function (i) {
        return i.file.name !== action.file.name ? i : item(i, action);
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  queue: queue
}));

var processNextFile = function processNextFile(callback) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState) {
        var item, file, statusError, _status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                item = getUploadQueue(getState()).find(function (i) {
                  return i.status === PENDING;
                });

                if (item) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatch(onQueueEmpty()));

              case 3:
                file = item.file;
                _context.prev = 4;
                dispatch({
                  type: UPLOAD_FILE,
                  file: file
                });
                _context.next = 8;
                return callback(file);

              case 8:
                dispatch({
                  type: RECEIVE_UPLOAD_SUCCESS,
                  file: file
                });
                _context.next = 18;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                lib_logger__WEBPACK_IMPORTED_MODULE_5__["default"].log(_context.t0);
                statusError = {
                  409: CONFLICT,
                  413: QUOTA //Photo doesn't have a status QUOTA. So
                  //we just use FAILED as it seems to do the job

                };
                _status = statusError[_context.t0.status] || /Failed to fetch$/.exec(_context.t0.toString()) || FAILED;
                dispatch({
                  type: RECEIVE_UPLOAD_ERROR,
                  file: file,
                  status: _status === CONFLICT ? CONFLICT : FAILED
                });

                if (_status === QUOTA) {
                  dispatch(Object(react_cozy_helpers__WEBPACK_IMPORTED_MODULE_8__["showModal"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(drive_web_modules_upload_QuotaAlert__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    t: function t() {}
                  })));
                }

              case 18:
                dispatch(processNextFile(callback));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 11]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var addToUploadQueue = function addToUploadQueue(files, callback) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: ADD_TO_UPLOAD_QUEUE,
                  files: files
                });
                dispatch(processNextFile(callback));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var purgeUploadQueue = function purgeUploadQueue() {
  return {
    type: PURGE_UPLOAD_QUEUE
  };
};
var onQueueEmpty = function onQueueEmpty() {
  return function (dispatch, getState) {
    var queue = getUploadQueue(getState());
    var conflicts = getConflicts(queue);
    var errors = getErrors(queue);
    var loaded = getLoaded(queue);

    if (!conflicts.length && !errors.length) {
      cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_6__["default"].success('UploadQueue.alert.success', {
        smart_count: loaded.length
      });
    } else if (conflicts.length && !errors.length) {
      cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_6__["default"].info('UploadQueue.alert.success_conflicts', {
        smart_count: loaded.length,
        conflictNumber: conflicts.length
      });
    } else {
      cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_6__["default"].error('UploadQueue.alert.errors');
    }
  };
}; // selectors

var filterByStatus = function filterByStatus(queue, status) {
  return queue.filter(function (f) {
    return f.status === status;
  });
};

var getConflicts = function getConflicts(queue) {
  return filterByStatus(queue, CONFLICT);
};

var getErrors = function getErrors(queue) {
  return filterByStatus(queue, FAILED);
};

var getLoaded = function getLoaded(queue) {
  return filterByStatus(queue, LOADED);
};

var getUploadQueue = function getUploadQueue(state) {
  return state[SLUG].queue;
};
var getProcessed = function getProcessed(state) {
  return getUploadQueue(state).filter(function (f) {
    return f.status !== PENDING;
  });
};
var getSuccessful = function getSuccessful(state) {
  return getLoaded(getUploadQueue(state));
};

/***/ }),

/***/ "BUUs":
/*!**********************************************************!*\
  !*** ./src/photos/ducks/albums/components/AlbumItem.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlbumItem; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/albumsList.styl */ "6qED");
/* harmony import */ var _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Image */ "510Z");












var AlbumItemLink = function AlbumItemLink(_ref) {
  var router = _ref.router,
      album = _ref.album,
      image = _ref.image,
      title = _ref.title,
      desc = _ref.desc;
  var parentPath = router.location.pathname;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "".concat(parentPath, "/").concat(album._id),
    className: _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album-link']
  }, image, title, desc);
};

var LinkedAlbumItem = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(AlbumItemLink);

var ClickableAlbumItem = function ClickableAlbumItem(_ref2) {
  var album = _ref2.album,
      image = _ref2.image,
      title = _ref2.title,
      desc = _ref2.desc,
      _onClick = _ref2.onClick,
      disabled = _ref2.disabled;
  return disabled ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album-link'], _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album-link--disabled'])
  }, image, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, title, desc)) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    onClick: function onClick() {
      return _onClick(album);
    },
    className: _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album-link']
  }, image, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, title, desc));
};

var AlbumItemDesc = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_9__["translate"])()(function (_ref3) {
  var t = _ref3.t,
      photoCount = _ref3.photoCount,
      _ref3$shared = _ref3.shared,
      shared = _ref3$shared === void 0 ? {} : _ref3$shared;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
    className: _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album-description']
  }, t('Albums.album_item_description', {
    smart_count: photoCount
  }), (shared.byMe || shared.withMe) && " - ".concat(t("Albums.album_item_shared_".concat(shared.sharingType === 'one-way' ? 'ro' : 'rw'))));
});

var AlbumItem =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AlbumItem, _Component);

  function AlbumItem() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AlbumItem);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AlbumItem).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AlbumItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          album = _this$props.album,
          _this$props$shared = _this$props.shared,
          shared = _this$props$shared === void 0 ? {} : _this$props$shared,
          onClick = _this$props.onClick,
          thumbnail = _this$props.thumbnail;
      var disabled = shared.readOnly;
      var photos = album.photos.data;
      var coverPhoto = photos[0] || null;
      var image = !coverPhoto ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album-photo-item']
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Image__WEBPACK_IMPORTED_MODULE_10__["ImageLoader"], {
        file: coverPhoto,
        size: "small",
        render: function render(src) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: src,
            className: _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album-photo-item'],
            alt: "".concat(album.name, " album cover")
          });
        }
      });
      var desc = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AlbumItemDesc, {
        t: t,
        album: album,
        shared: shared,
        thumbnail: thumbnail,
        photoCount: album.photos.count
      });
      var title = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album-title']
      }, album.name);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "data-test-id": "pho-album",
        "data-test-name": album.name,
        className: _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-album']
      }, onClick ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ClickableAlbumItem, {
        album: album,
        image: image,
        title: title,
        desc: desc,
        onClick: onClick,
        disabled: disabled
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LinkedAlbumItem, {
        album: album,
        image: image,
        title: title,
        desc: desc
      }));
    }
  }]);

  return AlbumItem;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "Bicm":
/*!*********************************************!*\
  !*** ./src/sharing/components/tooltip.styl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"shared-tooltip":"shared-tooltip--RvIBh","shared-tooltip-list":"shared-tooltip-list--VnQfr"};

/***/ }),

/***/ "C/eS":
/*!*****************************************!*\
  !*** ./src/photos/styles/newAlbum.styl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pho-panel-form":"pho-panel-form--1S6en","coz-form":"coz-form--cCo_s","coz-form-group":"coz-form-group--1I069","coz-form-desc":"coz-form-desc--3FnDz","coz-form-label":"coz-form-label--385WH","coz-form-label--error":"coz-form-label--error--1Kr_k","coz-form-errors":"coz-form-errors--1RCYk","error":"error--3qEb3","pho-panel":"pho-panel--vFzlq","pho-panel-header":"pho-panel-header--2aCpb","pho-panel-footer":"pho-panel-footer--2Ynjt","pho-panel-controls":"pho-panel-controls--1UDSQ","pho-panel-content":"pho-panel-content--2OXQJ","pho-panel-wrap":"pho-panel-wrap--1OkG3","spin":"spin--t2Bmx","shake":"shake--2MjHG"};

/***/ }),

/***/ "Cm82":
/*!************************************************!*\
  !*** ./src/sharing/assets/icons/icon-link.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-link_784d8d07b6c9bf8edf4207327b6add94",
  "use": "icon-link_784d8d07b6c9bf8edf4207327b6add94-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-link_784d8d07b6c9bf8edf4207327b6add94\">\n    <defs>\n        <path d=\"M8.87940867,3.87953579 C8.48888438,4.27006009 7.8557194,4.27006009 7.46519511,3.87953579 C7.07467081,3.4890115 7.07467081,2.85584652 7.46519511,2.46532223 L9.05304103,0.877476309 C10.2226142,-0.292096843 12.1218341,-0.292252339 13.289659,0.875572597 L14.4691583,2.05507187 C15.6394269,3.22534048 15.6355011,5.12344332 14.4628542,6.29609024 L10.9986358,9.7603087 C9.4643126,11.2946319 6.92867661,11.3430173 5.46519511,9.87953579 C5.07467081,9.4890115 5.07467081,8.85584652 5.46519511,8.46532223 C5.8557194,8.07479794 6.48888438,8.07479794 6.87940867,8.46532223 C7.54950929,9.13542285 8.81932532,9.11119201 9.5844222,8.34609513 L13.0486407,4.88187668 C13.4415455,4.48897179 13.4428522,3.85719292 13.0549447,3.46928543 L11.8754455,2.28978616 C11.488721,1.90306165 10.855831,1.90311347 10.4672546,2.29168987 L8.87940867,3.87953579 Z M6.46519511,11.4653222 C6.8557194,11.0747979 7.48888438,11.0747979 7.87940867,11.4653222 C8.26993296,11.8558465 8.26993296,12.4890115 7.87940867,12.8795358 L6.29156275,14.4673817 C5.12198959,15.6369549 3.22276968,15.6371104 2.05494474,14.4692854 L0.875445471,13.2897862 C-0.294823143,12.1195175 -0.290897366,10.2214147 0.881749556,9.04876778 L4.34596801,5.58454933 C5.88029117,4.05022616 8.41592716,4.00184073 9.87940867,5.46532223 C10.269933,5.85584652 10.269933,6.4890115 9.87940867,6.87953579 C9.48888438,7.27006009 8.8557194,7.27006009 8.46519511,6.87953579 C7.79509448,6.20943517 6.52527845,6.23366601 5.76018157,6.99876289 L2.29596312,10.4629813 C1.90305823,10.8558862 1.90175154,11.4876651 2.28965903,11.8755726 L3.4691583,13.0550719 C3.85588281,13.4417964 4.48877278,13.4417446 4.87734918,13.0531682 L6.46519511,11.4653222 Z\" id=\"icon-link_784d8d07b6c9bf8edf4207327b6add94_path-1\" />\n    </defs>\n    <g id=\"icon-link_784d8d07b6c9bf8edf4207327b6add94_🍦-icons\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\">\n        <g id=\"icon-link_784d8d07b6c9bf8edf4207327b6add94_icons/16/link\">\n            <mask id=\"icon-link_784d8d07b6c9bf8edf4207327b6add94_mask-2\">\n                <use xlink:href=\"#icon-link_784d8d07b6c9bf8edf4207327b6add94_path-1\" />\n            </mask>\n            <use id=\"icon-link_784d8d07b6c9bf8edf4207327b6add94_Mask\" fill-rule=\"nonzero\" xlink:href=\"#icon-link_784d8d07b6c9bf8edf4207327b6add94_path-1\" />\n        </g>\n    </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Cp2O":
/*!********************************************!*\
  !*** ./src/sharing/components/Tooltip.jsx ***!
  \********************************************/
/*! exports provided: SharingTooltip, TooltipRecipientList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharingTooltip", function() { return SharingTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipRecipientList", function() { return TooltipRecipientList; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-tooltip */ "OnOE");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tooltip_styl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltip.styl */ "Bicm");
/* harmony import */ var _tooltip_styl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tooltip_styl__WEBPACK_IMPORTED_MODULE_10__);











var SharingTooltip = function SharingTooltip(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({
    place: "bottom",
    effect: "solid",
    className: _tooltip_styl__WEBPACK_IMPORTED_MODULE_10___default.a['shared-tooltip']
  }, props), props.children);
}; // accepts all the props from https://github.com/wwayne/react-tooltip#options

var TooltipRecipientList =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TooltipRecipientList, _React$Component);

  function TooltipRecipientList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TooltipRecipientList);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TooltipRecipientList).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TooltipRecipientList, [{
    key: "render",
    value: function render() {
      var t = this.context.t;
      var _this$props = this.props,
          recipientNames = _this$props.recipientNames,
          _this$props$cutoff = _this$props.cutoff,
          cutoff = _this$props$cutoff === void 0 ? 4 : _this$props$cutoff;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: _tooltip_styl__WEBPACK_IMPORTED_MODULE_10___default.a['shared-tooltip-list']
      }, recipientNames.slice(0, cutoff).map(function (name) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: "key_name_".concat(name)
        }, name);
      }), recipientNames.length > cutoff && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, t('Share.members.others', {
        smart_count: recipientNames.slice(cutoff).length
      })));
    }
  }]);

  return TooltipRecipientList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(TooltipRecipientList, "contextTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

TooltipRecipientList.propTypes = {
  recipientNames: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string),
  cutoff: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
TooltipRecipientList.defaultProps = {
  recipientNames: [],
  cutoff: 4
};

/***/ }),

/***/ "D575":
/*!*******************************************!*\
  !*** ./src/photos/styles/addToAlbum.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"coz-modal-section":"coz-modal-section--1g5-9","coz-create-album":"coz-create-album--1VWC2","coz-select-album":"coz-select-album--20TzS","spin":"spin--3Sc3l","shake":"shake--1nSjp"};

/***/ }),

/***/ "DbnX":
/*!***************************************************!*\
  !*** ./src/photos/assets/icons/icon-checkbox.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-checkbox_9e41a33868f3dad7314de1b6a47b358f",
  "use": "icon-checkbox_9e41a33868f3dad7314de1b6a47b358f-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"icon-checkbox_9e41a33868f3dad7314de1b6a47b358f\">\n  <path fill=\"#32363f\" fill-rule=\"evenodd\" d=\"M64,129.99406 C64,128.892771 64.8945138,128 65.9940603,128 L78.0059397,128 C79.1072288,128 80,128.894514 80,129.99406 L80,142.00594 C80,143.107229 79.1054862,144 78.0059397,144 L65.9940603,144 C64.8927712,144 64,143.105486 64,142.00594 L64,129.99406 Z M67.7071068,137.292893 C67.3165825,136.902369 66.6834175,136.902369 66.2928932,137.292893 C65.9023689,137.683418 65.9023689,138.316582 66.2928932,138.707107 L68.2928932,140.707107 C68.6834175,141.097631 69.3165825,141.097631 69.7071068,140.707107 L77.7071068,132.707107 C78.0976311,132.316582 78.0976311,131.683418 77.7071068,131.292893 C77.3165825,130.902369 76.6834175,130.902369 76.2928932,131.292893 L69,138.585786 L67.7071068,137.292893 Z\" transform=\"translate(-64 -128)\" />\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "EUDN":
/*!****************************************************************!*\
  !*** ./src/photos/ducks/albums/components/AddToAlbumModal.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_addToAlbum_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/addToAlbum.styl */ "D575");
/* harmony import */ var _styles_addToAlbum_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_addToAlbum_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cozy-ui/react/Modal */ "cLsY");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CreateAlbumForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CreateAlbumForm */ "jh07");
/* harmony import */ var _SelectAlbumsForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SelectAlbumsForm */ "JhAt");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Loading */ "ZFPb");














var AddToAlbumModal =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AddToAlbumModal, _Component);

  function AddToAlbumModal() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AddToAlbumModal);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AddToAlbumModal).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AddToAlbumModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          photos = _this$props.photos,
          data = _this$props.data,
          fetchStatus = _this$props.fetchStatus,
          createAlbum = _this$props.createAlbum,
          addPhotos = _this$props.addPhotos,
          onDismiss = _this$props.onDismiss,
          _this$props$onSuccess = _this$props.onSuccess,
          onSuccess = _this$props$onSuccess === void 0 ? function () {} : _this$props$onSuccess;
      var isFetchingAlbums = fetchStatus === 'pending' || fetchStatus === 'loading';
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: t('Albums.add_photos.title'),
        secondaryAction: onDismiss
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_8__["ModalSection"], {
        className: _styles_addToAlbum_styl__WEBPACK_IMPORTED_MODULE_5___default.a['coz-modal-section']
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_addToAlbum_styl__WEBPACK_IMPORTED_MODULE_5___default.a['coz-create-album'])
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CreateAlbumForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onSubmitNewAlbum: function onSubmitNewAlbum(name) {
          return createAlbum(name, photos).then(onDismiss).then(onSuccess);
        }
      })), isFetchingAlbums ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loadingType: "albums_fetching"
      }) : data && data.length > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_addToAlbum_styl__WEBPACK_IMPORTED_MODULE_5___default.a['coz-select-album'])
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SelectAlbumsForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        albums: {
          data: data,
          fetchStatus: fetchStatus
        },
        onSubmitSelectedAlbum: function onSubmitSelectedAlbum(album) {
          return addPhotos(album, photos).then(onDismiss).then(onSuccess);
        }
      })) : null));
    }
  }]);

  return AddToAlbumModal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_7__["translate"])()(AddToAlbumModal));

/***/ }),

/***/ "FEFk":
/*!************************************!*\
  !*** ./src/photos/locales/cs.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "FKqX":
/*!**************************************!*\
  !*** ./src/drive/config/config.json ***!
  \**************************************/
/*! exports provided: promoteDesktop, default */
/***/ (function(module) {

module.exports = {"promoteDesktop":{"isActivated":true}};

/***/ }),

/***/ "FUd8":
/*!************************************!*\
  !*** ./src/photos/locales/pl.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Zdjęcia","albums":"Albumy","shared":"Udostępniane przeze mnie","trash":"Kosz","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Pobierz Cozy","btn-client-mobile":"Pobierz Cozy Drive na Twoje urządzenie mobilne!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"Nie masz jeszcze żadnych zdjęć.","timeline_photos_text":"Naciśnij \"Wgraj\" aby dodać zdjęcia.","albums_title":"Nie masz jeszcze żadnego albumu.","albums_text":"Zacznij naciskając \"Nowy album\" aby stworzyć swój pierwszy album.","album_photos_title":"Nie ma jeszcze zdjęć w tym albumie.","album_photos_text":"Zacznij naciskając \"Dodaj zdjęcia do albumu\" aby jakieś dodać.","shared_album_photos_title":"Nie ma jeszcze zdjęć w tym albumie.","shared_album_photos_text":"Wróć później"},"Error":{"albums_title":"Wystąpił błąd podczas wczytywania listy albumów. Proszę spróbuj później.","album_photos_title":"Wystąpił błąd podczas wczytywania listy zdjęć z albumu. Proszę spróbuj później.","timeline_photos_title":"Wystąpił błąd podczas wczytywania listy zdjęć. Proszę spróbuj później.","public_album_error_title":"Wystąpił błąd podczas wczytywania listy zdjęć. Proszę spróbuj później.","public_album_unshared_title":"Niestety ten link nie jest już dostępny.","public_album_unshared_text":"Zgubione, znalezione... poproś właściciela o pomoc. Być może plik nie jest utracony.","refresh":"Odśwież teraz","generic":"Wystąpił błąd, proszę spróbuj za chwilę.","album_rename_abort":"Nazwa albumu nie może być pusta."},"Toolbar":{"photo_upload":"Wgraj","album_new":"Nowy album","album_delete":"Usuń","album_quit":"Opuść i usuń udostępniony album","album_download":"Pobierz","more":"Więcej","menu":{"select_items":"Wybierz zdjęcia","photo_upload":"Wgraj zdjęcia","rename_album":"Zmień nazwę albumu","album_delete":"Usuń album","album_quit":"Opuść i usuń udostępniony album","download_album":"Pobierz album","add_photos":"Dodaj zdjęcia do albumu"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Załaduj więcej zdjęć","select_all":"Zaznacz wszystko","unselect_all":"Odznacz wszystko"},"Alerter":{"photos":{"fetching_error":"Wystąpił błąd podczas pobierania zdjęć.","already_added_photo":"Ten album już zawiera to zdjęcie."}},"SelectionBar":{"selected_count":"wybrany element |||| wybrane elementy","delete":"Usuń","album-add":"Dodaj do albumu","album-remove":"Usuń z albumu","download":"Pobierz","close":"Zamknij"},"Share":{"status":{"pending":"Oczekujące","accepted":"Zaakceptowane","refused":"Odrzucone","error":"Błąd","unregistered":"Błąd","mail-not-sent":"Błąd","revoked":"Błąd"},"type":{"one-way":"Może oglądać (dostępne wkrótce)","two-way":"Może zmieniać"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} zdjęcie |||| %{smart_count} zdjęcia","album_item_shared_ro":"Udostępnione (tylko do odczytu)","album_item_shared_rw":"Udostępnione (do odczytu i zapisu)","load_more":"Load more albums","add_photos":{"title":"Dodaj do albumu","success":"Do albumu %{name} zostało dodane %{smart_count} zdjęcie. |||| Do albumu %{name} zostały dodane %{smart_count} zdjęcia.","error":{"generic":"Wystąpił błąd podczas aktualizacji albumu, spróbuj raz jeszcze.","reference":"Niektóre zdjęcia nie zostały dodane do albumu. Sprawdź to i spróbuj ponownie.","response":{"Forbidden":"Aplikacja nie ma uprawnień do aktualizacji albumów."}}},"share":{"cta":"Udostępnij","title":"Udostępnij innym","details":{"title":"Szczegóły udostępnienia","createdAt":"Dnia %{date}","ro":"Tylko do odczytu","rw":"Odczyt / zapis"},"sharedByMe":"Udostępnione","sharedWithMe":"Udostępnione dla mnie","shareByLink":{"subtitle":"By public link","desc":"Każdy posiadający ten link może zobaczyć i pobrać Twoje zdjęcia.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"E-mailem","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Wyślij","genericSuccess":"Wysłałeś zaproszenie do %{count} kontaktów.","success":"Wysłałeś zaproszenie na adres %{email}.","comingsoon":"Dostępne wkrótce! Będziesz mógł udostępniać dokumenty i zdjęcia jednym kliknięciem swojej rodzinie, przyjaciołom lub współpracownikom. Nie martw się, poinformujemy Cię kiedy ta funkcja będzie dostępna."},"unshare":{"title":"Usuń z albumu","success":"Usunąłeś ten udostępniony Ci album przez %{email}."},"sharingLink":{"title":"Link do zasobu","copy":"Kopiuj","copied":"Skopiowane"},"whoHasAccess":{"title":"Kto ma dostęp"},"protectedShare":{"title":"Dostępne wkrótce!","desc":"Udostępniaj wszystko mailem rodzinie i przyjaciołom!"},"close":"Zamknij","gettingLink":"Pobieranie Twojego linku...","error":{"generic":"Wystąpił błąd podczas tworzenia linku udostępnienia, proszę spróbuj ponownie.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Podaj nazwę swojego nowego albumu.","placeholder":"Niezatytułowany album","cancel":"Anuluj","submit":"Stwórz nowy album","update":"Dodaj zdjęcia do albumu"},"inline_form":{"placeholder":"Nazwa nowego albumu","create_label":"Utwórz nowy album","create_button":"Utwórz"},"success":"Utworzono album %{name} zawierający %{smart_count} zdjęcie. |||| Utworzono album %{name} zawierający %{smart_count} zdjęcia.","error":{"generic":"Wystąpił błąd podczas tworzenia albumu, spróbuj ponownie.","already_exists":"Album %{name} już istnieje, wybierz inną nazwę.","name_missing":"Musisz nadać nazwę dla Twojego albumu."}},"fetchAlbums":{"error":{"index_missing":"Indeksy albumów muszą być podane aby można było je połączyć."}},"remove_photos":{"success":"Zdjęcie zostało usunięte z albumu %{album_name}","error":{"generic":"Wystąpił błąd podczas usuwania zdjęcia, spróbuj ponownie."}},"remove_album":{"success":"Album %{album_name} został usunięty.","error":{"generic":"Wystąpił błąd podczas usuwania albumu, spróbuj ponownie."}},"quit_album":{"success":"Album %{album_name} został usunięty.","error":{"generic":"Wystąpił błąd podczas opuszczania albumu, spróbuj ponownie."}}},"Viewer":{"close":"Zamknij","noviewer":{"title":"Przeglądarka nie potrafi jeszcze wyświetlać plików tego typu.","download":"Pobierz ten plik","openWith":"Otwórz używając..."},"actions":{"download":"Pobrane"},"loading":{"error":"Plik nie może zostać załadowany. Czy nie występują problemy z Twoim łączem internetowym?","retry":"Spróbuj ponownie"}},"destroyconfirmation":{"title":"Czy trwale usunąć ten album?","cancel":"Anuluj","delete":"Usuń trwale","forbidden":"Nie będziesz miał już dostępu do tego albumu lub sekcji.","eye":"Twoje zdjęcia nie zostaną usunięte","link":"Jeżeli go udostępniałeś, inni także nie będą mieli do niego dostępu."},"quitconfirmation":{"title":"Trwale opuścić i usunąć udostępniony album?","cancel":"Anuluj","quit":"Opuść i usuń","forbidden":"Nie będziesz miał już dostępu do tego albumu lub sekcji."},"timeline":{"DeleteConfirm":{"title":"Usunąć ten element? |||| Usunąć te elementy?","trash":"Będzie przeniesiony do Kosza. |||| Będą przeniesione do Kosza.","restore":"W dalszym ciągu możesz go przywrócić kiedy chcesz. |||| W dalszym ciągu możesz je przywrócić kiedy chcesz.","shared":"Jeżeli go udostępniałeś, inni także nie będą mieli do niego dostępu. |||| Jeżeli go udostępniałeś, inni także nie będą mieli do nich dostępu.","related":"Niektóre zdjęcia z tej sekcji są powiązane z albumem. Będą usunięte jeżeli zdecydujesz się kontynuować.","cancel":"Anuluj","delete":"Usuń"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Wgrywanie %{smart_count} zdjęcia na Cozy Photos |||| Wgrywanie %{smart_count} zdjęć na Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Wgrywanie %{done} z %{total} zakończone pomyślnie","close":"zamknij","item":{"pending":"Oczekujące"},"alert":{"success":"%{smart_count} zdjęcie wgranie pomyślnie. |||| %{smart_count} zdjęcia wgrane pomyślnie.","success_conflicts":"%{smart_count} zdjęcie spowodowało %{conflictNumber} konflikt(y). |||| %{smart_count} zdjęcia spowodowały %{conflictNumber} konflikt(y).","errors":"Wystąpił błąd podczas wgrywania zdjęć."}}};

/***/ }),

/***/ "G42y":
/*!************************************!*\
  !*** ./src/photos/locales/ja.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"写真","albums":"アルバム","shared":"自分で共有","trash":"ゴミ箱","btn-client":"デスクトップ用 Cozy ドライブを入手","btn-client-web":"Cozy を入手","btn-client-mobile":"お使いのモバイルで Cozy ドライブを入手しましょう!","banner-txt-client":"デスクトップ用 Cozy ドライブを入手して、ファイルを安全に同期し、いつでもアクセスできるようにしましょう。","banner-btn-client":"ダウンロード","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"まだ写真はありません。","timeline_photos_text":"\"アップロード\" ボタンを押して写真を追加してください。","albums_title":"まだアルバムはありません。","albums_text":"\"新しいアルバム\" をクリックして、最初のアルバムを作成してください。","album_photos_title":"このアルバムにまだ写真はありません。","album_photos_text":"\"写真を追加\" をクリックして、何か追加しましょう。","shared_album_photos_title":"このアルバムにまだ写真はありません。","shared_album_photos_text":"後でもう一度ご覧ください"},"Error":{"albums_title":"アルバムのリストを取得中にエラーが発生しました。後でもう一度やり直してください。","album_photos_title":"アルバムの写真リストを取得中にエラーが発生しました。後でもう一度やり直してください。","timeline_photos_title":"写真リストを取得中にエラーが発生しました。後でもう一度やり直してください。","public_album_error_title":"写真リストを取得中にエラーが発生しました。後でもう一度やり直してください。","public_album_unshared_title":"申し訳ありません。このリンクはもう利用できません。","public_album_unshared_text":"1 つ失われ、10 見つかりました... または所有者を確認してください。 このファイルは失われないかもしれません。","refresh":"今すぐ更新","generic":"エラーが発生しました。もう一度やり直してください。","album_rename_abort":"アルバム名は空にできません。"},"Toolbar":{"photo_upload":"アップロード","album_new":"新しいアルバム","album_delete":"削除","album_quit":"共有したアルバムを捨てて、削除","album_download":"ダウンロード","more":"さらに","menu":{"select_items":"写真を選択","photo_upload":"写真をアップロード","rename_album":"アルバムの名前を変更","album_delete":"アルバムを削除","album_quit":"共有したアルバムを捨てて、削除","download_album":"アルバムをダウンロード","add_photos":"写真をアルバムに追加"}},"loading":{"photos_indexing":"写真は現在インデックス中です。 しばらくお待ちください。","albums_indexing":"アルバムは現在インデックス中です。 しばらくお待ちください。","photos_fetching":"読み込み中","albums_fetching":"読み込み中","photos_upload":"アップロード中"},"Board":{"load_more":"さらに写真を読み込む","select_all":"すべて選択","unselect_all":"すべて選択解除"},"Alerter":{"photos":{"fetching_error":"写真の取得中にエラーが発生しました。","already_added_photo":"このアルバムは、すでにこの写真があります。"}},"SelectionBar":{"selected_count":"アイテム選択済 |||| アイテム選択済","delete":"削除","album-add":"アルバムに追加","album-remove":"アルバムから削除","download":"ダウンロード","close":"閉じる"},"Share":{"status":{"pending":"保留","accepted":"承認済","refused":"拒否","error":"エラー","unregistered":"エラー","mail-not-sent":"エラー","revoked":"エラー"},"type":{"one-way":"表示可能 (まもなく登場)","two-way":"変更可能"},"create-cozy":"自分の Cozy を作成する"},"Albums":{"album_item_description":"%{smart_count} 枚の写真 |||| %{smart_count} 枚の写真","album_item_shared_ro":"共有 (読み取り専用)","album_item_shared_rw":"共有 (読み取り/書き込み)","load_more":"さらにアルバムを読み込む","add_photos":{"title":"アルバムに追加","success":"アルバム %{name} の %{smart_count} 枚の写真が更新されました。 |||| アルバム %{name} の %{smart_count} 枚の写真が更新されました。","error":{"generic":"アルバムの更新中にエラーが発生しました。もう一度やり直してください。","reference":"一部の写真がアルバムに追加されませんでした。確認してもう一度やり直してください。","response":{"Forbidden":"アプリケーションはアルバムを更新する権限がありません。"}}},"share":{"cta":"共有","title":"他の人と共有します","details":{"title":"共有の詳細","createdAt":"日付 %{date}","ro":"読み取り専用","rw":"読み取り/書き込み"},"sharedByMe":"共有しました","sharedWithMe":"自分と共有","shareByLink":{"subtitle":"公開リンクで","desc":"誰でも提供されたリンクであなたの写真を見たりダウンロードしたりすることができます。","fetchFailed":"接続が制限されているようです。後でもう一度やり直してください。","creating":"リンクの作成中...","copy":"リンクをコピー","copied":"リンクをクリップボードにコピーしました","failed":"クリップボードにコピーできません"},"shareByEmail":{"title":"メールで","subtitle":"メールで","email":"メール","emailPlaceholder":"受信者のメールアドレスまたは名前を入力してください","send":"送信","genericSuccess":"%{count} 人の連絡先に招待状を送信しました。","success":"%{email} に招待状を送信しました。","comingsoon":"まもなく登場します! 家族や友人、さらには同僚とでもワンクリックで文書や写真を共有できます。 心配しないで、準備ができたらお知らせします!"},"unshare":{"title":"アルバムから削除","success":"この共有済アルバムを %{email} から削除しました。"},"sharingLink":{"title":"共有するリンク","copy":"コピー","copied":"コピーしました"},"whoHasAccess":{"title":"アクセス許可をもつ人"},"protectedShare":{"title":"まもなく登場!","desc":"家族や友達とメールで何でも共有できます!"},"close":"閉じる","gettingLink":"リンクの取得中...","error":{"generic":"アルバム共有リンクの作成中にエラーが発生しました。もう一度やり直してください。","revoke":"アルバムの共有リンクを削除する際にエラーが発生しました。もう一度やり直してください。"}},"create":{"panel_form":{"label":"新しいアルバムに名前を追加","placeholder":"無題のアルバム","cancel":"キャンセル","submit":"新しいアルバムを作成","update":"写真をアルバムに追加"},"inline_form":{"placeholder":"新しいアルバム名","create_label":"新しいアルバムを作成","create_button":"作成"},"success":"アルバム %{name} が %{smart_count} 枚の写真で作成されました。 |||| アルバム %{name} が %{smart_count} 枚の写真で作成されました。","error":{"generic":"アルバムの作成中にエラーが発生しました。もう一度やり直してください。","already_exists":"アルバム %{name} はすでに存在します。別の名前を選んでください。","name_missing":"アルバムに名前をつける必要があります。"}},"fetchAlbums":{"error":{"index_missing":"アルバムを取得するために、アルバムのインデックスを作成する必要があります。"}},"remove_photos":{"success":"アルバム %{album_name} から写真が削除されました。","error":{"generic":"写真の削除中にエラーが発生しました。もう一度やり直してください。"}},"remove_album":{"success":"アルバム %{name} が削除されました。","error":{"generic":"アルバムの削除中にエラーが発生しました。もう一度やり直してください。"}},"quit_album":{"success":"アルバム %{name} が削除されました。","error":{"generic":"アルバムを捨てる際にエラーが発生しました。もう一度やり直してください。"}}},"Viewer":{"close":"閉じる","noviewer":{"title":"ビューアーは、この形式のファイルを読み込む方法がわかりません。","download":"このファイルをダウンロード","openWith":"...で開く"},"actions":{"download":"ダウンロード"},"loading":{"error":"このファイルを読み込めませんでした。 現在、インターネットに接続していますか?","retry":"再試行"}},"destroyconfirmation":{"title":"このアルバムを完全に削除しますか?","cancel":"キャンセル","delete":"完全に削除","forbidden":"このアルバムや選択肢にはもうアクセスできません。","eye":"写真は削除されません。","link":"それを共有していた場合、人々がアクセスできなくなります。"},"quitconfirmation":{"title":"この共有済のアルバムを完全に捨てて、削除しますか?","cancel":"キャンセル","quit":"捨てる & 削除","forbidden":"このアルバムや選択肢にはもうアクセスできません。"},"timeline":{"DeleteConfirm":{"title":"この要素を削除しますか? |||| これらの要素を削除しますか?","trash":"ゴミ箱に移動します。 |||| ゴミ箱に移動します。","restore":"希望した時に元に戻すことができます。 |||| 希望した時に元に戻すことができます。","shared":"それを共有していた場合、人々がアクセスできなくなります。 |||| それらを共有していた場合、人々がアクセスできなくなります。","related":"選択範囲内の写真の一部がアルバムに関連しています。 それらをゴミ箱に移動すると、削除されます。","cancel":"キャンセル","delete":"削除"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Cozy フォトからアップロード","header":"%{smart_count} 枚の写真を Cozy フォトにアップロード中 |||| %{smart_count} 枚の写真を Cozy フォトにアップロード中","header_mobile":"アップロード中 %{done} / %{total}","header_done":"%{done} / %{total} 正常にアップロードしました","close":"閉じる","item":{"pending":"保留"},"alert":{"success":"%{smart_count} 枚の写真をアップロードしました。 |||| %{smart_count} 枚の写真をアップロードしました。","success_conflicts":"%{smart_count} 枚の写真のアップロードで %{conflictNumber} の競合がありました。 |||| %{smart_count} 枚の写真のアップロードで %{conflictNumber} の競合がありました。","errors":"写真のアップロード中にエラーが発生しました。"}}};

/***/ }),

/***/ "G9pQ":
/*!**********************************!*\
  !*** ./src/sharing/propTypes.js ***!
  \**********************************/
/*! exports provided: contactsResponseType, groupsResponseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactsResponseType", function() { return contactsResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsResponseType", function() { return groupsResponseType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "OjRq");


const contactsResponseType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  count: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(models__WEBPACK_IMPORTED_MODULE_1__["Contact"].propType),
  definition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  fetchMore: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  fetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  lastError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  lastFetch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  lastUpdate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
const groupsResponseType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  count: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(models__WEBPACK_IMPORTED_MODULE_1__["Group"].propType),
  definition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  fetchMore: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  fetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  lastError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  lastFetch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  lastUpdate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});

/***/ }),

/***/ "GFJL":
/*!*************************************************!*\
  !*** ./src/sharing/components/WhoHasAccess.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Recipient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Recipient */ "MzcY");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");












var WhoHasAccess =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WhoHasAccess, _PureComponent);

  function WhoHasAccess() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WhoHasAccess);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WhoHasAccess).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WhoHasAccess, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$isOwner = _this$props.isOwner,
          isOwner = _this$props$isOwner === void 0 ? false : _this$props$isOwner,
          recipients = _this$props.recipients,
          document = _this$props.document,
          documentType = _this$props.documentType,
          onRevoke = _this$props.onRevoke,
          className = _this$props.className;
      var t = this.context.t;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: className
      }, recipients.length > 1 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_10__["SubTitle"], null, t("".concat(documentType, ".share.whoHasAccess.title"), {
        smart_count: recipients.length
      })), recipients.map(function (recipient, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Recipient__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, recipient, {
          key: "key_r_".concat(index),
          isOwner: isOwner,
          document: document,
          documentType: documentType,
          onRevoke: onRevoke
        }));
      }));
    }
  }]);

  return WhoHasAccess;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(WhoHasAccess, "contextTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (WhoHasAccess);

/***/ }),

/***/ "GNTO":
/*!*******************************************************!*\
  !*** ./src/drive/web/modules/upload/withInstance.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var withInstance = function withInstance(client) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      instance = _useState2[0],
      setInstance = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      context = _useState4[0],
      setContext = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var instancePromise, contextPromise, promises, _ref2, _ref3, instanceFetched, contextFetched;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                instancePromise = client.getStackClient().fetchJSON('GET', '/settings/instance');
                contextPromise = client.getStackClient().fetchJSON('GET', '/settings/context');
                promises = [instancePromise, contextPromise];
                _context.next = 6;
                return Promise.all(promises.map(function (p) {
                  return p.catch(function (e) {
                    return e;
                  });
                }));

              case 6:
                _ref2 = _context.sent;
                _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, 2);
                instanceFetched = _ref3[0];
                contextFetched = _ref3[1];

                if (!(instanceFetched instanceof Error)) {
                  setInstance(instanceFetched);
                }

                if (!(contextFetched instanceof Error)) {
                  setContext(contextFetched);
                }

                _context.next = 16;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return {
    instance: instance,
    context: context
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withInstance);

/***/ }),

/***/ "GeHB":
/*!********************************************************!*\
  !*** ./src/sharing/assets/icons/icon-pen-write-16.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-pen-write-16_2d81809ca299a1197d20de636609807e",
  "use": "icon-pen-write-16_2d81809ca299a1197d20de636609807e-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-pen-write-16_2d81809ca299a1197d20de636609807e\">\n    <defs>\n        <path d=\"M9.5,3.50347728 L12.5,6.50347728 L3.03771973,16.0034773 L0,16.0034773 L0,13.0288679 L9.5,3.50347728 Z M14.9121541,0.915631358 L15.0878459,1.0913232 C15.8637772,1.86725444 15.8697383,3.14159072 15.0922712,3.92874355 L14.0307617,5.00347728 L11,2.00347728 L12.0892639,0.914213423 C12.8691444,0.13433284 14.1322429,0.135720196 14.9121541,0.915631358 Z M7,14.0034773 L12.9970707,14.0034773 C13.5509732,14.0034773 14,14.4473421 14,15.0034773 C14,15.555762 13.5536886,16.0034773 13.0024554,16.0034773 L5,16.0034773 L7,14.0034773 Z\" id=\"icon-pen-write-16_2d81809ca299a1197d20de636609807e_path-1\" />\n    </defs>\n    <g id=\"icon-pen-write-16_2d81809ca299a1197d20de636609807e_icons/16/pen-write\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <mask id=\"icon-pen-write-16_2d81809ca299a1197d20de636609807e_mask-2\" fill=\"white\">\n            <use xlink:href=\"#icon-pen-write-16_2d81809ca299a1197d20de636609807e_path-1\" />\n        </mask>\n        <use id=\"icon-pen-write-16_2d81809ca299a1197d20de636609807e_Mask\" fill=\"#95999d\" fill-opacity=\"0.5\" xlink:href=\"#icon-pen-write-16_2d81809ca299a1197d20de636609807e_path-1\" />\n    </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Gofk":
/*!******************************************!*\
  !*** ./src/photos/locales sync ^\.\/.*$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": "5d0r",
	"./ar.json": "5d0r",
	"./ca": "vxeD",
	"./ca.json": "vxeD",
	"./cs": "FEFk",
	"./cs.json": "FEFk",
	"./cs_CZ": "r//i",
	"./cs_CZ.json": "r//i",
	"./da": "0NMG",
	"./da.json": "0NMG",
	"./de": "ACi5",
	"./de.json": "ACi5",
	"./de_DE": "6D2N",
	"./de_DE.json": "6D2N",
	"./el": "3M/O",
	"./el.json": "3M/O",
	"./en": "2OO4",
	"./en.json": "2OO4",
	"./eo": "orVX",
	"./eo.json": "orVX",
	"./es": "J1i+",
	"./es.json": "J1i+",
	"./es_CO": "hVxl",
	"./es_CO.json": "hVxl",
	"./es_ES": "4/b3",
	"./es_ES.json": "4/b3",
	"./fr": "K81t",
	"./fr.json": "K81t",
	"./it": "6mLT",
	"./it.json": "6mLT",
	"./ja": "G42y",
	"./ja.json": "G42y",
	"./ko": "avvP",
	"./ko.json": "avvP",
	"./nl": "46r7",
	"./nl.json": "46r7",
	"./nl_NL": "gF5+",
	"./nl_NL.json": "gF5+",
	"./pl": "FUd8",
	"./pl.json": "FUd8",
	"./pt": "WK4D",
	"./pt.json": "WK4D",
	"./pt_BR": "sPwX",
	"./pt_BR.json": "sPwX",
	"./ro": "npku",
	"./ro.json": "npku",
	"./ro_RO": "1rOY",
	"./ro_RO.json": "1rOY",
	"./ru": "4MjQ",
	"./ru.json": "4MjQ",
	"./ru_RU": "H4RB",
	"./ru_RU.json": "H4RB",
	"./sk": "WCSr",
	"./sk.json": "WCSr",
	"./sk_SK": "SY/9",
	"./sk_SK.json": "SY/9",
	"./sq": "7Kgf",
	"./sq.json": "7Kgf",
	"./sq_AL": "8Ctd",
	"./sq_AL.json": "8Ctd",
	"./sv": "0kzd",
	"./sv.json": "0kzd",
	"./tr": "qV7n",
	"./tr.json": "qV7n",
	"./uk_UA": "1xvC",
	"./uk_UA.json": "1xvC",
	"./zh": "+TPL",
	"./zh.json": "+TPL",
	"./zh_CN": "96Ws",
	"./zh_CN.json": "96Ws",
	"./zh_TW": "uqdO",
	"./zh_TW.json": "uqdO"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "Gofk";

/***/ }),

/***/ "H+nv":
/*!********************************************!*\
  !*** ./src/photos/components/AppRoute.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "KFvd");
/* harmony import */ var _ducks_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ducks/timeline */ "2lpW");
/* harmony import */ var _ducks_albums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ducks/albums */ "SRpc");
/* harmony import */ var _components_PhotosViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PhotosViewer */ "cwrA");






var AppRoute = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  component: _Layout__WEBPACK_IMPORTED_MODULE_2__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "photos",
  component: _ducks_timeline__WEBPACK_IMPORTED_MODULE_3__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: ":photoId",
  component: _components_PhotosViewer__WEBPACK_IMPORTED_MODULE_5__["default"]
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "albums",
  component: _ducks_albums__WEBPACK_IMPORTED_MODULE_4__["AlbumsView"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "new",
  component: _ducks_albums__WEBPACK_IMPORTED_MODULE_4__["PhotosPicker"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: ":albumId",
  component: _ducks_albums__WEBPACK_IMPORTED_MODULE_4__["AlbumPhotos"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "edit",
  component: _ducks_albums__WEBPACK_IMPORTED_MODULE_4__["PhotosPicker"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: ":photoId",
  component: _components_PhotosViewer__WEBPACK_IMPORTED_MODULE_5__["default"]
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
  from: "/*",
  to: "photos"
}));
/* harmony default export */ __webpack_exports__["default"] = (AppRoute);

/***/ }),

/***/ "H0cq":
/*!********************************************************!*\
  !*** ./src/sharing/assets/icons/icon-hourglass-16.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6",
  "use": "icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6\">\n    <defs>\n        <path d=\"M3.00247329,2 C2.45576096,2 2,1.55228475 2,1 C2,0.443864822 2.44882258,0 3.00247329,0 L12.9975267,0 C13.544239,0 14,0.44771525 14,1 C14,1.55613518 13.5511774,2 12.9975267,2 L13,2 L13,3 C13,3.55613518 12.6840146,4.31598541 12.2942268,4.70577316 L9,8 L12.2942268,11.2942268 C12.6840146,11.6840146 13,12.4438648 13,13 L13,14 L12.9975267,14 C13.5511774,14 14,14.4438648 14,15 C14,15.5522847 13.544239,16 12.9975267,16 L3.00247329,16 C2.44882258,16 2,15.5561352 2,15 C2,14.4477153 2.45576096,14 3.00247329,14 L3,14 L3,13 C3,12.4477153 3.31277239,11.6872276 3.70577316,11.2942268 L7,8 L3.70577316,4.70577316 C3.31277239,4.31277239 3,3.55228475 3,3 L3,2 L3.00247329,2 Z M4.5,3 C4.5,3.55228475 4.83559471,4.28765261 5.25944787,4.65095532 L8,7 L10.7405521,4.65095532 C11.1599836,4.29144262 11.5,3.54681396 11.5,3 L4.5,3 Z\" id=\"icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6_path-1\" />\n    </defs>\n    <g id=\"icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6_🍦-icons\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6_icons/16/hourglass\">\n            <mask id=\"icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6_mask-2\" fill=\"white\">\n                <use xlink:href=\"#icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6_path-1\" />\n            </mask>\n            <use id=\"icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6_Mask\" fill=\"#95999d\" fill-opacity=\"0.5\" xlink:href=\"#icon-hourglass-16_4d32835335eff7a3974a2aa8cf422ff6_path-1\" />\n        </g>\n    </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "H4RB":
/*!***************************************!*\
  !*** ./src/photos/locales/ru_RU.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "HDak":
/*!***********************************************************!*\
  !*** ./src/photos/ducks/albums/components/AlbumsView.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/layout.styl */ "0yyf");
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_styl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var _AlbumsToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AlbumsToolbar */ "tRam");
/* harmony import */ var _AlbumsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AlbumsList */ "+7m4");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Loading */ "ZFPb");
/* harmony import */ var components_Error_ErrorComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Error/ErrorComponent */ "SvWF");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Topbar */ "eKCf");














var Content = function Content(_ref) {
  var list = _ref.list;
  var fetchStatus = list.fetchStatus;

  switch (fetchStatus) {
    case 'pending':
    case 'loading':
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
        loadingType: "albums_fetching"
      });

    case 'failed':
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Error_ErrorComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        errorType: "albums"
      });

    default:
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AlbumsList__WEBPACK_IMPORTED_MODULE_9__["default"], list);
  }
};

var AlbumsView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AlbumsView, _Component);

  function AlbumsView() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AlbumsView);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AlbumsView).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AlbumsView, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      if (this.props.children) return this.props.children;

      if (!this.props.albums) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        "data-test-id": "album-pho-content-wrapper",
        className: _styles_layout_styl__WEBPACK_IMPORTED_MODULE_6___default.a['pho-content-wrapper']
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Topbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        viewName: "albums"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AlbumsToolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        t: t
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Content, {
        list: this.props.albums
      }));
    }
  }]);

  return AlbumsView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_7__["translate"])()(AlbumsView));

/***/ }),

/***/ "I2Z/":
/*!*******************************************!*\
  !*** ./src/sharing/components/badge.styl ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"u-shake":"u-shake--1_JDP","shake":"shake--Y2Op3","u-o-100":"u-o-100--2d2Nz","u-o-90":"u-o-90--31pSb","u-o-80":"u-o-80--3Ihkd","u-o-70":"u-o-70--YQ27F","u-o-60":"u-o-60--nEE6D","u-o-50":"u-o-50--3dLGa","u-o-40":"u-o-40--imJPw","u-o-30":"u-o-30--IxP_u","u-o-20":"u-o-20--32XM7","u-o-10":"u-o-10--1iaz5","u-o-05":"u-o-05--atgef","u-o-025":"u-o-025--3L2f7","u-o-0":"u-o-0--1NtAo","shared-badge":"shared-badge--2cmgU","--small":"_--small--thdoQ","shared-badge-icon":"shared-badge-icon--V-RtM","--xsmall":"_--xsmall--3hL0z","--by-me":"_--by-me--3gc-L","--with-me":"_--with-me--32UlG","spin":"spin--2woLM"};

/***/ }),

/***/ "IAkC":
/*!************************************************!*\
  !*** ./src/sharing/components/ShareByLink.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! copy-text-to-clipboard */ "WWur");
/* harmony import */ var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var cozy_ui_react_Toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cozy-ui/react/Toggle */ "Vmsy");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! cozy-ui/react/Alerter */ "67rm");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lib_logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lib/logger */ "OTOu");
/* harmony import */ var _share_styl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../share.styl */ "jrFr");
/* harmony import */ var _share_styl__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_share_styl__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! cozy-ui/react/palette */ "7jrE");
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_19__);





















var ShareByLink =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(ShareByLink, _React$Component);

  function ShareByLink() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ShareByLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ShareByLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      loading: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "toggleShareLink", function (checked) {
      if (checked) {
        _this.createShareLink();
      } else {
        _this.deleteShareLink();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "copyLinkToClipboard", function () {
      if (copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.link)) cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_15__["default"].success("".concat(_this.props.documentType, ".share.shareByLink.copied"));else cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_15__["default"].error("".concat(_this.props.documentType, ".share.shareByLink.failed"));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ShareByLink, [{
    key: "createShareLink",
    value: function () {
      var _createShareLink = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.setState(function (state) {
                  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
                    loading: true
                  });
                });
                _context.next = 4;
                return this.props.onEnable(this.props.document);

              case 4:
                _context.next = 10;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_15__["default"].error("".concat(this.props.documentType, ".share.error.generic"));
                lib_logger__WEBPACK_IMPORTED_MODULE_17__["default"].log(_context.t0);

              case 10:
                _context.prev = 10;
                this.setState(function (state) {
                  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
                    loading: false
                  });
                });
                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6, 10, 13]]);
      }));

      function createShareLink() {
        return _createShareLink.apply(this, arguments);
      }

      return createShareLink;
    }()
  }, {
    key: "deleteShareLink",
    value: function () {
      var _deleteShareLink = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.setState(function (state) {
                  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
                    loading: true
                  });
                });
                _context2.next = 4;
                return this.props.onDisable(this.props.document);

              case 4:
                _context2.next = 10;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_15__["default"].error("".concat(this.props.documentType, ".share.error.revoke"));
                lib_logger__WEBPACK_IMPORTED_MODULE_17__["default"].log(_context2.t0);

              case 10:
                _context2.prev = 10;
                this.setState(function (state) {
                  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
                    loading: false
                  });
                });
                return _context2.finish(10);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6, 10, 13]]);
      }));

      function deleteShareLink() {
        return _deleteShareLink.apply(this, arguments);
      }

      return deleteShareLink;
    }()
  }, {
    key: "render",
    value: function render() {
      var t = this.context.t;
      var loading = this.state.loading;
      var _this$props = this.props,
          checked = _this$props.checked,
          documentType = _this$props.documentType;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        "data-test-id": "share-by-link",
        className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(_share_styl__WEBPACK_IMPORTED_MODULE_18___default.a['share-bylink-header'], 'u-mt-1', 'u-mb-1')
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__["SubTitle"], null, t("".concat(documentType, ".share.shareByLink.subtitle"))), loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__["Spinner"], {
        color: cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_19___default.a.dodgerBlue
      }), loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_18___default.a['share-bylink-header-creating']
      }, t("".concat(documentType, ".share.shareByLink.creating"))), checked && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_18___default.a['share-bylink-header-dot']
      }), checked && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        "data-test-url": this.props.link,
        className: _share_styl__WEBPACK_IMPORTED_MODULE_18___default.a['share-bylink-header-copybtn'],
        onClick: this.copyLinkToClipboard
      }, t("".concat(documentType, ".share.shareByLink.copy"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(cozy_ui_react_Toggle__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: "share-toggle",
        name: "share",
        checked: checked,
        disabled: loading,
        onToggle: this.toggleShareLink
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: _share_styl__WEBPACK_IMPORTED_MODULE_18___default.a['share-bylink-desc']
      }, t("".concat(documentType, ".share.shareByLink.desc"))));
    }
  }]);

  return ShareByLink;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(ShareByLink, "contextTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (ShareByLink);

/***/ }),

/***/ "IFEr":
/*!********************************************!*\
  !*** ./src/components/pushClient/index.js ***!
  \********************************************/
/*! exports provided: track, isLinux, isAndroid, isIOS, DESKTOP_BANNER, NOVIEWER_DESKTOP_CTA, isClientAlreadyInstalled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "track", function() { return track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinux", function() { return isLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESKTOP_BANNER", function() { return DESKTOP_BANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVIEWER_DESKTOP_CTA", function() { return NOVIEWER_DESKTOP_CTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClientAlreadyInstalled", function() { return isClientAlreadyInstalled; });
/* harmony import */ var cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cozy-ui/react/helpers/tracker */ "4kcP");
/* global cozy */

const track = element => {
  const tracker = Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_0__["getTracker"])();
  tracker && tracker.push(['trackEvent', 'interaction', 'desktop-prompt', element]);
};
const isLinux = () => window.navigator && window.navigator.appVersion.indexOf('Win') === -1 && window.navigator.appVersion.indexOf('Mac') === -1;
const isAndroid = () => window.navigator.userAgent && window.navigator.userAgent.indexOf('Android') >= 0;
const isIOS = () => window.navigator.userAgent && /iPad|iPhone|iPod/.test(window.navigator.userAgent);
const DESKTOP_BANNER = 'desktop_banner';
const NOVIEWER_DESKTOP_CTA = 'noviewer_desktop_cta';
const isClientAlreadyInstalled = async () => {
  const resp = await cozy.client.fetchJSON('GET', '/settings/clients');
  return resp.some(device => device.attributes.software_id === 'github.com/cozy-labs/cozy-desktop');
};

/***/ }),

/***/ "J1i+":
/*!************************************!*\
  !*** ./src/photos/locales/es.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Fotos","albums":"Álbumes","shared":"Yo lo compartí","trash":"Papelera","btn-client":"Descargar Cozy Drive para ordenador de escritorio","btn-client-web":"Descargar Cozy","btn-client-mobile":"Descargar Cozy Drive a su celular","banner-txt-client":"Descargue Cozy Drive para ordenador de escritorio y sincronice sus archivos con toda seguridad para que les puedan ser accesibles todo el tiempo.","banner-btn-client":"Descargar","link-client":"https://cozy.io/es/download/\n","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/es/try-it?from=albumsharing\n"},"empty":{"timeline_photos_title":"Usted todavía no tiene foto alguna.","timeline_photos_text":"Haga clic en el botón \"Cargar\" para añadir fotos.","albums_title":"Usted todavía no tiene ningún álbum.","albums_text":"Comenzar haciendo clic en \"Nuevo álbum\" para crear su primer álbum.","album_photos_title":"Todavía no hay ninguna foto es este álbum.","album_photos_text":"Comenzar haciendo clic en \"Añadir fotos al álbum\" para añadir fotos.","shared_album_photos_title":"Todavía no hay ninguna foto es este álbum.","shared_album_photos_text":"Vuelva a hacerlo más tarde"},"Error":{"albums_title":"Ha ocurrido un error al recuperar la lista de álbumes. Por favor vuelva a ensayar más tarde.","album_photos_title":"Ha ocurrido un error al recuperar la lista de álbumes de fotos. Por favor vuelva a ensayar más tarde.","timeline_photos_title":"Ha ocurrido un error al recuperar la lista de fotos. Por favor vuelva a ensayar más tarde.","public_album_error_title":"Ha ocurrido un error al recuperar la lista de fotos. Por favor vuelva a ensayar más tarde.","public_album_unshared_title":"Lo sentimos, este enlace no es más válido.","public_album_unshared_text":"Uno perdido, diez encontrados...pídale ayuda al propietario. Qizás el archivo no está perdido.","refresh":"Refrescar ahora","generic":"Ha ocurrido un error, por favor vuelva a ensayar.","album_rename_abort":"El nombre del álbum no puede estar vacío."},"Toolbar":{"photo_upload":"Cargar","album_new":"Nuevo album","album_delete":"Borrar","album_quit":"Abandonar & borrar el álbum compartido","album_download":"Descargar","more":"Más","menu":{"select_items":"Seleccionar fotos","photo_upload":"Cargar fotos","rename_album":"Cambiar de nombre al álbum","album_delete":"Borrar el álbum","album_quit":"Abandonar & borrar el álbum compartido","download_album":"Descargar álbum","add_photos":"Añadir fotos al álbum"}},"loading":{"photos_indexing":"Sus fotos están siendo indexados. Tenga paciencia por favor.","albums_indexing":"Sus álbumes están siendo indexados. Tenga paciencia por favor.","photos_fetching":"Descargando","albums_fetching":"Descargando","photos_upload":"Cargando"},"Board":{"load_more":"Descargar más fotos","select_all":"Seleccionar todo","unselect_all":"Deseleccionar todo"},"Alerter":{"photos":{"fetching_error":"Ha ocurrido un error en la búsqueda de las fotos.","already_added_photo":"Este album ya contiene esta foto."}},"SelectionBar":{"selected_count":"item seleccionado |||| items seleccionados","delete":"Borrar","album-add":"Añadir al álbum","album-remove":"Borrar del álbum","download":"Descargar","close":"Cerrar"},"Share":{"status":{"pending":"Pendiente","accepted":"Aceptado","refused":"Rechazado","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Puede Ver (proximamente)","two-way":"Puede cambiarlo"},"create-cozy":"Creay mi cozy"},"Albums":{"album_item_description":"%{smart_count} foto |||| %{smart_count} fotos","album_item_shared_ro":"Compartido (en lectura solamente)","album_item_shared_rw":"Compartido (lectura/escritura)","load_more":"Descargar más álbumes","add_photos":{"title":"Añadir al álbum","success":"El álbum %{name} ha sido cargado con %{smart_count} foto. |||| El álbum %{name} ha sido cargado con %{smart_count} fotos.","error":{"generic":"Ha ocurrido un error al actualizar el álbum, por favor vuelva a ensayar más tarde.","reference":"Algunas fotos no se han podido añadir al álbum. Por favor, verifique y vuelva a ensayar.","response":{"Forbidden":"La aplicación no tiene permisos para actualizar los albumes."}}},"share":{"cta":"Compartir","title":"Compartir con otros","details":{"title":"Compartiendo detalles","createdAt":"El %{date}","ro":"Sólo lectura","rw":"Lectura/escritura"},"sharedByMe":"Compartido","sharedWithMe":"Compartido conmigo","shareByLink":{"subtitle":"Por enlace público","desc":"Quien disponga del enlace proporcionado podrá ver y descargar sus fotos","fetchFailed":"Huy! Parece que su conectividad es limitada, inténtelo de nuevo más tarde cuando mejore.","creating":"Creando su enlace...","copy":"Copiar enlace","copied":"El enlace ha sido copiado en el portapapeles","failed":"No se puede copiar en el portapapeles"},"shareByEmail":{"title":"Por email","subtitle":"Por email","email":"email","emailPlaceholder":"Entre la dirección email o el nombre de su destinatario","send":"Enviar","genericSuccess":"Usted envía una invitación a %{count} contactos.","success":"Usted envía una invitación a %{email}.","comingsoon":"Ya llega! Pronto podrá compartir sus documentos y fotos en un solo clic con su familia, sus amigos e incluso sus compañerxs de trabajo. No se preocupe, ¡le avisaremos cuando esté listo!"},"unshare":{"title":"Borrar del álbum","success":"Usted ha borrado este álbum compartido desde %{email}."},"sharingLink":{"title":"Enlace para compartir","copy":"Copiar","copied":"Copiado"},"whoHasAccess":{"title":"Quien tiene acceso"},"protectedShare":{"title":"¡Ya llega!","desc":"¡Compartir algo por email con su familia y amigos!"},"close":"Cerrar","gettingLink":"Conectando a su enlace","error":{"generic":"Ha ocurrido un error al crear el álbum compartido por un enlace, por favor vuelva a ensayar.","revoke":"Se ha producido un error al revocar el enlace para compartir un álbum, inténtalo de nuevo."}},"create":{"panel_form":{"label":"Añadir un nombre a su nuevo album","placeholder":"Album sin título","cancel":"Anular","submit":"Crear un nuevo álbum","update":"Añadir fotos al álbum"},"inline_form":{"placeholder":"Nombre del nuevo álbum","create_label":"Crear un nuevo álbum","create_button":"Crear"},"success":"El álbum %{name} ha sido creado con %{smart_count} foto. |||| El álbum %{name} ha sido creado on %{smart_count} fotos.","error":{"generic":"Ha ocurrido un error al crear el álbum, por favor vuelva a ensayar.","already_exists":"El álbum %{name} ya existe, por favor seleccione otro.","name_missing":"Usted tiene que ponerle un nombre a su álbum."}},"fetchAlbums":{"error":{"index_missing":"Debe suministrarse un índice de álbumes para poder recuperarlos."}},"remove_photos":{"success":"La foto ha sido borrada del álbum %{album_name}","error":{"generic":"Ha ocurrido un error al borrar la foto, por favor vuelva a ensayar."}},"remove_album":{"success":"El álbum %{name} ha sido borrado","error":{"generic":"Ha ocurrido un error al borrar el álbum, por favor vuelva a ensayar."}},"quit_album":{"success":"El álbum %{name} ha sido borrado","error":{"generic":"Ha ocurrido un error al abandonar el álbum, por favor vuelva a ensayar."}}},"Viewer":{"close":"Cerrar","noviewer":{"title":"El visualizador no puede leer todavía este tipo de archivo.","download":"Descargar este archivo","openWith":"Abrir con..."},"actions":{"download":"Descargar"},"loading":{"error":"Este archivo no se puede cargar. ¿Está  usted conectado a Internet ahora mismo?","retry":"Vuelva a intentarlo"}},"destroyconfirmation":{"title":"¿Borrar este álbum de manera definitiva?","cancel":"Anular","delete":"Borrar de manera definitiva","forbidden":"Usted no puede acceder a este álbum ni seleccionar otro.","eye":"Sus fotos no serán borradas.","link":"Si usted lo comparte, nadie podrá acceder a él."},"quitconfirmation":{"title":"¿Abandonar y borrar este álbum compartido de manera definitiva?","cancel":"Anular","quit":"Abandonar & borrar","forbidden":"Usted no puede acceder a este álbum ni seleccionar otro."},"timeline":{"DeleteConfirm":{"title":"¿Borrar este elemento? |||| ¿Borrar estos elementos?","trash":"El será desplazado a la Papelera. |||| Ellos serán desplazados a la Papelera.","restore":"Usted aún puede restaurarla si lo desea. |||| Usted aún puede restaurarlas silo desea.","shared":" Si lo comparte, nadie podrá acceder a él. |||| Si los comparte, nadie podrá acceder a ellos.","related":"Algunas de las fotos seleccionadas se refieren un álbum. Ellas se borrarán si usted procede a meterlos en la papelera.","cancel":"Anular","delete":"Borrar"}},"UploadQueue":{"path_photos":"Fotos","path_upload":"Cargada desde Cozy Fotos","header":"Cargando %{smart_count} foto a Cozy Fotos |||| Cargando %{smart_count} fotos a Cozy Fotos","header_mobile":"Cargando %{done} del %{total}","header_done":"Cargado %{done} de %{total} exitosamente","close":"cerrar","item":{"pending":"Pendiente"},"alert":{"success":"%{smart_count} foto cargada exitosamente. |||| %{smart_count} fotos cargadas exitosamente.","success_conflicts":"%{smart_count} foto cargada con %{conflictNumber} conflicto(s). |||| %{smart_count} fotos cargadas con %{conflictNumber} conflicto(s).","errors":"Han ocurrido errores durante la carga de las fotos."}}};

/***/ }),

/***/ "JhAt":
/*!*****************************************************************!*\
  !*** ./src/photos/ducks/albums/components/SelectAlbumsForm.jsx ***!
  \*****************************************************************/
/*! exports provided: AlbumsView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsView", function() { return AlbumsView; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/albumsList.styl */ "6qED");
/* harmony import */ var _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Error_ErrorComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Error/ErrorComponent */ "SvWF");
/* harmony import */ var components_Error_Empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Error/Empty */ "KOJc");
/* harmony import */ var _AlbumItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AlbumItem */ "BUUs");


var _this = undefined;








var AlbumsList = function AlbumsList(props) {
  return props.albums.data.length === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Error_Empty__WEBPACK_IMPORTED_MODULE_5__["EmptyPhotos"], {
    localeKey: "albums"
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_1___default.a['pho-album-list'], _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_1___default.a['pho-album-list--thumbnails'], _styles_albumsList_styl__WEBPACK_IMPORTED_MODULE_1___default.a['pho-album-list--selectable'])
  }, props.albums.data.map(function (a) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AlbumItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      album: a,
      key: a.id,
      thumbnail: true,
      onServerError: props.onServerError,
      onClick: props.onSubmitSelectedAlbum
    });
  }));
};

var DumbAlbumsView = function DumbAlbumsView(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AlbumsList, props));
};

var ErrorAlbumsView = Object(components_Error_ErrorComponent__WEBPACK_IMPORTED_MODULE_4__["withError"])(function (props) {
  return props.error;
}, 'albums', DumbAlbumsView);
var AlbumsView = function AlbumsView(props) {
  if (!props.albums) {
    return null;
  }

  var error = props.albums.fetchStatus === 'failed';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ErrorAlbumsView, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    error: error,
    onServerError: function onServerError() {
      return _this.handleError(error);
    }
  }, props));
};
/* harmony default export */ __webpack_exports__["default"] = (AlbumsView);

/***/ }),

/***/ "K81t":
/*!************************************!*\
  !*** ./src/photos/locales/fr.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Mes photos partagées","trash":"Corbeille","btn-client":"Télécharger Cozy Drive ","btn-client-web":"Créer un Cozy","btn-client-mobile":"Téléchargez Cozy Drive sur votre mobile !","banner-txt-client":"Installez Cozy Drive pour ordinateur et synchronisez vos fichiers pour les rendre accessibles à tout moment.","banner-btn-client":"Télécharger","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"Vous n'avez pas encore de photos.","timeline_photos_text":"Cliquez sur le bouton « Importer des photos » pour ajouter des photos.","albums_title":"Vous n'avez pas encore d'albums.","albums_text":"Cliquer sur le bouton \"Nouvel album\" pour créer votre premier album.","album_photos_title":"Il n'y a pas encore de photos dans cet album.","album_photos_text":"Commencez par cliquer sur \"Ajouter des photos à l'album\" pour en ajouter.","shared_album_photos_title":"Il n'y a pas encore de photos dans cet album.","shared_album_photos_text":"Revenez plus tard"},"Error":{"albums_title":"Une erreur est survenue en récupérant la liste des albums. Merci de réessayer plus tard.","album_photos_title":"Une erreur est survenue en récupérant la liste des photos de l'album. Merci de réessayer plus tard.","timeline_photos_title":"Une erreur est survenue en récupérant la liste des photos. Merci de réessayer plus tard.","public_album_error_title":"Une erreur est survenue lors de la récupération de l'album. Merci de réessayer plus tard.","public_album_unshared_title":"Ce lien n'est plus actif.","public_album_unshared_text":"Un seul lien vous manque et tout vous semble dépeuplé ? Séchez vos larmes et contactez son propriétaire. Tout n'est peut-être pas perdu.","refresh":"Recharger la page","generic":"Une erreur est survenue. Merci de réessayer.","album_rename_abort":"Le nom de l'album ne peut pas être vide."},"Toolbar":{"photo_upload":"Importer des photos","album_new":"Créer un album","album_delete":"Supprimer","album_quit":"Quitter & supprimer cet album","album_download":"Télécharger","more":"Plus","menu":{"select_items":"Sélectionner des photos","photo_upload":"Importer des photos","rename_album":"Renommer l'album","album_delete":"Supprimer l'album","album_quit":"Quitter & supprimer cet album","download_album":"Télécharger l'album","add_photos":"Ajouter des photos"}},"loading":{"photos_indexing":"Vos photos sont en cours d'indexation, veuillez patienter.","albums_indexing":"Vos albums sont en cours d'indexation, veuillez patienter.","photos_fetching":"Chargement","albums_fetching":"Chargement","photos_upload":"Import en cours"},"Board":{"load_more":"Plus de photos","select_all":"Tout sélectionner","unselect_all":"Tout déselectionner"},"Alerter":{"photos":{"fetching_error":"Une erreur est survenue durant la récupération des photos.","already_added_photo":"Cet album contient déjà cette photo."}},"SelectionBar":{"selected_count":"élément sélectionné |||| éléments sélectionnés","delete":"Supprimer","album-add":"Ajouter à un album","album-remove":"Supprimer de l'album","download":"Télécharger","close":"Fermer"},"Share":{"status":{"pending":"En attente","accepted":"Accepté","refused":"Refusé","error":"Erreur","unregistered":"Erreur","mail-not-sent":"Erreur","revoked":"Erreur"},"type":{"one-way":"Peut afficher (bientôt disponible)","two-way":"Peut modifier"},"create-cozy":"Créer mon Cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Partagé (lecture seule)","album_item_shared_rw":"Partagé (lecture/écriture)","load_more":"Charger plus d'albums","add_photos":{"title":"Ajouter à un album","success":" %{smart_count} photo a été ajoutée à l'album %{name}. ||||  %{smart_count} photos ont été ajoutées à l'album %{name}.","error":{"generic":"Une erreur est survenue en mettant l'album à jour. Merci de réessayer plus tard.","reference":"Certaines photos n'ont pas pu être ajoutées à l'album. Merci de réessayer.","response":{"Forbidden":"L'application n'a pas la permission de modifier un album."}}},"share":{"cta":"Partager","title":"Partager avec d'autres","details":{"title":"Détails du partage","createdAt":"Depuis le %{date}","ro":"Permission de lecture","rw":"Permission d'écriture et de lecture"},"sharedByMe":"Partagé","sharedWithMe":"Partagé avec moi","shareByLink":{"subtitle":"Par lien public","desc":"Chaque personne possédant le lien fourni peut voir et télécharger vos photos.","fetchFailed":"Oups ! Il semblerait que votre connexion internet soit limitée, réessayez plus tard quand le réseau sera meilleur.","creating":"Création de votre lien...","copy":"Copier le lien","copied":"Lien copié dans le presse-papier","failed":"Impossible de copier dans le presse-papier"},"shareByEmail":{"title":"Par e-mail","subtitle":"Par email","email":"e-mail","emailPlaceholder":"Saisissez l'email ou le nom du destinataire.","send":"Envoyer","genericSuccess":"Vous avez envoyé une invitation à %{count} contacts.","success":"Vous avez envoyé une invitation à %{email}.","comingsoon":"Bientôt disponible ! Vous pourrez partager vos documents et vos photos en un seul clic avec votre famille, vos amis et même vos collaborateurs. Ne vous inquiétez pas, on vous préviendra quand ce sera prêt !\n"},"unshare":{"title":"Arrêter le partage avec ce contact","success":"Vous avez cessé de partager cet album avec %{email}."},"sharingLink":{"title":"Partager","copy":"Copier","copied":"Copié"},"whoHasAccess":{"title":"Qui a accès"},"protectedShare":{"title":"Prochainement !","desc":"Partagez ce que vous souhaitez par email avec votre famille et vos amis !"},"close":"Fermer","gettingLink":"Récupération du lien...","error":{"generic":"Une erreur est survenue lors de la création du lien de partage de l'album, merci de réessayer","revoke":"Une erreur est survenue lors de la révocation du lien de partage de l'album, merci de réessayer"}},"create":{"panel_form":{"label":"Donnez un nom à votre album","placeholder":"Album sans titre","cancel":"Annuler","submit":"Valider la création","update":"Ajouter les photos à l'album"},"inline_form":{"placeholder":"Indiquez le nom de l'album","create_label":"Créer un nouvel album","create_button":"Créer"},"success":"L'album %{name} a été créé avec %{smart_count} photo. |||| L'album %{name} a été créé %{smart_count} photos.","error":{"generic":"Une erreur est survenue lors de la création de l'album, merci de réessayer","already_exists":" L'album %{name} existe déjà, merci d'en choisir un autre.","name_missing":"Vous devez préciser le nom du nouvel album."}},"fetchAlbums":{"error":{"index_missing":"Un index d'albums doit être fourni pour récupérer les albums."}},"remove_photos":{"success":"La photo a été supprimée de l'album %{album_name}","error":{"generic":"Une erreur est survenue lors de la suppression de la photo, merci de réessayer."}},"remove_album":{"success":"L'album %{name} a été supprimé.","error":{"generic":"Une erreur est survenue lors de la suppression de l'album, merci de réessayer."}},"quit_album":{"success":"L'album %{name} a été supprimé.","error":{"generic":"Une erreur est survenue lors de la suppression de l'album, merci de réessayer."}}},"Viewer":{"close":"Fermer","noviewer":{"title":"La visionneuse ne sait pas encore lire ce type de fichier.","download":"Télécharger ce fichier","openWith":"Ouvrir avec..."},"actions":{"download":"Télécharger"},"loading":{"error":"Ce fichier n'a pas pu être chargé. Avez-vous une connexion internet qui fonctionne actuellement ?","retry":"Réessayer"}},"destroyconfirmation":{"title":"Supprimer définitivement cet album ?","cancel":"Annuler","delete":"Supprimer définitivement","forbidden":"À l'avenir, vous ne pourrez plus accéder à cet album ou à cette sélection.","eye":"Vos photos ne seront pas supprimées.","link":"Si vous l'avez partagé, personne ne va pouvoir y accéder."},"quitconfirmation":{"title":"Quitter et supprimer définitivement cet album ?","cancel":"Annuler","quit":"Quitter & supprimer","forbidden":"À l'avenir, vous ne pourrez plus accéder à cet album ou à cette sélection."},"timeline":{"DeleteConfirm":{"title":"Supprimer cet élément ? |||| Supprimer ces éléments ?","trash":"Il/elle sera déplacé(e) dans la corbeille. |||| Ils/elles seront déplacé(e)s dans la corbeille.","restore":"Vous pouvez toujours le/la restaurer quand vous voulez. |||| Vous pouvez toujours les restaurer quand vous voulez.","shared":"Les gens auxquels vous l'aviez partagé-e ne pourront plus y accéder.","related":"Certaines photos sélectionnées sont liées à un album. Elles seront retirées de ce dernier si vous procédez à la suppression.","cancel":"Annuler","delete":"Supprimer"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Importées depuis Cozy Photos","header":"Import de %{smart_count} photo dans votre Cozy |||| Import de %{smart_count} photos dans votre Cozy","header_mobile":"Uploading %{done} of %{total}","header_done":"Importé avec succès %{done} sur un total de %{total}","close":"fermer","item":{"pending":"En attente"},"alert":{"success":"%{smart_count} photo importée avec succès. |||| %{smart_count} photos importées avec succès.","success_conflicts":"%{smart_count} photo importée et %{conflictNumber} conflit(s). |||| %{smart_count} photos importées et %{conflictNumber} conflit(s).","errors":"Des erreurs sont survenues lors de l'import des photos."}}};

/***/ }),

/***/ "KFvd":
/*!******************************************!*\
  !*** ./src/photos/components/Layout.jsx ***!
  \******************************************/
/*! exports provided: Layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _styles_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/layout */ "0yyf");
/* harmony import */ var _styles_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react/Layout */ "Bh3+");
/* harmony import */ var cozy_ui_react_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cozy-ui/react/Sidebar */ "9VR2");
/* harmony import */ var cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cozy-ui/react/Nav */ "fSd/");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var _components_pushClient_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pushClient/Button */ "zW80");
/* harmony import */ var _components_pushClient_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/pushClient/Banner */ "f/Nf");
/* harmony import */ var cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cozy-ui/react/Alerter */ "67rm");
/* harmony import */ var _ducks_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ducks/upload */ "BDb7");
/* harmony import */ var cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cozy-ui/transpiled/react */ "H+Xc");
/* harmony import */ var react_cozy_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-cozy-helpers */ "Yo2A");
/* global __TARGET__ */













var NavLink = Object(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__["genNavLink"])(react_router__WEBPACK_IMPORTED_MODULE_6__["Link"]);
var Layout = function Layout(_ref) {
  var t = _ref.t,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _styles_layout__WEBPACK_IMPORTED_MODULE_0___default.a['pho-sidebar']
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_cozy_helpers__WEBPACK_IMPORTED_MODULE_12__["ModalManager"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    to: "/photos"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__["NavIcon"], {
    icon: "image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__["NavText"], null, t('Nav.photos')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
    "data-test-id": "nav-to-albums"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    to: "/albums"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__["NavIcon"], {
    icon: "album"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Nav__WEBPACK_IMPORTED_MODULE_5__["NavText"], null, t('Nav.albums'))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_pushClient_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    t: t
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ducks_upload__WEBPACK_IMPORTED_MODULE_10__["UploadQueue"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Main"], {
    className: _styles_layout__WEBPACK_IMPORTED_MODULE_0___default.a['pho-content']
  },  true && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_pushClient_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], null), children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_11__["IconSprite"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(Layout));

/***/ }),

/***/ "KOJc":
/*!****************************************!*\
  !*** ./src/components/Error/Empty.jsx ***!
  \****************************************/
/*! exports provided: default, EmptyDrive, EmptyPhotos, EmptyTrash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyDrive", function() { return EmptyDrive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPhotos", function() { return EmptyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyTrash", function() { return EmptyTrash; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var drive_assets_icons_icon_type_folder_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drive/assets/icons/icon-type-folder.svg */ "w0Z6");
/* harmony import */ var photos_assets_icons_icon_main_app_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! photos/assets/icons/icon-main-app.svg */ "a4ea");
/* harmony import */ var drive_assets_icons_icon_trash_big_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! drive/assets/icons/icon-trash-big.svg */ "Wu9Y");







var EmptyIcon = {
  drive: drive_assets_icons_icon_type_folder_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  photos: photos_assets_icons_icon_main_app_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  trash: drive_assets_icons_icon_trash_big_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
};
var EmptyCanvas = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(function (_ref) {
  var t = _ref.t,
      type = _ref.type,
      canUpload = _ref.canUpload,
      localeKey = _ref.localeKey;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
    "data-test-id": "empty-folder",
    icon: EmptyIcon[type],
    title: localeKey ? t("empty.".concat(localeKey, "_title")) : t('empty.title'),
    text: localeKey && t("empty.".concat(localeKey, "_text")) || canUpload && t('empty.text')
  });
});
/* harmony default export */ __webpack_exports__["default"] = (EmptyCanvas);
var EmptyDrive = function EmptyDrive(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyCanvas, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: "drive"
  }, props));
};
var EmptyPhotos = function EmptyPhotos(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyCanvas, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: "photos"
  }, props));
};
var EmptyTrash = function EmptyTrash(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyCanvas, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: "trash",
    localeKey: "trash"
  }, props));
};

/***/ }),

/***/ "LOX2":
/*!********************************************!*\
  !*** ./src/photos/ducks/timeline/dates.js ***!
  \********************************************/
/*! exports provided: formatH, formatD, formatDMY, formatYMD, isSameMonth, isSameDay, isSameHour, isEqualOrNewer, isEqualOrOlder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatH", function() { return formatH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatD", function() { return formatD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDMY", function() { return formatDMY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatYMD", function() { return formatYMD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return isSameMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return isSameDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameHour", function() { return isSameHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualOrNewer", function() { return isEqualOrNewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualOrOlder", function() { return isEqualOrOlder; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "NAv5");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

/**
 *  Format the date as specified by the formatter parameter.
 *  The extraction of year, day, etc is needed because the Date(string) constructor use the local timezone.
 *  Yet, the photos' dates are saved with the stack's locale (GMT+0 in production environment),
 *  because the timezone is mostly not specified in the EXIF metadata.
 *  So, to avoid a date offset in case the user timezone is not the stack's one, we use the Date(numbers) constructor instead.
 *  See https://github.com/date-fns/date-fns/issues/489 for more insights.
 * @param {function} f - date-fns format function
 * @param {string} date - date passed as string
 * @param {string} formatter - The wanted format. See https://date-fns.org/v1.30.1/docs/format
 * @returns {string} The formatted date
 */

const formatDate = (f, date, formatter) => {
  const [year, month, day] = date.substr(0, 10).split('-');
  const [hours, minutes, seconds] = date.length > 10 ? date.substr(11, 8).split(':') : [0, 0, 0];
  return f(new Date(year, month - 1, day, hours, minutes, seconds), formatter);
};

const formatH = (f, date) => {
  return formatDate(f, date, 'HH');
};
const formatD = (f, date) => {
  return formatDate(f, date, 'DD');
};
const formatDMY = (f, date) => {
  return formatDate(f, date, 'DD MMMM') + addYear(f, date);
};
const formatYMD = (f, date) => {
  return formatDate(f, date, 'YYYY-MM-DD');
};

const addYear = (f, date) => {
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isThisYear"])(date) ? '' : formatDate(f, date, ' YYYY');
};

const isSameMonth = (f, newerDate, olderDate) => {
  const newer = formatDate(f, newerDate);
  const older = formatDate(f, olderDate);
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInCalendarMonths"])(newer, older) === 0;
};
const isSameDay = (f, newerDate, olderDate) => {
  const newer = formatDate(f, newerDate);
  const older = formatDate(f, olderDate);
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInCalendarDays"])(newer, older) === 0;
};
const isSameHour = (f, newerDate, olderDate) => {
  const newer = formatDate(f, newerDate);
  const older = formatDate(f, olderDate);
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInHours"])(newer, older) === 0;
};
const isEqualOrNewer = (newerDate, olderDate) => {
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["compareAsc"])(newerDate, olderDate) >= 0;
};
const isEqualOrOlder = (newerDate, olderDate) => {
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["compareAsc"])(newerDate, olderDate) <= 0;
};

/***/ }),

/***/ "MJrX":
/*!***********************************************************!*\
  !*** ./src/photos/ducks/timeline/components/Timeline.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../styles/layout.styl */ "0yyf");
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_styl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! cozy-ui/react/Layout */ "Bh3+");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Topbar */ "eKCf");
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Toolbar */ "/NMv");
/* harmony import */ var _DeleteConfirm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DeleteConfirm */ "b7K/");
/* harmony import */ var _lib_confirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../lib/confirm */ "5wWc");
/* harmony import */ var _components_PhotoBoard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/PhotoBoard */ "TtgU");
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../upload */ "BDb7");
/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../albums */ "SRpc");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../selection */ "q/Uw");
/* harmony import */ var folder_references__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! folder-references */ "A3Xe");

























var getUploadDir =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee(client, t) {
    var referencedFolders, uploadDir;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(folder_references__WEBPACK_IMPORTED_MODULE_23__["getReferencedFolders"])(client, folder_references__WEBPACK_IMPORTED_MODULE_23__["REF_UPLOAD"]);

          case 2:
            referencedFolders = _context.sent;

            if (!(referencedFolders.length > 0)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", referencedFolders[0]._id);

          case 7:
            _context.next = 9;
            return Object(folder_references__WEBPACK_IMPORTED_MODULE_23__["getOrCreateFolderWithReference"])(client, "/".concat(t('UploadQueue.path_photos')), folder_references__WEBPACK_IMPORTED_MODULE_23__["REF_PHOTOS"]);

          case 9:
            _context.next = 11;
            return Object(folder_references__WEBPACK_IMPORTED_MODULE_23__["getOrCreateFolderWithReference"])(client, "/".concat(t('UploadQueue.path_photos'), "/").concat(t('UploadQueue.path_upload')), folder_references__WEBPACK_IMPORTED_MODULE_23__["REF_UPLOAD"]);

          case 11:
            uploadDir = _context.sent;
            return _context.abrupt("return", uploadDir._id);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUploadDir(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var Timeline =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Timeline, _Component);

  function Timeline() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Timeline);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Timeline)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      showAddAlbumModal: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "showAddAlbumModal", function () {
      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          showAddAlbumModal: true
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "hideAddAlbumModal", function () {
      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          showAddAlbumModal: false
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "uploadPhotos",
    /*#__PURE__*/
    function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2(photos) {
        var uploadPhoto, _this$context, client, t, uploadDirId;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                uploadPhoto = _this.props.uploadPhoto;
                _this$context = _this.context, client = _this$context.client, t = _this$context.t;
                _context2.next = 4;
                return getUploadDir(client, t);

              case 4:
                uploadDirId = _context2.sent;

                _this.dispatch(Object(_upload__WEBPACK_IMPORTED_MODULE_20__["addToUploadQueue"])(photos, function (photo) {
                  return uploadPhoto(photo, uploadDirId);
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "downloadPhotos", function (photos) {
      _this.context.client.collection('io.cozy.files').downloadArchive(photos.map(function (_ref3) {
        var _id = _ref3._id;
        return _id;
      }), 'selected');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "deletePhotos", function (selected, clearSelection) {
      return Object(_lib_confirm__WEBPACK_IMPORTED_MODULE_18__["default"])(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_DeleteConfirm__WEBPACK_IMPORTED_MODULE_17__["default"], {
        t: _this.context.t,
        count: selected.length,
        related: Object(_albums__WEBPACK_IMPORTED_MODULE_21__["belongsToAlbums"])(selected)
      }), function () {
        return Promise.all(selected.map(function (p) {
          return _this.props.deletePhoto(p);
        })).then(clearSelection);
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Timeline, [{
    key: "dispatch",
    value: function dispatch(action) {
      return this.context.store.dispatch(action);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          t = _this$props.t,
          lists = _this$props.lists,
          fetchStatus = _this$props.fetchStatus,
          hasMore = _this$props.hasMore,
          fetchMore = _this$props.fetchMore;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_selection__WEBPACK_IMPORTED_MODULE_22__["default"], {
        actions: function actions(selection) {
          return {
            'album-add': _this2.showAddAlbumModal,
            download: _this2.downloadPhotos,
            delete: function _delete(selected) {
              return _this2.deletePhotos(selected, selection.clear);
            }
          };
        }
      }, function (selected, active, selection) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          "data-test-id": "timeline-pho-content-wrapper",
          className: _styles_layout_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-content-wrapper']
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Topbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
          viewName: "photos"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
          disabled: active,
          uploadPhotos: _this2.uploadPhotos,
          selectItems: selection.show,
          t: t
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_14__["Content"], null, _this2.state.showAddAlbumModal && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_albums__WEBPACK_IMPORTED_MODULE_21__["AddToAlbumModal"], {
          onDismiss: _this2.hideAddAlbumModal,
          onSuccess: selection.clear,
          photos: selected
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_PhotoBoard__WEBPACK_IMPORTED_MODULE_19__["default"], {
          lists: lists,
          selected: selected,
          photosContext: "timeline",
          showSelection: active,
          onPhotoToggle: selection.toggle,
          onPhotosSelect: selection.select,
          onPhotosUnselect: selection.unselect,
          fetchStatus: fetchStatus,
          hasMore: hasMore,
          fetchMore: fetchMore
        })), _this2.renderViewer(_this2.props.children));
      });
    }
  }, {
    key: "renderViewer",
    value: function renderViewer(children) {
      var _this3 = this;

      if (!children) return null;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.map(children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.cloneElement(child, {
          photos: _this3.props.data || []
        });
      });
    }
  }]);

  return Timeline;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Timeline, "contextTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  client: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_11__["translate"])()(Timeline));

/***/ }),

/***/ "MzcY":
/*!**********************************************!*\
  !*** ./src/sharing/components/Recipient.jsx ***!
  \**********************************************/
/*! exports provided: RecipientsAvatars, UserAvatar, default, RecipientWithoutStatus, RecipientPlusX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientsAvatars", function() { return RecipientsAvatars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientWithoutStatus", function() { return RecipientWithoutStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientPlusX", function() { return RecipientPlusX; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var _components_Menu_Menuawaremobile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Menu/Menuawaremobile */ "cQrJ");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Avatar */ "1tzb");
/* harmony import */ var _recipient_styl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recipient.styl */ "1BUi");
/* harmony import */ var _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_recipient_styl__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_icons_icon_hourglass_16_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/icon-hourglass-16.svg */ "H0cq");
/* harmony import */ var _assets_icons_icon_eye_16_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/icon-eye-16.svg */ "42zN");
/* harmony import */ var _assets_icons_icon_pen_write_16_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/icon-pen-write-16.svg */ "GeHB");
/* harmony import */ var _assets_icons_icon_trash_red_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/icon-trash-red.svg */ "osKR");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! models */ "OjRq");
/* harmony import */ var sharing_components_Identity__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! sharing/components/Identity */ "71Dd");
























var MAX_DISPLAYED_RECIPIENTS = 3;
var DEFAULT_DISPLAY_NAME = 'models.contact.defaultDisplayName';
var RecipientsAvatars = function RecipientsAvatars(_ref) {
  var recipients = _ref.recipients,
      link = _ref.link,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small-plus' : _ref$size,
      className = _ref.className,
      onClick = _ref.onClick;
  // we reverse the recipients array because we use `flex-direction: row-reverse` to display them correctly
  // we slice first to clone the original array because reverse() mutates it
  var reversedRecipients = recipients.slice().reverse();
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipients-avatars'], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()({}, _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['--interactive'], onClick), className),
    onClick: onClick
  }, link && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_16__["AvatarLink"], {
    size: size
  }), recipients.length > MAX_DISPLAYED_RECIPIENTS && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_16__["AvatarPlusX"], {
    extraRecipients: reversedRecipients.slice(MAX_DISPLAYED_RECIPIENTS).map(function (recipient) {
      return models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getDisplayName(recipient);
    }),
    size: size
  }), reversedRecipients.slice(0, MAX_DISPLAYED_RECIPIENTS).map(function (recipient, idx) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_16__["Avatar"], {
      key: idx,
      text: models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getInitials(recipient),
      size: size,
      textId: models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getDisplayName(recipient)
    });
  }));
};
var UserAvatar = function UserAvatar(_ref2) {
  var url = _ref2.url,
      size = _ref2.size,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9___default()(_ref2, ["url", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['avatar']
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_16__["Avatar"], {
    text: models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getInitials(rest),
    size: size,
    textId: models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getDisplayName(rest)
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(sharing_components_Identity__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getDisplayName(rest),
    details: url
  }));
};

var Status =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Status, _Component);

  function Status() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Status);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Status)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      revoking: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onRevoke",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _this$props, onRevoke, document, sharingId, index;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, onRevoke = _this$props.onRevoke, document = _this$props.document, sharingId = _this$props.sharingId, index = _this$props.index;

              _this.setState({
                revoking: true
              });

              _context.next = 4;
              return onRevoke(document, sharingId, index);

            case 4:
              _this.setState({
                revoking: false
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getStatusIcon", function (type) {
      switch (type) {
        case 'one-way':
          return _assets_icons_icon_eye_16_svg__WEBPACK_IMPORTED_MODULE_19__["default"];

        case 'two-way':
          return _assets_icons_icon_pen_write_16_svg__WEBPACK_IMPORTED_MODULE_20__["default"];

        default:
          return _assets_icons_icon_hourglass_16_svg__WEBPACK_IMPORTED_MODULE_18__["default"];
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Status, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isOwner = _this$props2.isOwner,
          status = _this$props2.status,
          instance = _this$props2.instance,
          type = _this$props2.type,
          documentType = _this$props2.documentType,
          name = _this$props2.name;
      var _this$context = this.context,
          t = _this$context.t,
          client = _this$context.client;
      var revoking = this.state.revoking;
      var isMe = instance !== undefined && instance === client.options.uri && !isOwner;
      var shouldShowMenu = !revoking && status !== 'owner' && (isMe || isOwner);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient-status'], 'u-ml-1')
      }, revoking && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__["Spinner"], null), !shouldShowMenu && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient-owner']
      }, t("Share.status.".concat(status))), shouldShowMenu && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Menu_Menuawaremobile__WEBPACK_IMPORTED_MODULE_15__["default"], {
        text: status === 'ready' && type ? t("Share.type.".concat(type)) : t("Share.status.".concat(status)),
        className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient-menu'],
        buttonClassName: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient-menu-btn'],
        position: 'right',
        popover: true,
        itemsStyle: {
          maxWidth: '280px'
        },
        name: name
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__["MenuItem"], {
        icon: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: this.getStatusIcon(status)
        })
      }, status === 'ready' && type ? t("Share.type.".concat(type)) : t("Share.status.".concat(status))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__["MenuItem"], {
        onSelect: this.onRevoke,
        onClick: this.onRevoke,
        icon: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: _assets_icons_icon_trash_red_svg__WEBPACK_IMPORTED_MODULE_21__["default"]
        })
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['action-unshare']
      }, isOwner ? t("".concat(documentType, ".share.revoke.title")) : t("".concat(documentType, ".share.revokeSelf.title"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['action-unshare-desc']
      }, isOwner ? t("".concat(documentType, ".share.revoke.desc")) : t("".concat(documentType, ".share.revokeSelf.desc"))))));
    }
  }]);

  return Status;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(Status, "contextTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired,
  client: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired
});

var StatusWithBreakpoints = Object(cozy_ui_react__WEBPACK_IMPORTED_MODULE_14__["withBreakpoints"])()(Status);

var Recipient = function Recipient(props, _ref4) {
  var client = _ref4.client,
      t = _ref4.t;

  var instance = props.instance,
      isOwner = props.isOwner,
      status = props.status,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9___default()(props, ["instance", "isOwner", "status"]);

  var isMe = isOwner && status === 'owner' || instance === client.options.uri;
  var defaultDisplayName = t(DEFAULT_DISPLAY_NAME);
  var defaultInitials = defaultDisplayName[0].toUpperCase();
  var name = models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getDisplayName(rest, defaultDisplayName);
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient'], 'u-mt-1')
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_16__["Avatar"], {
    text: models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getInitials(rest, defaultInitials),
    size: 'small-plus',
    textId: name
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient-ident-status']
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(sharing_components_Identity__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: isMe ? t('Share.recipients.you') : name,
    details: instance
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(StatusWithBreakpoints, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    name: name
  }))));
};

Recipient.contextTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Recipient);
var RecipientWithoutStatus = function RecipientWithoutStatus(_ref5) {
  var instance = _ref5.instance,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9___default()(_ref5, ["instance"]);

  var name = models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getDisplayName(rest);
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient']
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_16__["Avatar"], {
    text: models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getInitials(rest),
    size: 'small-plus',
    textId: name
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient-ident-status']
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(sharing_components_Identity__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: name,
    details: instance
  })));
};
var RecipientPlusX = function RecipientPlusX(_ref6, _ref7) {
  var extraRecipients = _ref6.extraRecipients;
  var t = _ref7.t;
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient']
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_16__["AvatarPlusX"], {
    extraRecipients: extraRecipients.map(function (recipient) {
      return models__WEBPACK_IMPORTED_MODULE_22__["Contact"].getDisplayName(recipient);
    })
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: _recipient_styl__WEBPACK_IMPORTED_MODULE_17___default.a['recipient-ident-status']
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(sharing_components_Identity__WEBPACK_IMPORTED_MODULE_23__["default"], {
    name: t('Share.members.otherContacts', extraRecipients.length)
  })));
};
RecipientPlusX.contextTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func.isRequired
};

/***/ }),

/***/ "NqoY":
/*!************************************************!*\
  !*** ./src/photos/targets/browser/doctypes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drive/lib/doctypes */ "z6Q1");
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cozy-doctypes */ "Le8U");
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cozy_doctypes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-client */ "SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_2__);




class HasManyAlbums extends cozy_client__WEBPACK_IMPORTED_MODULE_2__["HasMany"] {
  get data() {
    const refs = this.target.relationships.referenced_by.data;
    const albums = refs ? refs.map(ref => this.get(ref.type, ref.id)).filter(Boolean) : [];
    return albums;
  }

  static query(doc, client, assoc) {
    if (!doc.relationships || !doc.relationships.referenced_by || !doc.relationships.referenced_by.data) {
      return null;
    }

    const included = doc.relationships.referenced_by.data;
    const ids = included.filter(inc => inc.type === assoc.doctype).map(inc => inc.id);
    return new cozy_client__WEBPACK_IMPORTED_MODULE_2__["QueryDefinition"]({
      doctype: assoc.doctype,
      ids
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = ({
  albums: {
    doctype: drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_ALBUMS"],
    attributes: {
      name: {
        type: 'string'
      }
    },
    relationships: {
      photos: {
        type: 'has-many',
        doctype: drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_FILES"]
      }
    }
  },
  files: {
    doctype: drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_FILES"],
    relationships: {
      albums: {
        type: HasManyAlbums,
        doctype: drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_0__["DOCTYPE_ALBUMS"]
      }
    }
  },
  contacts: {
    doctype: cozy_doctypes__WEBPACK_IMPORTED_MODULE_1__["Contact"].doctype
  }
});

/***/ }),

/***/ "OTOu":
/*!***************************!*\
  !*** ./src/lib/logger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var minilog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! minilog */ "i9cR");
/* harmony import */ var minilog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(minilog__WEBPACK_IMPORTED_MODULE_0__);
/* global __APP_SLUG__ */

const logger = minilog__WEBPACK_IMPORTED_MODULE_0___default()(`cozy-${"photos"}`);
minilog__WEBPACK_IMPORTED_MODULE_0___default.a.enable();
minilog__WEBPACK_IMPORTED_MODULE_0___default.a.suggest.allow(`cozy-${"photos"}`, 'log');
minilog__WEBPACK_IMPORTED_MODULE_0___default.a.suggest.allow(`cozy-${"photos"}`, 'info');
/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "OjRq":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: CozyFile, Group, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cozy-doctypes */ "Le8U");
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CozyFile", function() { return cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__["CozyFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__["Group"]; });

/* harmony import */ var models_Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/Contact */ "/WUI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return models_Contact__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "OsbH":
/*!*******************************!*\
  !*** ./src/sharing/index.jsx ***!
  \*******************************/
/*! exports provided: default, SharedDocument, SharedStatus, SharedBadge, SharedRecipients, SharedRecipientsList, ShareButton, ShareModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SharingProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDocument", function() { return SharedDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedStatus", function() { return SharedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedBadge", function() { return SharedBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRecipients", function() { return SharedRecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRecipientsList", function() { return SharedRecipientsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButton", function() { return ShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModal", function() { return ShareModal; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! cozy-ui/react/helpers/tracker */ "4kcP");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state */ "QWsP");
/* harmony import */ var sharing_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sharing/context */ "skT2");
/* harmony import */ var _components_SharedBadge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/SharedBadge */ "otEB");
/* harmony import */ var _components_ShareButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ShareButton */ "ziD/");
/* harmony import */ var sharing_components_EditableSharingModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! sharing/components/EditableSharingModal */ "9Xrh");
/* harmony import */ var _SharingDetailsModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharingDetailsModal */ "/FPF");
/* harmony import */ var _components_WhoHasAccessLight__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/WhoHasAccessLight */ "hz+9");
/* harmony import */ var _components_Recipient__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/Recipient */ "MzcY");
/* harmony import */ var _components_SharedStatus__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/SharedStatus */ "vGv+");



























var track = function track(document, action) {
  var tracker = Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_16__["getTracker"])();

  if (!tracker) {
    return;
  }

  tracker.push(['trackEvent', isFile(document) ? 'Drive' : 'Photos', action, "".concat(action).concat(isFile(document) ? 'File' : 'Album')]);
};

var trackSharingByLink = function trackSharingByLink(document) {
  return track(document, 'shareByLink');
};

var isFile = function isFile(_ref) {
  var _type = _ref._type;
  return _type === 'io.cozy.files';
};

var SharingProvider =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default()(SharingProvider, _Component);

  function SharingProvider(props, context) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, SharingProvider);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(SharingProvider).call(this, props, context));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this), "dispatch", function (action) {
      return _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, state, Object(_state__WEBPACK_IMPORTED_MODULE_17__["default"])(state, action));
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this), "getFilesPaths",
    /*#__PURE__*/
    function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(files) {
        var parentDirIds, parentDirs, filePaths;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parentDirIds = files.map(function (f) {
                  return f.dir_id;
                }).filter(function (f, idx, arr) {
                  return arr.indexOf(f) === idx;
                });
                _context.next = 3;
                return _this.context.client.collection(_this.props.doctype).all({
                  keys: parentDirIds
                });

              case 3:
                parentDirs = _context.sent;
                filePaths = files.map(function (f) {
                  var parentDirPath = parentDirs.data.find(function (d) {
                    return d.id === f.dir_id;
                  }).path;
                  return parentDirPath === '/' ? "/".concat(f.name) : "".concat(parentDirPath, "/").concat(f.name);
                });
                return _context.abrupt("return", filePaths);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this), "share",
    /*#__PURE__*/
    function () {
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2(document, recipients, sharingType, description) {
        var sharing, resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sharing = Object(_state__WEBPACK_IMPORTED_MODULE_17__["getDocumentSharing"])(_this.state, document.id);

                if (!sharing) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", _this.addRecipients(sharing, recipients, sharingType));

              case 3:
                _context2.next = 5;
                return _this.context.client.collection('io.cozy.sharings').share(document, recipients, sharingType, description, '/preview');

              case 5:
                resp = _context2.sent;
                _context2.t0 = _this;
                _context2.t1 = _state__WEBPACK_IMPORTED_MODULE_17__["addSharing"];
                _context2.t2 = resp.data;
                _context2.t3 = document.path;

                if (_context2.t3) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 13;
                return _this.getFilesPaths([document]);

              case 13:
                _context2.t3 = _context2.sent;

              case 14:
                _context2.t4 = _context2.t3;
                _context2.t5 = (0, _context2.t1)(_context2.t2, _context2.t4);

                _context2.t0.dispatch.call(_context2.t0, _context2.t5);

                return _context2.abrupt("return", resp.data);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3, _x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this), "addRecipients",
    /*#__PURE__*/
    function () {
      var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3(sharing, recipients, sharingType) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.context.client.collection('io.cozy.sharings').addRecipients(sharing, recipients, sharingType);

              case 2:
                resp = _context3.sent;

                _this.dispatch(Object(_state__WEBPACK_IMPORTED_MODULE_17__["updateSharing"])(resp.data));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x6, _x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this), "revoke",
    /*#__PURE__*/
    function () {
      var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4(document, sharingId, recipientIndex) {
        var sharing;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                sharing = Object(_state__WEBPACK_IMPORTED_MODULE_17__["getSharingById"])(_this.state, sharingId);
                _context4.next = 3;
                return _this.context.client.collection('io.cozy.sharings').revokeRecipient(sharing, recipientIndex);

              case 3:
                _context4.t0 = _this;
                _context4.t1 = _state__WEBPACK_IMPORTED_MODULE_17__["revokeRecipient"];
                _context4.t2 = sharing;
                _context4.t3 = recipientIndex;
                _context4.t4 = document.path;

                if (_context4.t4) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 11;
                return _this.getFilesPaths([document]);

              case 11:
                _context4.t4 = _context4.sent;

              case 12:
                _context4.t5 = _context4.t4;
                _context4.t6 = (0, _context4.t1)(_context4.t2, _context4.t3, _context4.t5);

                _context4.t0.dispatch.call(_context4.t0, _context4.t6);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11) {
        return _ref5.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this), "revokeSelf",
    /*#__PURE__*/
    function () {
      var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5(document) {
        var sharing;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                sharing = Object(_state__WEBPACK_IMPORTED_MODULE_17__["getSharingForSelf"])(_this.state, document.id);
                _context5.next = 3;
                return _this.context.client.collection('io.cozy.sharings').revokeSelf(sharing);

              case 3:
                _this.dispatch(Object(_state__WEBPACK_IMPORTED_MODULE_17__["revokeSelf"])(sharing));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x12) {
        return _ref6.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this), "shareByLink",
    /*#__PURE__*/
    function () {
      var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6(document) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                trackSharingByLink(document);
                _context6.next = 3;
                return _this.context.client.collection('io.cozy.permissions').createSharingLink(document);

              case 3:
                resp = _context6.sent;

                _this.dispatch(Object(_state__WEBPACK_IMPORTED_MODULE_17__["addSharingLink"])(resp.data));

                return _context6.abrupt("return", resp);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x13) {
        return _ref7.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_11___default()(_this), "revokeSharingLink",
    /*#__PURE__*/
    function () {
      var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee7(document) {
        var perms;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // Because some duplicate links have been created in the past, we must ensure
                // we revoke all of them
                perms = Object(_state__WEBPACK_IMPORTED_MODULE_17__["getDocumentPermissions"])(_this.state, document.id);
                _context7.next = 3;
                return Promise.all(perms.map(function (p) {
                  return _this.context.client.collection('io.cozy.permissions').destroy(p);
                }));

              case 3:
                _this.dispatch(Object(_state__WEBPACK_IMPORTED_MODULE_17__["revokeSharingLink"])(perms));

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x14) {
        return _ref8.apply(this, arguments);
      };
    }());

    var instanceUri = _this.context.client.options.uri;
    var documentType = props.documentType || 'Document';
    _this.state = {
      byDocId: {},
      sharings: [],
      permissions: [],
      sharedFolderPaths: [],
      documentType: documentType,
      isOwner: function isOwner(docId) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_17__["isOwner"])(_this.state, docId);
      },
      canReshare: function canReshare(docId) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_17__["canReshare"])(_this.state, docId, instanceUri);
      },
      getOwner: function getOwner(docId) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_17__["getOwner"])(_this.state, docId);
      },
      getSharingType: function getSharingType(docId) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_17__["getSharingType"])(_this.state, docId, instanceUri);
      },
      getRecipients: function getRecipients(docId) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_17__["getRecipients"])(_this.state, docId);
      },
      getSharingLink: function getSharingLink(docId) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_17__["getSharingLink"])(_this.state, docId, documentType);
      },
      hasSharedParent: function hasSharedParent(document) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_17__["hasSharedParent"])(_this.state, document);
      },
      hasSharedChild: function hasSharedChild(document) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_17__["hasSharedChild"])(_this.state, document);
      },
      share: _this.share,
      revoke: _this.revoke,
      revokeSelf: _this.revokeSelf,
      shareByLink: _this.shareByLink,
      revokeSharingLink: _this.revokeSharingLink
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(SharingProvider, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee8() {
        var client, doctype, _ref9, _ref10, sharings, permissions, apps, sharedDocIds, resp, folderPaths, filePaths;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                client = this.context.client;
                doctype = this.props.doctype;
                _context8.next = 4;
                return Promise.all([client.collection('io.cozy.sharings').findByDoctype(doctype), client.collection('io.cozy.permissions').findLinksByDoctype(doctype), client.collection('io.cozy.permissions').findApps()]);

              case 4:
                _ref9 = _context8.sent;
                _ref10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref9, 3);
                sharings = _ref10[0];
                permissions = _ref10[1];
                apps = _ref10[2];
                this.dispatch(Object(_state__WEBPACK_IMPORTED_MODULE_17__["receiveSharings"])({
                  instanceUri: client.options.uri,
                  sharings: sharings.data,
                  permissions: permissions.data,
                  apps: apps.data
                }));

                if (!(doctype !== 'io.cozy.files')) {
                  _context8.next = 12;
                  break;
                }

                return _context8.abrupt("return");

              case 12:
                sharedDocIds = sharings.data.map(function (s) {
                  return Object(_state__WEBPACK_IMPORTED_MODULE_17__["getSharingDocIds"])(s);
                }).reduce(function (acc, val) {
                  return acc.concat(val);
                }, []);
                _context8.next = 15;
                return client.collection(doctype).all({
                  keys: sharedDocIds
                });

              case 15:
                resp = _context8.sent;
                folderPaths = resp.data.filter(function (f) {
                  return f.type === 'directory';
                }).map(function (f) {
                  return f.path;
                });
                _context8.next = 19;
                return this.getFilesPaths(resp.data.filter(function (f) {
                  return f.type !== 'directory';
                }));

              case 19:
                filePaths = _context8.sent;
                this.dispatch(Object(_state__WEBPACK_IMPORTED_MODULE_17__["receivePaths"])([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(folderPaths), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(filePaths))));

              case 21:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      // WARN: whe shouldn't do this (https://reactjs.org/docs/context.html#caveats)
      // but if we don't, consumers don't rerender when the state changes after loading the sharings,
      // probably because the state object remains the same...
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
        value: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, this.state)
      }, this.props.children);
    }
  }]);

  return SharingProvider;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_13___default()(SharingProvider, "contextTypes", {
  client: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object.isRequired
});


var SharedDocument = function SharedDocument(_ref11) {
  var docId = _ref11.docId,
      children = _ref11.children;
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Consumer, null, function () {
    var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        byDocId = _ref12.byDocId,
        isOwner = _ref12.isOwner,
        getSharingType = _ref12.getSharingType,
        getRecipients = _ref12.getRecipients,
        getSharingLink = _ref12.getSharingLink,
        revokeSelf = _ref12.revokeSelf;

    return children({
      hasWriteAccess: !byDocId || !byDocId[docId] || isOwner(docId) || getSharingType(docId) === 'two-way',
      isShared: byDocId !== undefined && byDocId[docId],
      isSharedByMe: byDocId !== undefined && byDocId[docId] && isOwner(docId),
      isSharedWithMe: byDocId !== undefined && byDocId[docId] && !isOwner(docId),
      recipients: getRecipients(docId),
      link: getSharingLink(docId) !== null,
      onLeave: revokeSelf
    });
  });
};
var SharedStatus = function SharedStatus(_ref13) {
  var docId = _ref13.docId,
      className = _ref13.className;
  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Consumer, null, function () {
    var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        byDocId = _ref14.byDocId,
        getRecipients = _ref14.getRecipients,
        getSharingLink = _ref14.getSharingLink;

    return !byDocId || !byDocId[docId] ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
      className: className
    }, "\u2014") : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_SharedStatus__WEBPACK_IMPORTED_MODULE_25__["default"], {
      className: className,
      recipients: getRecipients(docId),
      docId: docId,
      link: getSharingLink(docId) !== null
    });
  });
};
var SharedBadge = function SharedBadge(_ref15) {
  var docId = _ref15.docId,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref15, ["docId"]);

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Consumer, null, function () {
    var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        byDocId = _ref16.byDocId,
        isOwner = _ref16.isOwner;

    return !byDocId || !byDocId[docId] ? null : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_SharedBadge__WEBPACK_IMPORTED_MODULE_19__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      byMe: isOwner(docId)
    }, rest));
  });
};
var SharedRecipients = function SharedRecipients(_ref17) {
  var docId = _ref17.docId,
      onClick = _ref17.onClick,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref17, ["docId", "onClick"]);

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Consumer, null, function () {
    var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        byDocId = _ref18.byDocId,
        getRecipients = _ref18.getRecipients,
        getSharingLink = _ref18.getSharingLink;

    return !byDocId || !byDocId[docId] ? null : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Recipient__WEBPACK_IMPORTED_MODULE_24__["RecipientsAvatars"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      recipients: getRecipients(docId),
      link: getSharingLink(docId) !== null,
      onClick: onClick
    }, rest));
  });
};
var SharedRecipientsList = function SharedRecipientsList(_ref19) {
  var docId = _ref19.docId,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref19, ["docId"]);

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Consumer, null, function () {
    var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        byDocId = _ref20.byDocId,
        isOwner = _ref20.isOwner,
        getRecipients = _ref20.getRecipients;

    return !byDocId || !byDocId[docId] || !isOwner(docId) ? null : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_WhoHasAccessLight__WEBPACK_IMPORTED_MODULE_23__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      recipients: getRecipients(docId).filter(function (r) {
        return r.status !== 'owner';
      })
    }, rest));
  });
};
var ShareButton = function ShareButton(_ref21, _ref22) {
  var t = _ref22.t;

  var docId = _ref21.docId,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref21, ["docId"]);

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Consumer, null, function (_ref23) {
    var byDocId = _ref23.byDocId,
        documentType = _ref23.documentType,
        isOwner = _ref23.isOwner;
    return !byDocId[docId] ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_ShareButton__WEBPACK_IMPORTED_MODULE_20__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      label: t("".concat(documentType, ".share.cta"))
    }, rest)) : isOwner(docId) ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_ShareButton__WEBPACK_IMPORTED_MODULE_20__["SharedByMeButton"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      label: t("".concat(documentType, ".share.sharedByMe"))
    }, rest)) : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_ShareButton__WEBPACK_IMPORTED_MODULE_20__["SharedWithMeButton"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      label: t("".concat(documentType, ".share.sharedWithMe"))
    }, rest));
  });
};
ShareButton.contextTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func.isRequired
};

var SharingModal = function SharingModal(_ref24) {
  var document = _ref24.document,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref24, ["document"]);

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Consumer, null, function (_ref25) {
    var documentType = _ref25.documentType,
        getOwner = _ref25.getOwner,
        getSharingType = _ref25.getSharingType,
        getRecipients = _ref25.getRecipients,
        revokeSelf = _ref25.revokeSelf;
    return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_SharingDetailsModal__WEBPACK_IMPORTED_MODULE_22__["SharingDetailsModal"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      document: document,
      documentType: documentType,
      owner: getOwner(document.id),
      sharingType: getSharingType(document.id),
      recipients: getRecipients(document.id),
      onRevoke: revokeSelf
    }, rest));
  });
};

var ShareModal = function ShareModal(_ref26) {
  var document = _ref26.document,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref26, ["document"]);

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_context__WEBPACK_IMPORTED_MODULE_18__["default"].Consumer, null, function (_ref27) {
    var byDocId = _ref27.byDocId,
        isOwner = _ref27.isOwner,
        canReshare = _ref27.canReshare;
    return !byDocId[document.id] || isOwner(document.id) || canReshare(document.id) ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(sharing_components_EditableSharingModal__WEBPACK_IMPORTED_MODULE_21__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      document: document
    }, rest)) : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(SharingModal, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      document: document
    }, rest));
  });
};

/***/ }),

/***/ "PFWH":
/*!*******************************************!*\
  !*** ./src/sharing/suggestionMatchers.js ***!
  \*******************************************/
/*! exports provided: emailMatch, cozyUrlMatch, groupNameMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailMatch", function() { return emailMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cozyUrlMatch", function() { return cozyUrlMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupNameMatch", function() { return groupNameMatch; });
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cozy-doctypes */ "Le8U");
/* harmony import */ var cozy_doctypes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__);
 // TODO: sadly we have different versions of contacts' doctype to handle...
// A migration tool on the stack side is needed here

const emailMatch = (input, contact) => {
  if (!contact.email) return false;
  const emailInput = new RegExp(input, 'i');

  if (Array.isArray(contact.email)) {
    return contact.email.some(email => emailInput.test(email.address));
  }

  return emailInput.test(contact.email);
};

const cozyUrlMatch = (input, contact) => {
  if (!contact.cozy && !contact.url) return false;
  const urlInput = new RegExp(input, 'i');

  if (contact.cozy && Array.isArray(contact.cozy)) {
    return contact.cozy.some(cozy => urlInput.test(cozy.url));
  }

  return urlInput.test(contact.url);
};

const groupNameMatch = (input, contactOrGroup) => {
  if (contactOrGroup._type !== cozy_doctypes__WEBPACK_IMPORTED_MODULE_0__["Group"].doctype) return false;
  const nameInput = new RegExp(input, 'i');
  return nameInput.test(contactOrGroup.name);
};



/***/ }),

/***/ "QWsP":
/*!******************************!*\
  !*** ./src/sharing/state.js ***!
  \******************************/
/*! exports provided: receiveSharings, addSharing, updateSharing, revokeRecipient, revokeSelf, addSharingLink, revokeSharingLink, receivePaths, matchingInstanceName, default, isOwner, canReshare, getOwner, getRecipients, getSharingLink, getSharingForSelf, getSharingType, getDocumentSharing, getSharingById, getDocumentPermissions, hasSharedParent, hasSharedChild, isShared, getSharingDocIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSharings", function() { return receiveSharings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSharing", function() { return addSharing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSharing", function() { return updateSharing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeRecipient", function() { return revokeRecipient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeSelf", function() { return revokeSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSharingLink", function() { return addSharingLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeSharingLink", function() { return revokeSharingLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receivePaths", function() { return receivePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingInstanceName", function() { return matchingInstanceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOwner", function() { return isOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReshare", function() { return canReshare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwner", function() { return getOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipients", function() { return getRecipients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharingLink", function() { return getSharingLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharingForSelf", function() { return getSharingForSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharingType", function() { return getSharingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentSharing", function() { return getDocumentSharing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharingById", function() { return getSharingById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentPermissions", function() { return getDocumentPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSharedParent", function() { return hasSharedParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSharedChild", function() { return hasSharedChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShared", function() { return isShared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharingDocIds", function() { return getSharingDocIds; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "mwIZ");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const RECEIVE_SHARINGS = 'RECEIVE_SHARINGS';
const ADD_SHARING = 'ADD_SHARING';
const UPDATE_SHARING = 'UPDATE_SHARING';
const REVOKE_RECIPIENT = 'REVOKE_RECIPIENT';
const REVOKE_SELF = 'REVOKE_SELF';
const ADD_SHARING_LINK = 'ADD_SHARING_LINK';
const REVOKE_SHARING_LINK = 'REVOKE_SHARING_LINK';
const RECEIVE_PATHS = 'RECEIVE_PATHS'; // actions

const receiveSharings = ({
  instanceUri,
  sharings = [],
  permissions = [],
  apps = []
}) => ({
  type: RECEIVE_SHARINGS,
  data: {
    sharings: sharings.filter(s => !areAllRecipientsRevoked(s) && !hasBeenSelfRevoked(s, instanceUri)),
    permissions,
    apps
  }
});
const addSharing = (data, path) => ({
  type: ADD_SHARING,
  data,
  path
});
const updateSharing = sharing => ({
  type: UPDATE_SHARING,
  sharing
});
const revokeRecipient = (sharing, index, path) => {
  return {
    type: REVOKE_RECIPIENT,

    /* We set revoked status to the revoked member.
    We can't just simply remove it, 'cauz we use the index
    to remove members..
    */
    sharing: _objectSpread({}, sharing, {
      attributes: _objectSpread({}, sharing.attributes, {
        members: sharing.attributes.members.map((m, idx) => {
          if (idx === index) {
            return _objectSpread({}, m, {
              status: 'revoked'
            });
          }

          return m;
        })
      })
    }),
    path
  };
};
const revokeSelf = sharing => ({
  type: REVOKE_SELF,
  sharing
});
const addSharingLink = data => ({
  type: ADD_SHARING_LINK,
  data
});
const revokeSharingLink = permissions => ({
  type: REVOKE_SHARING_LINK,
  permissions
});
const receivePaths = paths => ({
  type: RECEIVE_PATHS,
  paths
});
const matchingInstanceName = (instanceUri = '') => shareMember => shareMember.instance && shareMember.instance.toString().toLowerCase() === instanceUri.toLowerCase(); // reducers

const byIdInitialState = {
  sharings: [],
  permissions: []
};

const isItemEmpty = item => item.sharings.length === 0 && item.permissions.length === 0;

const updateByIdItem = (state, id, updater) => {
  const {
    [id]: byIdState
  } = state,
        rest = _objectWithoutProperties(state, [id].map(_toPropertyKey));

  const update = updater(byIdState || byIdInitialState);
  return isItemEmpty(update) ? rest : _objectSpread({}, rest, {
    [id]: update
  });
};

const indexSharing = (state = {}, sharing) => getSharedDocIds(sharing).reduce((byId, id) => updateByIdItem(byId, id, state => _objectSpread({}, state, {
  sharings: [...state.sharings, sharing.id]
})), state);

const forgetSharing = (state = {}, sharing) => getSharedDocIds(sharing).reduce((byId, id) => updateByIdItem(byId, id, state => _objectSpread({}, state, {
  sharings: state.sharings.filter(sid => sid !== sharing.id)
})), state);

const indexPermission = (state = {}, perm) => getSharedDocIds(perm).reduce((byId, id) => updateByIdItem(byId, id, state => _objectSpread({}, state, {
  permissions: [...state.permissions, perm.id]
})), state);

const forgetPermission = (state = {}, permission) => getSharedDocIds(permission).reduce((byId, id) => updateByIdItem(byId, id, state => _objectSpread({}, state, {
  permissions: state.permissions.filter(pid => pid !== permission.id)
})), state);

const byDocId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SHARINGS:
      // eslint-disable-next-line no-case-declarations
      const intermediaryState = action.data.sharings.reduce((byId, sharing) => indexSharing(byId, sharing), state);
      return action.data.permissions.reduce((byId, perm) => indexPermission(byId, perm), intermediaryState);

    case ADD_SHARING:
      return indexSharing(state, action.data);

    case REVOKE_RECIPIENT:
      if (areAllRecipientsRevoked(action.sharing)) {
        return forgetSharing(state, action.sharing);
      }

      return state;

    case ADD_SHARING_LINK:
      return indexPermission(state, action.data);

    case REVOKE_SELF:
      return forgetSharing(state, action.sharing);

    case REVOKE_SHARING_LINK:
      return action.permissions.reduce((byId, perm) => forgetPermission(byId, perm), state);

    default:
      return state;
  }
};

const permissions = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SHARINGS:
      return action.data.permissions;

    case ADD_SHARING_LINK:
      return [...state, action.data];

    case REVOKE_SHARING_LINK:
      // eslint-disable-next-line no-case-declarations
      const permIds = action.permissions.map(p => p.id);
      return state.filter(p => permIds.indexOf(p.id) === -1);

    default:
      return state;
  }
};

const apps = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SHARINGS:
      return action.data.apps;

    default:
      return state;
  }
};

const sharings = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SHARINGS:
      return action.data.sharings;

    case ADD_SHARING:
      return [...state, action.data];

    case UPDATE_SHARING:
    case REVOKE_RECIPIENT:
      return state.map(s => {
        return s.id !== action.sharing.id ? s : action.sharing;
      });

    case REVOKE_SELF:
      return state.filter(s => s.id !== action.sharing.id);

    default:
      return state;
  }
};

const sharedPaths = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PATHS:
      //!TODO Remove after we solved the sharedPaths bugs
      //eslint-disable-next-line
      console.log('RECEIVE PATHS', action);
      return action.paths;

    case ADD_SHARING:
      //!TODO Remove after we solved the sharedPaths bugs
      //eslint-disable-next-line
      console.log('ADD SHARING', action); //eslint-disable-next-line

      const newState = [...state, action.path];
      return newState;

    case REVOKE_RECIPIENT:
      if (areAllRecipientsRevoked(action.sharing)) {
        return state.filter(p => p !== action.path);
      }

      return state;

    default:
      return state;
  }
};

const reducer = (state = {}, action = {}) => ({
  byDocId: byDocId(state.byDocId, action),
  sharings: sharings(state.sharings, action),
  permissions: permissions(state.permissions, action),
  apps: apps(state.apps, action),
  sharedPaths: sharedPaths(state.sharedPaths, action)
});

/* harmony default export */ __webpack_exports__["default"] = (reducer); // selectors

const isOwner = (state, docId) => {
  if (state.byDocId[docId] && state.byDocId[docId].sharings.length !== 0) {
    return getSharingById(state, state.byDocId[docId].sharings[0]).attributes.owner === true;
  }

  return true;
};
const canReshare = (state, docId, instanceUri) => {
  const sharing = getDocumentSharing(state, docId);
  const me = sharing.attributes.members.find(matchingInstanceName(instanceUri));
  return sharing.attributes.open_sharing === true && me && !me.read_only;
};
const getOwner = (state, docId) => getRecipients(state, docId).find(r => r.status === 'owner');
const getRecipients = (state, docId) => {
  const recipients = getDocumentSharings(state, docId).map(sharing => {
    const type = getDocumentSharingType(sharing, docId);
    return sharing.attributes.members.map((m, idx) => _objectSpread({}, m, {
      type: m.read_only ? 'one-way' : type,
      sharingId: sharing.id,
      index: idx
    }));
  }).reduce((acc, member) => acc.concat(member), []).filter(r => r.status !== 'revoked');

  if (recipients[0] && recipients[0].status === 'owner') {
    return [recipients[0], ...recipients.filter(r => r.status !== 'owner')];
  }

  return recipients;
};
const getSharingLink = (state, docId, documentType) => {
  // This shouldn't have happened, but unfortunately some duplicate sharing links have been created in the past
  const perms = getDocumentPermissions(state, docId);
  if (perms.length === 0) return null;
  const perm = perms[0];
  const code = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(perm, 'attributes.shortcodes.email') || lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(perm, 'attributes.codes.email');

  if (code) {
    return buildSharingLink(state, documentType, code);
  } else {
    return null;
  }
};
const getSharingForSelf = (state, docId) => getDocumentSharing(state, docId);
const getSharingType = (state, docId, instanceUri) => {
  const sharing = getSharingForSelf(state, docId);
  const type = getDocumentSharingType(sharing, docId);
  if (sharing.attributes.owner) return type;
  const me = sharing.attributes.members.find(matchingInstanceName(instanceUri));
  return me && me.read_only ? 'one-way' : type;
};
const getDocumentSharing = (state, docId) => getDocumentSharings(state, docId)[0] || null;

const getDocumentSharings = (state, docId) => !state.byDocId[docId] ? [] : state.byDocId[docId].sharings.map(id => getSharingById(state, id));

const getSharingById = (state, id) => state.sharings.find(s => s.id === id);
const getDocumentPermissions = (state, docId) => !state.byDocId[docId] ? [] : state.byDocId[docId].permissions.map(id => getPermissionById(state, id));

const getPermissionById = (state, id) => state.permissions.find(s => s.id === id);

const getApps = state => state.apps;

const hasSharedParent = (state, document) => {
  if (!state.sharedPaths) {
    //eslint-disable-next-line
    console.log('hasSharedParent should not occurs', state, document);
    return false;
  }

  return state.sharedPaths.some(path => document.path.indexOf(`${path}/`) === 0);
};
const hasSharedChild = (state, document) => {
  if (!state.sharedPaths) {
    //eslint-disable-next-line
    console.log('hasSharedChild should not occurs', state, document);
    return false;
  }

  const ret = state.sharedPaths.some(path => path.indexOf(`${document.path}/`) === 0);
  return ret;
};
const isShared = (state, document) => {
  if (!state.sharedPaths) {
    //eslint-disable-next-line
    console.log('isShared should not occurs', state, document);
    return false;
  }

  return state.sharedPaths.some(path => path === document.path);
}; // helpers

const getSharedDocIds = doc => doc.type === 'io.cozy.sharings' ? getSharingDocIds(doc) : getPermissionDocIds(doc);

const getSharingDocIds = sharing => sharing.attributes.rules.map(r => r.values).reduce((acc, val) => acc.concat(val), []);

const getPermissionDocIds = perm => Object.keys(perm.attributes.permissions).map(k => perm.attributes.permissions[k].values).reduce((acc, val) => [...acc, ...val], []);

const areAllRecipientsRevoked = sharing => sharing.attributes.owner && sharing.attributes.members.filter(m => m.status !== 'revoked').length === 1;

const hasBeenSelfRevoked = (sharing, instanceUri) => {
  const me = sharing.attributes.members.find(matchingInstanceName(instanceUri));
  return !sharing.attributes.owner && me && me.status === 'revoked';
};

const getDocumentSharingType = (sharing, docId) => {
  if (!sharing) return null;
  const rule = sharing.attributes.rules.find(r => r.values.indexOf(docId) !== -1);
  return rule.update === 'sync' && rule.remove === 'sync' ? 'two-way' : 'one-way';
};

const buildSharingLink = (state, documentType, sharecode) => {
  const appUrl = getAppUrlForDoctype(state, documentType);
  return `${appUrl}public?sharecode=${sharecode}`;
};

const getAppUrlForDoctype = (state, documentType) => {
  const apps = getApps(state);

  switch (documentType) {
    case 'Files':
    case 'Document':
      return getAppUrl(apps, 'drive');

    case 'Albums':
      return getAppUrl(apps, 'photos');

    default:
      throw new Error(`Sharing link: don't know which app to use for doctype ${documentType}`);
  }
};

const getAppUrl = (apps, appName) => {
  const app = apps.find(a => a.attributes.slug === appName && a.attributes.state === 'ready');

  if (!app) {
    throw new Error(`Sharing link: app ${appName} not installed`);
  }

  return app.links.related;
};

/***/ }),

/***/ "RPnM":
/*!**************************************************!*\
  !*** ./src/photos/components/LoadMoreButton.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/photoList.styl */ "kKu1");
/* harmony import */ var _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_photoList_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cozy-ui/stylus/settings/palette.json */ "yoMi");
var cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! cozy-ui/stylus/settings/palette.json */ "yoMi", 1);










var LoadMoreButton =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LoadMoreButton, _Component);

  function LoadMoreButton(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoadMoreButton);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LoadMoreButton).call(this, props));
    _this.state = {
      fetching: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoadMoreButton, [{
    key: "handleClick",
    value: function handleClick() {
      var _this2 = this;

      this.setState({
        fetching: true
      });
      this.props.onClick().then(function () {
        return _this2.setState({
          fetching: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          label = _this$props.label,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? '100%' : _this$props$width;
      var fetching = this.state.fetching;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: width
        },
        className: _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-list-morebutton']
      }, fetching && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        disabled: true,
        theme: "secondary",
        label: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
          color: cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_8__['dodgerBlue'],
          nomargin: true
        })
      }), !fetching && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        theme: "secondary",
        onClick: function onClick() {
          return _this3.handleClick();
        },
        label: label
      }));
    }
  }]);

  return LoadMoreButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoadMoreButton);

/***/ }),

/***/ "SRpc":
/*!*******************************************!*\
  !*** ./src/photos/ducks/albums/index.jsx ***!
  \*******************************************/
/*! exports provided: ALBUM_QUERY, AlbumPhotosWithLoader, ConnectedAlbumPhotos, AlbumsView, PhotosPicker, AlbumPhotos, AddToAlbumModal, belongsToAlbums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALBUM_QUERY", function() { return ALBUM_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumPhotosWithLoader", function() { return AlbumPhotosWithLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedAlbumPhotos", function() { return ConnectedAlbumPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsView", function() { return ConnectedAlbumsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosPicker", function() { return ConnectedPhotosPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumPhotos", function() { return ConnectedAlbumPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToAlbumModal", function() { return ConnectedAddToAlbumModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "belongsToAlbums", function() { return belongsToAlbums; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cozy-client */ "SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sharing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sharing */ "OsbH");
/* harmony import */ var _components_AlbumsView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/AlbumsView */ "HDak");
/* harmony import */ var _components_AlbumPhotos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/AlbumPhotos */ "qW25");
/* harmony import */ var _components_PhotosPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/PhotosPicker */ "rtuO");
/* harmony import */ var _components_AddToAlbumModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/AddToAlbumModal */ "EUDN");
/* harmony import */ var cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cozy-ui/react/ */ "H+Xc");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Loading */ "ZFPb");
/* harmony import */ var drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! drive/lib/doctypes */ "z6Q1");

















var ALBUMS_QUERY = function ALBUMS_QUERY(client) {
  return client.find(drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__["DOCTYPE_ALBUMS"], {
    created_at: {
      $gt: null
    }
  }).where({
    auto: {
      $exists: false
    }
  }).indexFields(['created_at']).include(['photos']).sortBy([{
    created_at: 'desc'
  }]);
};

var ALBUM_QUERY = function ALBUM_QUERY(client, ownProps) {
  return client.get(drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__["DOCTYPE_ALBUMS"], ownProps.router.params.albumId).include(['photos']);
};

var addPhotos =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(album, photos) {
    var photoCountBefore, photoCountAfter;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            photoCountBefore = album.photos.data.length;
            _context.next = 4;
            return album.photos.addById(photos.map(function (_ref2) {
              var _id = _ref2._id;
              return _id;
            }));

          case 4:
            photoCountAfter = album.photos.data.length;

            if (photoCountBefore + photos.length !== photoCountAfter) {
              cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].info('Alerter.photos.already_added_photo');
            } else {
              cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].success('Albums.add_photos.success', {
                name: album.name,
                smart_count: photos.length
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].error('Albums.add_photos.error.reference');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function addPhotos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var ALBUM_MUTATIONS = function ALBUM_MUTATIONS(client) {
  return {
    updateAlbum: function () {
      var _updateAlbum = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(album) {
        var unique;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return client.collection(drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__["DOCTYPE_ALBUMS"]).checkUniquenessOf('name', album.name);

              case 2:
                unique = _context2.sent;

                if (!(unique !== true)) {
                  _context2.next = 8;
                  break;
                }

                cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].error('Albums.create.error.already_exists', {
                  name: name
                });
                return _context2.abrupt("return");

              case 8:
                return _context2.abrupt("return", client.save(album));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateAlbum(_x3) {
        return _updateAlbum.apply(this, arguments);
      }

      return updateAlbum;
    }(),
    deleteAlbum: function deleteAlbum(album) {
      return client.destroy(album);
    },
    addPhotos: addPhotos,
    removePhotos: function () {
      var _removePhotos = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(album, photos, clearSelection) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return album.photos.removeById(photos.map(function (_ref3) {
                  var _id = _ref3._id;
                  return _id;
                }));

              case 3:
                cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].success('Albums.remove_photos.success', {
                  album_name: album.name
                });
                clearSelection();
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].error('Albums.remove_photos.error.generic');

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function removePhotos(_x4, _x5, _x6) {
        return _removePhotos.apply(this, arguments);
      }

      return removePhotos;
    }()
  };
};

var ALBUMS_MUTATIONS = function ALBUMS_MUTATIONS(client) {
  return {
    addPhotos: addPhotos,
    createAlbum: function () {
      var _createAlbum = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(name, photos) {
        var created_at,
            album,
            unique,
            resp,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                created_at = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : new Date();
                _context4.prev = 1;

                if (name) {
                  _context4.next = 5;
                  break;
                }

                cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].error('Albums.create.error.name_missing');
                return _context4.abrupt("return");

              case 5:
                album = {
                  _type: drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__["DOCTYPE_ALBUMS"],
                  name: name,
                  created_at: created_at
                };
                _context4.next = 8;
                return client.collection(drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__["DOCTYPE_ALBUMS"]).checkUniquenessOf('name', album.name);

              case 8:
                unique = _context4.sent;

                if (!(unique !== true)) {
                  _context4.next = 12;
                  break;
                }

                cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].error('Albums.create.error.already_exists', {
                  name: name
                });
                return _context4.abrupt("return");

              case 12:
                _context4.next = 14;
                return client.create(drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__["DOCTYPE_ALBUMS"], album, {
                  photos: photos
                }, {
                  updateQueries: {
                    albums: function albums(previousData, result) {
                      return [result.data].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(previousData));
                    }
                  }
                });

              case 14:
                resp = _context4.sent;
                cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].success('Albums.create.success', {
                  name: album.name,
                  smart_count: photos.length
                });
                return _context4.abrupt("return", resp.data);

              case 19:
                _context4.prev = 19;
                _context4.t0 = _context4["catch"](1);
                cozy_ui_react___WEBPACK_IMPORTED_MODULE_13__["Alerter"].error('Albums.create.error.generic');

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 19]]);
      }));

      function createAlbum(_x7, _x8) {
        return _createAlbum.apply(this, arguments);
      }

      return createAlbum;
    }()
  };
};

var ConnectedAlbumsView = function ConnectedAlbumsView(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(sharing__WEBPACK_IMPORTED_MODULE_8__["default"], {
    doctype: drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__["DOCTYPE_ALBUMS"],
    documentType: "Albums"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_7__["Query"], {
    query: ALBUMS_QUERY
  }, function (result) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AlbumsView__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      albums: result
    }, props));
  }));
};

var ConnectedAddToAlbumModal = function ConnectedAddToAlbumModal(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_7__["Query"], {
    query: ALBUMS_QUERY,
    as: "albums",
    mutations: ALBUMS_MUTATIONS
  }, function (result, _ref4) {
    var createAlbum = _ref4.createAlbum,
        addPhotos = _ref4.addPhotos;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AddToAlbumModal__WEBPACK_IMPORTED_MODULE_12__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, result, {
      createAlbum: createAlbum,
      addPhotos: addPhotos
    }, props));
  });
};

var AlbumPhotosWithLoader = function AlbumPhotosWithLoader(_ref5) {
  var children = _ref5.children;
  return function (_ref6, _ref7) {
    var album = _ref6.data,
        fetchStatus = _ref6.fetchStatus;
    var updateAlbum = _ref7.updateAlbum,
        deleteAlbum = _ref7.deleteAlbum,
        removePhotos = _ref7.removePhotos;

    if (album && fetchStatus === 'loaded') {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AlbumPhotos__WEBPACK_IMPORTED_MODULE_10__["default"], {
        album: album,
        photos: album.photos.data,
        updateAlbum: updateAlbum,
        deleteAlbum: deleteAlbum,
        removePhotos: removePhotos,
        hasMore: album.photos.hasMore,
        fetchMore: album.photos.fetchMore.bind(album.photos)
      }, children);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_14__["default"], {
        size: 'xxlarge',
        loadingType: 'photos_fetching',
        middle: true
      });
    }
  };
};
var ConnectedAlbumPhotos = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_7__["Query"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    query: ALBUM_QUERY
  }, props, {
    mutations: ALBUM_MUTATIONS
  }), AlbumPhotosWithLoader({
    children: props.children
  }));
});
var CreateAlbumPicker = Object(cozy_client__WEBPACK_IMPORTED_MODULE_7__["withMutations"])(ALBUMS_MUTATIONS)(_components_PhotosPicker__WEBPACK_IMPORTED_MODULE_11__["default"]);
var ConnectedPhotosPicker = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(function (_ref8) {
  var params = _ref8.params,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref8, ["params"]);

  return params.albumId ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_7__["Query"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    query: ALBUM_QUERY,
    mutations: ALBUMS_MUTATIONS
  }, props), function (_ref9, _ref10) {
    var data = _ref9.data;
    var addPhotos = _ref10.addPhotos;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PhotosPicker__WEBPACK_IMPORTED_MODULE_11__["default"], {
      album: data,
      addPhotos: addPhotos
    });
  }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CreateAlbumPicker, null);
});

var belongsToAlbums = function belongsToAlbums(photos) {
  if (!photos) {
    return false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = photos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var photo = _step.value;

      if (photo.relationships && photo.relationships.referenced_by && photo.relationships.referenced_by.data && photo.relationships.referenced_by.data.length > 0) {
        var refs = photo.relationships.referenced_by.data;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = refs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var ref = _step2.value;

            if (ref.type === drive_lib_doctypes__WEBPACK_IMPORTED_MODULE_15__["DOCTYPE_ALBUMS"]) {
              return true;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
};

/***/ }),

/***/ "SY/9":
/*!***************************************!*\
  !*** ./src/photos/locales/sk_SK.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "SdrL":
/*!******************************************************!*\
  !*** ./src/sharing/assets/icons/icon-cross-bold.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-cross-bold_768adbba35f30227bde1acbc224e1604",
  "use": "icon-cross-bold_768adbba35f30227bde1acbc224e1604-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 16 16\" id=\"icon-cross-bold_768adbba35f30227bde1acbc224e1604\">\n  <defs>\n    <path d=\"M8 6.586l5.293-5.293a1 1 0 0 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 1 1 1.414-1.414L8 6.586z\" id=\"icon-cross-bold_768adbba35f30227bde1acbc224e1604_a\" />\n  </defs>\n  <use fill=\"#32363F\" fill-rule=\"nonzero\" xlink:href=\"#icon-cross-bold_768adbba35f30227bde1acbc224e1604_a\" />\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "SvPG":
/*!*****************************************!*\
  !*** ./src/components/Button/index.jsx ***!
  \*****************************************/
/*! exports provided: MoreButton, CozyHomeLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MoreButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreButton */ "qelF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoreButton", function() { return _MoreButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CozyHomeLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CozyHomeLink */ "h0jr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CozyHomeLink", function() { return _CozyHomeLink__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "SvWF":
/*!*************************************************!*\
  !*** ./src/components/Error/ErrorComponent.jsx ***!
  \*************************************************/
/*! exports provided: ErrorComponent, withError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withError", function() { return withError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var _photos_assets_icons_icon_image_broken_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../photos/assets/icons/icon-image-broken.svg */ "l3Lo");




var ErrorComponent = function ErrorComponent(_ref) {
  var t = _ref.t,
      errorType = _ref.errorType;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_2__["Empty"], {
    title: t("Error.".concat(errorType, "_title")),
    icon: _photos_assets_icons_icon_image_broken_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return window.location.reload();
    },
    label: t('Error.refresh')
  }));
};
var TranslatedError = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(ErrorComponent); // eslint-disable-next-line

var withError = function withError(onError, type, BaseComponent) {
  return function (props) {
    return onError(props) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TranslatedError, {
      errorType: type
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, props);
  };
};
/* harmony default export */ __webpack_exports__["default"] = (TranslatedError);

/***/ }),

/***/ "Te91":
/*!********************************************!*\
  !*** ./src/sharing/components/button.styl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"coz-btn-shared":"coz-btn-shared--27aW9","coz-btn-sharedWithMe":"coz-btn-sharedWithMe--1CdsF"};

/***/ }),

/***/ "TtgU":
/*!**********************************************!*\
  !*** ./src/photos/components/PhotoBoard.jsx ***!
  \**********************************************/
/*! exports provided: PhotoBoard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoBoard", function() { return PhotoBoard; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/photoList.styl */ "kKu1");
/* harmony import */ var _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_photoList_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-measure */ "CMvH");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var _PhotoList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PhotoList */ "AISZ");
/* harmony import */ var components_Error_Empty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Error/Empty */ "KOJc");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loading */ "ZFPb");
/* harmony import */ var components_Error_ErrorComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Error/ErrorComponent */ "SvWF");
/* harmony import */ var _LoadMoreButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LoadMoreButton */ "RPnM");














var PhotoBoard =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PhotoBoard, _Component);

  function PhotoBoard() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PhotoBoard);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PhotoBoard).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotoBoard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          f = _this$props.f,
          lists = _this$props.lists,
          selected = _this$props.selected,
          photosContext = _this$props.photosContext,
          showSelection = _this$props.showSelection,
          onPhotoToggle = _this$props.onPhotoToggle,
          onPhotosSelect = _this$props.onPhotosSelect,
          onPhotosUnselect = _this$props.onPhotosUnselect,
          fetchStatus = _this$props.fetchStatus,
          hasMore = _this$props.hasMore,
          fetchMore = _this$props.fetchMore,
          measureRef = _this$props.measureRef,
          width = _this$props.contentRect.entry.width;
      var isError = fetchStatus === 'failed';
      var isFetching = fetchStatus === 'pending' || fetchStatus === 'loading';

      if (isError) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Error_ErrorComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
          errorType: "".concat(photosContext, "_photos")
        });
      }

      if (isFetching) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {
          loadingType: "photos_fetching"
        });
      }

      if (!isFetching && (lists.length === 0 || lists[0].photos.length === 0)) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Error_Empty__WEBPACK_IMPORTED_MODULE_10__["EmptyPhotos"], {
          localeKey: "".concat(photosContext, "_photos")
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: showSelection ? _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-list-selection'] : '',
        ref: measureRef
      }, lists.map(function (photoList, idx) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PhotoList__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: idx,
          title: photoList.title || (photoList.month ? f(photoList.month, 'MMMM YYYY') : ''),
          photos: photoList.photos,
          selected: selected,
          showSelection: showSelection,
          onPhotoToggle: onPhotoToggle,
          onPhotosSelect: onPhotosSelect,
          onPhotosUnselect: onPhotosUnselect,
          containerWidth: width
        });
      }), hasMore && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_LoadMoreButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: t('Board.load_more'),
        width: width,
        onClick: fetchMore
      }));
    }
  }]);

  return PhotoBoard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_8__["translate"])()(Object(react_measure__WEBPACK_IMPORTED_MODULE_7__["withContentRect"])()(PhotoBoard)));

/***/ }),

/***/ "UVeP":
/*!*************************************************!*\
  !*** ./src/sharing/components/ShareByEmail.jsx ***!
  \*************************************************/
/*! exports provided: countNewRecipients, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countNewRecipients", function() { return countNewRecipients; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/get */ "mwIZ");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! cozy-ui/react/Alerter */ "67rm");
/* harmony import */ var cozy_ui_react_SelectBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! cozy-ui/react/SelectBox */ "81zs");
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! cozy-ui/react/palette */ "7jrE");
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! models */ "OjRq");
/* harmony import */ var sharing_propTypes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sharing/propTypes */ "G9pQ");
/* harmony import */ var sharing_components_ShareRecipientsInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! sharing/components/ShareRecipientsInput */ "/TmC");
/* harmony import */ var sharing_share_styl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! sharing/share.styl */ "jrFr");
/* harmony import */ var sharing_share_styl__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(sharing_share_styl__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var lib_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lib/logger */ "OTOu");























var DropdownIndicator = function DropdownIndicator(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react_SelectBox__WEBPACK_IMPORTED_MODULE_15__["components"].DropdownIndicator, props, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
    icon: "bottom",
    color: cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_16___default.a.coolGrey
  }));
};

var Option = function Option(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react_SelectBox__WEBPACK_IMPORTED_MODULE_15__["components"].Option, props, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(sharing_share_styl__WEBPACK_IMPORTED_MODULE_20___default.a['select-option'])
  }, props.isSelected && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
    icon: "check",
    color: cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_16___default.a.dodgerBlue
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_20___default.a['select-option-label']
  }, props.label), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_20___default.a['select-option-desc']
  }, props.data.desc))));
};

var customStyles = {
  option: function option(base, state) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default()({}, base, {
      color: 'black',
      backgroundColor: state.isFocused ? cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_16___default.a.paleGrey : null,
      padding: 0,
      borderBottom: state.options.findIndex(function (o) {
        return o.value === state.value;
      }) === 0 ? "1px solid ".concat(cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_16___default.a.silver) : null
    });
  },
  menu: function menu(base) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default()({}, base, {
      width: '204%'
    });
  }
};

var ShareTypeSelect = function ShareTypeSelect(_ref) {
  var options = _ref.options,
      _onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_20___default.a['select-wrapper']
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react_SelectBox__WEBPACK_IMPORTED_MODULE_15__["default"], {
    name: "select",
    classNamePrefix: "needsclick react-select",
    components: {
      DropdownIndicator: DropdownIndicator,
      Option: Option
    },
    styles: customStyles,
    defaultValue: options[0],
    isSearchable: false,
    onChange: function onChange(option) {
      _onChange(option.value);
    },
    options: options
  }));
};

ShareTypeSelect.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  options: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array.isRequired
};
ShareTypeSelect.defaultProps = {
  onChange: lib_logger__WEBPACK_IMPORTED_MODULE_21__["default"].log,
  value: ''
};

var ShareSubmit = function ShareSubmit(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    onClick: function onClick() {
      props.onSubmit();
    },
    busy: props.loading,
    label: props.label,
    disabled: props.disabled
  });
};

ShareSubmit.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
};
ShareSubmit.defaultProps = {
  label: 'Submit',
  loading: false
};
var countNewRecipients = function countNewRecipients(currentRecipients, newRecipients) {
  return newRecipients.filter(function (contact) {
    var email = models__WEBPACK_IMPORTED_MODULE_17__["Contact"].getPrimaryEmail(contact);
    var cozyUrl = models__WEBPACK_IMPORTED_MODULE_17__["Contact"].getPrimaryCozy(contact);
    return !currentRecipients.find(function (r) {
      return email && r.email && r.email === email || cozyUrl && r.instance && r.instance === cozyUrl;
    });
  }).length;
};

var ShareByEmail =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ShareByEmail, _Component);

  function ShareByEmail() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ShareByEmail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ShareByEmail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "sharingTypes", [{
      value: 'two-way',
      label: _this.context.t('Share.type.two-way'),
      desc: _this.context.t('Share.type.desc.two-way'),
      disabled: false
    }, {
      value: 'one-way',
      label: _this.context.t('Share.type.one-way'),
      desc: _this.context.t('Share.type.desc.one-way'),
      disabled: false
    }]);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "initialState", {
      recipients: [],
      sharingType: 'two-way',
      loading: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default()({}, _this.initialState));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "reset", function () {
      _this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default()({}, _this.initialState));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onChange", function (value) {
      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default()({}, state, {
          sharingType: value
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onSubmit", function () {
      _this.sendSharingLink();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "sanitizeRecipient", function (recipient) {
      var matches = recipient.email.match(/\s(.+@.+)\s/g);
      recipient.email = matches.length ? matches[0].trim().replace(/\s.+/g, '').replace(/^[\W]|[\W]$/g, '') : recipient.email;
      return recipient;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onRecipientPick", function (recipient) {
      var contactsToAdd;

      if (recipient._type === models__WEBPACK_IMPORTED_MODULE_17__["Group"].doctype) {
        var groupId = recipient.id;
        contactsToAdd = _this.props.contacts.data.filter(function (contact) {
          var contactGroupIds = lodash_get__WEBPACK_IMPORTED_MODULE_12___default()(contact, 'relationships.groups.data', []).map(function (group) {
            return group._id;
          });
          return contactGroupIds.includes(groupId);
        });
      } else {
        contactsToAdd = [recipient];
      }

      var filtered = contactsToAdd.filter(function (contact) {
        return contact.email && contact.email.length > 0 || contact.cozy && contact.cozy.length > 0;
      }).filter(function (contact) {
        return !_this.state.recipients.find(function (r) {
          return r === contact;
        });
      });

      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default()({}, state, {
          recipients: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.recipients), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(filtered))
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onRecipientRemove", function (recipient) {
      var idx = _this.state.recipients.findIndex(function (r) {
        return r === recipient;
      });

      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default()({}, state, {
          recipients: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.recipients.slice(0, idx)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.recipients.slice(idx + 1)))
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getSuccessMessage", function (recipientsBefore) {
      var documentType = _this.props.documentType;
      var recipients = _this.state.recipients;

      if (recipients.length === 1) {
        var recipient = recipients[0];
        var email = models__WEBPACK_IMPORTED_MODULE_17__["Contact"].isContact(recipient) ? models__WEBPACK_IMPORTED_MODULE_17__["Contact"].getPrimaryEmail(recipient) : recipient.email;
        var cozyUrl = models__WEBPACK_IMPORTED_MODULE_17__["Contact"].getPrimaryCozy(recipient);

        if (email) {
          return ["".concat(documentType, ".share.shareByEmail.success"), {
            email: email
          }];
        } else if (cozyUrl) {
          return ["".concat(documentType, ".share.shareByEmail.success"), {
            email: cozyUrl
          }];
        } else {
          return ["".concat(documentType, ".share.shareByEmail.genericSuccess"), {
            count: 1
          }];
        }
      } else {
        return ["".concat(documentType, ".share.shareByEmail.genericSuccess"), {
          count: countNewRecipients(recipientsBefore, recipients)
        }];
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "share", function () {
      var _this$props = _this.props,
          document = _this$props.document,
          sharingDesc = _this$props.sharingDesc,
          onShare = _this$props.onShare,
          createContact = _this$props.createContact;
      var _this$state = _this.state,
          recipients = _this$state.recipients,
          sharingType = _this$state.sharingType;

      if (recipients.length === 0) {
        return;
      } // we can't use currentRecipients prop in getSuccessMessage because it may use
      // the updated prop to count the new recipients


      var recipientsBefore = _this.props.currentRecipients;

      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_8___default()({}, state, {
          loading: true
        });
      });

      Promise.all(recipients.map(function (recipient) {
        return recipient.id ? recipient : createContact({
          email: [{
            address: recipient.email,
            primary: true
          }]
        }).then(function (resp) {
          return resp.data;
        });
      })).then(function (recipients) {
        return onShare(document, recipients, sharingType, sharingDesc);
      }).then(function () {
        cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_14__["default"].success.apply(cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_14__["default"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.getSuccessMessage(recipientsBefore)));

        _this.reset();
      }).catch(function (err) {
        cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_14__["default"].error('Error.generic');

        _this.reset();

        throw err;
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ShareByEmail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var t = this.context.t;
      var _this$props2 = this.props,
          contacts = _this$props2.contacts,
          documentType = _this$props2.documentType,
          groups = _this$props2.groups;
      var recipients = this.state.recipients;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_20___default.a['coz-form-group']
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_20___default.a['coz-form']
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(sharing_components_ShareRecipientsInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
        label: t("".concat(documentType, ".share.shareByEmail.email")),
        placeholder: recipients.length === 0 ? t("".concat(documentType, ".share.shareByEmail.emailPlaceholder")) : '',
        onFocus: this.onInputFocus,
        onPick: function onPick(recipient) {
          return _this2.onRecipientPick(recipient);
        },
        onRemove: function onRemove(recipient) {
          return _this2.onRecipientRemove(recipient);
        },
        contacts: contacts,
        groups: groups,
        recipients: recipients
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_20___default.a['share-type-control']
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ShareTypeSelect, {
        options: this.sharingTypes,
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ShareSubmit, {
        label: t("".concat(documentType, ".share.shareByEmail.send")),
        onSubmit: this.share,
        loading: this.state.loading,
        disabled: recipients.length === 0
      })));
    }
  }]);

  return ShareByEmail;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(ShareByEmail, "contextTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  client: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired
});

ShareByEmail.propTypes = {
  currentRecipients: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object),
  contacts: sharing_propTypes__WEBPACK_IMPORTED_MODULE_18__["contactsResponseType"].isRequired,
  groups: sharing_propTypes__WEBPACK_IMPORTED_MODULE_18__["groupsResponseType"].isRequired,
  document: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  documentType: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,
  sharingDesc: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,
  onShare: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  createContact: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ShareByEmail);

/***/ }),

/***/ "UXD1":
/*!***********************************************!*\
  !*** ./src/photos/components/QuitConfirm.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/confirms.styl */ "2sk9");
/* harmony import */ var _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react/Modal */ "cLsY");





var QuitConfirm = function QuitConfirm(_ref) {
  var t = _ref.t,
      confirm = _ref.confirm,
      abort = _ref.abort;
  var confirmationTexts = ['forbidden'].map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      key: "key_quit_".concat(type),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default.a['fil-confirm-text'], _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default.a["icon-".concat(type)])
    }, t("quitconfirmation.".concat(type)));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t('quitconfirmation.title'),
    description: confirmationTexts,
    secondaryType: "secondary",
    secondaryText: t('quitconfirmation.cancel'),
    secondaryAction: abort,
    primaryType: "danger",
    primaryText: t('quitconfirmation.quit'),
    primaryAction: confirm
  });
};

/* harmony default export */ __webpack_exports__["default"] = (QuitConfirm);

/***/ }),

/***/ "UhLh":
/*!*************************************************************!*\
  !*** ./src/photos/ducks/albums/components/AlbumToolbar.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Button */ "SvPG");
/* harmony import */ var sharing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sharing */ "OsbH");
/* harmony import */ var photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! photos/styles/toolbar.styl */ "t0Aa");
/* harmony import */ var photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var photos_assets_icons_icon_checkbox_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! photos/assets/icons/icon-checkbox.svg */ "DbnX");












var AlbumToolbar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AlbumToolbar, _Component);

  function AlbumToolbar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AlbumToolbar);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AlbumToolbar).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AlbumToolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          router = _this$props.router,
          album = _this$props.album,
          sharedWithMe = _this$props.sharedWithMe,
          readOnly = _this$props.readOnly,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          downloadAlbum = _this$props.downloadAlbum,
          deleteAlbum = _this$props.deleteAlbum,
          selectItems = _this$props.selectItems,
          onRename = _this$props.onRename,
          isMobile = _this$props.breakpoints.isMobile,
          shareAlbum = _this$props.shareAlbum;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        "data-test-id": "pho-toolbar-album",
        className: photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_9___default.a['pho-toolbar'],
        role: "toolbar"
      }, !isMobile && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(sharing__WEBPACK_IMPORTED_MODULE_8__["ShareButton"], {
        disabled: disabled,
        label: t('Albums.share.cta'),
        onClick: function onClick() {
          return shareAlbum(album);
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
        "data-test-id": "more-button",
        disabled: disabled,
        className: photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_9___default.a['pho-toolbar-menu'],
        component: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Button__WEBPACK_IMPORTED_MODULE_7__["MoreButton"], null),
        position: "right"
      }, !sharedWithMe && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        className: 'u-hide--desk',
        icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
          icon: "share"
        }),
        onSelect: function onSelect() {
          return shareAlbum(album);
        }
      }, t('Albums.share.cta')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        "data-test-id": "menu-download-album",
        onSelect: downloadAlbum,
        icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
          icon: "download"
        })
      }, t('Toolbar.menu.download_album')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        "data-test-id": "menu-rename-album",
        icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
          icon: "rename"
        }),
        onSelect: onRename
      }, t('Toolbar.menu.rename_album')), !readOnly && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        "data-test-id": "menu-add-photos-to-album",
        icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
          icon: "album-add"
        }),
        onSelect: function onSelect() {
          return router.push("".concat(router.location.pathname, "/edit"));
        }
      }, t('Toolbar.menu.add_photos')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        className: 'u-hide--desk'
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        className: 'u-hide--desk',
        icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
          icon: photos_assets_icons_icon_checkbox_svg__WEBPACK_IMPORTED_MODULE_10__["default"]
        }),
        onSelect: selectItems
      }, t('Toolbar.menu.select_items')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), !sharedWithMe && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
        "data-test-id": "menu-delete-album",
        className: photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_9___default.a['pho-action-delete'],
        icon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
          icon: "trash"
        }),
        onSelect: deleteAlbum
      }, t('Toolbar.menu.album_delete'))));
    }
  }]);

  return AlbumToolbar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react__WEBPACK_IMPORTED_MODULE_6__["withBreakpoints"])()(AlbumToolbar));

/***/ }),

/***/ "VSpF":
/*!*********************************************!*\
  !*** ./src/sharing/components/colorhash.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ColorHash = () => {
  const schemes = {
    base: ['304FFE', '2979FF', '00B0FF', '00DCE9', '00D5B8', '00C853', 'E70505', 'FF5700', 'FF7900', 'FFA300', 'B3C51D', '64DD17', 'FF2828', 'F819AA', 'AA00FF', '6200EA', '7190AB', '51658D']
  };

  const hashCode = str => {
    var h, i, len, max;
    h = 0;
    max = Math.pow(2, 32);

    for (i = 0, len = str.length; i < len; i++) {
      h = (h * 31 + str.charCodeAt(i)) % max;
    }

    return h;
  };

  const getColor = (str, name) => {
    var scheme, hash;
    scheme = schemes[name] || schemes.base;
    hash = hashCode(str);
    return '#' + scheme[hash % scheme.length];
  };

  return {
    getHash: hashCode,
    getColor: getColor
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ColorHash);

/***/ }),

/***/ "VZRP":
/*!***************************************!*\
  !*** ./src/photos/styles/topbar.styl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pho-content-title":"pho-content-title--3Yt9z","error":"error--2qbV5","pho-content-header":"pho-content-header--1M4IS","--hide-bar":"_--hide-bar--lrytb","pho-content-album-previous":"pho-content-album-previous--3BqBh","spin":"spin--1ZeSG","shake":"shake--3WZrZ"};

/***/ }),

/***/ "WCSr":
/*!************************************!*\
  !*** ./src/photos/locales/sk.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "WK4D":
/*!************************************!*\
  !*** ./src/photos/locales/pt.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "Wu9Y":
/*!***************************************************!*\
  !*** ./src/drive/assets/icons/icon-trash-big.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-trash-big_48355d429631705f7ab5001494a0529c",
  "use": "icon-trash-big_48355d429631705f7ab5001494a0529c-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icon-trash-big_48355d429631705f7ab5001494a0529c\">\n  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(2)\">\n    <path fill=\"#D1D5DB\" d=\"M2,8 L26,8 L26,28.009947 C26,30.2135924 24.2157067,32 22.009947,32 L5.99005301,32 C3.78640758,32 2,30.2157067 2,28.009947 L2,8 Z\" />\n    <path fill=\"#A3ACB8\" d=\"M7,2 L1.99124431,2 C0.899897516,2 0,2.8954305 0,4 L0,6 L28,6 L28,4 C28,2.88772964 27.1084896,2 26.0087557,2 L21,2 L20.4438648,0.887729645 C20.1990795,0.398159027 19.5511774,0 18.9975267,0 L9.00247329,0 C8.45576096,0 7.80127495,0.3974501 7.55613518,0.887729645 L7,2 Z\" />\n  </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "X/0B":
/*!****************************************************!*\
  !*** ./src/components/Button/CozyHomeLinkIcon.jsx ***!
  \****************************************************/
/*! exports provided: CozyHomeLinkIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CozyHomeLinkIcon", function() { return CozyHomeLinkIcon; });
var CozyHomeLinkIcon = 'cloud';
/* harmony default export */ __webpack_exports__["default"] = (CozyHomeLinkIcon);

/***/ }),

/***/ "XA+M":
/*!*******************************************!*\
  !*** ./src/drive/targets/manifest.webapp ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"name":"Drive","name_prefix":"Cozy","slug":"drive","version":"1.18.16","type":"webapp","licence":"AGPL-3.0","icon":"public/app-icon.svg","categories":["cozy"],"source":"https://github.com/cozy/cozy-drive","editor":"Cozy","developer":{"name":"Cozy Cloud","url":"https://cozy.io"},"locales":{"en":{"short_description":"Cozy Drive helps you to save, sync and secure your files on your Cozy.","long_description":"With Cozy Drive, you can easily:\n- Store your important files and keep them secure in your Cozy\n- Access to all your documents online & offline, from your desktop, and on your smartphone or tablet\n- Share links to files ans folders with who you like;\n- Automatically retrieve bills, payrolls, tax notices and other data from your main online services (internet, energy, retail, mobile, energy, travel...)\n- Upload files to your Cozy from your Android","screenshots":["screenshots/en/screenshot01.png","screenshots/en/screenshot02.png","screenshots/en/screenshot03.png","screenshots/en/screenshot04.png"]},"fr":{"short_description":"Cozy Drive est l’application de sauvegarde, de synchronisation et de sécurisation de tous vos fichiers sur Cozy.","long_description":"Avec Cozy Drive vous pourrez :\n- Sauvegarder et synchroniser gratuitement tous vos documents importants (carte d’identité, photos de vacances, avis d’imposition, fiches de salaires…);\n- Accéder à vos documents n’importe quand, n’importe ou même en mode avion depuis votre bureau, votre smartphone ou tablette;\n- Partager vos fichiers et dossiers par lien avec qui vous le souhaitez;\n- Récupérer automatiquement vos documents administratifs de vos principaux fournisseurs de service (opérateur mobile, fournisseur d’énergie, assureur, internet, santé…);\n- Rester synchronisé·e lors de vos voyages et déplacements professionnels avec nos applications mobiles.","screenshots":["screenshots/fr/screenshot01.png","screenshots/fr/screenshot02.png","screenshots/fr/screenshot03.png","screenshots/fr/screenshot04.png"]}},"screenshots":["screenshots/fr/screenshot01.png","screenshots/fr/screenshot02.png","screenshots/fr/screenshot03.png","screenshots/fr/screenshot04.png"],"langs":["en","fr"],"platforms":[{"type":"ios","url":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8"},{"type":"android","url":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile"}],"routes":{"/":{"folder":"/","index":"index.html","public":false},"/intents":{"folder":"/intents","index":"index.html","public":false},"/public":{"folder":"/public","index":"index.html","public":true},"/preview":{"folder":"/public","index":"index.html","public":true}},"intents":[{"action":"OPEN","type":["io.cozy.files"],"href":"/intents"},{"action":"PICK","type":["io.cozy.files"],"href":"/intents"},{"action":"GET_URL","type":["io.cozy.files"],"href":"/intents"},{"action":"OPEN","type":["io.cozy.suggestions"],"href":"/intents"}],"permissions":{"files":{"description":"Required to access the files","type":"io.cozy.files","verbs":["ALL"]},"apps":{"description":"Required by the cozy-bar to display the icons of the apps","type":"io.cozy.apps","verbs":["GET"]},"albums":{"description":"Required to manage photos albums","type":"io.cozy.photos.albums","verbs":["PUT"]},"contacts":{"type":"io.cozy.contacts","verbs":["GET","POST"]},"groups":{"type":"io.cozy.contacts.groups","verbs":["GET"]},"settings":{"description":"Required by the cozy-bar to display Claudy and know which applications are coming soon","type":"io.cozy.settings","verbs":["GET"]},"oauth":{"description":"Required to display the cozy-desktop banner","type":"io.cozy.oauth.clients","verbs":["GET"]},"reporting":{"description":"Allow to report unexpected errors to the support team","type":"cc.cozycloud.sentry","verbs":["POST"]},"mail":{"description":"Send feedback emails to the support team","type":"io.cozy.jobs","verbs":["POST"],"selector":"worker","values":["sendmail"]}}}

/***/ }),

/***/ "Yo2A":
/*!*********************************************!*\
  !*** ./src/lib/react-cozy-helpers/index.js ***!
  \*********************************************/
/*! exports provided: default, ModalManager, showModal, getQueryParameter, BarContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "fvjX");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalManager */ "2Ekz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalManager", function() { return _ModalManager__WEBPACK_IMPORTED_MODULE_1__["ModalManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _ModalManager__WEBPACK_IMPORTED_MODULE_1__["showModal"]; });

/* harmony import */ var _QueryParameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryParameter */ "ciCs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryParameter", function() { return _QueryParameter__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BarContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarContextProvider */ "0Apg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarContextProvider", function() { return _BarContextProvider__WEBPACK_IMPORTED_MODULE_3__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  modal: _ModalManager__WEBPACK_IMPORTED_MODULE_1__["default"]
}));




/***/ }),

/***/ "ZFPb":
/*!*******************************************!*\
  !*** ./src/photos/components/Loading.jsx ***!
  \*******************************************/
/*! exports provided: Loading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cozy-ui/react/palette */ "7jrE");
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_loading_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/loading.styl */ "5ZYL");
/* harmony import */ var _styles_loading_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_loading_styl__WEBPACK_IMPORTED_MODULE_5__);






var Loading = function Loading(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'xxlarge' : _ref$size,
      loadingType = _ref.loadingType,
      _ref$noMargin = _ref.noMargin,
      noMargin = _ref$noMargin === void 0 ? false : _ref$noMargin,
      _ref$middle = _ref.middle,
      middle = _ref$middle === void 0 ? true : _ref$middle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-test-id": "loading",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_loading_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-loading'])
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    size: size,
    loadingType: loadingType,
    color: cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_4___default.a.dodgerBlue,
    noMargin: noMargin,
    middle: middle
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(Loading));

/***/ }),

/***/ "a4ea":
/*!***************************************************!*\
  !*** ./src/photos/assets/icons/icon-main-app.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-main-app_5a0af3714e77328d0c04b0d83712f645",
  "use": "icon-main-app_5a0af3714e77328d0c04b0d83712f645-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icon-main-app_5a0af3714e77328d0c04b0d83712f645\">\n  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0 3)\">\n    <rect width=\"32\" height=\"26\" fill=\"#8EE39B\" rx=\"2\" />\n    <path fill=\"#1EC737\" d=\"M0,20 L6.29028051,13.7097195 C6.68224776,13.3177522 7.31387329,13.3138733 7.70591205,13.7059121 L11,17 L19.2937851,8.7062149 C19.6838168,8.31618318 20.320971,8.32097101 20.7058543,8.70585426 L32,20 L32,24.0020869 C32,25.1055038 31.1107383,26 29.9982567,26 L2.00174332,26 C0.89621101,26 0,25.1017394 0,24.0020869 L0,20 Z\" />\n    <circle cx=\"8\" cy=\"7\" r=\"3\" fill=\"#FFFFFF\" />\n    <path stroke=\"#8EE39B\" d=\"M11,16 L5.5,21.5 L11,16 Z\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "avvP":
/*!************************************!*\
  !*** ./src/photos/locales/ko.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "b7K/":
/*!****************************************************************!*\
  !*** ./src/photos/ducks/timeline/components/DeleteConfirm.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../styles/confirms.styl */ "2sk9");
/* harmony import */ var _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react/Modal */ "cLsY");





var DeleteConfirm = function DeleteConfirm(_ref) {
  var t = _ref.t,
      count = _ref.count,
      confirm = _ref.confirm,
      abort = _ref.abort,
      related = _ref.related;
  var types = ['trash', 'restore', 'shared'];

  if (related === true) {
    types.push('related');
  }

  var deleteConfirmationTexts = types.map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default.a['fil-confirm-text'], _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default.a["icon-".concat(type)]),
      key: "key_delet_".concat(type)
    }, t("timeline.DeleteConfirm.".concat(type), count));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t('timeline.DeleteConfirm.title', count),
    description: deleteConfirmationTexts,
    secondaryType: "secondary",
    secondaryText: t('timeline.DeleteConfirm.cancel'),
    secondaryAction: abort,
    primaryType: "danger",
    primaryText: t('timeline.DeleteConfirm.delete'),
    primaryAction: confirm
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteConfirm);

/***/ }),

/***/ "c0d6":
/*!**************************************!*\
  !*** ./src/photos/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ducks_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ducks/upload */ "BDb7");
/* harmony import */ var react_cozy_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cozy-helpers */ "Yo2A");


/* harmony default export */ __webpack_exports__["default"] = ({
  upload: _ducks_upload__WEBPACK_IMPORTED_MODULE_0__["default"],
  ui: react_cozy_helpers__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "cQrJ":
/*!*************************************************!*\
  !*** ./src/components/Menu/Menuawaremobile.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cozy_ui_react___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cozy-ui/react/ */ "H+Xc");
/* harmony import */ var _sharing_components_Recipient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sharing/components/Recipient */ "MzcY");
/* harmony import */ var drive_styles_actionmenu_styl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! drive/styles/actionmenu.styl */ "32XB");
/* harmony import */ var drive_styles_actionmenu_styl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(drive_styles_actionmenu_styl__WEBPACK_IMPORTED_MODULE_10__);












var MenuAwareMobile =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MenuAwareMobile, _Component);

  function MenuAwareMobile() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MenuAwareMobile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MenuAwareMobile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      active: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toggle", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MenuAwareMobile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isMobile = _this$props.breakpoints.isMobile,
          children = _this$props.children,
          text = _this$props.text,
          buttonClassName = _this$props.buttonClassName,
          name = _this$props.name;

      if (isMobile) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_react___WEBPACK_IMPORTED_MODULE_8__["MenuButton"], {
          onClick: this.toggle,
          text: text,
          buttonClassName: buttonClassName
        }), this.state.active && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_react___WEBPACK_IMPORTED_MODULE_8__["ActionMenu"], {
          onClose: function onClose() {
            return _this2.toggle();
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_react___WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
          className: drive_styles_actionmenu_styl__WEBPACK_IMPORTED_MODULE_10___default.a['fil-mobileactionmenu']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_sharing_components_Recipient__WEBPACK_IMPORTED_MODULE_9__["UserAvatar"], {
          name: name,
          size: 'small'
        })), children));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_react___WEBPACK_IMPORTED_MODULE_8__["Menu"], this.props);
    }
  }]);

  return MenuAwareMobile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react___WEBPACK_IMPORTED_MODULE_8__["withBreakpoints"])()(MenuAwareMobile));

/***/ }),

/***/ "ciCs":
/*!******************************************************!*\
  !*** ./src/lib/react-cozy-helpers/QueryParameter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const arrToObj = (obj = {}, [key, val = true]) => {
  obj[key] = val;
  return obj;
};

const getQueryParameter = () => window.location.search.substring(1).split('&').map(varval => varval.split('=')).reduce(arrToObj, {});

/* harmony default export */ __webpack_exports__["default"] = (getQueryParameter);

/***/ }),

/***/ "cwrA":
/*!************************************************!*\
  !*** ./src/photos/components/PhotosViewer.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cozy-ui/transpiled/react */ "H+Xc");









var getParentPath = function getParentPath(router) {
  var url = router.location.pathname;
  return url.substring(0, url.lastIndexOf('/'));
};

var PhotosViewer =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PhotosViewer, _Component);

  function PhotosViewer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PhotosViewer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PhotosViewer).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotosViewer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          photos = _this$props.photos,
          params = _this$props.params,
          router = _this$props.router;
      var currentIndex = photos.findIndex(function (p) {
        return p.id === params.photoId;
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_7__["Overlay"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_7__["Viewer"], {
        files: photos,
        currentIndex: currentIndex,
        onChangeRequest: function onChangeRequest(nextPhoto) {
          return router.push({
            pathname: "".concat(getParentPath(router), "/").concat(nextPhoto.id),
            query: router.location.query
          });
        },
        onCloseRequest: function onCloseRequest() {
          return router.push({
            pathname: getParentPath(router),
            query: router.location.query
          });
        }
      }));
    }
  }]);

  return PhotosViewer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(PhotosViewer));

/***/ }),

/***/ "eKCf":
/*!******************************************!*\
  !*** ./src/photos/components/Topbar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_topbar_styl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/topbar.styl */ "VZRP");
/* harmony import */ var _styles_topbar_styl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_topbar_styl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/flow */ "56YH");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_13__);








/* global cozy  */







var _cozy$bar = cozy.bar,
    BarCenter = _cozy$bar.BarCenter,
    BarRight = _cozy$bar.BarRight,
    BarLeft = _cozy$bar.BarLeft;
var KEYCODE_ENTER = 13;
var KEYCODE_ESC = 27;

var EditableAlbumName =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(EditableAlbumName, _Component);

  function EditableAlbumName(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditableAlbumName);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditableAlbumName).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleBlur", function (e) {
      if (!_this.ignoreBlurEvent && _this.props.onEdit) _this.props.onEdit(e.target.value.trim() !== '' ? e.target.value : _this.props.albumName);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleKeyDown", function (e) {
      if (e.keyCode === KEYCODE_ENTER && _this.props.onEdit) {
        _this.ignoreBlurEvent = true;

        _this.props.onEdit(e.target.value);
      } else if (e.keyCode === KEYCODE_ESC && _this.props.onEdit) {
        _this.ignoreBlurEvent = true;

        _this.props.onEdit(_this.props.albumName);
      }
    });

    _this.ignoreBlurEvent = false; // we'll ignore blur events if they are triggered by pressing enter or escape, to prevent `onEdit` from firing twice

    _this.inputElement = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditableAlbumName, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.inputElement !== null) {
        this.inputElement.focus();
        this.inputElement.select();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var albumName = this.props.albumName;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        defaultValue: albumName,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur,
        ref: function ref(elem) {
          _this2.inputElement = elem;
        }
      });
    }
  }]);

  return EditableAlbumName;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

EditableAlbumName.propTypes = {
  albumName: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  onEdit: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired
};

var TopbarTitle = function TopbarTitle(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
    "data-test-id": "pho-content-title",
    className: _styles_topbar_styl__WEBPACK_IMPORTED_MODULE_7___default.a['pho-content-title']
  }, children);
};

var BackToAlbumsButton = function BackToAlbumsButton(_ref2) {
  var onClick = _ref2.onClick;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    role: "button",
    "data-test-id": "pho-content-album-previous",
    className: _styles_topbar_styl__WEBPACK_IMPORTED_MODULE_7___default.a['pho-content-album-previous'],
    onClick: onClick
  });
};

BackToAlbumsButton.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired
};

var Topbar =
/*#__PURE__*/
function (_Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Topbar, _Component2);

  function Topbar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Topbar);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Topbar).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Topbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url = this.props.router.location.pathname;
      this.parentUrl = url.substring(0, url.lastIndexOf('/'));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props = this.props,
          t = _this$props.t,
          viewName = _this$props.viewName,
          _this$props$albumName = _this$props.albumName,
          albumName = _this$props$albumName === void 0 ? '' : _this$props$albumName,
          onEdit = _this$props.onEdit,
          _this$props$editing = _this$props.editing,
          editing = _this$props$editing === void 0 ? false : _this$props$editing;
      var isAlbumContent = viewName === 'albumContent';
      if (!isAlbumContent) return t("Nav.".concat(viewName));else if (editing) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(EditableAlbumName, {
        albumName: albumName,
        onEdit: onEdit
      });else return albumName;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          viewName = _this$props2.viewName,
          isMobile = _this$props2.breakpoints.isMobile,
          router = _this$props2.router;
      var isAlbumContent = viewName === 'albumContent';
      var title = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TopbarTitle, null, this.renderTitle());
      var responsiveTitle = isMobile ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BarCenter, null, title) : title;
      var responsiveMenu = isMobile ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BarRight, null, children) : children;
      var backButton = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BackToAlbumsButton, {
        onClick: function onClick() {
          return router.push(_this3.parentUrl);
        }
      });
      var responsiveBackButton = isMobile ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BarLeft, null, backButton) : backButton;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _styles_topbar_styl__WEBPACK_IMPORTED_MODULE_7___default.a['pho-content-header']
      }, isAlbumContent && responsiveBackButton, responsiveTitle, responsiveMenu);
    }
  }]);

  return Topbar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Topbar.propTypes = {
  viewName: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired,
  albumName: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  t: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  editing: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
  onEdit: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  breakpoints: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.node
};
Topbar.defaultProps = {
  editing: false,
  onEdit: function onEdit() {}
};
/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_13___default()(react_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"], Object(cozy_ui_react__WEBPACK_IMPORTED_MODULE_10__["withBreakpoints"])(), Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_9__["translate"])())(Topbar));

/***/ }),

/***/ "f/Nf":
/*!**********************************************!*\
  !*** ./src/components/pushClient/Banner.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pushClient_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pushClient.styl */ "AzIT");
/* harmony import */ var _pushClient_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pushClient_styl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! . */ "IFEr");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var drive_config_config_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! drive/config/config.json */ "FKqX");
var drive_config_config_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! drive/config/config.json */ "FKqX", 1);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_15__);










/* global localStorage */








var BannerClient =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(BannerClient, _Component);

  function BannerClient(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BannerClient);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(BannerClient).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      mustShow: false
    });

    _this.willUnmount = false;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BannerClient, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var seen, mustSee;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.willUnmount = false;
                _context.next = 3;
                return localforage__WEBPACK_IMPORTED_MODULE_15___default.a.getItem(___WEBPACK_IMPORTED_MODULE_12__["DESKTOP_BANNER"]);

              case 3:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 6;
                  break;
                }

                _context.t0 = false;

              case 6:
                seen = _context.t0;

                if (seen) {
                  _context.next = 12;
                  break;
                }

                _context.next = 10;
                return Object(___WEBPACK_IMPORTED_MODULE_12__["isClientAlreadyInstalled"])();

              case 10:
                mustSee = !_context.sent;

                if (mustSee && !this.willUnmount) {
                  this.setState({
                    mustShow: true
                  });
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.willUnmount = true;
    }
  }, {
    key: "markAsSeen",
    value: function markAsSeen(element) {
      localforage__WEBPACK_IMPORTED_MODULE_15___default.a.setItem(___WEBPACK_IMPORTED_MODULE_12__["DESKTOP_BANNER"], true);
      this.setState({
        mustShow: false
      });
      Object(___WEBPACK_IMPORTED_MODULE_12__["track"])(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (drive_config_config_json__WEBPACK_IMPORTED_MODULE_14__.promoteDesktop.isActivated !== true || !this.state.mustShow) return null;
      var t = this.props.t;
      var mobileLink = Object(___WEBPACK_IMPORTED_MODULE_12__["isIOS"])() ? 'Nav.link-client-ios' : Object(___WEBPACK_IMPORTED_MODULE_12__["isAndroid"])() ? 'Nav.link-client-android' : 'Nav.link-client';
      var desktopLink = Object(___WEBPACK_IMPORTED_MODULE_12__["isLinux"])() ? 'Nav.link-client' : 'Nav.link-client-desktop';
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: _pushClient_styl__WEBPACK_IMPORTED_MODULE_9___default.a['coz-banner-client']
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__["ButtonLink"], {
        href: t(mobileLink),
        target: "_blank",
        className: _pushClient_styl__WEBPACK_IMPORTED_MODULE_9___default.a['coz-btn-clientMobile'],
        onClick: function onClick() {
          _this2.markAsSeen('banner');
        },
        label: t('Nav.btn-client-mobile')
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: _pushClient_styl__WEBPACK_IMPORTED_MODULE_9___default.a['coz-banner-text']
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("figure", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
        icon: "cozy",
        width: "44",
        height: "44"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, t('Nav.banner-txt-client')), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__["ButtonLink"], {
        href: t(desktopLink),
        target: "_blank",
        theme: "alpha",
        onClick: function onClick() {
          _this2.markAsSeen('banner');
        },
        label: t('Nav.banner-btn-client')
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        theme: "close",
        extension: "narrow",
        className: _pushClient_styl__WEBPACK_IMPORTED_MODULE_9___default.a['close-banner'],
        onClick: function onClick() {
          _this2.markAsSeen('close');
        },
        icon: react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_13__["Icon"], {
          icon: "cross",
          width: "24",
          height: "24"
        }),
        iconOnly: true,
        label: t('SelectionBar.close')
      }));
    }
  }]);

  return BannerClient;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["translate"])()(BannerClient));

/***/ }),

/***/ "fWVu":
/*!*************************************************!*\
  !*** ./src/sharing/components/autosuggest.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container--3-RCo","suggestionsContainer":"suggestionsContainer--3lRrx","suggestionsContainerOpen":"suggestionsContainerOpen--3Y523","input":"input--2DlOl","suggestionsList":"suggestionsList--35tTI","suggestion":"suggestion--iMlMu","suggestionHighlighted":"suggestionHighlighted--3v0My","recipientsContainer":"recipientsContainer--1GWdl","recipientChip":"recipientChip--1HV-h","removeRecipient":"removeRecipient--2dtVM"};

/***/ }),

/***/ "fyrk":
/*!*****************************************************!*\
  !*** ./src/sharing/components/ShareAutosuggest.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareAutocomplete; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-autosuggest */ "1h/R");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! cozy-ui/react/palette */ "7jrE");
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var sharing_components_autosuggest_styl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sharing/components/autosuggest.styl */ "fWVu");
/* harmony import */ var sharing_components_autosuggest_styl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sharing_components_autosuggest_styl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var sharing_assets_icons_icon_cross_bold_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sharing/assets/icons/icon-cross-bold.svg */ "SdrL");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! models */ "OjRq");
/* harmony import */ var sharing_suggestionMatchers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sharing/suggestionMatchers */ "PFWH");
/* harmony import */ var sharing_components_ContactSuggestion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sharing/components/ContactSuggestion */ "rPfp");



















var ShareAutocomplete =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(ShareAutocomplete, _Component);

  function ShareAutocomplete() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ShareAutocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ShareAutocomplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      inputValue: '',
      suggestions: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onSuggestionsFetchRequested", function (_ref) {
      var value = _ref.value;

      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
          suggestions: _this.computeSuggestions(value)
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onSuggestionsClearRequested", function () {
      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
          suggestions: []
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onChange", function (event, _ref2) {
      var newValue = _ref2.newValue,
          method = _ref2.method;

      if (typeof newValue !== 'object') {
        _this.setState(function (state) {
          return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
            inputValue: newValue
          });
        });
      } else if (method === 'click' || method === 'enter') {
        // A suggestion has been picked
        _this.onPick(newValue);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onKeyPress", function (event) {
      // The user wants to add an unknown email
      if ((event.key === 'Enter' || event.keyCode === 13) && _this.state.inputValue !== '' || (event.key === 'Space' || event.keyCode === 32) && /^.+@.+/.test(_this.state.inputValue)) {
        _this.onPick({
          email: _this.state.inputValue
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onFocus", function () {
      _this.props.onFocus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onBlur", function (event, _ref3) {
      var highlightedSuggestion = _ref3.highlightedSuggestion;

      if (highlightedSuggestion) {
        _this.props.onPick(highlightedSuggestion);

        _this.setState(function (state) {
          return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
            inputValue: ''
          });
        });
      } else if (_this.state.inputValue !== '' && _this.state.inputValue.match(/\S+@\S+/)) {
        _this.props.onPick({
          email: _this.state.inputValue
        });

        _this.setState(function (state) {
          return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
            inputValue: ''
          });
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onPick", function (value) {
      _this.props.onPick(value);

      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
          inputValue: ''
        });
      });

      setTimeout(function () {
        return _this.input.focus();
      }, 1); // don't ask...
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "onRemove", function (value) {
      _this.props.onRemove(value);

      setTimeout(function () {
        return _this.input.focus();
      }, 1);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ShareAutocomplete, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.contactsAndGroups.length !== prevProps.contactsAndGroups.length) {
        this.onSuggestionsFetchRequested({
          value: this.state.inputValue
        });
      }
    }
  }, {
    key: "computeSuggestions",
    value: function computeSuggestions(value) {
      var inputValue = value.trim().toLowerCase();
      return inputValue.length === 0 ? [] : this.props.contactsAndGroups.filter(function (contactOrGroup) {
        return Object(sharing_suggestionMatchers__WEBPACK_IMPORTED_MODULE_16__["groupNameMatch"])(inputValue, contactOrGroup) || Object(sharing_suggestionMatchers__WEBPACK_IMPORTED_MODULE_16__["emailMatch"])(inputValue, contactOrGroup) || Object(sharing_suggestionMatchers__WEBPACK_IMPORTED_MODULE_16__["cozyUrlMatch"])(inputValue, contactOrGroup);
      });
    }
  }, {
    key: "renderInput",
    value: function renderInput(inputProps) {
      var _this2 = this;

      var _this$props = this.props,
          loading = _this$props.loading,
          recipients = _this$props.recipients;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: sharing_components_autosuggest_styl__WEBPACK_IMPORTED_MODULE_13___default.a['recipientsContainer']
      }, recipients.map(function (recipient, idx) {
        var value = models__WEBPACK_IMPORTED_MODULE_15__["Contact"].getDisplayName(recipient);
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: sharing_components_autosuggest_styl__WEBPACK_IMPORTED_MODULE_13___default.a['recipientChip'],
          key: "key_recipient_".concat(idx)
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, value), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
          className: sharing_components_autosuggest_styl__WEBPACK_IMPORTED_MODULE_13___default.a['removeRecipient'],
          onClick: function onClick() {
            return _this2.onRemove(recipient);
          }
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
          icon: sharing_assets_icons_icon_cross_bold_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
          width: "16",
          height: "16"
        })));
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, inputProps, {
        onKeyPress: this.onKeyPress
      })), loading && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
        color: cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_12___default.a.dodgerBlue,
        className: "u-flex u-flex-items-center"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          suggestions = _this$state.suggestions;
      var _this$props2 = this.props,
          contactsAndGroups = _this$props2.contactsAndGroups,
          placeholder = _this$props2.placeholder;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_autosuggest__WEBPACK_IMPORTED_MODULE_10___default.a, {
        ref: function ref(self) {
          _this3.input = self ? self.input : null;
        },
        theme: sharing_components_autosuggest_styl__WEBPACK_IMPORTED_MODULE_13___default.a,
        suggestions: suggestions.slice(0, 20),
        getSuggestionValue: function getSuggestionValue(contact) {
          return contact;
        },
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        renderSuggestion: function renderSuggestion(contactOrGroup) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(sharing_components_ContactSuggestion__WEBPACK_IMPORTED_MODULE_17__["default"], {
            contacts: contactsAndGroups.filter(function (item) {
              return item._type === models__WEBPACK_IMPORTED_MODULE_15__["Contact"].doctype;
            }),
            contactOrGroup: contactOrGroup
          });
        },
        renderInputComponent: function renderInputComponent(props) {
          return _this3.renderInput(props);
        },
        highlightFirstSuggestion: true,
        inputProps: {
          onFocus: this.onFocus,
          onChange: this.onChange,
          onBlur: this.onBlur,
          value: inputValue,
          type: 'email',
          placeholder: placeholder
        }
      });
    }
  }]);

  return ShareAutocomplete;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),

/***/ "gF5+":
/*!***************************************!*\
  !*** ./src/photos/locales/nl_NL.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Foto's","albums":"Albums","shared":"Door mij gedeeld","trash":"Prullenbak","btn-client":"Download Cozy Drive voor je computer","btn-client-web":"Download Cozy","btn-client-mobile":"Download Cozy Drive voor je telefoon!","banner-txt-client":"Download Cozy Drive voor je computer en synchroniseer je bestanden op een veilige manier om ze overal beschikbaar te maken.","banner-btn-client":"Downloaden","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"Je hebt nog geen foto's.","timeline_photos_text":"Klik op de knop \"Uploaden\" om foto's toe te voegen.","albums_title":"Je hebt nog geen albums.","albums_text":"Klik op de knop \"Nieuw album\" om je eerste album te creëren.","album_photos_title":"Dit album bevat nog geen foto's.","album_photos_text":"Klik op de knop \"Foto's toevoegen aan album\" om dit album op te vullen.","shared_album_photos_title":"Dit album bevat nog geen foto's.","shared_album_photos_text":"Kom later terug"},"Error":{"albums_title":"Er is een fout opgetreden tijdens ophalen van de albumlijst. Probeer het later opnieuw.","album_photos_title":"Er is een fout opgetreden tijdens ophalen van de foto's in het album. Probeer het later opnieuw.","timeline_photos_title":"Er is een fout opgetreden tijdens ophalen van de fotolijst. Probeer het later opnieuw.","public_album_error_title":"Er is een fout opgetreden tijdens ophalen van de fotolijst. Probeer het later opnieuw.","public_album_unshared_title":"Sorry, deze link niet langer beschikbaar.","public_album_unshared_text":"Eén verloren, tien gevonden... of neem contact op met de eigenaar om hulp te krijgen. Dit bestand hoeft niet verdwenen te zijn.","refresh":"Nu herladen","generic":"Er is een fout opgetreden; probeer het opnieuw.","album_rename_abort":"De albumnaam mag niet worden leeggelaten."},"Toolbar":{"photo_upload":"Uploaden","album_new":"Nieuw album","album_delete":"Verwijderen","album_quit":"Gedeeld album verwijderen","album_download":"Downloaden","more":"Meer","menu":{"select_items":"Foto's selecteren","photo_upload":"Foto's uploaden","rename_album":"Albumnaam wijzigen","album_delete":"Album verwijderen","album_quit":"Gedeeld album verwijderen","download_album":"Album downloaden","add_photos":"Foto's toevoegen aan album"}},"loading":{"photos_indexing":"Je foto's worden momenteel geïndexeerd. Even geduld...","albums_indexing":"Je albums worden momenteel geïndexeerd. Even geduld...","photos_fetching":"Bezig met laden...","albums_fetching":"Bezig met laden...","photos_upload":"Bezig met uploaden..."},"Board":{"load_more":"Meer foto's laden","select_all":"Alles selecteren","unselect_all":"Alles de-selecteren"},"Alerter":{"photos":{"fetching_error":"Er is een fout opgetreden tijdens het ophalen van de foto's.","already_added_photo":"Deze foto is al aanwezig in dit album."}},"SelectionBar":{"selected_count":"item geselecteerd |||| items geselecteerd","delete":"Verwijderen","album-add":"Toevoegen aan album","album-remove":"Verwijderen uit album","download":"Downloaden","close":"Sluiten"},"Share":{"status":{"pending":"In wachtrij","accepted":"Geaccepteerd","refused":"Geweigerd","error":"Fout","unregistered":"Fout","mail-not-sent":"Fout","revoked":"Fout"},"type":{"one-way":"Bekijken toegestaan (binnenkort)","two-way":"Wijzigen toegestaan"},"create-cozy":"Mijn cozy creëren"},"Albums":{"album_item_description":"%{smart_count} foto |||| %{smart_count} foto's","album_item_shared_ro":"Gedeeld (alleen-lezen)","album_item_shared_rw":"Gedeeld (lezen/schrijven)","load_more":"Meer albums laden","add_photos":{"title":"Toevoegen aan album","success":"Het album '%{name}' is bijgewerkt met %{smart_count} foto. |||| Het album '%{name}' is bijgewerkt met %{smart_count} foto's.","error":{"generic":"Er is een fout opgetreden tijdens het bijwerken van het album. Probeer het opnieuw.","reference":"Sommige foto's zijn niet toegevoegd aan het album. Controleer en probeer het opnieuw.","response":{"Forbidden":"De app heeft geen machtiging verkregen om albums bij te werken."}}},"share":{"cta":"Delen","title":"Delen met anderen","details":{"title":"Deelinformatie","createdAt":"Op %{date}","ro":"Alleen-lezen","rw":"Lezen/schrijven"},"sharedByMe":"Gedeeld","sharedWithMe":"Gedeeld met mij","shareByLink":{"subtitle":"Via openbare link","desc":"Iedereen die de link heeft kan je foto's bekijken en downloaden.","fetchFailed":"Oeps! Het lijkt erop dat je een beperkte verbinding hebt. Probeer het later opnieuw.","creating":"Bezig met creëren van link...","copy":"Link kopiëren","copied":"De link is gekopieerd naar het klembord","failed":"Kan niet kopiëren naar klembord"},"shareByEmail":{"title":"Via e-mail","subtitle":"Via e-mail","email":"e-mailadres","emailPlaceholder":"Voer het e-mailadres of de naam van de ontvanger in","send":"Versturen","genericSuccess":"Je hebt een uitnodiging verstuurd naar %{count} contactpersonen.","success":"Je hebt een uitnodiging verstuurd naar %{email}.","comingsoon":"Binnenkort kun je documenten en foto's met één klik delen met je familie, vrienden en zelfs je collega's. Geen zorgen: we laten je weten wanneer de functie klaar is voor gebruik!"},"unshare":{"title":"Verwijderen uit album","success":"Je hebt dit gedeelde album verwijderd uit %{email}."},"sharingLink":{"title":"Link om te delen","copy":"Kopiëren","copied":"Gekopieerd"},"whoHasAccess":{"title":"Wie heeft er toegang"},"protectedShare":{"title":"Binnenkort!","desc":"Deel van alles met je familie en vrienden via e-mail!"},"close":"Sluiten","gettingLink":"Bezig met ophalen van link...","error":{"generic":"Er is een fout opgetreden tijdens het creëren van de te delen albumlink. Probeer het opnieuw.","revoke":"Er is een fout opgetreden tijdens het intrekken van de deelbare albumlink. Probeer het opnieuw."}},"create":{"panel_form":{"label":"Geef je nieuwe album een naam","placeholder":"Naamloos album","cancel":"Annuleren","submit":"Nieuw album creëren","update":"Foto's toevoegen aan album"},"inline_form":{"placeholder":"Nieuwe albumnaam","create_label":"Nieuw album creëren","create_button":"Creëren"},"success":"Het album, %{name}, is gecreëerd met %{smart_count} foto. |||| Het album, %{name}, is gecreëerd met %{smart_count} foto's.","error":{"generic":"Er is een fout opgetreden tijdens het creëren van het album. Probeer het opnieuw.","already_exists":"Er bestaat al een album met de naam '%{name}'. Kies een andere naam.","name_missing":"Je moet je album een naam geven."}},"fetchAlbums":{"error":{"index_missing":"Er moet een albumindex worden opgegeven om albums op te kunnen halen."}},"remove_photos":{"success":"De foto is verwijderd uit het album '%{album_name}","error":{"generic":"Er is een fout opgetreden tijdens het verwijderen van de foto. Probeer het opnieuw."}},"remove_album":{"success":"Het album '%{name}' is verwijderd.","error":{"generic":"Er is een fout opgetreden tijdens het verwijderen van het album. Probeer het opnieuw."}},"quit_album":{"success":"Het album '%{name}' is verwijderd.","error":{"generic":"Er is een fout opgetreden bij het verlaten van het album. Probeer het opnieuw."}}},"Viewer":{"close":"Sluiten","noviewer":{"title":"De fotoweergave heeft nog geen ondersteuning voor dit bestandstype.","download":"Dit bestand downloaden","openWith":"Openen met..."},"actions":{"download":"Downloaden"},"loading":{"error":"Het bestand kan niet worden geladen. Weet je zeker dat je verbonden bent met het internet?","retry":"Opnieuw proberen"}},"destroyconfirmation":{"title":"Wil je dit album permanent verwijderen?","cancel":"Annuleren","delete":"Permanent verwijderen","forbidden":"Je zult geen toegang meer hebben tot het album of de selectie.","eye":"Je foto's worden niet verwijderd.","link":"Als je dit album gedeeld hebt, dan hebben mensen geen toegang meer."},"quitconfirmation":{"title":"Wil je dit album verlaten en permanent verwijderen?","cancel":"Annuleren","quit":"Verlaten en verwijderen","forbidden":"Je zult geen toegang meer hebben tot het album of de selectie."},"timeline":{"DeleteConfirm":{"title":"Wil je dit element verwijderen? |||| Wil je deze elementen verwijderen?","trash":"Het zal worden verplaatst naar de prullenbak. |||| Ze zullen worden verplaatst naar de prullenbak.","restore":"Je kunt het op elk gewenst moment terugzetten. |||| Je kunt ze op elk gewenst moment terugzetten.","shared":"Als je het gedeeld hebt, dan hebben mensen geen toegang meer. |||| Als je ze gedeeld hebt, dan hebben mensen geen toegang meer.","related":"Sommige foto's binnen de selectie zijn gelinkt aan een album. Ze zullen worden verwijderd als je doorgaat met het verplaatsen naar de prullenbak.","cancel":"Annuleren","delete":"Verwijderen"}},"UploadQueue":{"path_photos":"Foto's","path_upload":"Geüpload via Cozy Photos","header":"Bezig met uploaden van %{smart_count} foto naar Cozy Photos |||| Bezig met uploaden van %{smart_count} foto's naar Cozy Photos","header_mobile":"Bezig met uploaden van %{done} van %{total}","header_done":"%{done} van %{total} geüpload","close":"sluiten","item":{"pending":"In wachtrij"},"alert":{"success":"%{smart_count} foto geüpload. |||| %{smart_count} foto's geüpload.","success_conflicts":"%{smart_count} foto geüpload; %{conflictNumber} conflict(en). |||| %{smart_count} foto's geüpload; %{conflictNumber} conflict(en).","errors":"Er zijn fouten opgetreden tijdens het uploaden van de foto's."}}};

/***/ }),

/***/ "h0jr":
/*!************************************************!*\
  !*** ./src/components/Button/CozyHomeLink.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var components_Button_index_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Button/index.styl */ "swni");
/* harmony import */ var components_Button_index_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_Button_index_styl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Button_getHomeLinkHref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Button/getHomeLinkHref */ "l0Ix");
/* harmony import */ var components_Button_CozyHomeLinkIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Button/CozyHomeLinkIcon */ "X/0B");







var CozyHomeLink = function CozyHomeLink(_ref) {
  var from = _ref.from,
      _ref$embedInCozyBar = _ref.embedInCozyBar,
      embedInCozyBar = _ref$embedInCozyBar === void 0 ? false : _ref$embedInCozyBar,
      t = _ref.t,
      size = _ref.size,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_2__["ButtonLink"], {
    label: t('Share.create-cozy'),
    icon: components_Button_CozyHomeLinkIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
    className: embedInCozyBar ? components_Button_index_styl__WEBPACK_IMPORTED_MODULE_3___default.a['bar-homelink'] : className,
    href: Object(components_Button_getHomeLinkHref__WEBPACK_IMPORTED_MODULE_4__["default"])(from),
    size: size
  });
};

CozyHomeLink.propTypes = {
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  embedInCozyBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['tiny', 'small', 'large', 'normal'])
};
CozyHomeLink.defaultProps = {
  from: '',
  size: 'normal'
};
/* harmony default export */ __webpack_exports__["default"] = (CozyHomeLink);

/***/ }),

/***/ "hVxl":
/*!***************************************!*\
  !*** ./src/photos/locales/es_CO.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "hz+9":
/*!******************************************************!*\
  !*** ./src/sharing/components/WhoHasAccessLight.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Recipient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Recipient */ "MzcY");
/* harmony import */ var _recipient_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipient.styl */ "1BUi");
/* harmony import */ var _recipient_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recipient_styl__WEBPACK_IMPORTED_MODULE_4__);





var MAX_DISPLAYED_RECIPIENTS = 2;

var WhoHasAccessLight = function WhoHasAccessLight(_ref) {
  var recipients = _ref.recipients,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_recipient_styl__WEBPACK_IMPORTED_MODULE_4___default.a['recipients-list-light'], className)
  }, recipients.slice(0, MAX_DISPLAYED_RECIPIENTS).map(function (recipient, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Recipient__WEBPACK_IMPORTED_MODULE_3__["RecipientWithoutStatus"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, recipient, {
      key: "key_recipient__".concat(index)
    }));
  }), recipients.length > MAX_DISPLAYED_RECIPIENTS && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Recipient__WEBPACK_IMPORTED_MODULE_3__["RecipientPlusX"], {
    extraRecipients: recipients.slice(MAX_DISPLAYED_RECIPIENTS)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WhoHasAccessLight);

/***/ }),

/***/ "jQ+K":
/*!*************************************************!*\
  !*** ./src/photos/ducks/upload/UploadQueue.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cozy-ui/transpiled/react */ "H+Xc");
/* harmony import */ var cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! cozy-ui/stylus/settings/palette.json */ "yoMi");
var cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! cozy-ui/stylus/settings/palette.json */ "yoMi", 1);
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! models */ "OjRq");
/* harmony import */ var _styles_styl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.styl */ "lEMr");
/* harmony import */ var _styles_styl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_styl__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! . */ "BDb7");
















var Pending = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["translate"])()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['item-pending']
  }, props.t('UploadQueue.item.pending'));
});
var Item = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["translate"])()(function (_ref) {
  var _classNames;

  var file = _ref.file,
      status = _ref.status;

  var _CozyFile$splitFilena = models__WEBPACK_IMPORTED_MODULE_13__["CozyFile"].splitFilename(file),
      filename = _CozyFile$splitFilena.filename,
      extension = _CozyFile$splitFilena.extension;

  var statusIcon;

  switch (status) {
    case 'loading':
      statusIcon = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
        className: "u-ml-half",
        color: cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_12__['dodgerBlue']
      });
      break;

    case 'cancel':
      statusIcon = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        className: "u-ml-half",
        icon: "cross",
        color: cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_12__['monza']
      });
      break;

    case 'failed':
    case 'conflict':
    case 'network':
      statusIcon = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        className: "u-ml-half",
        icon: "warning",
        color: cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_12__['monza']
      });
      break;

    case 'loaded':
      statusIcon = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_transpiled_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        className: "u-ml-half",
        icon: "check",
        color: cozy_ui_stylus_settings_palette_json__WEBPACK_IMPORTED_MODULE_12__['emerald']
      });
      break;

    case 'pending':
    default:
      statusIcon = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Pending, null);
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-item'], (_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames, _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-item--done'], status === 'loaded'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames, _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-item--error'], status === 'failed' || status === 'conflict'), _classNames))
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['item-cell'], _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['item-file'], _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['item-image'])
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, filename, extension && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['item-ext']
  }, extension))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['item-status']
  }, statusIcon));
});
var InProgressHeader = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["translate"])()(function (_ref2) {
  var t = _ref2.t,
      total = _ref2.total,
      done = _ref2.done;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-header-inner']
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: "coz-desktop"
  }, t('UploadQueue.header', {
    smart_count: total
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    className: 'u-hide--desk'
  }, t('UploadQueue.header_mobile', {
    done: done,
    total: total
  })));
});
var FinishedHeader = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["translate"])()(function (_ref3) {
  var t = _ref3.t,
      total = _ref3.total,
      successful = _ref3.successful,
      onClose = _ref3.onClose;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    "data-test-id": "upload-queue-success",
    className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-header-inner']
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, t('UploadQueue.header_done', {
    done: successful,
    total: total
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['btn-close']),
    onClick: onClose
  }, t('UploadQueue.close')));
});

var UploadQueue =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UploadQueue, _Component);

  function UploadQueue() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UploadQueue);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UploadQueue)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      collapsed: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "toggleCollapsed", function () {
      _this.setState(function (state) {
        return {
          collapsed: !state.collapsed
        };
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UploadQueue, [{
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props = this.props,
          queue = _this$props.queue,
          doneCount = _this$props.doneCount,
          successCount = _this$props.successCount,
          purgeQueue = _this$props.purgeQueue;
      var collapsed = this.state.collapsed;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        "data-test-id": "upload-queue",
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue'], (_classNames2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames2, _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue--visible'], queue.length !== 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_classNames2, _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue--collapsed'], collapsed), _classNames2))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-header'],
        onDoubleClick: this.toggleCollapsed
      }, doneCount < queue.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(InProgressHeader, {
        total: queue.length,
        done: doneCount
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FinishedHeader, {
        total: queue.length,
        successful: successCount,
        onClose: purgeQueue
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("progress", {
        className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-progress'],
        value: doneCount,
        max: queue.length
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-content']
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _styles_styl__WEBPACK_IMPORTED_MODULE_14___default.a['upload-queue-list']
      }, queue.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Item, {
          file: item.file,
          status: item.status,
          key: "file_".concat(index)
        });
      }))));
    }
  }]);

  return UploadQueue;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    queue: Object(___WEBPACK_IMPORTED_MODULE_15__["getUploadQueue"])(state),
    doneCount: Object(___WEBPACK_IMPORTED_MODULE_15__["getProcessed"])(state).length,
    successCount: Object(___WEBPACK_IMPORTED_MODULE_15__["getSuccessful"])(state).length
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    purgeQueue: function purgeQueue() {
      return dispatch(Object(___WEBPACK_IMPORTED_MODULE_15__["purgeUploadQueue"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["translate"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(UploadQueue)));

/***/ }),

/***/ "jh07":
/*!****************************************************************!*\
  !*** ./src/photos/ducks/albums/components/CreateAlbumForm.jsx ***!
  \****************************************************************/
/*! exports provided: CreateAlbumForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAlbumForm", function() { return CreateAlbumForm; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/createAlbumForm.styl */ "luXY");
/* harmony import */ var _styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);










var CreateAlbumForm =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CreateAlbumForm, _Component);

  function CreateAlbumForm() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CreateAlbumForm);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CreateAlbumForm).call(this));
    _this.state = {
      name: '',
      isSubmitDisabled: true,
      isBusy: false,
      hasError: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CreateAlbumForm, [{
    key: "reset",
    value: function reset() {
      this.setState({
        name: '',
        isSubmitDisabled: true,
        isBusy: false,
        hasError: false
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event, callback) {
      var _this2 = this;

      event.preventDefault();
      this.setState({
        isBusy: true
      });
      return callback(this.state.name).then(function () {
        return _this2.reset();
      }, function () {
        return _this2.setState({
          hasError: true,
          isBusy: false
        });
      });
    }
  }, {
    key: "onNameChange",
    value: function onNameChange(event) {
      var name = event.target.value;
      this.setState({
        name: name,
        isSubmitDisabled: !name.trim().length,
        hasError: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          t = _this$props.t,
          onSubmitNewAlbum = _this$props.onSubmitNewAlbum;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: _styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-create-album-form'],
        onSubmit: function onSubmit(event) {
          return _this3.onSubmit(event, onSubmitNewAlbum);
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: _styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5___default.a['coz-create-album-label']
      }, t('Albums.create.inline_form.create_label')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5___default.a['coz-inline-form']
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5___default.a['coz-input-text'], this.state.hasError && _styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5___default.a['error']),
        type: "text",
        name: "album-name",
        onInput: function onInput(event) {
          return _this3.onNameChange(event);
        },
        disabled: this.state.isBusy,
        placeholder: t('Albums.create.inline_form.placeholder'),
        value: this.state.name
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: _styles_createAlbumForm_styl__WEBPACK_IMPORTED_MODULE_5___default.a['create-button'],
        disabled: this.state.isSubmitDisabled || this.state.isBusy,
        "aria-busy": this.state.isBusy,
        label: t('Albums.create.inline_form.create_button')
      })));
    }
  }]);

  return CreateAlbumForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_7__["translate"])()(CreateAlbumForm));

/***/ }),

/***/ "jrFr":
/*!********************************!*\
  !*** ./src/sharing/share.styl ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"share-modal-content":"share-modal-content--1SlxN","coz-form":"coz-form--2jtJC","coz-form-group":"coz-form-group--1bFva","coz-form-desc":"coz-form-desc--JrEED","coz-form-label":"coz-form-label--3Zm6p","coz-form-label--error":"coz-form-label--error--2KzmX","coz-form-errors":"coz-form-errors--1nNWc","coz-form-controls":"coz-form-controls--1RJGg","coz-form-controls--full":"coz-form-controls--full--2-y4G","coz-form-controls--dispatch":"coz-form-controls--dispatch--2TjNA","error":"error--3q85L","permission-required-popin":"permission-required-popin--3ZT7U","divider":"divider--3ACWO","share-bylink-header":"share-bylink-header--2919D","share-bylink-header-dot":"share-bylink-header-dot--1TAFX","share-bylink-header-creating":"share-bylink-header-creating--2F2Df","share-bylink-header-copybtn":"share-bylink-header-copybtn--397lg","share-bylink-desc":"share-bylink-desc--2lsfE","share-byemail-onlybylink":"share-byemail-onlybylink--3A-9J","share-moral-override-bottom":"share-moral-override-bottom--1I3dU","share-modal-secondary":"share-modal-secondary--3Y04a","share-modal-margins":"share-modal-margins--yhQBn","share-modal-separator":"share-modal-separator--JJuRH","share-type-control":"share-type-control--3IS3y","select-wrapper":"select-wrapper--3vfxZ","select-option":"select-option--O5o86","select-option-label":"select-option-label--314tl","select-option-desc":"select-option-desc--1JNRs","input-dual":"input-dual--1iSDa","btn-copy":"btn-copy--1_EQX","permission-required-popin-close":"permission-required-popin-close--wbc77","permission-required-popin-accept":"permission-required-popin-accept--3gyRJ","share-details-created":"share-details-created--3qeE6","share-details-perm":"share-details-perm--1bWoi","share-details-perm-desc":"share-details-perm-desc--2uJr3","spin":"spin--260Kl","shake":"shake--2b0j3"};

/***/ }),

/***/ "kKu1":
/*!******************************************!*\
  !*** ./src/photos/styles/photoList.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pho-section":"pho-section--aOGQ8","pho-photo-wrapper":"pho-photo-wrapper--34Af_","pho-section-header":"pho-section-header--3xCwP","pho-photo":"pho-photo--1RccV","pho-photo-item":"pho-photo-item--1uvPt","pho-photo-select":"pho-photo-select--2_YlY","pho-photo--selected":"pho-photo--selected--3CHFZ","pho-section--has-selection":"pho-section--has-selection--2A-rj","pho-list-morebutton":"pho-list-morebutton--1HHd8","spin":"spin--3HNuy","shake":"shake--p49Dg"};

/***/ }),

/***/ "krg7":
/*!***********************************************!*\
  !*** ./src/sharing/components/ShareModal.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareModal; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cozy-ui/react/Modal */ "cLsY");
/* harmony import */ var sharing_share_styl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sharing/share.styl */ "jrFr");
/* harmony import */ var sharing_share_styl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sharing_share_styl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sharing_propTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sharing/propTypes */ "G9pQ");
/* harmony import */ var sharing_components_ShareByLink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sharing/components/ShareByLink */ "IAkC");
/* harmony import */ var sharing_components_ShareByEmail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sharing/components/ShareByEmail */ "UVeP");
/* harmony import */ var sharing_components_WhoHasAccess__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sharing/components/WhoHasAccess */ "GFJL");
















__webpack_require__(/*! url-polyfill */ "T1qB");

var ShareModal =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ShareModal, _Component);

  function ShareModal() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ShareModal);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ShareModal).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ShareModal, [{
    key: "render",
    value: function render() {
      var t = this.context.t;
      var _this$props = this.props,
          document = _this$props.document,
          isOwner = _this$props.isOwner,
          sharingDesc = _this$props.sharingDesc,
          contacts = _this$props.contacts,
          groups = _this$props.groups,
          createContact = _this$props.createContact,
          link = _this$props.link,
          recipients = _this$props.recipients,
          _this$props$documentT = _this$props.documentType,
          documentType = _this$props$documentT === void 0 ? 'Document' : _this$props$documentT,
          needsContactsPermission = _this$props.needsContactsPermission,
          hasSharedParent = _this$props.hasSharedParent,
          hasSharedChild = _this$props.hasSharedChild,
          onClose = _this$props.onClose,
          onShare = _this$props.onShare,
          onRevoke = _this$props.onRevoke,
          onShareByLink = _this$props.onShareByLink,
          onRevokeLink = _this$props.onRevokeLink;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: t("".concat(documentType, ".share.title")),
        dismissAction: onClose,
        into: "body",
        size: "small",
        spacing: "small",
        mobileFullscreen: true
      }, (hasSharedParent || hasSharedChild) && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_10___default.a['share-byemail-onlybylink']
      }, t("".concat(documentType, ".share.shareByEmail.onlyByLink"), {
        type: t("".concat(documentType, ".share.shareByEmail.type.").concat(document.type === 'directory' ? 'folder' : 'file'))
      }), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, t("".concat(documentType, ".share.shareByEmail.").concat(hasSharedParent ? 'hasSharedParent' : 'hasSharedChild')))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_9__["ModalContent"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(sharing_share_styl__WEBPACK_IMPORTED_MODULE_10___default.a['share-modal-content'], sharing_share_styl__WEBPACK_IMPORTED_MODULE_10___default.a['share-moral-override-bottom'])
      }, documentType !== 'Albums' && !hasSharedParent && !hasSharedChild && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(sharing_components_ShareByEmail__WEBPACK_IMPORTED_MODULE_13__["default"], {
        currentRecipients: recipients,
        document: document,
        documentType: documentType,
        sharingDesc: sharingDesc,
        contacts: contacts,
        groups: groups,
        createContact: createContact,
        onShare: onShare,
        needsContactsPermission: needsContactsPermission
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_10___default.a['share-modal-separator']
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: sharing_share_styl__WEBPACK_IMPORTED_MODULE_10___default.a['share-modal-secondary']
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(sharing_share_styl__WEBPACK_IMPORTED_MODULE_10___default.a['share-modal-margins'], 'u-pb-1')
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(sharing_components_ShareByLink__WEBPACK_IMPORTED_MODULE_12__["default"], {
        document: document,
        documentType: documentType,
        checked: link !== null,
        link: link,
        onEnable: onShareByLink,
        onDisable: onRevokeLink
      }), documentType !== 'Albums' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(sharing_components_WhoHasAccess__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: 'u-mt-1',
        isOwner: isOwner,
        recipients: recipients,
        document: document,
        documentType: documentType,
        onRevoke: onRevoke
      })))));
    }
  }]);

  return ShareModal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ShareModal, "contextTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
});


ShareModal.propTypes = {
  document: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  isOwner: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  sharingDesc: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  contacts: sharing_propTypes__WEBPACK_IMPORTED_MODULE_11__["contactsResponseType"].isRequired,
  groups: sharing_propTypes__WEBPACK_IMPORTED_MODULE_11__["groupsResponseType"].isRequired,
  createContact: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  recipients: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array.isRequired,
  link: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  documentType: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  needsContactsPermission: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  hasSharedParent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  hasSharedChild: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onShare: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onRevoke: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onShareByLink: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onRevokeLink: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};

/***/ }),

/***/ "l0Ix":
/*!***************************************************!*\
  !*** ./src/components/Button/getHomeLinkHref.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getHomeLinkHref = function getHomeLinkHref(from) {
  return "https://manager.cozycloud.cc/cozy/create".concat(from ? "?pk_campaign=".concat(encodeURIComponent(from)) : '?', "&pk_kwd=cozy");
};

/* harmony default export */ __webpack_exports__["default"] = (getHomeLinkHref);

/***/ }),

/***/ "l3Lo":
/*!*******************************************************!*\
  !*** ./src/photos/assets/icons/icon-image-broken.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-image-broken_a4fd70a7dc9c96a1d21491390660382c",
  "use": "icon-image-broken_a4fd70a7dc9c96a1d21491390660382c-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icon-image-broken_a4fd70a7dc9c96a1d21491390660382c\">\n  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0 2)\">\n    <rect width=\"32\" height=\"28\" fill=\"#FDD5D5\" rx=\"2\" />\n    <path fill=\"#F52D2D\" d=\"M24,20 L13,15 L19.2902805,8.70971949 C19.6822478,8.31775224 20.3203148,8.32031476 20.7062149,8.7062149 L29,17 L24,20 Z\" />\n    <path fill=\"#F52D2D\" d=\"M0,22 L6.29028051,15.7097195 C6.68224776,15.3177522 7.31387329,15.3138733 7.70591205,15.7059121 L11,19 L15.0233154,14.9766846 L24,19 L27.2486572,17.2486572 L32,22 L32,26.0020869 C32,27.1055038 31.1107383,28 29.9982567,28 L2.00174332,28 C0.89621101,28 0,27.1017394 0,26.0020869 L0,22 Z\" />\n    <circle cx=\"8\" cy=\"7\" r=\"3\" fill=\"#FFFFFF\" />\n    <path stroke=\"#FDD5D5\" d=\"M11,18.3000031 L5.5,23.8000031 L11,18.3000031 Z\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n    <polyline stroke=\"#FFFFFF\" stroke-width=\"2\" points=\"0 17 8 13 24 20 32 16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "lEMr":
/*!*********************************************!*\
  !*** ./src/photos/ducks/upload/styles.styl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"upload-queue":"upload-queue--2RXFj","upload-queue--visible":"upload-queue--visible--frmGj","upload-queue-header":"upload-queue-header--Vz871","upload-queue-header-inner":"upload-queue-header-inner--1AQpy","btn-close":"btn-close--32K_q","upload-queue-progress":"upload-queue-progress--2O2Rw","upload-queue-content":"upload-queue-content--UNBUz","upload-queue--collapsed":"upload-queue--collapsed--nIVVP","upload-queue-list":"upload-queue-list--2dzTR","upload-queue-item--error":"upload-queue-item--error--3UNkr","upload-queue-item--done":"upload-queue-item--done--23Ps1","upload-queue-item":"upload-queue-item--2oTRx","item-cell":"item-cell--1mZJx","item-file":"item-file--24emt","item-ext":"item-ext--3vgYK","item-image":"item-image--wp0ZG","item-status":"item-status--2Azg6","item-pending":"item-pending--wp4pw","spin":"spin--3291m","shake":"shake--eSk8B"};

/***/ }),

/***/ "luXY":
/*!************************************************!*\
  !*** ./src/photos/styles/createAlbumForm.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pho-create-album-form":"pho-create-album-form--xgUhP","error":"error--2VcpR","coz-create-album-label":"coz-create-album-label--2zpY4","coz-inline-form":"coz-inline-form--3COco","coz-input-text":"coz-input-text--ZuuYG","create-button":"create-button--1cJgR","spin":"spin--1T4Vk","shake":"shake--3cnvd"};

/***/ }),

/***/ "n7gB":
/*!**************************************************!*\
  !*** ./src/photos/components/DestroyConfirm.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/confirms.styl */ "2sk9");
/* harmony import */ var _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react/Modal */ "cLsY");





var DestroyConfirm = function DestroyConfirm(_ref) {
  var t = _ref.t,
      confirm = _ref.confirm,
      abort = _ref.abort;
  var confirmationTexts = ['forbidden', 'eye', 'link'].map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default.a['fil-confirm-text'], _styles_confirms_styl__WEBPACK_IMPORTED_MODULE_0___default.a["icon-".concat(type)]),
      key: type
    }, t("destroyconfirmation.".concat(type)));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t('destroyconfirmation.title'),
    description: confirmationTexts,
    secondaryType: "secondary",
    secondaryText: t('destroyconfirmation.cancel'),
    secondaryAction: abort,
    primaryType: "danger",
    primaryText: t('destroyconfirmation.delete'),
    primaryAction: confirm
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DestroyConfirm);

/***/ }),

/***/ "nEYx":
/*!************************************************!*\
  !*** ./src/photos/components/UploadButton.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var _styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/toolbar.styl */ "t0Aa");
/* harmony import */ var _styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5__);







var UploadButton = function UploadButton(_ref) {
  var label = _ref.label,
      inMenu = _ref.inMenu,
      disabled = _ref.disabled,
      onUpload = _ref.onUpload,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["FileInput"], {
    accept: "image/*",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5___default.a['c-btn']), !inMenu)),
    "data-test-id": "upload-btn",
    disabled: disabled,
    multiple: true,
    onChange: onUpload,
    value: [] // always erase the value to be able to re-upload the same file

  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, !inMenu && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: "upload"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, label)));
};

UploadButton.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  inMenu: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onUpload: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
UploadButton.defaultProps = {
  disabled: false,
  inMenu: false
};
/* harmony default export */ __webpack_exports__["default"] = (UploadButton);

/***/ }),

/***/ "npku":
/*!************************************!*\
  !*** ./src/photos/locales/ro.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "nw0P":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale sync ^\.\/.*\/index\.js$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_lib/build_formatting_tokens_reg_exp/index.js": "kOWh",
	"./ar/build_distance_in_words_locale/index.js": "XxX6",
	"./ar/build_format_locale/index.js": "alis",
	"./ar/index.js": "EDRf",
	"./be/build_distance_in_words_locale/index.js": "LQ09",
	"./be/build_format_locale/index.js": "kj7F",
	"./be/index.js": "YEhR",
	"./bg/build_distance_in_words_locale/index.js": "7K3h",
	"./bg/build_format_locale/index.js": "RrdL",
	"./bg/index.js": "isx8",
	"./ca/build_distance_in_words_locale/index.js": "wqqj",
	"./ca/build_format_locale/index.js": "qcV0",
	"./ca/index.js": "Vwa+",
	"./cs/build_distance_in_words_locale/index.js": "ZKDM",
	"./cs/build_format_locale/index.js": "ipyF",
	"./cs/index.js": "dvhP",
	"./da/build_distance_in_words_locale/index.js": "2Mgc",
	"./da/build_format_locale/index.js": "Gned",
	"./da/index.js": "7ur/",
	"./de/build_distance_in_words_locale/index.js": "5IWf",
	"./de/build_format_locale/index.js": "THCn",
	"./de/index.js": "bgw5",
	"./el/build_distance_in_words_locale/index.js": "o/GB",
	"./el/build_format_locale/index.js": "8T9h",
	"./el/index.js": "dH0v",
	"./en/build_distance_in_words_locale/index.js": "LZbM",
	"./en/build_format_locale/index.js": "6DAA",
	"./en/index.js": "Us+F",
	"./eo/build_distance_in_words_locale/index.js": "qrnn",
	"./eo/build_format_locale/index.js": "Bl15",
	"./eo/index.js": "UB7v",
	"./es/build_distance_in_words_locale/index.js": "GEfZ",
	"./es/build_format_locale/index.js": "O+zC",
	"./es/index.js": "/S0t",
	"./fi/build_distance_in_words_locale/index.js": "VHtQ",
	"./fi/build_format_locale/index.js": "Oydx",
	"./fi/index.js": "ndVD",
	"./fil/build_distance_in_words_locale/index.js": "uq4p",
	"./fil/build_format_locale/index.js": "d7hw",
	"./fil/index.js": "pNfm",
	"./fr/build_distance_in_words_locale/index.js": "IzMR",
	"./fr/build_format_locale/index.js": "I3Zg",
	"./fr/index.js": "LKA2",
	"./hr/build_distance_in_words_locale/index.js": "DPvn",
	"./hr/build_format_locale/index.js": "puw3",
	"./hr/index.js": "L9Jq",
	"./hu/build_distance_in_words_locale/index.js": "w2RQ",
	"./hu/build_format_locale/index.js": "/0iD",
	"./hu/index.js": "Nm+E",
	"./id/build_distance_in_words_locale/index.js": "JbvB",
	"./id/build_format_locale/index.js": "0wlw",
	"./id/index.js": "A6C3",
	"./is/build_distance_in_words_locale/index.js": "qzMC",
	"./is/build_format_locale/index.js": "S3yD",
	"./is/index.js": "N4bE",
	"./it/build_distance_in_words_locale/index.js": "MDEp",
	"./it/build_format_locale/index.js": "aUJd",
	"./it/index.js": "hmb4",
	"./ja/build_distance_in_words_locale/index.js": "nNvt",
	"./ja/build_format_locale/index.js": "buui",
	"./ja/index.js": "uAXs",
	"./ko/build_distance_in_words_locale/index.js": "oEw+",
	"./ko/build_format_locale/index.js": "9SQf",
	"./ko/index.js": "iW8+",
	"./mk/build_distance_in_words_locale/index.js": "nmwZ",
	"./mk/build_format_locale/index.js": "htxJ",
	"./mk/index.js": "GzBU",
	"./nb/build_distance_in_words_locale/index.js": "SL1f",
	"./nb/build_format_locale/index.js": "CJ5F",
	"./nb/index.js": "73vv",
	"./nl/build_distance_in_words_locale/index.js": "Uyu0",
	"./nl/build_format_locale/index.js": "doCD",
	"./nl/index.js": "hCQt",
	"./pl/build_distance_in_words_locale/index.js": "FUBD",
	"./pl/build_format_locale/index.js": "nOYf",
	"./pl/index.js": "B6yL",
	"./pt/build_distance_in_words_locale/index.js": "aTPA",
	"./pt/build_format_locale/index.js": "TTT0",
	"./pt/index.js": "gdks",
	"./ro/build_distance_in_words_locale/index.js": "gI+A",
	"./ro/build_format_locale/index.js": "njjO",
	"./ro/index.js": "r2yp",
	"./ru/build_distance_in_words_locale/index.js": "KmPx",
	"./ru/build_format_locale/index.js": "UUBw",
	"./ru/index.js": "nz/o",
	"./sk/build_distance_in_words_locale/index.js": "q2Bs",
	"./sk/build_format_locale/index.js": "9sxn",
	"./sk/index.js": "Wqan",
	"./sl/build_distance_in_words_locale/index.js": "mlv2",
	"./sl/build_format_locale/index.js": "vHkZ",
	"./sl/index.js": "KYSo",
	"./sr/build_distance_in_words_locale/index.js": "LlkS",
	"./sr/build_format_locale/index.js": "RhjJ",
	"./sr/index.js": "7mU3",
	"./sv/build_distance_in_words_locale/index.js": "UNBN",
	"./sv/build_format_locale/index.js": "zTNB",
	"./sv/index.js": "hxgj",
	"./th/build_distance_in_words_locale/index.js": "XAGa",
	"./th/build_format_locale/index.js": "We2s",
	"./th/index.js": "Pk+z",
	"./tr/build_distance_in_words_locale/index.js": "aFZF",
	"./tr/build_format_locale/index.js": "jh7A",
	"./tr/index.js": "3ZWG",
	"./zh_cn/build_distance_in_words_locale/index.js": "KdB7",
	"./zh_cn/build_format_locale/index.js": "l4EP",
	"./zh_cn/index.js": "8tMq",
	"./zh_tw/build_distance_in_words_locale/index.js": "vyyr",
	"./zh_tw/build_format_locale/index.js": "uYH7",
	"./zh_tw/index.js": "QPlQ"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "nw0P";

/***/ }),

/***/ "oGE2":
/*!**********************************************!*\
  !*** ./src/photos/targets/browser/index.jsx ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_transpiled_react_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cozy-ui/transpiled/react/stylesheet.css */ "/8/d");
/* harmony import */ var cozy_ui_transpiled_react_stylesheet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cozy_ui_transpiled_react_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var photos_styles_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! photos/styles/main */ "59mS");
/* harmony import */ var photos_styles_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(photos_styles_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "fvjX");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "sINF");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-logger */ "1mXj");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cozy-client */ "SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var photos_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! photos/reducers */ "c0d6");
/* harmony import */ var photos_components_AppRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! photos/components/AppRoute */ "H+nv");
/* harmony import */ var cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cozy-ui/react/helpers/tracker */ "4kcP");
/* harmony import */ var drive_lib_reporter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! drive/lib/reporter */ "qxHO");
/* harmony import */ var photos_appMetadata__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! photos/appMetadata */ "yZiV");
/* harmony import */ var _doctypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./doctypes */ "NqoY");


var _this = undefined;

/* global cozy __DEVELOPMENT__ */
















var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_7__["createLogger"])();
document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('[role=application]');
  var data = root.dataset;
  var lang = document.documentElement.getAttribute('lang') || 'en';
  var protocol = window.location ? window.location.protocol : 'https:';
  var cozyUrl = "".concat(protocol, "//").concat(data.cozyDomain);
  var client = new cozy_client__WEBPACK_IMPORTED_MODULE_9___default.a({
    uri: cozyUrl,
    token: data.cozyToken,
    appMetadata: photos_appMetadata__WEBPACK_IMPORTED_MODULE_15__["default"],
    schema: _doctypes__WEBPACK_IMPORTED_MODULE_16__["default"]
  }); // We still need to init cozy-client-js for the Uploader

  cozy.client.init({
    cozyURL: cozyUrl,
    token: data.cozyToken
  });
  cozy.bar.init({
    appName: data.cozyAppName,
    appEditor: data.cozyAppEditor,
    cozyClient: client,
    iconPath: data.cozyIconPath,
    lang: data.cozyLocale,
    replaceTitleOnMobile: true
  });
  Object(drive_lib_reporter__WEBPACK_IMPORTED_MODULE_14__["configureReporter"])();
  Object(drive_lib_reporter__WEBPACK_IMPORTED_MODULE_14__["setCozyUrl"])(cozyUrl);
  var history = react_router__WEBPACK_IMPORTED_MODULE_8__["hashHistory"];
  var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_6__["default"], loggerMiddleware];

  if (Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_13__["shouldEnableTracking"])() && Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_13__["getTracker"])()) {
    var trackerInstance = Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_13__["getTracker"])();
    history = trackerInstance.connectToHistory(react_router__WEBPACK_IMPORTED_MODULE_8__["hashHistory"]);
    trackerInstance.track(react_router__WEBPACK_IMPORTED_MODULE_8__["hashHistory"].getCurrentLocation()); // when using a hash history, the initial visit is not tracked by piwik react router

    middlewares.push(Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_13__["createTrackerMiddleware"])());
  } // Enable Redux dev tools


  var composeEnhancers =  true && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_5__["compose"];
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, photos_reducers__WEBPACK_IMPORTED_MODULE_11__["default"], {
    cozy: client.reducer()
  })), composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"].apply(_this, middlewares)));
  Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["I18n"], {
    lang: lang,
    dictRequire: function dictRequire(lang) {
      return __webpack_require__("Gofk")("./".concat(lang));
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_9__["CozyProvider"], {
    store: store,
    client: client
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__["Router"], {
    history: history,
    routes: photos_components_AppRoute__WEBPACK_IMPORTED_MODULE_12__["default"]
  }))), root);
});

/***/ }),

/***/ "orVX":
/*!************************************!*\
  !*** ./src/photos/locales/eo.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "osKR":
/*!*****************************************************!*\
  !*** ./src/sharing/assets/icons/icon-trash-red.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-trash-red_c64051db4812a1c5d58fc48b31781cbc",
  "use": "icon-trash-red_c64051db4812a1c5d58fc48b31781cbc-usage",
  "viewBox": "0 0 16 16",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"icon-trash-red_c64051db4812a1c5d58fc48b31781cbc\">\n  <g fill=\"#F52D2D\" fill-rule=\"evenodd\" transform=\"translate(-96 -32)\">\n    <path d=\"M100.5,33 L98.0068455,33 C97.4499488,33 97,33.4477153 97,34 L97,35 L111,35 L111,34 C111,33.4438648 110.54922,33 109.993155,33 L107.5,33 L107,32 L101,32 L100.5,33 Z M98,36 L110,36 L110,45.9914698 C110,47.1007504 109.09805,48 107.99147,48 L100.00853,48 C98.8992496,48 98,47.0980496 98,45.9914698 L98,36 Z\" />\n    <path d=\"M100.5,33 L98.0068455,33 C97.4499488,33 97,33.4477153 97,34 L97,35 L111,35 L111,34 C111,33.4438648 110.54922,33 109.993155,33 L107.5,33 L107,32 L101,32 L100.5,33 Z M98,36 L110,36 L110,45.9914698 C110,47.1007504 109.09805,48 107.99147,48 L100.00853,48 C98.8992496,48 98,47.0980496 98,45.9914698 L98,36 Z\" />\n  </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "otEB":
/*!************************************************!*\
  !*** ./src/sharing/components/SharedBadge.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var _badge_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badge.styl */ "I2Z/");
/* harmony import */ var _badge_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_badge_styl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cozy-ui/react/palette */ "7jrE");
/* harmony import */ var cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_5__);







var SharedBadge = function SharedBadge(_ref) {
  var byMe = _ref.byMe,
      className = _ref.className,
      small = _ref.small,
      xsmall = _ref.xsmall;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_badge_styl__WEBPACK_IMPORTED_MODULE_4___default.a['shared-badge'], className, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _badge_styl__WEBPACK_IMPORTED_MODULE_4___default.a['--small'], small), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _badge_styl__WEBPACK_IMPORTED_MODULE_4___default.a['--xsmall'], xsmall), _badge_styl__WEBPACK_IMPORTED_MODULE_4___default.a[byMe ? '--by-me' : '--with-me'])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: "share",
    color: cozy_ui_react_palette__WEBPACK_IMPORTED_MODULE_5___default.a.white,
    className: _badge_styl__WEBPACK_IMPORTED_MODULE_4___default.a['shared-badge-icon']
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SharedBadge);

/***/ }),

/***/ "q/Uw":
/*!**********************************************!*\
  !*** ./src/photos/ducks/selection/index.jsx ***!
  \**********************************************/
/*! exports provided: default, Consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var cozy_ui_react_SelectionBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cozy-ui/react/SelectionBar */ "+MCZ");











var SelectionContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext([]); // constants

var SELECT_ITEM = 'SELECT_ITEM';
var UNSELECT_ITEM = 'UNSELECT_ITEM';
var ADD_TO_SELECTION = 'ADD_TO_SELECTION';
var REMOVE_FROM_SELECTION = 'REMOVE_FROM_SELECTION';
var TOGGLE_SELECTION_BAR = 'TOGGLE_SELECTION_BAR';
var SHOW_SELECTION_BAR = 'SHOW_SELECTION_BAR';
var HIDE_SELECTION_BAR = 'HIDE_SELECTION_BAR'; // actions

var showSelectionBar = function showSelectionBar() {
  return {
    type: SHOW_SELECTION_BAR
  };
};

var hideSelectionBar = function hideSelectionBar() {
  return {
    type: HIDE_SELECTION_BAR
  };
}; // const toggleSelectionBar = () => ({ type: TOGGLE_SELECTION_BAR })


var toggleItemSelection = function toggleItemSelection(item, selected) {
  return {
    type: selected ? UNSELECT_ITEM : SELECT_ITEM,
    item: item
  };
};

var addToSelection = function addToSelection(items) {
  return {
    type: ADD_TO_SELECTION,
    items: items
  };
};

var removeFromSelection = function removeFromSelection(items) {
  return {
    type: REMOVE_FROM_SELECTION,
    items: items
  };
}; // reducers


var selected = function selected() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.meta && action.meta.cancelSelection) {
    return [];
  }

  switch (action.type) {
    case SELECT_ITEM:
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default()(state), [action.item]);

    case UNSELECT_ITEM:
      return state.filter(function (i) {
        return i._id !== action.item.id;
      });

    case ADD_TO_SELECTION:
      // eslint-disable-next-line no-case-declarations
      var selectedIds = state.map(function (i) {
        return i._id;
      }); // eslint-disable-next-line no-case-declarations

      var newItems = action.items.filter(function (i) {
        return selectedIds.indexOf(i._id) === -1;
      });
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default()(state), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_8___default()(newItems));

    case REMOVE_FROM_SELECTION:
      // eslint-disable-next-line no-case-declarations
      var itemIds = action.items.map(function (i) {
        return i._id;
      });
      return state.filter(function (i) {
        return itemIds.indexOf(i._id) === -1;
      });

    case HIDE_SELECTION_BAR:
      return [];

    default:
      return state;
  }
};

var isSelectionBarOpened = function isSelectionBarOpened() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.meta && action.meta.cancelSelection) {
    return false;
  }

  switch (action.type) {
    case TOGGLE_SELECTION_BAR:
      return !state;

    case SHOW_SELECTION_BAR:
      return true;

    case HIDE_SELECTION_BAR:
      return false;

    default:
      return state;
  }
};

var Selection =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Selection, _Component);

  function Selection() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Selection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Selection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      selected: selected(undefined, {}),
      opened: isSelectionBarOpened(undefined, {})
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toggle", function (id, selected) {
      return _this.dispatch(toggleItemSelection(id, selected));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "select", function (ids) {
      return _this.dispatch(addToSelection(ids));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "unselect", function (ids) {
      return _this.dispatch(removeFromSelection(ids));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "clear", function () {
      return _this.dispatch(hideSelectionBar());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "show", function () {
      return _this.dispatch(showSelectionBar());
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Selection, [{
    key: "dispatch",
    value: function dispatch(action) {
      this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
          selected: selected(state.selected, action),
          opened: isSelectionBarOpened(state.opened, action)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$actions = _this$props.actions,
          actions = _this$props$actions === void 0 ? {} : _this$props$actions;
      var _this$state = this.state,
          selected = _this$state.selected,
          opened = _this$state.opened;
      var active = selected.length !== 0 || opened;
      var selectionActions = {
        toggle: this.toggle,
        select: this.select,
        unselect: this.unselect,
        clear: this.clear,
        show: this.show
      };
      var realActions = typeof actions === 'function' ? actions(selectionActions) : actions;
      var checkedActions = {};
      Object.keys(realActions).map(function (k) {
        checkedActions[k] = typeof realActions[k] === 'function' ? {
          action: realActions[k]
        } : realActions[k];
      });
      var hasActions = Object.keys(checkedActions).length > 0;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SelectionContext.Provider, {
        value: selected
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, active && hasActions && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(cozy_ui_react_SelectionBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selected: selected,
        hideSelectionBar: this.clear,
        actions: checkedActions
      }), children(selected, active, selectionActions)));
    }
  }]);

  return Selection;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);


var Consumer = SelectionContext.Consumer;

/***/ }),

/***/ "qV7n":
/*!************************************!*\
  !*** ./src/photos/locales/tr.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "qW25":
/*!************************************************************!*\
  !*** ./src/photos/ducks/albums/components/AlbumPhotos.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var react_cozy_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-cozy-helpers */ "Yo2A");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! cozy-ui/react/Alerter */ "67rm");
/* harmony import */ var sharing__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sharing */ "OsbH");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash/flow */ "56YH");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../styles/layout.styl */ "0yyf");
/* harmony import */ var _styles_layout_styl__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_styl__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _AlbumToolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AlbumToolbar */ "UhLh");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! .. */ "SRpc");
/* harmony import */ var photos_components_PhotoBoard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! photos/components/PhotoBoard */ "TtgU");
/* harmony import */ var photos_components_Topbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! photos/components/Topbar */ "eKCf");
/* harmony import */ var photos_components_DestroyConfirm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! photos/components/DestroyConfirm */ "n7gB");
/* harmony import */ var photos_components_QuitConfirm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! photos/components/QuitConfirm */ "UXD1");
/* harmony import */ var photos_lib_confirm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! photos/lib/confirm */ "5wWc");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../selection */ "q/Uw");





























var AlbumPhotos =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(AlbumPhotos, _Component);

  function AlbumPhotos() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AlbumPhotos);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(AlbumPhotos)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      editing: false,
      showAddAlbumModal: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "showAddAlbumModal", function () {
      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          showAddAlbumModal: true
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "hideAddAlbumModal", function () {
      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          showAddAlbumModal: false
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "editAlbumName", function () {
      _this.setState(function (state) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, state, {
          editing: true
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "renameAlbum", function (name) {
      if (name.trim() === '') {
        cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_16__["default"].error('Error.album_rename_abort');
        return;
      } else if (name === _this.props.album.name) {
        _this.setState({
          editing: false
        });

        return;
      }

      var updatedAlbum = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.props.album, {
        name: name
      });

      _this.props.updateAlbum(updatedAlbum).then(function () {
        _this.setState({
          editing: false
        });
      }).catch(function () {
        cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_16__["default"].error('Error.generic');
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "downloadAlbum",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var album, allPhotos;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              album = _this.props.album;
              _context.next = 3;
              return _this.context.client.getStackClient().collection('io.cozy.files').findReferencedBy({
                _type: 'io.cozy.photos.albums',
                _id: album.id
              }, {
                limit: 99999
              });

            case 3:
              allPhotos = _context.sent;

              _this.context.client.collection('io.cozy.files').downloadArchive(allPhotos.data.map(function (_ref2) {
                var _id = _ref2._id;
                return _id;
              }), album.name);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "downloadPhotos", function (photos) {
      _this.context.client.collection('io.cozy.files').downloadArchive(photos.map(function (_ref3) {
        var _id = _ref3._id;
        return _id;
      }), 'selected');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "deleteAlbum", function () {
      var _this$props = _this.props,
          t = _this$props.t,
          router = _this$props.router,
          album = _this$props.album,
          deleteAlbum = _this$props.deleteAlbum;
      return Object(photos_lib_confirm__WEBPACK_IMPORTED_MODULE_26__["default"])(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(photos_components_DestroyConfirm__WEBPACK_IMPORTED_MODULE_24__["default"], {
        t: t,
        albumName: album.name
      }), function () {
        return deleteAlbum(album).then(function () {
          router.replace('albums');
          cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_16__["default"].success('Albums.remove_album.success', {
            name: album.name
          });
        }).catch(function () {
          return cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_16__["default"].error('Albums.remove_album.error.generic');
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "leaveAlbum", function () {
      var _this$props2 = _this.props,
          t = _this$props2.t,
          router = _this$props2.router,
          album = _this$props2.album,
          deleteAlbum = _this$props2.deleteAlbum,
          leaveAlbum = _this$props2.leaveAlbum;
      return Object(photos_lib_confirm__WEBPACK_IMPORTED_MODULE_26__["default"])(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(photos_components_QuitConfirm__WEBPACK_IMPORTED_MODULE_25__["default"], {
        t: t,
        albumName: album.name
      }), function () {
        return leaveAlbum(album).then(function () {
          return deleteAlbum(album);
        }).then(function () {
          router.replace('albums');
          cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_16__["default"].success('Albums.quit_album.success', {
            name: album.name
          });
        }).catch(function () {
          return cozy_ui_react_Alerter__WEBPACK_IMPORTED_MODULE_16__["default"].error('Albums.quit_album.error.generic');
        });
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AlbumPhotos, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.album || !this.props.photos) {
        return null;
      }

      var _this$props3 = this.props,
          t = _this$props3.t,
          router = _this$props3.router,
          album = _this$props3.album,
          shareAlbum = _this$props3.shareAlbum,
          photos = _this$props3.photos,
          hasMore = _this$props3.hasMore,
          fetchMore = _this$props3.fetchMore;
      var editing = this.state.editing;
      var shared = {};
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_selection__WEBPACK_IMPORTED_MODULE_27__["default"], {
        actions: function actions(selection) {
          return {
            'album-add': _this2.showAddAlbumModal,
            download: _this2.downloadPhotos,
            'album-remove': function albumRemove(selected) {
              return _this2.props.removePhotos(album, selected, selection.clear);
            }
          };
        }
      }, function (selected, active, selection) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          "data-test-id": "album-pho-content-wrapper",
          className: _styles_layout_styl__WEBPACK_IMPORTED_MODULE_19___default.a['pho-content-wrapper']
        }, album.name && album.photos.data && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(photos_components_Topbar__WEBPACK_IMPORTED_MODULE_23__["default"], {
          viewName: "albumContent",
          albumName: album.name,
          editing: editing,
          onEdit: _this2.renameAlbum
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_AlbumToolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
          t: t,
          router: router,
          album: album,
          sharedWithMe: shared.withMe,
          sharedByMe: shared.byMe,
          readOnly: shared.readOnly,
          onRename: _this2.editAlbumName,
          downloadAlbum: _this2.downloadAlbum,
          deleteAlbum: _this2.deleteAlbum,
          leaveAlbum: _this2.leaveAlbum,
          shareAlbum: shareAlbum
        })), _this2.state.showAddAlbumModal && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(___WEBPACK_IMPORTED_MODULE_21__["AddToAlbumModal"], {
          onDismiss: _this2.hideAddAlbumModal,
          onSuccess: selection.clear,
          photos: selected
        }), photos && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(photos_components_PhotoBoard__WEBPACK_IMPORTED_MODULE_22__["default"], {
          lists: [{
            photos: photos
          }],
          selected: selected,
          photosContext: "timeline",
          showSelection: active,
          onPhotoToggle: selection.toggle,
          onPhotosSelect: selection.select,
          onPhotosUnselect: selection.unselect,
          fetchStatus: photos.fetchStatus,
          hasMore: hasMore,
          fetchMore: fetchMore
        }), _this2.renderViewer(_this2.props.children));
      });
    }
  }, {
    key: "renderViewer",
    value: function renderViewer(children) {
      var _this3 = this;

      if (!children) return null;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.map(children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.cloneElement(child, {
          photos: _this3.props.photos
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.selection !== undefined) {
        this.props.selection.clear();
      }
    }
  }]);

  return AlbumPhotos;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(AlbumPhotos, "contextTypes", {
  client: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    shareAlbum: function shareAlbum(album) {
      return dispatch(Object(react_cozy_helpers__WEBPACK_IMPORTED_MODULE_14__["showModal"])(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(sharing__WEBPACK_IMPORTED_MODULE_17__["ShareModal"], {
        document: album,
        sharingDesc: album.name
      })));
    }
  };
};

AlbumPhotos.propTypes = {
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool.isRequired,
  fetchMore: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  album: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired,
  shareAlbum: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  photos: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_18___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(null, mapDispatchToProps), react_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"], Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_15__["translate"])())(AlbumPhotos));

/***/ }),

/***/ "qelF":
/*!**********************************************!*\
  !*** ./src/components/Button/MoreButton.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.styl */ "swni");
/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_3__);





var MoreButton = function MoreButton(_ref) {
  var t = _ref.t,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    "data-test-id": "more-button",
    className: _index_styl__WEBPACK_IMPORTED_MODULE_3___default.a['dri-btn--more'],
    theme: "secondary",
    disabled: disabled,
    onClick: onClick,
    extension: "narrow",
    icon: "dots",
    iconOnly: true,
    label: t('Toolbar.more')
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(MoreButton));

/***/ }),

/***/ "qxHO":
/*!***********************************!*\
  !*** ./src/drive/lib/reporter.js ***!
  \***********************************/
/*! exports provided: ANALYTICS_URL, normalizeData, getReporterConfiguration, configureReporter, logException, setCozyUrl, logInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANALYTICS_URL", function() { return ANALYTICS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeData", function() { return normalizeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReporterConfiguration", function() { return getReporterConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureReporter", function() { return configureReporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCozyUrl", function() { return setCozyUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInfo", function() { return logInfo; });
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raven-js */ "NlKi");
/* harmony import */ var raven_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raven_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var drive_appMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drive/appMetadata */ "unzg");
/* harmony import */ var lib_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/logger */ "OTOu");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global __SENTRY_URL__, __DEVELOPMENT__ */



const ANALYTICS_URL = typeof __SENTRY_URL__ === 'undefined' ? '' : __SENTRY_URL__; // normalize files path on mobile, see https://github.com/getsentry/sentry-cordova/blob/17e8b3395e8ce391ecf28658d0487b97487bb509/src/js/SentryCordova.ts#L213

const normalizeUrl = (url, pathStripRe) => url.replace(/^file:\/\//, 'app://').replace(pathStripRe, '');

const normalizeData = data => {
  const PATH_STRIP_RE = /^.*\/[^.]+(\.app|CodePush|.*(?=\/))/;

  if (data.culprit) {
    data.culprit = normalizeUrl(data.culprit, PATH_STRIP_RE);
  }

  const stacktrace = data.stacktrace || data.exception && data.exception.values && data.exception.values[0] && data.exception.values[0].stacktrace;

  if (stacktrace) {
    stacktrace.frames = stacktrace.frames.map(frame => frame.filename !== '[native code]' ? _objectSpread({}, frame, {
      filename: normalizeUrl(frame.filename, PATH_STRIP_RE)
    }) : frame);
  }

  return data;
};
const getReporterConfiguration = () => ({
  shouldSendCallback: true,
  environment:  true ? 'development' : undefined,
  release: drive_appMetadata__WEBPACK_IMPORTED_MODULE_1__["default"].version,
  allowSecretKey: true,
  dataCallback: normalizeData
});
const configureReporter = () => {
  raven_js__WEBPACK_IMPORTED_MODULE_0___default.a.config(ANALYTICS_URL, getReporterConfiguration()).install();
};
const logException = (err, extraContext = null, fingerprint = null) => {
  return new Promise(resolve => {
    raven_js__WEBPACK_IMPORTED_MODULE_0___default.a.captureException(err, {
      extra: extraContext,
      fingerprint
    });
    lib_logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn('Raven is recording exception');
    lib_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error(err);
    resolve();
  });
};
const setCozyUrl = instance => {
  raven_js__WEBPACK_IMPORTED_MODULE_0___default.a.setTagsContext({
    instance
  });
};

const logMessage = (message, serverUrl, level = 'info') => {
  return new Promise(resolve => {
    raven_js__WEBPACK_IMPORTED_MODULE_0___default.a.setUserContext = {
      url: serverUrl
    };
    raven_js__WEBPACK_IMPORTED_MODULE_0___default.a.captureMessage(`[${serverUrl}] ${message}`, {
      level
    });
    resolve();
  });
};

const logInfo = (message, serverUrl) => logMessage(message, serverUrl, 'info');

/***/ }),

/***/ "r//i":
/*!***************************************!*\
  !*** ./src/photos/locales/cs_CZ.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "rPfp":
/*!******************************************************!*\
  !*** ./src/sharing/components/ContactSuggestion.jsx ***!
  \******************************************************/
/*! exports provided: ContactSuggestion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSuggestion", function() { return ContactSuggestion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "mwIZ");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sharing/components/recipient.styl */ "1BUi");
/* harmony import */ var sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! models */ "OjRq");
/* harmony import */ var sharing_components_Identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sharing/components/Identity */ "71Dd");








var ContactSuggestion = function ContactSuggestion(_ref) {
  var contactOrGroup = _ref.contactOrGroup,
      contacts = _ref.contacts,
      t = _ref.t;
  var avatarText, name, details;

  if (contactOrGroup._type === models__WEBPACK_IMPORTED_MODULE_6__["Group"].doctype) {
    name = contactOrGroup.name;
    var membersCount = contacts.reduce(function (total, contact) {
      if (lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(contact, 'relationships.groups.data', []).map(function (group) {
        return group._id;
      }).includes(contactOrGroup._id)) {
        return total + 1;
      }

      return total;
    }, 0).toString();
    details = t('Share.members.count', {
      smart_count: membersCount
    });
    avatarText = 'G';
  } else {
    name = models__WEBPACK_IMPORTED_MODULE_6__["Contact"].getDisplayName(contactOrGroup);
    avatarText = models__WEBPACK_IMPORTED_MODULE_6__["Contact"].getInitials(contactOrGroup);
    details = models__WEBPACK_IMPORTED_MODULE_6__["Contact"].getPrimaryCozy(contactOrGroup);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: sharing_components_recipient_styl__WEBPACK_IMPORTED_MODULE_5___default.a['recipient']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
    text: avatarText,
    size: "small"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(sharing_components_Identity__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: name,
    details: details
  }));
};
ContactSuggestion.propTypes = {
  contactOrGroup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([models__WEBPACK_IMPORTED_MODULE_6__["Contact"].propType, models__WEBPACK_IMPORTED_MODULE_6__["Group"].propType]).isRequired,
  contacts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(models__WEBPACK_IMPORTED_MODULE_6__["Contact"].propType),
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__["translate"])()(ContactSuggestion));

/***/ }),

/***/ "rtuO":
/*!*************************************************************!*\
  !*** ./src/photos/ducks/albums/components/PhotosPicker.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../timeline */ "2lpW");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../selection */ "q/Uw");
/* harmony import */ var _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../styles/newAlbum.styl */ "C/eS");
/* harmony import */ var _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13__);















var PhotosPicker =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PhotosPicker, _Component);

  function PhotosPicker(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PhotosPicker);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PhotosPicker).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onNameChange", function (e) {
      _this.setState({
        name: e.target.value
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onCancel", function () {
      _this.props.router.goBack();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onCreate", function (selected) {
      var name = _this.state.name;

      _this.props.createAlbum(name, selected).then(function (album) {
        return _this.props.router.push("/albums/".concat(album.id));
      }).catch(function () {
        _this.input.focus();

        _this.input.select();
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onUpdate", function (selected) {
      var album = _this.props.album;

      _this.props.addPhotos(album, selected).then(function () {
        return _this.props.router.push("/albums/".concat(album.id));
      });
    });

    _this.state = {
      name: props.t('Albums.create.panel_form.placeholder')
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotosPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.album) {
        this.input.focus();
        this.input.select();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          t = _this$props.t,
          album = _this$props.album;
      var name = this.state.name;
      var isNew = !album;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_selection__WEBPACK_IMPORTED_MODULE_12__["default"], null, function (selected, active, selection) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel-form']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel-header']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel-wrap']
        }, isNew && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['coz-form-label']
        }, t('Albums.create.panel_form.label')), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          "data-test-id": "input-album-name",
          type: "text",
          ref: function ref(input) {
            _this2.input = input;
          },
          value: name,
          onChange: _this2.onNameChange
        })), !isNew && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
          "data-test-id": "pho-picker-album-name"
        }, album.name))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel-content']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          "data-test-id": "picker-panel",
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel-wrap']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_timeline__WEBPACK_IMPORTED_MODULE_11__["TimelineBoard"], {
          selected: selected,
          showSelection: true,
          selection: selection
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel-footer']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel-wrap']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _styles_newAlbum_styl__WEBPACK_IMPORTED_MODULE_13___default.a['pho-panel-controls']
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          theme: "secondary",
          onClick: _this2.onCancel,
          label: t('Albums.create.panel_form.cancel')
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          "data-test-id": "validate-album",
          onClick: function onClick() {
            return isNew ? _this2.onCreate(selected) : _this2.onUpdate(selected);
          },
          label: t(isNew ? 'Albums.create.panel_form.submit' : 'Albums.create.panel_form.update')
        }))))));
      });
    }
  }]);

  return PhotosPicker;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["translate"])()(Object(react_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(PhotosPicker)));

/***/ }),

/***/ "sPwX":
/*!***************************************!*\
  !*** ./src/photos/locales/pt_BR.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "sXRB":
/*!*****************************************!*\
  !*** ./src/photos/components/Photo.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/photoList.styl */ "kKu1");
/* harmony import */ var _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_photoList_styl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Image */ "510Z");







var getStyleFromBox = function getStyleFromBox(box) {
  var style = {};

  if (box) {
    if (box.width) {
      style.width = "".concat(box.width, "px");
    }

    if (box.height) {
      style.height = "".concat(box.height, "px");
    }

    if (box.top) {
      style.top = "".concat(box.top, "px");
    }

    if (box.left) {
      style.left = "".concat(box.left, "px");
    }
  }

  return style;
};

var Photo = function Photo(props) {
  var photo = props.photo,
      box = props.box,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      onToggle = props.onToggle,
      router = props.router;
  var style = getStyleFromBox(box);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: style,
    "data-test-item": photo.name,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_styles_photoList_styl__WEBPACK_IMPORTED_MODULE_1___default.a['pho-photo'], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_1___default.a['pho-photo--selected'], selected))
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_1___default.a['pho-photo-select'],
    "data-input": "checkbox",
    onClick: function onClick(e) {
      e.stopPropagation();
      onToggle(photo, selected);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "checkbox",
    checked: selected,
    onChange: function onChange() {}
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: {
      pathname: "".concat(router.location.pathname, "/").concat(photo.id),
      query: router.location.query
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Image__WEBPACK_IMPORTED_MODULE_5__["ImageLoader"], {
    file: photo,
    size: "small",
    render: function render(src) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        "data-test-id": "pho-photo-item",
        src: src,
        className: _styles_photoList_styl__WEBPACK_IMPORTED_MODULE_1___default.a['pho-photo-item'],
        style: style
      });
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Photo));

/***/ }),

/***/ "skT2":
/*!********************************!*\
  !*** ./src/sharing/context.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SharingContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (SharingContext);

/***/ }),

/***/ "swni":
/*!******************************************!*\
  !*** ./src/components/Button/index.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"u-visuallyhidden":"u-visuallyhidden--1L4hk","dri-btn--more":"dri-btn--more--MNdqs","bar-homelink":"bar-homelink--2j0WN"};

/***/ }),

/***/ "t0Aa":
/*!****************************************!*\
  !*** ./src/photos/styles/toolbar.styl ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"c-btn":"c-btn--1VDiR","c-btn--regular":"c-btn--regular--1AoRN","c-btn--danger":"c-btn--danger--2NNcc","c-btn--secondary":"c-btn--secondary--3znY5","c-btn--danger-outline":"c-btn--danger-outline--mVde8","pho-toolbar":"pho-toolbar--28WqL","pho-action-delete":"pho-action-delete--3RnOf","pho-action-upload":"pho-action-upload--1QgoA","spin":"spin--GHUiz","shake":"shake--3TZHV"};

/***/ }),

/***/ "tFpY":
/*!*****************************************************!*\
  !*** ./src/drive/web/modules/upload/QuotaAlert.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "mwIZ");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cozy-ui/react/Modal */ "cLsY");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cozy-client */ "SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withInstance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withInstance */ "GNTO");
/* harmony import */ var cozy_device_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cozy-device-helper */ "snfs");
/* harmony import */ var cozy_device_helper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cozy_device_helper__WEBPACK_IMPORTED_MODULE_6__);








var buildPremiumLink = function buildPremiumLink(uuid, managerUrl) {
  return "".concat(managerUrl, "/cozy/instances/").concat(uuid, "/premium");
};

var QuotaAlert = function QuotaAlert(_ref) {
  var t = _ref.t,
      onClose = _ref.onClose,
      client = _ref.client;
  var uuid, managerUrl;
  /**
   * We do the request only on the web since Apple
   * and Google have a retriscted policy for the
   * inApp purchase...
   */

  if (!Object(cozy_device_helper__WEBPACK_IMPORTED_MODULE_6__["isMobileApp"])()) {
    var instanceInfo = Object(_withInstance__WEBPACK_IMPORTED_MODULE_5__["default"])(client);
    uuid = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(instanceInfo, 'instance.data.attributes.uuid');
    managerUrl = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(instanceInfo, 'context.data.attributes.manager_url');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: t('quotaalert.title'),
    description: t('quotaalert.desc'),
    secondaryText: t('quotaalert.confirm'),
    secondaryAction: onClose,
    primaryText: uuid && managerUrl ? t('quotaalert.increase') : undefined,
    primaryAction: function primaryAction() {
      return uuid && managerUrl ? window.open(buildPremiumLink(uuid, managerUrl), 'self') : onClose;
    },
    dismissAction: onClose
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_3__["translate"])()(Object(cozy_client__WEBPACK_IMPORTED_MODULE_4__["withClient"])(QuotaAlert)));

/***/ }),

/***/ "tRam":
/*!**************************************************************!*\
  !*** ./src/photos/ducks/albums/components/AlbumsToolbar.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "dtw8");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Button */ "SvPG");
/* harmony import */ var photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! photos/styles/toolbar.styl */ "t0Aa");
/* harmony import */ var photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5__);







var AlbumsToolbar = function AlbumsToolbar(_ref) {
  var t = _ref.t,
      router = _ref.router;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-test-id": "pho-toolbar-albums",
    className: photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-toolbar'],
    role: "toolbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'u-hide--mob'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__["ButtonLink"], {
    "data-test-id": "album-add",
    theme: "secondary",
    href: "#/albums/new",
    icon: "album-add",
    label: t('Toolbar.album_new')
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(photos_styles_toolbar_styl__WEBPACK_IMPORTED_MODULE_5___default.a['pho-toolbar-menu'], 'u-hide--desk'),
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Button__WEBPACK_IMPORTED_MODULE_4__["MoreButton"], null),
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    onSelect: function onSelect() {
      return router.push('/albums/new');
    },
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      icon: "album-add"
    })
  }, t('Toolbar.album_new'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AlbumsToolbar));

/***/ }),

/***/ "u0ID":
/*!********************************************!*\
  !*** ./src/photos/targets/manifest.webapp ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"name":"Photos","name_prefix":"Cozy","slug":"photos","version":"1.18.16","type":"webapp","licence":"AGPL-3.0","icon":"public/app-icon.svg","categories":["cozy"],"source":"https://github.com/cozy/cozy-drive","editor":"Cozy","developer":{"name":"Cozy Cloud","url":"https://cozy.io"},"langs":["en","fr"],"locales":{"fr":{"short_description":"Cozy Photos est l’application de visualisation et gestion de vos photos sur Cozy.","long_description":"Avec Cozy Photos vous pourrez :\n- Visualiser toutes les photos présentes dans votre Cozy, classées par date;\n- Organisez vos photos en albums;\n- Partager vos albums avec qui vous le souhaitez.","screenshots":["screenshots/fr/screenshot01.jpg","screenshots/fr/screenshot02.jpg","screenshots/fr/screenshot03.jpg"]},"en":{"short_description":"Cozy Photos allows you to view and manage your photos on your Cozy","long_description":"With Cozy Photos, you can:\n- Get a timeline of all your memories\n- Organize your photos through albums\n- Share albums with just a link","screenshots":["screenshots/en/screenshot01.jpg","screenshots/en/screenshot02.jpg","screenshots/en/screenshot03.jpg"]}},"screenshots":["screenshots/fr/screenshot01.jpg","screenshots/fr/screenshot02.jpg","screenshots/fr/screenshot03.jpg"],"routes":{"/":{"folder":"/","index":"index.html","public":false},"/public":{"folder":"/public","index":"index.html","public":true}},"services":{"onPhotoUpload":{"type":"node","file":"services/onPhotoUpload/photos.js","trigger":"@event io.cozy.files:CREATED:image:class","debounce":"5m"}},"permissions":{"files":{"description":"Required for photo access","type":"io.cozy.files","verbs":["GET","POST","PUT","PATCH"]},"apps":{"description":"Required by the cozy-bar to display the icons of the apps","type":"io.cozy.apps","verbs":["GET","PUT"]},"albums":{"description":"Required to manage photos albums","type":"io.cozy.photos.albums","verbs":["GET","POST","PUT","DELETE"]},"photos_settings":{"description":"Required to manage photos albums settings","type":"io.cozy.photos.settings","verbs":["GET","POST","PUT"]},"contacts":{"description":"Required to to share photos with your contacts","type":"io.cozy.contacts","verbs":["GET","POST"]},"settings":{"description":"Required by the cozy-bar to display Claudy and know which applications are coming soon","type":"io.cozy.settings","verbs":["GET"]},"oauth":{"description":"Required to display the cozy-desktop banner","type":"io.cozy.oauth.clients","verbs":["GET"]},"reporting":{"description":"Allow to report unexpected errors to the support team","type":"cc.cozycloud.sentry","verbs":["POST"]},"triggers":{"description":"Required to re-execute the clustering","type":"io.cozy.triggers","verbs":["POST"],"selector":"worker","values":["service"]}}}

/***/ }),

/***/ "unzg":
/*!**********************************!*\
  !*** ./src/drive/appMetadata.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var drive_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drive/targets/manifest.webapp */ "XA+M");
/* harmony import */ var drive_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(drive_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0__);

const appMetadata = {
  slug: drive_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0___default.a.name,
  version: drive_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0___default.a.version
};
/* harmony default export */ __webpack_exports__["default"] = (appMetadata);

/***/ }),

/***/ "uqdO":
/*!***************************************!*\
  !*** ./src/photos/locales/zh_TW.json ***!
  \***************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "vGv+":
/*!*************************************************!*\
  !*** ./src/sharing/components/SharedStatus.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltip */ "Cp2O");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cozy-ui/react/Icon */ "y6ex");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! models */ "OjRq");
/* harmony import */ var _status_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status.styl */ "3Jea");
/* harmony import */ var _status_styl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_status_styl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_icon_link_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/icon-link.svg */ "Cm82");









var SharedStatus = function SharedStatus(_ref) {
  var className = _ref.className,
      docId = _ref.docId,
      recipients = _ref.recipients,
      link = _ref.link,
      t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, _status_styl__WEBPACK_IMPORTED_MODULE_6___default.a['shared-status'])
  }, recipients.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    "data-tip": true,
    "data-for": "members".concat(docId),
    className: _status_styl__WEBPACK_IMPORTED_MODULE_6___default.a['shared-status-label']
  }, t('Share.members.count', {
    smart_count: recipients.length
  })), recipients.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_2__["SharingTooltip"], {
    id: "members".concat(docId)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipRecipientList"], {
    recipientNames: recipients.map(function (recipient) {
      return models__WEBPACK_IMPORTED_MODULE_5__["Contact"].getDisplayName(recipient);
    })
  })), link && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _assets_icons_icon_link_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(SharedStatus));

/***/ }),

/***/ "vxeD":
/*!************************************!*\
  !*** ./src/photos/locales/ca.json ***!
  \************************************/
/*! exports provided: Nav, empty, Error, Toolbar, loading, Board, Alerter, SelectionBar, Share, Albums, Viewer, destroyconfirmation, quitconfirmation, timeline, UploadQueue, default */
/***/ (function(module) {

module.exports = {"Nav":{"photos":"Photos","albums":"Albums","shared":"Shared by me","trash":"Trash","btn-client":"Get Cozy Drive for desktop","btn-client-web":"Get Cozy","btn-client-mobile":"Get Cozy Drive on your mobile!","banner-txt-client":"Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times.","banner-btn-client":"Download","link-client":"https://cozy.io/en/download/","link-client-desktop":"https://nuts.cozycloud.cc/download/channel/stable/","link-client-android":"https://play.google.com/store/apps/details?id=io.cozy.drive.mobile","link-client-ios":"https://itunes.apple.com/us/app/cozy-drive/id1224102389?mt=8","link-client-web":"https://cozy.io/fr/try-it?from=albumsharing"},"empty":{"timeline_photos_title":"You don't have any photos yet.","timeline_photos_text":"Click the \"Upload\" button to add photos.","albums_title":"You don't have any album yet.","albums_text":"Start by clicking \"New album\" to create your first album.","album_photos_title":"There is no photo in this album yet.","album_photos_text":"Start by clicking \"Add photos to album\" to add some.","shared_album_photos_title":"There is no photo in this album yet.","shared_album_photos_text":"Come back later"},"Error":{"albums_title":"An error occurred while retrieving the albums list. Please try again later.","album_photos_title":"An error occurred while retrieving the album's photos list. Please try again later.","timeline_photos_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_error_title":"An error occurred while retrieving the photos list. Please try again later.","public_album_unshared_title":"Sorry, this link is no longer available.","public_album_unshared_text":"One lost, ten found... or just check out with the owner for help. This file might not be lost.","refresh":"Refresh now","generic":"An error occurred, please try again.","album_rename_abort":"The album name can not be empty."},"Toolbar":{"photo_upload":"Upload","album_new":"New album","album_delete":"Delete","album_quit":"Leave & delete shared album","album_download":"Download","more":"More","menu":{"select_items":"Select photos","photo_upload":"Upload photos","rename_album":"Rename album","album_delete":"Delete album","album_quit":"Leave & delete shared album","download_album":"Download album","add_photos":"Add photos to album"}},"loading":{"photos_indexing":"Your photos are currently being indexed. Please wait.","albums_indexing":"Your albums are currently being indexed. Please wait.","photos_fetching":"Loading","albums_fetching":"Loading","photos_upload":"Uploading"},"Board":{"load_more":"Load more photos","select_all":"Select all","unselect_all":"Unselect all"},"Alerter":{"photos":{"fetching_error":"An error occurred during photos fetching.","already_added_photo":"This album already contains this photo."}},"SelectionBar":{"selected_count":"item selected |||| items selected","delete":"Delete","album-add":"Add to album","album-remove":"Remove from album","download":"Download","close":"Close"},"Share":{"status":{"pending":"Pending","accepted":"Accepted","refused":"Refused","error":"Error","unregistered":"Error","mail-not-sent":"Error","revoked":"Error"},"type":{"one-way":"Can View (coming soon)","two-way":"Can Change"},"create-cozy":"Create my cozy"},"Albums":{"album_item_description":"%{smart_count} photo |||| %{smart_count} photos","album_item_shared_ro":"Shared (read only)","album_item_shared_rw":"Shared (read/write)","load_more":"Load more albums","add_photos":{"title":"Add to album","success":"Album %{name} has been updated with %{smart_count} photo. |||| Album %{name} has been updated with %{smart_count} photos.","error":{"generic":"An error occurred when updating the album, please try again.","reference":"Some photos has not been added to the album. Please check and try again.","response":{"Forbidden":"Application does not have permission to update albums."}}},"share":{"cta":"Share","title":"Share with others","details":{"title":"Sharing details","createdAt":"On %{date}","ro":"Read only","rw":"Read/write"},"sharedByMe":"Shared","sharedWithMe":"Shared with me","shareByLink":{"subtitle":"By public link","desc":"Anyone with the provided link can see and download your photos.","fetchFailed":"Woops! It seems your connectivity is limited, try again later when it gets better.","creating":"Creating your link...","copy":"Copy link","copied":"Link has been copied to clipboard","failed":"Unable to copy to clipboard"},"shareByEmail":{"title":"By email","subtitle":"By email","email":"email","emailPlaceholder":"Enter the email address or name of the recipient","send":"Send","genericSuccess":"You sent an invite to %{count} contacts.","success":"You sent an invite to %{email}.","comingsoon":"Coming soon! You will be able to share documents and photos in a single click with your family, your friends, and even your coworkers. Don't worry, we'll let you know when it's ready!"},"unshare":{"title":"Remove from album","success":"You removed this shared album from %{email}."},"sharingLink":{"title":"Link to share","copy":"Copy","copied":"Copied"},"whoHasAccess":{"title":"Who has access"},"protectedShare":{"title":"Coming soon!","desc":"Share anything by email with your family and friends!"},"close":"Close","gettingLink":"Getting your link...","error":{"generic":"An error occurred when creating the album share link, please try again.","revoke":"An error occurred when revoking the album share link, please try again."}},"create":{"panel_form":{"label":"Add a name to your new album","placeholder":"Untitled album","cancel":"Cancel","submit":"Create new album","update":"Add photos to album"},"inline_form":{"placeholder":"New album name","create_label":"Create a new album","create_button":"Create"},"success":"Album %{name} has been created with %{smart_count} photo. |||| Album %{name} has been created with %{smart_count} photos.","error":{"generic":"An error occurred when creating the album, please try again.","already_exists":"The album %{name} already exists, please pick another one.","name_missing":"You have to give a name to your album."}},"fetchAlbums":{"error":{"index_missing":"An albums index must be provided to fetch albums."}},"remove_photos":{"success":"The photo has been removed from album %{album_name}","error":{"generic":"An error occured while removing the photo, please try again."}},"remove_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while removing the album, please try again."}},"quit_album":{"success":"Album %{name} was deleted.","error":{"generic":"An error occured while leaving the album, please try again."}}},"Viewer":{"close":"Close","noviewer":{"title":"The viewer doesn't know how to read this type of file yet.","download":"Download this file","openWith":"Open with..."},"actions":{"download":"Download"},"loading":{"error":"This file could not be loaded. Do you have a working internet connection right now?","retry":"Retry"}},"destroyconfirmation":{"title":"Permanently delete this album?","cancel":"Cancel","delete":"Delete permanently","forbidden":"You won't be able to access this album or selection anymore.","eye":"Your photos won't be deleted.","link":"If you have shared it, people won't be able to access it."},"quitconfirmation":{"title":"Permanently leave and delete this shared album?","cancel":"Cancel","quit":"Leave & delete","forbidden":"You won't be able to access this album or selection anymore."},"timeline":{"DeleteConfirm":{"title":"Delete this element? |||| Delete these elements?","trash":"It will be moved to the Trash. |||| They will be moved to the Trash.","restore":"You can still restore it whenever you want. |||| You can still restore them whenever you want.","shared":"If you have shared it, people won't be able to access it. |||| If you have shared them, people won't be able to access them.","related":"Some of the photos within the selection are related to an album. They will be removed from it if you proceed to trash them.","cancel":"Cancel","delete":"Remove"}},"UploadQueue":{"path_photos":"Photos","path_upload":"Uploaded from Cozy Photos","header":"Uploading %{smart_count} photo to Cozy Photos |||| Uploading %{smart_count} photos to Cozy Photos","header_mobile":"Uploading %{done} of %{total}","header_done":"Uploaded %{done} out of %{total} successfully","close":"close","item":{"pending":"Pending"},"alert":{"success":"%{smart_count} photo uploaded with success. |||| %{smart_count} photos uploaded with success.","success_conflicts":"%{smart_count} photo uploaded with %{conflictNumber} conflict(s). |||| %{smart_count} photos uploaded with %{conflictNumber} conflict(s).","errors":"Errors occurred during the photos upload."}}};

/***/ }),

/***/ "w0Z6":
/*!*****************************************************!*\
  !*** ./src/drive/assets/icons/icon-type-folder.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-baker-runtime/browser-symbol */ "4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-sprite-loader/runtime/browser-sprite.build */ "IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-type-folder_f49493c812ab389aaac1e61434f7995f",
  "use": "icon-type-folder_f49493c812ab389aaac1e61434f7995f-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icon-type-folder_f49493c812ab389aaac1e61434f7995f\">\n  <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0 2)\">\n    <rect width=\"32\" height=\"26\" y=\"2\" fill=\"#B2D3FF\" rx=\"2\" />\n    <path fill=\"#197BFF\" d=\"M0,0.990777969 C0,0.443586406 0.449948758,0 1.00684547,0 L12.9931545,0 C13.5492199,0 14.3125,0.3125 14.7107565,0.71075654 L15.2892435,1.28924346 C15.6817835,1.68178346 16.4446309,2 17.0008717,2 L30.0059397,2 C31.1072288,2 32,2.89470506 32,4 L32,4 L17.0008717,4 C16.4481055,4 15.6875,4.3125 15.2892435,4.71075654 L14.7107565,5.28924346 C14.3182165,5.68178346 13.5500512,6 12.9931545,6 L1.00684547,6 C0.450780073,6 0,5.54902482 0,5.00922203 L0,0.990777969 Z\" />\n  </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "yZiV":
/*!***********************************!*\
  !*** ./src/photos/appMetadata.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var photos_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photos/targets/manifest.webapp */ "u0ID");
/* harmony import */ var photos_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photos_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0__);

const appMetadata = {
  slug: photos_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0___default.a.name,
  version: photos_targets_manifest_webapp__WEBPACK_IMPORTED_MODULE_0___default.a.version
};
/* harmony default export */ __webpack_exports__["default"] = (appMetadata);

/***/ }),

/***/ "z6Q1":
/*!***********************************!*\
  !*** ./src/drive/lib/doctypes.js ***!
  \***********************************/
/*! exports provided: DOCTYPE_FILES, DOCTYPE_ALBUMS, DOCTYPE_PHOTOS_SETTINGS, DOCTYPE_APPS, DOCTYPE_CONTACTS_VERSION, schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTYPE_FILES", function() { return DOCTYPE_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTYPE_ALBUMS", function() { return DOCTYPE_ALBUMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTYPE_PHOTOS_SETTINGS", function() { return DOCTYPE_PHOTOS_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTYPE_APPS", function() { return DOCTYPE_APPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCTYPE_CONTACTS_VERSION", function() { return DOCTYPE_CONTACTS_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schema", function() { return schema; });
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! models */ "OjRq");
/* harmony import */ var drive_lib_extraDoctypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drive/lib/extraDoctypes */ "6dOw");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DOCTYPE_FILES = 'io.cozy.files';
const DOCTYPE_ALBUMS = 'io.cozy.photos.albums';
const DOCTYPE_PHOTOS_SETTINGS = 'io.cozy.photos.settings';
const DOCTYPE_APPS = 'io.cozy.apps';
const DOCTYPE_CONTACTS_VERSION = 2;
const schema = _objectSpread({
  files: {
    doctype: DOCTYPE_FILES
  },
  contacts: {
    doctype: models__WEBPACK_IMPORTED_MODULE_0__["Contact"].doctype,
    doctypeVersion: DOCTYPE_CONTACTS_VERSION
  },
  groups: {
    doctype: models__WEBPACK_IMPORTED_MODULE_0__["Group"].doctype
  }
}, drive_lib_extraDoctypes__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "zW80":
/*!**********************************************!*\
  !*** ./src/components/pushClient/Button.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "MVZn");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "PJYZ");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pushClient_styl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pushClient.styl */ "AzIT");
/* harmony import */ var _pushClient_styl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_pushClient_styl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cozy-ui/react/I18n */ "buk/");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! . */ "IFEr");
/* harmony import */ var drive_config_config_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! drive/config/config.json */ "FKqX");
var drive_config_config_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! drive/config/config.json */ "FKqX", 1);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var cozy_ui_assets_icons_illus_device_laptop_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! cozy-ui/assets/icons/illus/device-laptop.svg */ "dq/4");



















var ButtonClient =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(ButtonClient, _Component);

  function ButtonClient() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ButtonClient);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(ButtonClient)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      mustShow: false
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ButtonClient, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var seen, mustSee;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(drive_config_config_json__WEBPACK_IMPORTED_MODULE_15__.promoteDesktop.isActivated !== true)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return localforage__WEBPACK_IMPORTED_MODULE_13___default.a.getItem(___WEBPACK_IMPORTED_MODULE_14__["DESKTOP_BANNER"]);

              case 4:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.t0 = false;

              case 7:
                seen = _context.t0;

                if (!seen) {
                  _context.next = 13;
                  break;
                }

                _context.next = 11;
                return Object(___WEBPACK_IMPORTED_MODULE_14__["isClientAlreadyInstalled"])();

              case 11:
                mustSee = !_context.sent;

                if (mustSee) {
                  this.setState(function (state) {
                    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
                      mustShow: true
                    });
                  });
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "render",
    value: function render() {
      if (drive_config_config_json__WEBPACK_IMPORTED_MODULE_15__.promoteDesktop.isActivated !== true || !this.state.mustShow) return null;
      var t = this.props.t;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        href: t(Object(___WEBPACK_IMPORTED_MODULE_14__["isLinux"])() ? 'Nav.link-client' : 'Nav.link-client-desktop') //eslint-disable-next-line react/jsx-no-target-blank
        ,
        target: "_blank",
        className: _pushClient_styl__WEBPACK_IMPORTED_MODULE_10___default.a['coz-btn-client'],
        onClick: function onClick() {
          Object(___WEBPACK_IMPORTED_MODULE_14__["track"])('button');
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("figure", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
        width: "32",
        height: "32",
        icon: cozy_ui_assets_icons_illus_device_laptop_svg__WEBPACK_IMPORTED_MODULE_17__["default"]
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, t('Nav.btn-client')));
    }
  }]);

  return ButtonClient;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_11__["translate"])()(ButtonClient));

/***/ }),

/***/ "ziD/":
/*!************************************************!*\
  !*** ./src/sharing/components/ShareButton.jsx ***!
  \************************************************/
/*! exports provided: ShareButton, SharedByMeButton, SharedWithMeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButton", function() { return ShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedByMeButton", function() { return SharedByMeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedWithMeButton", function() { return SharedWithMeButton; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cozy-ui/react */ "H+Xc");
/* harmony import */ var _button_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button.styl */ "Te91");
/* harmony import */ var _button_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_button_styl__WEBPACK_IMPORTED_MODULE_5__);






var ShareButton = function ShareButton(_ref) {
  var label = _ref.label,
      _onClick = _ref.onClick,
      className = _ref.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["label", "onClick", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    "data-test-id": "share-button",
    theme: "secondary",
    className: className,
    onClick: function onClick() {
      return _onClick();
    },
    icon: "share",
    label: label
  }, props));
};
var SharedByMeButton = function SharedByMeButton(_ref2) {
  var label = _ref2.label,
      _onClick2 = _ref2.onClick,
      className = _ref2.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["label", "onClick", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    "data-test-id": "share-by-me-button",
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_button_styl__WEBPACK_IMPORTED_MODULE_5___default.a['coz-btn-shared'], className),
    onClick: function onClick() {
      return _onClick2();
    },
    icon: "share",
    label: label
  }, props));
};
var SharedWithMeButton = function SharedWithMeButton(_ref3) {
  var label = _ref3.label,
      _onClick3 = _ref3.onClick,
      className = _ref3.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ["label", "onClick", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_button_styl__WEBPACK_IMPORTED_MODULE_5___default.a['coz-btn-sharedWithMe'], className),
    onClick: function onClick() {
      return _onClick3();
    },
    icon: "share",
    label: label
  }, props));
};
/* harmony default export */ __webpack_exports__["default"] = (ShareButton);

/***/ })

/******/ });
//# sourceMappingURL=photos.js.map