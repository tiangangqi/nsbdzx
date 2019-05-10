//加载配置信息
require(["web.config"], function() {
	require(["jquery"], function($) {
		//初始化页面
		require(["underscore", "page/tools", "admin-lte"], function(_, tools) {
			$(function() {
				var resourceUrl = API_URL+"/ewindsys/ewindMenu";
				tools.initMenu({
					url: `${resourceUrl}/findMenuList`, //请求链接地址
				});
				


				require([ /*"dashboard", "demo"*/ ], function() {
					$.widget.bridge('uibutton', $.ui.button);
					$('body').layout('fix');
					// var $pushMenu = $('[data-toggle="push-menu"]').data('lte.pushmenu');
					// var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar');
					var $layout = $('body').data('lte.layout');
					$('body').addClass("fixed");
					$layout.fixSidebar();
					if($('body').hasClass('fixed')) {
						//$pushMenu.expandOnHover();
						$layout.activate();
					}
					//$controlSidebar.fix();
				});
			});
			
		 
		});
	});
});