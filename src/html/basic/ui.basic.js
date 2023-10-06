var $navbar = $("#bdNavbar a");
var $docs_nav = $("#bd-docs-nav button");
function showNavbarAt(depth1, depth2, depth3) {
  $navbar.eq(depth1).addClass("active");
  $docs_nav.eq(depth2).removeClass("collapsed").attr("aria-expanded", true).next().addClass("show").find("li").eq(depth3).addClass("active").attr("aria-current", "page");
}
