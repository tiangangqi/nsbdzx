require.config({
	// baseUrl: "js/",
	map: {
		"*": {
			'css': "js/lib/require-css/css"
		}
	},
	paths: {
		"jquery": ["js/lib/jquery/dist/jquery"],
		"underscore": ["js/lib/underscore/underscore"],
		"underscore.string": ["js/lib/underscore.string/dist/underscore.string.min"],
		"doT": ['js/lib/doT/doT'],
		"backbone": ['js/lib/backbone/backbone'],
		"fastclick": ["js/lib/fastclick/lib/fastclick"],
		"text": ['js/lib/text/text'],
		"page/tools": ["tools"],
		"layer": ["js/plugin/layer/layer"],
		"jquery.cookie": ["js/lib/jquery/dist/jquery.cookie"],
		"jquery-slimscroll": ["js/plugin/jquery-slimscroll/jquery.slimscroll"],
		"jtreetable": ["js/plugin/jquery-treetable/jquery.treetable"],
		"jquery-json2xml": ["js/plugin/jquery-xmljson/jquery.json2xml"],
		"jquery-xml2json": ["js/plugin/jquery-xmljson/jquery.xml2json"],
		"jstree": ["js/plugin/jstree/dist/jstree"],
		"bootstrap": ["js/plugin/bootstrap/dist/js/bootstrap"],
		"bootstrap-select4": ["js/plugin/bootstrap-select-1.12.4/dist/js/bootstrap-select"],
		"admin-lte": ["js/plugin/admin-lte/dist/js/adminlte"],
		"bootstrap-datepicker": ["js/plugin/bootstrap-datepicker/js/bootstrap-datepicker"],
		"ckeditor": ["js/plugin/ckeditor/ckeditor"],
		"sample": ["js/plugin/ckeditor/samples/js/sample"],
		"echarts": ["js/plugin/echarts3/echarts.min"],
		"icheck": ["js/plugin/icheck/icheck.min"],
		//"dhtmlxgantt": ["js/dhtmlxgant/dhtmlxgantt"],
		//"jquery11": ["js/dhtmlxgant/third-party/jquery-1.11.1.min"],
		//"bootstrap3": ["js/lib/dhtmlxgant/third-party/bootstrap/3.2.0/js/bootstrap.min"],
		/*"datatables.net": ["js/datatables.net/js/jquery.dataTables"],
		"datatables.net-bs": ["js/datatables.net-bs/js/dataTables.bootstrap"],*/
		"jquery-ui": ["js/plugin/jquery-ui-1.12.1/jquery-ui"],
		"bootstrap-table": ["js/plugin/bootstrap-table/dist/bootstrap-table"],
		"bootstrap-table-zh-CN": ["js/plugin/bootstrap-table/js/bootstrap-table-zh-CN"],
		"bootstrap-table-editable": ["js/plugin/bootstrap-table/editable/bootstrap-table-editable"],
		"bootstrap-table-x-editable": ["js/plugin/bootstrap-table/x-editable/js/bootstrap-editable"],
		//"dashboard": ["js/admin-lte/dist/js/pages/dashboard"],
		//"demo": ["js/admin-lte/dist/js/demo"],
		"bootstrap-fileinput": ["js/plugin/bootstrap-fileinput/js/fileinput.min"],
		"bootstrap-fileinput-locale-zh": ["js/plugin/bootstrap-fileinput/js/locales/zh"],
		"fileinput-theme": "js/plugin/bootstrap-fileinput/themes/explorer/theme",
		"bootstrapvalidator": ["js/plugin/bootstrapvalidator/js/bootstrapValidator"],
		"serializeJSON": ["js/plugin/jquery.serializeJSON/jquery.serializejson.min"],
		"bootstrap-treeview": ["js/plugin/bootstrap-treeview/dist/bootstrap-treeview"],
		"Handsontable": ["js/plugin/handsontable/dist/handsontable.full.min"],
		"Cesium": ["js/cesium/Cesium"],
		"bootstrap-select": ["js/plugin/bootstrap-select/js/bootstrap-select"],
		"multiple-select": ["js/plugin/multiple-select/js/multiple-select"],
		"handlebars": ["js/plugin/handlebars/handlebars-1.0.0.beta.6"],
		"autocomplete": ["js/plugin/jQuery-Autocomplete/dist/jquery.autocomplete"],
		"select2": ["js/plugin/select2/js/select2.full.min"],
		"jquery-treegrid": ["js/plugin/jquery-treegrid/js/jquery.treegrid"],
		"bootstrap-table-treegrid": ["js/plugin/bootstrap-table/dist/extensions/treegrid/bootstrap-table-treegrid"],
		"jquery.fancytree": ["js/plugin/fancytree/src/jquery.fancytree"],
		"jquery.fancytree.glyph": ["js/plugin/fancytree/src/jquery.fancytree.glyph"],
		"jquery.fancytree.table": ["js/plugin/fancytree/src/jquery.fancytree.table"],
		"jquery.fancytree.wide": ["js/plugin/fancytree/src/jquery.fancytree.wide"],
		"api": ['js/api/api'],
		"apiConfig": ['js/api/apiConfig']
	},
	shim: {
		"jquery": {
			exports: "jQuery"
		},
		"jtreetable": {
			deps: ["jquery"]
		},
		"backbone": {
			deps: ['underscore', 'doT', 'jquery'],
			exports: 'Backbone'
		},
		"admin-lte": {
			deps: ["jquery", "bootstrap", "jquery-ui", "jquery-slimscroll", "fastclick", "bootstrap-table" /*, "datatables.net", "datatables.net-bs"*/]
		},
		"apiConfig": {
			deps: ['api']
		},
		"bootstrap-select4": {
			deps: ["css!js/plugin/bootstrap-select-1.12.4/dist/css/bootstrap-select"]
		},
		"bootstrap-fileinput-locale-zh": {
			deps: ["bootstrap-fileinput"]
		},
		"bootstrap-fileinput": {
			deps: ["css!js/plugin/bootstrap-fileinput/css/fileinput.css"]
		},
		"bootstrap-table": {
			deps: ['css!js/plugin/bootstrap-table/dist/bootstrap-table.css', "jquery.cookie"]
		},
		"bootstrap-table-zh-CN": {
			deps: ["bootstrap-table"]
		},
		"fileinput-theme": {
			deps: ["bootstrap-fileinput", "css!js/plugin/bootstrap-fileinput/themes/explorer/theme.css"]
		},
		"serializeJSON": {
			deps: ["jquery"]
		},
		"bootstrap-treeview": {
			deps: ['css!js/plugin/bootstrap-treeview/dist/bootstrap-treeview.min.css']
		},
		"jstree": {
			deps: ['css!js/plugin/jstree/dist/themes/default/style.css']
		},
		"icheck": {
			deps: ['css!js/plugin/icheck/all.css']
		},
		"Handsontable": {
			deps: ['css!js/plugin/handsontable/dist/handsontable.full.min.css']
		},
		"bootstrap-datepicker": {
			deps: ["jquery", "css!js/plugin/bootstrap-datepicker/css/bootstrap-datepicker.css"]
		},
		"bootstrap-select": {
			deps: ['bootstrap', 'css!js/plugin/bootstrap-select/css/bootstrap-select.min.css']
		},
		"multiple-select": {
			deps: ['css!js/plugin/multiple-select/css/multiple-select.css']
		},
		"jquery-ui": {
			deps: ['css!js/plugin/jquery-ui-1.12.1/jquery-ui.min.css']
		},
		"select2": {
			deps: ['css!js/plugin/select2/css/select2.css']
		},
		"jquery-treegrid": {
			deps: ['css!js/plugin/jquery-treegrid/css/jquery.treegrid.css']
		},
		"jquery.fancytree": {
			deps: ["jquery", 'jquery-ui', 'css!js/plugin/fancytree/src/skin-bootstrap/ui.fancytree.css']
		},
		"jquery.fancytree.glyph": {
			deps: ["jquery.fancytree"]
		},
		"jquery.fancytree.table": {
			deps: ["jquery.fancytree"]
		},
		"jquery.fancytree.wide": {
			deps: ["jquery.fancytree"]
		}
	}
});
//配置菜单可以去 template /data/ menuList.json  配置菜单
var menuList;

var add_vList;

var hclist;